export function isBossAlive(boss) {
  return Boolean(boss?.isAlive && !boss.isReviving);
}

export function getBossCenter(boss) {
  return {
    x: boss?.x ?? 0,
    y: boss?.y ?? 0,
  };
}

export function getBossHealthPercent(boss) {
  if (!boss?.maxHealth) return 0;
  return boss.health / boss.maxHealth;
}
