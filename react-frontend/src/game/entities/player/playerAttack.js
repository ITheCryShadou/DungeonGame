import * as Phaser from "phaser";
import { fireHeroProjectile as fireHeroProjectileSystem } from "../../systems/combat/projectileSystem";

export function attack(scene, { rivenStrips } = {}) {
  const now = scene.time.now;
  if (now - scene.lastAttackAt < scene.stats.attackCooldown) return;

  scene.lastAttackAt = now;
  scene.attackCounter += 1;
  if (scene.stats.perfectStrike) {
    scene.guaranteedCritCounter += 1;
  }
  const pointer = scene.input.activePointer;
  const angle = Phaser.Math.Angle.Between(scene.player.x, scene.player.y, pointer.worldX, pointer.worldY);
  const hitX = scene.player.x + Math.cos(angle) * 42;
  const hitY = scene.player.y + Math.sin(angle) * 42;

  scene.playHeroAnimation("attack", { loop: false, lockMs: scene.heroId === "riven" ? 330 : 260 });
  if (scene.heroId === "riven") {
    const slash = scene.createRivenAnimatedEffect({
      prefix: "rivenSmallSlash",
      strip: rivenStrips.smallSlash,
      x: hitX,
      y: hitY,
      width: 82,
      height: 44,
      rotation: angle,
      depth: 12,
      selfAnimate: true,
    }).setAlpha(0.9);
    scene.tweens.add({
      targets: slash,
      x: slash.x + Math.cos(angle) * 32,
      y: slash.y + Math.sin(angle) * 32,
      alpha: 0,
      scaleX: 1.18,
      scaleY: 1.12,
      duration: 230,
      onComplete: () => slash.destroy(),
    });
  } else {
    const slash = scene.add.arc(hitX, hitY, 38, -50, 50, false, 0xb98cff, 0.4);
    slash.setRotation(angle);
    scene.tweens.add({
      targets: slash,
      alpha: 0,
      scale: 1.6,
      duration: 145,
      onComplete: () => slash.destroy(),
    });
  }

  if (scene.hasProjectileAttack) {
    scene.fireHeroProjectile(angle);
  }

  scene.getGroupChildren(scene.enemyGroup).forEach((enemy) => {
    if (!enemy?.isAlive || enemy.isReviving) return;
    const distance = Phaser.Math.Distance.Between(scene.player.x, scene.player.y, enemy.x, enemy.y);
    if (distance <= scene.stats.attackRange) {
      scene.damageEnemy(enemy, scene.stats.attackDamage, {
        canBurn: true,
        canCrit: true,
        canSlow: true,
      });
      scene.createHeroHitImpact(enemy.x, enemy.y - enemy.displayHeight * 0.1, angle);
    }
  });

  if (scene.stats.burningWave && scene.attackCounter % 4 === 0) {
    scene.castBurningWave();
  }
}

export function fireHeroProjectile(scene, angle, { noxStrips, rivenStrips } = {}) {
  return fireHeroProjectileSystem(scene, angle, {
    noxStrips,
    rivenStrips,
  });
}

export function castBurningWave(scene) {
  const pointer = scene.input.activePointer;
  const angle = Phaser.Math.Angle.Between(scene.player.x, scene.player.y, pointer.worldX, pointer.worldY);
  const wave = scene.add
    .ellipse(scene.player.x + Math.cos(angle) * 92, scene.player.y + Math.sin(angle) * 92, 118, 34, 0xff7a2f, 0.42)
    .setRotation(angle)
    .setDepth(9);

  scene.tweens.add({
    targets: wave,
    alpha: 0,
    scaleX: 1.55,
    scaleY: 1.45,
    duration: 360,
    ease: "Cubic.easeOut",
    onComplete: () => wave.destroy(),
  });

  scene.getGroupChildren(scene.enemyGroup).forEach((enemy) => {
    if (!enemy?.isAlive || enemy.isReviving) return;
    const distance = Phaser.Math.Distance.Between(wave.x, wave.y, enemy.x, enemy.y);
    if (distance < 145) {
      scene.damageEnemy(enemy, scene.stats.attackDamage * 0.65, {
        canBurn: true,
        canCrit: false,
        canSlow: false,
      });
      scene.applyEnemyBurn(enemy);
    }
  });
}

