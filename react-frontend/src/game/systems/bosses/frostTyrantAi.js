import * as Phaser from "phaser";

export function updateFrostTyrantAi(scene, enemy, time, distance, { iceTrigger }) {
  if (enemy.frostFrozen) {
    enemy.setVelocity(0, 0);
    scene.playEnemyAnimation(enemy, "intoIceEnd", { loop: false });
    return;
  }

  if (!enemy.frostIceTriggered && enemy.health / enemy.maxHealth <= iceTrigger) {
    scene.triggerFrostTyrantIce(enemy);
    return;
  }

  const effectiveSpeed = scene.getEnemySpeed(enemy, time);
  if (time >= enemy.nextAiDecisionAt) {
    enemy.nextAiDecisionAt = time + Phaser.Math.Between(520, 840);
    enemy.strafeDirection = Math.random() > 0.5 ? 1 : -1;
    if (distance < 105) {
      enemy.aiMode = "strafe";
      enemy.aiModeUntil = time + 520;
    } else if (distance > enemy.desiredRange + 75) {
      enemy.aiMode = "chase";
      enemy.aiModeUntil = time + 740;
    } else {
      enemy.aiMode = "strafe";
      enemy.aiModeUntil = time + 820;
    }
  }

  scene.moveEnemyByMode(enemy, enemy.aiMode, effectiveSpeed, time);
  scene.tryFrostTyrantAttack(enemy, time, distance);
}

export function tryFrostTyrantAttack(scene, enemy, time, distance) {
  if (enemy.animationLockedUntil > time) return;

  if (distance < 96 && time - (enemy.lastDamageAt ?? 0) > enemy.damageCooldown) {
    const animation = Math.random() < 0.45 ? "heavyAttack" : "attack";
    scene.playEnemyAnimation(enemy, animation, { loop: false, lockMs: 560 });
    return;
  }

  const canSuper = time - (enemy.lastSuperProjectileAt ?? 0) >= enemy.superProjectileCooldown;
  const canShot = time - (enemy.lastProjectileAt ?? 0) >= enemy.projectileCooldown;
  const angle = Phaser.Math.Angle.Between(enemy.x, enemy.y, scene.player.x, scene.player.y);

  if (canSuper && distance < 440 && Math.random() < 0.34) {
    enemy.lastSuperProjectileAt = time;
    scene.playEnemyAnimation(enemy, "superAttack", { loop: false, lockMs: 820 });
    [-12, 12].forEach((spread) => {
      scene.fireAnimatedEnemyProjectile(enemy, "frostTyrantFrostOrb0", "frostTyrantFrostOrb", angle + Phaser.Math.DegToRad(spread), 205, 62, 2900);
    });
    return;
  }

  if (canShot && distance < 520) {
    enemy.lastProjectileAt = time;
    scene.playEnemyAnimation(enemy, "rangedAttack", { loop: false, lockMs: 620 });
    scene.fireAnimatedEnemyProjectile(enemy, "frostTyrantIceLance0", "frostTyrantIceLance", angle, 285, 54, 2400);
  }
}

