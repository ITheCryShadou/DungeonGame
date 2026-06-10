import * as Phaser from "phaser";

export function tryBossProjectile(scene, enemy, time) {
  const cooldown = enemy.phase === 3 ? 1350 : enemy.phase === 2 ? 1800 : 2300;
  if (time - (enemy.lastProjectileAt ?? 0) < cooldown) return;

  enemy.lastProjectileAt = time;
  scene.playBossAnimation(enemy, "attack", { loop: false, lockMs: 520 });

  const baseAngle = Phaser.Math.Angle.Between(enemy.x, enemy.y, scene.player.x, scene.player.y);
  const spreads = enemy.phase === 3 ? [-16, 0, 16] : enemy.phase === 2 ? [-9, 9] : [0];
  spreads.forEach((spread) => scene.fireBossProjectile(enemy, time, baseAngle + Phaser.Math.DegToRad(spread)));
}
