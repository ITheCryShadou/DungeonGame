export function isEnemyAlive(enemy) {
  return Boolean(enemy?.isAlive && !enemy.isReviving);
}

export function getEnemyCenter(enemy) {
  return {
    x: enemy?.x ?? 0,
    y: enemy?.y ?? 0,
  };
}
