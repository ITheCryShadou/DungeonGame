import * as Phaser from "phaser";

export function createCrystalStepTrail(scene) {
  const trail = scene.add
    .ellipse(scene.player.x, scene.player.y, 150, 44, 0x8adfff, 0.34)
    .setDepth(6);
  scene.tweens.add({
    targets: trail,
    alpha: 0,
    scaleX: 1.28,
    scaleY: 1.16,
    duration: 2000,
    onComplete: () => trail.destroy(),
  });
  scene.time.addEvent({
    delay: 220,
    repeat: 8,
    callback: () => {
      if (!trail.active) return;
      scene.getGroupChildren(scene.enemyGroup).forEach((enemy) => {
        if (!enemy?.isAlive || enemy.isReviving) return;
        const distance = Phaser.Math.Distance.Between(trail.x, trail.y, enemy.x, enemy.y);
        if (distance >= 98) return;
        if (enemy.isChilled) {
          scene.damageEnemy(enemy, Math.max(0.06, scene.stats.attackDamage * 0.1), { isFrost: true });
        }
        scene.applyEnemyChill(enemy);
      });
    },
  });
}

export function createFrozenAfterimage(scene) {
  const afterimage = scene.add
    .image(scene.player.x, scene.player.y, "fallingIceSpikeTrap0")
    .setDisplaySize(52, 86)
    .setDepth(12)
    .setAlpha(0.86);
  afterimage.frameKeys = scene.getFrameKeys("fallingIceSpikeTrap");
  afterimage.animationFps = 13;
  afterimage.animationFrame = -1;
  afterimage.animationStartedAt = scene.time.now;
  afterimage.loopAnimation = false;
  afterimage.gameDisplayWidth = 52;
  afterimage.gameDisplayHeight = 86;
  afterimage.owner = "visual";
  afterimage.expiresAt = scene.time.now + 950;
  scene.projectileGroup.add(afterimage);

  scene.time.delayedCall(420, () => {
    if (!afterimage?.active) return;
    scene.getGroupChildren(scene.enemyGroup).forEach((enemy) => {
      if (!enemy?.isAlive || enemy.isReviving) return;
      const distance = Phaser.Math.Distance.Between(afterimage.x, afterimage.y, enemy.x, enemy.y);
      if (distance < 82) {
        scene.damageEnemy(enemy, scene.stats.attackDamage * 0.55, { isFrost: true });
        scene.applyEnemyChill(enemy);
      }
    });
  });
}

export function createFrostNova(scene, x, y, damageRatio = 0.15) {
  const nova = scene.add.circle(x, y, 24, 0x9ee7ff, 0.34).setDepth(8);
  scene.tweens.add({
    targets: nova,
    radius: 118,
    alpha: 0,
    duration: 360,
    onComplete: () => nova.destroy(),
  });
  scene.getGroupChildren(scene.enemyGroup).forEach((enemy) => {
    if (!enemy?.isAlive || enemy.isReviving) return;
    const distance = Phaser.Math.Distance.Between(x, y, enemy.x, enemy.y);
    if (distance < 120) {
      scene.damageEnemy(enemy, Math.max(0.05, scene.stats.attackDamage * damageRatio), { isFrost: true });
      scene.applyEnemyChill(enemy);
    }
  });
}

export function releaseIceShards(scene, enemy, count = 5) {
  const shardKeys = scene.getFrameKeys("frostPriestFly");
  const shardDamage = Math.max(0.08, scene.stats.attackDamage * 0.28);
  Array.from({ length: count }, (_, index) => {
    const angle = (Math.PI * 2 * index) / count;
    const shard = scene.add
      .image(enemy.x, enemy.y - 10, shardKeys[0] ?? "frostPriestFly0")
      .setDisplaySize(46, 34)
      .setDepth(12)
      .setRotation(angle);
    shard.owner = "hero";
    shard.damage = shardDamage;
    shard.appliesChill = true;
    shard.hazardRadius = 28;
    shard.expiresAt = scene.time.now + 900;
    shard.frameKeys = shardKeys;
    shard.animationFps = 12;
    shard.animationFrame = -1;
    shard.animationStartedAt = scene.time.now;
    shard.loopAnimation = true;
    shard.gameDisplayWidth = 46;
    shard.gameDisplayHeight = 34;
    scene.projectileGroup.add(shard);
    scene.physics.add.existing(shard);
    shard.body.setVelocity(Math.cos(angle) * 340, Math.sin(angle) * 340);
  });
}

export function createSteamBurst(scene, enemy) {
  enemy.isBurning = false;
  enemy.isChilled = false;
  enemy.burnExpiresAt = 0;
  enemy.chillExpiresAt = 0;
  scene.showFloatingText(enemy.x, enemy.y - enemy.displayHeight * 0.48, "STEAM", "#dffbff", 18);
  scene.damageEnemy(enemy, scene.stats.attackDamage * 0.35, { isFrost: true });
  const cloud = scene.add.circle(enemy.x, enemy.y, 30, 0xdffbff, 0.2).setDepth(7);
  scene.tweens.add({
    targets: cloud,
    radius: 120,
    alpha: 0,
    duration: 1700,
    onComplete: () => cloud.destroy(),
  });
  scene.time.addEvent({
    delay: 300,
    repeat: 4,
    callback: () => {
      if (!cloud.active) return;
      scene.getGroupChildren(scene.enemyGroup).forEach((target) => {
        if (!target?.isAlive || target.isReviving) return;
        const distance = Phaser.Math.Distance.Between(cloud.x, cloud.y, target.x, target.y);
        if (distance < 116) {
          target.slowAmount = Math.max(target.slowAmount ?? 0, 0.18);
          target.slowedUntil = Math.max(target.slowedUntil ?? 0, scene.time.now + 700);
        }
      });
    },
  });
}

export function createAshExplosion(scene, enemy) {
  const blast = scene.add.circle(enemy.x, enemy.y, 28, 0xff7a2f, 0.36).setDepth(8);
  scene.tweens.add({
    targets: blast,
    radius: 112,
    alpha: 0,
    duration: 360,
    onComplete: () => blast.destroy(),
  });
  scene.getGroupChildren(scene.enemyGroup).forEach((target) => {
    if (!target?.isAlive || target === enemy || target.isReviving) return;
    const distance = Phaser.Math.Distance.Between(enemy.x, enemy.y, target.x, target.y);
    if (distance < 118) {
      scene.damageEnemy(target, scene.stats.attackDamage * 0.45, {});
      scene.applyEnemyBurn(target);
    }
  });
}

export function spreadBurn(scene, enemy) {
  const target = scene.getGroupChildren(scene.enemyGroup).find((item) => (
    item?.isAlive &&
    item !== enemy &&
    !item.isReviving &&
    Phaser.Math.Distance.Between(enemy.x, enemy.y, item.x, item.y) < 170
  ));
  if (target && Math.random() < 0.45) scene.applyEnemyBurn(target);
}

export function createPoisonCloud(scene, x, y) {
  const cloud = scene.add.circle(x, y, 36, 0x54c96b, 0.28).setDepth(7);
  scene.tweens.add({
    targets: cloud,
    radius: 105,
    alpha: 0,
    duration: 3000,
    onComplete: () => cloud.destroy(),
  });
  scene.time.addEvent({
    delay: 420,
    repeat: 6,
    callback: () => {
      if (!cloud.active) return;
      scene.getGroupChildren(scene.enemyGroup).forEach((enemy) => {
        if (!enemy?.isAlive || enemy.isReviving) return;
        const distance = Phaser.Math.Distance.Between(cloud.x, cloud.y, enemy.x, enemy.y);
        if (distance < 105) scene.applyEnemyPoison(enemy);
      });
    },
  });
}

export function spreadPoison(scene, enemy) {
  const target = scene.getGroupChildren(scene.enemyGroup).find((item) => (
    item?.isAlive &&
    item !== enemy &&
    !item.isReviving &&
    Phaser.Math.Distance.Between(enemy.x, enemy.y, item.x, item.y) < 180
  ));
  if (target && Math.random() < 0.5) scene.applyEnemyPoison(target);
}

export function createShieldEcho(scene) {
  const blast = scene.add.circle(scene.player.x, scene.player.y, 26, 0x78d8ff, 0.34).setDepth(8);
  scene.tweens.add({
    targets: blast,
    radius: 125,
    alpha: 0,
    duration: 320,
    onComplete: () => blast.destroy(),
  });
  scene.getGroupChildren(scene.enemyGroup).forEach((enemy) => {
    if (!enemy?.isAlive || enemy.isReviving) return;
    const distance = Phaser.Math.Distance.Between(scene.player.x, scene.player.y, enemy.x, enemy.y);
    if (distance < 128) {
      scene.damageEnemy(enemy, scene.stats.attackDamage * 0.55, {});
      const pushAngle = Phaser.Math.Angle.Between(scene.player.x, scene.player.y, enemy.x, enemy.y);
      enemy.body?.setVelocity(Math.cos(pushAngle) * 150, Math.sin(pushAngle) * 150);
    }
  });
}

