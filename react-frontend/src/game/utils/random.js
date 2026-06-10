export function randomBetween(min, max) {
  return min + Math.random() * (max - min);
}

export function randomInt(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

export function lowBiasedRandomInt(min, max) {
  const range = max - min + 1;
  return min + Math.floor(Math.random() * Math.random() * range);
}

export function pickRandom(items) {
  if (!items?.length) return undefined;
  return items[randomInt(0, items.length - 1)];
}

export function weightedRandom(weights, fallback = null) {
  const entries = Object.entries(weights ?? {});
  const totalWeight = entries.reduce((sum, [, weight]) => sum + weight, 0);
  if (totalWeight <= 0) return fallback;

  let roll = Math.random() * totalWeight;
  for (const [key, weight] of entries) {
    roll -= weight;
    if (roll <= 0) return key;
  }
  return entries[entries.length - 1]?.[0] ?? fallback;
}

export function shuffleArray(items) {
  const result = [...items];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const swapIndex = randomInt(0, index);
    [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
  }
  return result;
}
