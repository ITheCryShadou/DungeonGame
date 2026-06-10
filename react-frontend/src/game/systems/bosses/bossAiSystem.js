import * as Phaser from "phaser";

export function updateBossAi(scene, enemy, time, distance) {
  const healthRatio = enemy.health / enemy.maxHealth;
  enemy.phase = healthRatio <= 0.35 ? 3 : healthRatio <= 0.65 ? 2 : 1;
  const phaseSpeedBonus = enemy.phase === 3 ? 1.36 : enemy.phase === 2 ? 1.18 : 1;
  const effectiveSpeed = scene.getEnemySpeed(enemy, time) * phaseSpeedBonus;

  if (time >= enemy.nextAiDecisionAt) {
    enemy.nextAiDecisionAt = time + Phaser.Math.Between(480, 760);
    enemy.strafeDirection = Math.random() > 0.5 ? 1 : -1;

    if (distance < 115) {
      enemy.aiMode = "retreat";
      enemy.aiModeUntil = time + 520;
    } else if (enemy.phase >= 2 && distance < 260 && Math.random() < 0.42) {
      enemy.aiMode = "bossDash";
      enemy.aiModeUntil = time + 420;
    } else if (distance > enemy.desiredRange + 70) {
      enemy.aiMode = "chase";
      enemy.aiModeUntil = time + 680;
    } else {
      enemy.aiMode = "strafe";
      enemy.aiModeUntil = time + 760;
    }
  }

  const modeSpeed = enemy.aiMode === "bossDash" ? effectiveSpeed * 2.15 : effectiveSpeed;
  scene.moveEnemyByMode(enemy, enemy.aiMode, modeSpeed, time);

  if (distance > 120 && distance < 430) {
    scene.tryBossProjectile(enemy, time);
  }
}

