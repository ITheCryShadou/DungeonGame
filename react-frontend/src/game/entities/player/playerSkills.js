import * as Phaser from "phaser";

export function castSkill(scene, time) {
  if (time - scene.lastSkillAt < scene.stats.skillCooldown) return;
  scene.lastSkillAt = time;

  if (scene.heroId === "riven") {
    scene.castRivenSkill();
    return;
  }

  scene.castNoxSkill();
}

export function castNoxSkill(scene, { noxStrips } = {}) {
  const pointer = scene.input.activePointer;
  const angle = Phaser.Math.Angle.Between(scene.player.x, scene.player.y, pointer.worldX, pointer.worldY);
  scene.playHeroAnimation(scene.hasNoxVoidBarrage ? "superAttack" : "skillAttack", {
    loop: false,
    lockMs: scene.hasNoxVoidBarrage ? 620 : 460,
  });

  const burst = scene.createNoxAnimatedEffect({
    prefix: scene.hasNoxVoidBarrage ? "noxSuperBurst" : "noxLargeWave",
    strip: scene.hasNoxVoidBarrage ? noxStrips.superBurst : noxStrips.largeWave,
    x: scene.player.x + Math.cos(angle) * 72,
    y: scene.player.y + Math.sin(angle) * 72,
    width: scene.hasNoxVoidBarrage ? 138 : 112,
    height: scene.hasNoxVoidBarrage ? 94 : 54,
    rotation: angle,
    depth: 12,
    selfAnimate: true,
  });
  scene.tweens.add({
    targets: burst,
    x: burst.x + Math.cos(angle) * (scene.hasNoxVoidBarrage ? 190 : 155),
    y: burst.y + Math.sin(angle) * (scene.hasNoxVoidBarrage ? 190 : 155),
    alpha: 0,
    scaleX: 1.35,
    scaleY: 1.2,
    duration: scene.hasNoxVoidBarrage ? 540 : 410,
    ease: "Cubic.easeOut",
    onComplete: () => burst.destroy(),
  });

  scene.getGroupChildren(scene.enemyGroup).forEach((enemy) => {
    if (!enemy?.isAlive || enemy.isReviving) return;
    const distance = Phaser.Math.Distance.Between(burst.x, burst.y, enemy.x, enemy.y);
    if (distance < 175) {
      scene.damageEnemy(enemy, scene.getSkillDamage(enemy, scene.hasNoxVoidBarrage ? 1.95 : 1.55), {
        canBurn: true,
        canCrit: true,
        canSlow: true,
        isSkill: true,
      });
      scene.createNoxHitImpact(enemy.x, enemy.y - enemy.displayHeight * 0.08, angle);
    }
  });

  const boom = scene.createNoxAnimatedEffect({
    prefix: "noxHitImpact",
    strip: noxStrips.hitImpact,
    x: burst.x + Math.cos(angle) * 120,
    y: burst.y + Math.sin(angle) * 120,
    width: 86,
    height: 62,
    rotation: angle,
    depth: 11,
    selfAnimate: true,
  }).setAlpha(0.85);
  scene.tweens.add({
    targets: boom,
    alpha: 0,
    scaleX: 1.55,
    scaleY: 1.45,
    duration: 360,
    ease: "Cubic.easeOut",
    onComplete: () => boom.destroy(),
  });

  if (scene.hasNoxVoidBarrage) {
    [-14, 0, 14].forEach((spread, index) => {
      scene.time.delayedCall(index * 70, () => {
        scene.fireNoxShardProjectile(angle + Phaser.Math.DegToRad(spread));
      });
    });
  } else {
    scene.time.delayedCall(120, () => {
      scene.fireNoxShardProjectile(angle);
    });
  }
}

export function fireNoxShardProjectile(scene, angle, { noxStrips } = {}) {
  const projectile = scene.createNoxAnimatedEffect({
    prefix: "noxCrystalShard",
    strip: noxStrips.crystalShard,
    x: scene.player.x + Math.cos(angle) * 42,
    y: scene.player.y + Math.sin(angle) * 42,
    width: 62,
    height: 36,
    rotation: angle,
    depth: 12,
  });
  projectile.owner = "hero";
  projectile.damage = scene.stats.attackDamage * 1.15;
  projectile.expiresAt = scene.time.now + 1250;
  projectile.hazardRadius = 42;
  scene.projectileGroup.add(projectile);
  scene.physics.add.existing(projectile);
  projectile.body.setVelocity(Math.cos(angle) * 460, Math.sin(angle) * 460);
}

export function createNoxAnimatedEffect(scene, { prefix, strip, x, y, width, height, rotation = 0, depth = 11, selfAnimate = false }) {
  const sprite = scene.add.image(x, y, `${prefix}0`).setDisplaySize(width, height).setDepth(depth).setRotation(rotation);
  sprite.frameKeys = Array.from({ length: strip.frames }, (_, index) => `${prefix}${index}`);
  sprite.animationFps = strip.fps;
  sprite.animationFrame = -1;
  sprite.animationLastFrameAt = 0;
  sprite.gameDisplayWidth = width;
  sprite.gameDisplayHeight = height;
  if (selfAnimate && strip.frames > 1) {
    let frame = 0;
    const timer = scene.time.addEvent({
      delay: 1000 / strip.fps,
      loop: true,
      callback: () => {
        if (!sprite.active) {
          timer.remove(false);
          return;
        }
        frame = (frame + 1) % strip.frames;
        sprite.setTexture(sprite.frameKeys[frame]);
        sprite.setDisplaySize(width, height);
      },
    });
  }
  return sprite;
}

export function createNoxHitImpact(scene, x, y, rotation = 0, { noxStrips } = {}) {
  if (scene.heroId !== "nox") return;
  const impact = scene.createNoxAnimatedEffect({
    prefix: "noxHitImpact",
    strip: noxStrips.hitImpact,
    x,
    y,
    width: 58,
    height: 48,
    rotation,
    depth: 13,
    selfAnimate: true,
  });
  scene.tweens.add({
    targets: impact,
    alpha: 0,
    scale: 1.25,
    duration: 240,
    onComplete: () => impact.destroy(),
  });
}

export function createRivenAnimatedEffect(scene, options) {
  return scene.createNoxAnimatedEffect(options);
}

export function createRivenHitImpact(scene, x, y, rotation = 0, { rivenStrips } = {}) {
  const impact = scene.createRivenAnimatedEffect({
    prefix: "rivenHitImpact",
    strip: rivenStrips.hitImpact,
    x,
    y,
    width: 62,
    height: 50,
    rotation,
    depth: 13,
    selfAnimate: true,
  });
  scene.tweens.add({
    targets: impact,
    alpha: 0,
    scaleX: 1.28,
    scaleY: 1.2,
    duration: 260,
    onComplete: () => impact.destroy(),
  });
}

export function createHeroHitImpact(scene, x, y, rotation = 0, effect = scene.heroId) {
  if (effect === "riven") {
    scene.createRivenHitImpact(x, y, rotation);
    return;
  }
  if (effect === "nox") {
    scene.createNoxHitImpact(x, y, rotation);
  }
}

export function castRivenSkill(scene, { rivenStrips } = {}) {
  const pointer = scene.input.activePointer;
  const angle = Phaser.Math.Angle.Between(scene.player.x, scene.player.y, pointer.worldX, pointer.worldY);
  const isEmberBlade = scene.hasRivenEmberBlade;
  scene.playHeroAnimation(isEmberBlade ? "superAttack" : "skillAttack", {
    loop: false,
    lockMs: isEmberBlade ? 560 : 440,
  });

  const slash = scene.createRivenAnimatedEffect({
    prefix: isEmberBlade ? "rivenSuperBurst" : "rivenLargeSlash",
    strip: isEmberBlade ? rivenStrips.superBurst : rivenStrips.largeSlash,
    x: scene.player.x + Math.cos(angle) * 68,
    y: scene.player.y + Math.sin(angle) * 68,
    width: isEmberBlade ? 124 : 96,
    height: isEmberBlade ? 82 : 56,
    rotation: angle,
    depth: 12,
    selfAnimate: true,
  });

  scene.tweens.add({
    targets: slash,
    x: slash.x + Math.cos(angle) * (isEmberBlade ? 235 : 190),
    y: slash.y + Math.sin(angle) * (isEmberBlade ? 235 : 190),
    alpha: 0,
    scaleX: 1.25,
    scaleY: 1.14,
    duration: isEmberBlade ? 520 : 380,
    ease: "Cubic.easeOut",
    onComplete: () => slash.destroy(),
  });

  scene.getGroupChildren(scene.enemyGroup).forEach((enemy) => {
    if (!enemy?.isAlive || enemy.isReviving) return;
    const distance = Phaser.Math.Distance.Between(slash.x, slash.y, enemy.x, enemy.y);
    if (distance < (isEmberBlade ? 225 : 190)) {
      scene.damageEnemy(enemy, scene.getSkillDamage(enemy, isEmberBlade ? 2.15 : scene.stats.burningWave ? 2.05 : 1.65), {
        canBurn: true,
        canCrit: true,
        canSlow: true,
        isSkill: true,
      });
      scene.createRivenHitImpact(enemy.x, enemy.y - enemy.displayHeight * 0.08, angle);
    }
  });

  const orb = scene.createRivenAnimatedEffect({
    prefix: "rivenSkillOrb",
    strip: rivenStrips.skillOrb,
    x: scene.player.x + Math.cos(angle) * 44,
    y: scene.player.y + Math.sin(angle) * 44,
    width: 58,
    height: 42,
    rotation: angle,
    depth: 12,
  });
  orb.owner = "hero";
  orb.hitEffect = "riven";
  orb.damage = scene.stats.attackDamage * (isEmberBlade ? 1.45 : 1.1);
  orb.hazardRadius = isEmberBlade ? 52 : 42;
  orb.expiresAt = scene.time.now + 1000;
  scene.projectileGroup.add(orb);
  scene.physics.add.existing(orb);
  orb.body.setVelocity(Math.cos(angle) * (isEmberBlade ? 560 : 480), Math.sin(angle) * (isEmberBlade ? 560 : 480));

  if (isEmberBlade) {
    [-18, 18].forEach((spread, index) => {
      scene.time.delayedCall(90 + index * 70, () => {
        scene.fireHeroProjectile(angle + Phaser.Math.DegToRad(spread));
      });
    });
  }
}

export function getSkillDamage(scene, enemy, multiplier) {
  const poisonBonus = scene.stats.venomRitual && enemy?.isPoisoned ? 1.3 : 1;
  return scene.stats.attackDamage * multiplier * poisonBonus;
}

