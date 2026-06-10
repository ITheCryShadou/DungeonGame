export function updateMatriarchSoulAi(scene, enemy, time) {
  enemy.setVelocity(0, 0);
  if (enemy.animationLockedUntil > time) return;

  if (time - (enemy.lastSuperProjectileAt ?? 0) > enemy.superProjectileCooldown) {
    enemy.lastSuperProjectileAt = time;
    scene.playEnemyAnimation(enemy, "superAttack", { loop: false, lockMs: 760 });
    scene.castMatriarchBlizzard(enemy);
    return;
  }

  if (time - (enemy.lastProjectileAt ?? 0) > enemy.projectileCooldown) {
    enemy.lastProjectileAt = time;
    scene.playEnemyAnimation(enemy, "attack", { loop: false, lockMs: 680 });
    scene.castMatriarchShardBurst(enemy);
  }
}

