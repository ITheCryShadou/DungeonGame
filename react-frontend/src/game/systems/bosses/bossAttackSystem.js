import * as Phaser from "phaser";
import { GAME_RULES } from "../../config/gameBalance";

export function castHellLanceRain(scene, enemy, count) {
  const bounds = scene.getWalkableBounds();
  Array.from({ length: count }).forEach((_, index) => {
    const x = Phaser.Math.Clamp(
      scene.player.x + Phaser.Math.Between(-150, 150),
      bounds.left + 20,
      bounds.right - 20
    );
    const y = bounds.top + 24;
    scene.time.delayedCall(index * 120, () => {
      if (!enemy?.active || !enemy.isAlive) return;
      const projectile = scene.add
        .image(x, y, "infernalHellLance0")
        .setDisplaySize(34, 58)
        .setDepth(12)
        .setRotation(Math.PI / 2);
      projectile.owner = "enemy";
      projectile.damage = GAME_RULES.enemyHitDamage;
      projectile.expiresAt = scene.time.now + 1600;
      projectile.frameKeys = scene.getFrameKeys("infernalHellLance");
      projectile.animationFps = 10;
      projectile.animationFrame = -1;
      projectile.animationStartedAt = scene.time.now;
      projectile.loopAnimation = true;
      projectile.gameDisplayWidth = 34;
      projectile.gameDisplayHeight = 58;
      scene.projectileGroup.add(projectile);
      scene.physics.add.existing(projectile);
      projectile.body.setVelocity(0, 310);
    });
  });
}

export function castInfernalChain(scene, enemy, animationName) {
  scene.playEnemyAnimation(enemy, animationName, { loop: false, lockMs: 760 });
  const marker = scene.add
    .circle(scene.player.x, scene.player.y, animationName === "chainPrison" ? 74 : 52, 0xff4b1f, 0.22)
    .setStrokeStyle(2, 0xffb347, 0.65)
    .setDepth(11);
  marker.owner = "enemy";
  marker.damage = GAME_RULES.enemyHitDamage;
  marker.expiresAt = scene.time.now + 900;
  marker.hazardRadius = animationName === "chainPrison" ? 78 : 56;
  scene.projectileGroup.add(marker);
}

export function castInfernalTornadoAttack(scene, enemy, count) {
  scene.playEnemyAnimation(enemy, count > 1 ? "superHellfireTornado" : "hellfireTornado", {
    loop: false,
    lockMs: count > 1 ? 900 : 760,
  });
  Array.from({ length: count }).forEach((_, index) => {
    scene.time.delayedCall(260 + index * 180, () => {
      if (!enemy?.active || !enemy.isAlive) return;
      scene.spawnInfernalTornado(enemy);
    });
  });
}

export function castMatriarchShardBurst(scene, enemy) {
  Array.from({ length: 8 }).forEach((_, index) => {
    scene.time.delayedCall(index * 125, () => {
      if (!enemy?.active || !enemy.isAlive) return;
      const angle = -Math.PI / 2 + index * (Math.PI * 2 / 8);
      scene.fireAnimatedEnemyProjectile(enemy, "matriarchSoulShard0", "matriarchSoulShard", angle, 225, 44, 2400);
    });
  });
}

export function castMatriarchBlizzard(scene, enemy) {
  const aimedAngles = [
    Phaser.Math.Angle.Between(enemy.x, enemy.y, scene.player.x, scene.player.y),
    Phaser.Math.Angle.Between(enemy.x, enemy.y, scene.player.x + 45, scene.player.y - 35),
  ];
  const randomAngles = Array.from({ length: 5 }, () => Phaser.Math.FloatBetween(0, Math.PI * 2));
  [...aimedAngles, ...randomAngles].forEach((angle, index) => {
    scene.time.delayedCall(index * 95, () => {
      if (!enemy?.active || !enemy.isAlive) return;
      scene.fireAnimatedEnemyProjectile(enemy, "matriarchSoulBlizzard0", "matriarchSoulBlizzard", angle, 205, 52, 2600);
    });
  });
}

