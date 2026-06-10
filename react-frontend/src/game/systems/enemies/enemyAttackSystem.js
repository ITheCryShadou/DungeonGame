import * as Phaser from "phaser";

export function tryHellKillerProjectile(scene, enemy, time, distance) {
  const canSuper = time - (enemy.lastSuperProjectileAt ?? 0) >= enemy.superProjectileCooldown;
  const shouldSuper = canSuper && distance < 360 && Math.random() < enemy.superAttackChance;
  const cooldown = shouldSuper ? enemy.superProjectileCooldown : enemy.projectileCooldown;
  const lastShotAt = shouldSuper ? enemy.lastSuperProjectileAt : enemy.lastProjectileAt;
  if (time - (lastShotAt ?? 0) < cooldown) return;

  if (shouldSuper) {
    enemy.lastSuperProjectileAt = time;
    scene.playEnemyAnimation(enemy, "superAttack", { loop: false, lockMs: 620 });
    const baseAngle = Phaser.Math.Angle.Between(enemy.x, enemy.y, scene.player.x, scene.player.y);
    [-12, 0, 12].forEach((spread) => {
      scene.fireEnemyProjectile(enemy, "hellKillerSuperProjectile0", baseAngle + Phaser.Math.DegToRad(spread), 255, 32);
    });
    return;
  }

  enemy.lastProjectileAt = time;
  scene.playEnemyAnimation(enemy, "attack", { loop: false, lockMs: 420 });
  const angle = Phaser.Math.Angle.Between(enemy.x, enemy.y, scene.player.x, scene.player.y);
  scene.fireEnemyProjectile(enemy, "hellKillerProjectile0", angle, 230, 34);
}

