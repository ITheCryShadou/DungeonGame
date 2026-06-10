import * as Phaser from "phaser";

export function updateInfernalBossAi(scene, enemy, time, distance, { phaseTwoTrigger }) {
  if (!enemy.phaseTwoTriggered && enemy.health / enemy.maxHealth <= phaseTwoTrigger) {
    scene.triggerInfernalPhaseTwo(enemy);
    return;
  }

  const effectiveSpeed = scene.getEnemySpeed(enemy, time) * (enemy.phase === 2 ? 1.22 : 1);

  if (time >= enemy.nextAiDecisionAt) {
    enemy.nextAiDecisionAt = time + Phaser.Math.Between(520, 820);
    enemy.strafeDirection = Math.random() > 0.5 ? 1 : -1;

    if (distance < 135) {
      enemy.aiMode = "retreat";
      enemy.aiModeUntil = time + 520;
    } else if (distance > enemy.desiredRange + 80) {
      enemy.aiMode = "chase";
      enemy.aiModeUntil = time + 640;
    } else {
      enemy.aiMode = "strafe";
      enemy.aiModeUntil = time + 780;
    }
  }

  scene.moveEnemyByMode(enemy, enemy.aiMode, effectiveSpeed, time);
  scene.tryInfernalBossAttack(enemy, time, distance);
}

export function tryInfernalBossAttack(scene, enemy, time) {
  const cooldown = enemy.phase === 2 ? 1050 : 1550;
  if (time - (enemy.lastProjectileAt ?? 0) < cooldown) return;
  if (enemy.animationLockedUntil > time) return;

  enemy.lastProjectileAt = time;
  const phaseTwo = enemy.phase === 2;
  const roll = Math.random();
  const angle = Phaser.Math.Angle.Between(enemy.x, enemy.y, scene.player.x, scene.player.y);

  if (phaseTwo && roll > 0.76) {
    scene.castInfernalTornadoAttack(enemy, Math.random() > 0.45 ? 2 : 1);
    return;
  }

  if (phaseTwo && roll > 0.55) {
    scene.castInfernalChain(enemy, roll > 0.68 ? "chainPrison" : "chainSnare");
    return;
  }

  if (roll > 0.7 || (phaseTwo && roll > 0.42)) {
    scene.playEnemyAnimation(enemy, "superAttack", { loop: false, lockMs: phaseTwo ? 660 : 720 });
    const waveKey = phaseTwo ? "infernalWaveStart" : "infernalScytheStart";
    const spreads = phaseTwo ? [-18, 0, 18] : [-10, 10];
    spreads.forEach((spread) => {
      scene.fireAnimatedEnemyProjectile(enemy, `${waveKey}0`, `${waveKey}`, angle + Phaser.Math.DegToRad(spread), phaseTwo ? 265 : 235, phaseTwo ? 58 : 48, 2300);
    });
    return;
  }

  if (roll > 0.42) {
    scene.playEnemyAnimation(enemy, "attack", { loop: false, lockMs: 520 });
    const spreads = phaseTwo ? [-12, 0, 12] : [0];
    spreads.forEach((spread) => {
      scene.fireAnimatedEnemyProjectile(enemy, "infernalFireOrb0", "infernalFireOrb", angle + Phaser.Math.DegToRad(spread), phaseTwo ? 300 : 250, 34, 2000);
    });
    return;
  }

  scene.playEnemyAnimation(enemy, "attack", { loop: false, lockMs: 580 });
  scene.castHellLanceRain(enemy, phaseTwo ? 5 : 3);
}

export function updateInfernalTornado(scene, tornado) {
  const bounds = scene.getWalkableBounds();
  if (tornado.x < bounds.left + 40 || tornado.x > bounds.right - 40) {
    tornado.body.setVelocityX(-tornado.body.velocity.x);
  }
  if (tornado.y < bounds.top + 50 || tornado.y > bounds.bottom - 50) {
    tornado.body.setVelocityY(-tornado.body.velocity.y);
  }

  if (Math.random() < 0.012) {
    const angle = Phaser.Math.FloatBetween(0, Math.PI * 2);
    const speed = Phaser.Math.Between(70, 135);
    tornado.body.setVelocity(Math.cos(angle) * speed, Math.sin(angle) * speed);
  }
}

