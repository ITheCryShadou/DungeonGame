export function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

export function distanceBetween(ax, ay, bx, by) {
  return Math.hypot(bx - ax, by - ay);
}

export function angleBetween(ax, ay, bx, by) {
  return Math.atan2(by - ay, bx - ax);
}

export function degToRad(value) {
  return (value * Math.PI) / 180;
}

export function normalizeVector(x, y) {
  const length = Math.hypot(x, y);
  if (length === 0) return { x: 0, y: 0 };
  return { x: x / length, y: y / length };
}
