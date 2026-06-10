export function getSkeletonEnemyDisplaySize(type) {
  if (type === "boss") {
    return { width: 116, height: 138, bodyWidth: 52, bodyHeight: 58 };
  }

  if (type === "dogStrong") {
    return { width: 66, height: 70, bodyWidth: 34, bodyHeight: 34 };
  }

  if (type === "skeleton" || type === "guard" || type === "dog") {
    return { width: 54, height: 66, bodyWidth: 28, bodyHeight: 32 };
  }

  return null;
}

export function getSkeletonEnemyName(type) {
  const names = {
    skeleton: "Skeleton",
    guard: "Skeleton Guard",
    dog: "Skeleton Dog",
    dogStrong: "Strong Skeleton Dog",
    boss: "Skeleton King",
  };
  return names[type] ?? null;
}

export function getSkeletonReviveHealthRatio(enemy, ratios) {
  return enemy.type === "boss" ? ratios.boss : ratios.skeleton;
}
