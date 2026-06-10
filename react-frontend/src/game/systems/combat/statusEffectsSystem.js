export function applyEnemySlow(scene, enemy) {
  enemy.slowAmount = Math.max(enemy.slowAmount ?? 0, scene.stats.enemySlowOnHit);
  enemy.slowedUntil = Math.max(
    enemy.slowedUntil ?? 0,
    scene.time.now + scene.stats.enemySlowDuration
  );
  scene.showFloatingText(enemy.x, enemy.y - enemy.displayHeight * 0.34, "SLOWED", "#78d8ff", 16);
}

export function getChillDuration(scene) {
  const blueBonus = scene.stats.crystalBarrier && scene.tempHearts > 0 ? 1000 : 0;
  return (scene.stats.chillDuration ?? 3000) + blueBonus;
}

export function extendEnemyChill(scene, enemy, amount) {
  if (!enemy?.isAlive) return;
  enemy.isChilled = true;
  enemy.chillExpiresAt = Math.max(enemy.chillExpiresAt ?? 0, scene.time.now) + amount;
  enemy.slowedUntil = Math.max(enemy.slowedUntil ?? 0, enemy.chillExpiresAt);
}

export function applyEnemyChill(scene, enemy, duration = getChillDuration(scene)) {
  if (!enemy?.isAlive || enemy.isReviving) return;

  if (enemy.isBurning && scene.stats.steamBurst) {
    scene.createSteamBurst(enemy);
    return;
  }

  const slow = scene.stats.deepChill ? 0.25 : (scene.stats.chillSlow ?? 0.15);
  enemy.isChilled = true;
  enemy.chillExpiresAt = Math.max(enemy.chillExpiresAt ?? 0, scene.time.now + duration);
  enemy.slowAmount = Math.max(enemy.slowAmount ?? 0, slow);
  enemy.slowedUntil = Math.max(enemy.slowedUntil ?? 0, enemy.chillExpiresAt);
  enemy.setTint(0x9ee7ff);
  scene.showFloatingText(enemy.x, enemy.y - enemy.displayHeight * 0.38, "CHILL", "#9ee7ff", 16);

  scene.time.delayedCall(duration + 40, () => {
    if (!enemy?.active || !enemy.isAlive || scene.time.now < (enemy.chillExpiresAt ?? 0)) return;
    enemy.isChilled = false;
    enemy.clearTint();
    enemy.setTint(enemy.baseTint || 0xffffff);
  });
}

export function applyEnemyBurn(scene, enemy) {
  const extraDuration = enemy.isBurning && scene.stats.hellfireCore ? 1000 : 0;
  enemy.isBurning = true;
  enemy.burnExpiresAt = Math.max(enemy.burnExpiresAt ?? 0, scene.time.now + 3000 + extraDuration);
  const burnDamage = Math.max(0.08, scene.stats.burnDamage || scene.stats.attackDamage * 0.12) *
    (scene.stats.burnDamageMultiplier ?? 1);
  enemy.setTint(0xff7a2f);
  scene.showFloatingText(enemy.x, enemy.y - enemy.displayHeight * 0.36, "BURN", "#ff8a3d", 16);

  [1000, 2000, 3000, 4000].forEach((delay) => {
    scene.time.delayedCall(delay, () => {
      if (!enemy?.active || !enemy.isAlive) return;
      if (scene.time.now > (enemy.burnExpiresAt ?? 0)) {
        enemy.isBurning = false;
        return;
      }
      scene.damageEnemy(enemy, burnDamage, { isBurn: true });
    });
  });
}

export function applyEnemyPoison(scene, enemy) {
  enemy.isPoisoned = true;
  enemy.poisonExpiresAt = Math.max(enemy.poisonExpiresAt ?? 0, scene.time.now + 4000);
  if (scene.stats.blackVenom) {
    enemy.poisonDamageReduction = Math.max(enemy.poisonDamageReduction ?? 0, 0.2);
  }
  const poisonDamage = Math.max(0.06, scene.stats.poisonDamage || scene.stats.attackDamage * 0.08);
  enemy.setTint(0x66d36e);
  scene.showFloatingText(enemy.x, enemy.y - enemy.displayHeight * 0.42, "POISON", "#75f08a", 16);

  [1000, 2000, 3000, 4000].forEach((delay) => {
    scene.time.delayedCall(delay, () => {
      if (!enemy?.active || !enemy.isAlive) return;
      if (scene.time.now > (enemy.poisonExpiresAt ?? 0)) {
        enemy.isPoisoned = false;
        return;
      }
      scene.damageEnemy(enemy, poisonDamage, { isPoison: true });
    });
  });
}

export function applyEnemyBleed(scene, enemy) {
  scene.showFloatingText(enemy.x, enemy.y - enemy.displayHeight * 0.45, "BLEED", "#ff5f87", 16);
  [700, 1400, 2100].forEach((delay) => {
    scene.time.delayedCall(delay, () => {
      if (!enemy?.active || !enemy.isAlive) return;
      scene.damageEnemy(enemy, Math.max(0.08, scene.stats.attackDamage * 0.1), { isBleed: true });
    });
  });
}
