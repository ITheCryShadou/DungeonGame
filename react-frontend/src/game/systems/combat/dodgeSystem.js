export function getIncomingDamage(damage, maxEnemyHitDamage) {
  return Math.min(damage, maxEnemyHitDamage);
}

export function getAvoidDamageChance({ stats, tempHearts, greenHearts, sourceEnemy }) {
  const isProjectile = sourceEnemy?.isProjectile === true;
  const baseChance = Math.max(0, stats.dodgeChance ?? 0);
  const azureChance = stats.azureBarrier && tempHearts > 0 ? 0.15 : 0;
  const winterChance = isProjectile && stats.winterHeart && (tempHearts > 0 || greenHearts > 0)
    ? 0.15
    : 0;

  return Math.min(0.75, baseChance + azureChance + winterChance);
}

export function shouldAvoidDamage(scene, sourceEnemy = null) {
  const chance = getAvoidDamageChance({
    stats: scene.stats,
    tempHearts: scene.tempHearts,
    greenHearts: scene.greenHearts,
    sourceEnemy,
  });

  return chance > 0 && Math.random() < chance;
}

export function shouldTriggerFrozenGuard(scene, chance = 0.2) {
  if (!scene.stats.frozenGuard) return false;
  if (scene.time.now < (scene.frozenGuardReadyAt ?? 0)) return false;
  return Math.random() < chance;
}
