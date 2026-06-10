import * as Phaser from "phaser";

export function moveEnemies(scene, time) {
  scene.getGroupChildren(scene.enemyGroup).forEach((enemy) => {
    if (!enemy?.isAlive || enemy.isReviving) return;
    const distance = Phaser.Math.Distance.Between(enemy.x, enemy.y, scene.player.x, scene.player.y);

    if (enemy.type === "infernalBoss") {
      scene.updateInfernalBossAi(enemy, time, distance);
    } else if (enemy.type === "frostTyrant") {
      scene.updateFrostTyrantAi(enemy, time, distance);
    } else if (enemy.type === "matriarchSoul") {
      scene.updateMatriarchSoulAi(enemy, time, distance);
    } else if (enemy.type === "boss") {
      scene.updateBossAi(enemy, time, distance);
    } else if (scene.isIcyEnemy(enemy.type)) {
      scene.updateIcyEnemyAi(enemy, time, distance);
    } else {
      scene.updateEnemyAi(enemy, time, distance);
    }

    scene.keepSpriteInsideRoom(enemy, enemy.displayWidth * 0.25, enemy.displayHeight * 0.36);
    scene.resolveSpriteAgainstObstacles(enemy, enemy.displayWidth * 0.28, enemy.displayHeight * 0.33);

    if (time - enemy.lastDamageAt > enemy.damageCooldown) {
      enemy.clearTint();
      enemy.setTint(enemy.baseTint || 0xffffff);
    }
  });
}

export function updateIcyEnemyAi(scene, enemy, time, distance) {
  if (enemy.type === "frostPriest") {
    scene.tryFrostPriestCrystals(enemy, time);
  }

  if (enemy.type === "iceWraith") {
    scene.tryIceWraithTeleportShot(enemy, time, distance);
  }

  if (enemy.type === "iceAxeTitan" && time >= (enemy.nextChargeAt ?? 0) && distance > 135 && distance < 420) {
    enemy.nextChargeAt = time + enemy.chargeCooldown;
    enemy.aiMode = "icyCharge";
    enemy.aiModeUntil = time + 760;
    enemy.nextAiDecisionAt = time + 840;
    scene.playEnemyAnimation(enemy, "superAttack", { loop: false, lockMs: 760 });
  }

  if (enemy.type === "iceAxeTitan" && enemy.aiMode === "icyCharge" && time < enemy.aiModeUntil) {
    scene.moveEnemyByMode(enemy, "icyCharge", scene.getEnemySpeed(enemy, time) * 2.6, time);
    return;
  }

  if (enemy.type === "icebladeMaster" && distance < 70 && time - (enemy.lastDamageAt ?? 0) > enemy.damageCooldown * 0.65) {
    enemy.useSuperNext = !enemy.useSuperNext;
    scene.playEnemyAnimation(enemy, enemy.useSuperNext ? "superAttack" : "attack", { loop: false, lockMs: 340 });
  }

  scene.updateEnemyAi(enemy, time, distance);
}

export function tryFrostPriestCrystals(scene, enemy, time) {
  if (time - (enemy.lastSuperProjectileAt ?? 0) < enemy.superProjectileCooldown) return;
  enemy.lastSuperProjectileAt = time;
  scene.playEnemyAnimation(enemy, Math.random() < 0.35 ? "superAttack" : "attack", { loop: false, lockMs: 720 });
  [-1, 1].forEach((side, index) => {
    const angle = Phaser.Math.Angle.Between(enemy.x, enemy.y, scene.player.x, scene.player.y) + side * 0.42;
    const x = enemy.x + Math.cos(angle) * 42;
    const y = enemy.y + Math.sin(angle) * 42;
    scene.time.delayedCall(index * 180, () => scene.spawnFrostPriestCrystal(enemy, x, y));
  });
}

export function spawnFrostPriestCrystal(scene, enemy, x, y) {
  if (!enemy?.active || !enemy.isAlive) return;
  const charged = Math.random() < 0.18;
  const spawn = scene.add
    .image(x, y, charged ? "frostPriestChargedShot0" : "frostPriestSpawn0")
    .setDisplaySize(charged ? 72 : 54, charged ? 58 : 48)
    .setDepth(12);
  spawn.frameKeys = scene.getFrameKeys(charged ? "frostPriestChargedShot" : "frostPriestSpawn");
  spawn.animationFps = charged ? 12 : 8;
  spawn.animationFrame = -1;
  spawn.animationStartedAt = scene.time.now;
  spawn.loopAnimation = true;
  spawn.gameDisplayWidth = charged ? 72 : 54;
  spawn.gameDisplayHeight = charged ? 58 : 48;
  spawn.owner = "visual";
  scene.projectileGroup.add(spawn);
  scene.time.delayedCall(2000, () => {
    if (!spawn?.active || !enemy?.active || !enemy.isAlive) {
      spawn?.destroy();
      return;
    }
    const angle = Phaser.Math.Angle.Between(spawn.x, spawn.y, scene.player.x, scene.player.y);
    spawn.destroy();
    const projectile = scene.fireAnimatedEnemyProjectile(
      enemy,
      charged ? "frostPriestChargedShot0" : "frostPriestFly0",
      charged ? "frostPriestChargedShot" : "frostPriestFly",
      angle,
      charged ? 210 : 260,
      charged ? 58 : 40,
      2400
    );
    projectile.x = x;
    projectile.y = y;
    projectile.hazardRadius = charged ? 48 : 28;
    projectile.impactPrefix = charged ? "frostPriestChargedExplosion" : "frostPriestImpact";
    projectile.impactSize = charged ? 98 : 64;
  });
}

export function tryIceWraithTeleportShot(scene, enemy, time, distance) {
  if (time - (enemy.lastProjectileAt ?? 0) < enemy.projectileCooldown || distance > 520) return;
  enemy.lastProjectileAt = time;
  const bounds = scene.getWalkableBounds();
  const escapeAngle = Phaser.Math.Angle.Between(scene.player.x, scene.player.y, enemy.x, enemy.y) + Phaser.Math.FloatBetween(-0.6, 0.6);
  enemy.x = Phaser.Math.Clamp(scene.player.x + Math.cos(escapeAngle) * Phaser.Math.Between(180, 260), bounds.left + 42, bounds.right - 42);
  enemy.y = Phaser.Math.Clamp(scene.player.y + Math.sin(escapeAngle) * Phaser.Math.Between(140, 220), bounds.top + 42, bounds.bottom - 42);
  enemy.setAlpha(0.35);
  scene.tweens.add({ targets: enemy, alpha: 1, duration: 220 });
  scene.playEnemyAnimation(enemy, "superAttack", { loop: false, lockMs: 620 });
  scene.time.delayedCall(420, () => {
    if (!enemy?.active || !enemy.isAlive) return;
    const angle = Phaser.Math.Angle.Between(enemy.x, enemy.y, scene.player.x, scene.player.y);
    const projectile = scene.fireAnimatedEnemyProjectile(enemy, "iceWraithCharge0", "iceWraithCharge", angle, 225, 50, 2300);
    scene.time.delayedCall(420, () => {
      if (!projectile?.active) return;
      projectile.frameKeys = scene.getFrameKeys("iceWraithFly");
      projectile.animationStartedAt = scene.time.now;
      projectile.animationFrame = -1;
    });
  });
}

export function updateEnemyAi(scene, enemy, time, distance) {
  const healthRatio = enemy.health / enemy.maxHealth;
  const effectiveSpeed = scene.getEnemySpeed(enemy, time);
  const isRanged = ["ranged", "icyMage", "icyWraith", "matriarchSoul"].includes(enemy.aiStyle);
  const isMelee = !isRanged;

  if (enemy.type === "hellKiller" && distance < 480) {
    scene.tryHellKillerProjectile(enemy, time, distance);
  }

  if (time >= enemy.nextAiDecisionAt) {
    enemy.nextAiDecisionAt = time + Phaser.Math.Between(520, 950);
    enemy.strafeDirection = Math.random() > 0.5 ? 1 : -1;

    if (
      healthRatio <= enemy.retreatHealthRatio &&
      Math.random() < enemy.retreatChance
    ) {
      enemy.aiMode = "retreat";
      enemy.aiModeUntil = time + Phaser.Math.Between(700, 1200);
    } else if (isRanged && distance < enemy.desiredRange - 70) {
      enemy.aiMode = "backoff";
      enemy.aiModeUntil = time + Phaser.Math.Between(520, 840);
    } else if (isRanged && distance < enemy.desiredRange + 70) {
      enemy.aiMode = "strafe";
      enemy.aiModeUntil = time + Phaser.Math.Between(620, 980);
    } else if (
      enemy.aiStyle === "skirmisher" &&
      distance < 170 &&
      time >= enemy.nextLungeAt &&
      Math.random() < enemy.lungeChance
    ) {
      enemy.aiMode = "lunge";
      enemy.aiModeUntil = time + 360;
      enemy.nextLungeAt = time + Phaser.Math.Between(1700, 2600);
      if (enemy.animationSet?.superAttack && Math.random() < enemy.superAttackChance) {
        scene.playEnemyAnimation(enemy, "superAttack", { loop: false, lockMs: 420 });
      }
    } else if (isMelee && distance <= 44) {
      enemy.aiMode = "strafe";
      enemy.aiModeUntil = time + Phaser.Math.Between(260, 480);
    } else if (isMelee && distance < 900) {
      enemy.aiMode = "chase";
      enemy.aiModeUntil = time + Phaser.Math.Between(640, 1040);
    } else if (distance < enemy.desiredRange) {
      enemy.aiMode = "backoff";
      enemy.aiModeUntil = time + Phaser.Math.Between(420, 720);
    } else if (distance < 430) {
      enemy.aiMode = enemy.aiStyle === "guard" && distance < 150 ? "strafe" : "chase";
      enemy.aiModeUntil = time + Phaser.Math.Between(600, 1000);
    } else {
      enemy.aiMode = "idle";
      enemy.aiModeUntil = time + 700;
    }
  }

  if (time > enemy.aiModeUntil) {
    enemy.aiMode = isMelee && distance < 900 ? "chase" : distance < 430 ? "chase" : "idle";
  }

  scene.moveEnemyByMode(enemy, enemy.aiMode, effectiveSpeed, time);
}

export function getEnemySpeed(enemy, time) {
  if (time < (enemy.slowedUntil ?? 0)) {
    return enemy.speed * (1 - (enemy.slowAmount ?? 0));
  }

  return enemy.speed;
}

export function moveEnemyByMode(scene, enemy, mode, speed, time) {
  const angleToPlayer = Phaser.Math.Angle.Between(enemy.x, enemy.y, scene.player.x, scene.player.y);
  let moveAngle = angleToPlayer;
  let shouldMove = true;

  if (mode === "idle") {
    shouldMove = false;
  } else if (mode === "retreat" || mode === "backoff") {
    moveAngle = angleToPlayer + Math.PI;
  } else if (mode === "strafe") {
    moveAngle = angleToPlayer + Phaser.Math.DegToRad(82 * enemy.strafeDirection);
  } else if (mode === "bossDash") {
    moveAngle = angleToPlayer + Phaser.Math.DegToRad(38 * enemy.strafeDirection);
  }

  if (!shouldMove) {
    enemy.setVelocity(0, 0);
    if (enemy.animationLockedUntil <= time || !enemy.animationLockedUntil) {
      scene.playEnemyAnimation(enemy, "idle");
    }
    return;
  }

  enemy.setVelocity(Math.cos(moveAngle) * speed, Math.sin(moveAngle) * speed);
  enemy.setFlipX(enemy.type === "hellGolem" ? enemy.body.velocity.x > 0 : enemy.body.velocity.x < 0);
  if (enemy.animationLockedUntil <= time || !enemy.animationLockedUntil) {
    const movementAnimation = (mode === "icyCharge" || enemy.type === "icebladeMaster") && enemy.animationSet?.run
      ? "run"
      : "walk";
    scene.playEnemyAnimation(enemy, movementAnimation);
  }
}

