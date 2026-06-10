import { clamp, degToRad } from "./math";

export function getWalkableBounds(layout) {
  const { room } = layout;

  return {
    left: room.x + 42,
    right: room.x + room.width - 42,
    top: room.y + 72,
    bottom: room.y + room.height - 54,
  };
}

export function keepInsideBounds(sprite, bounds, halfWidth, halfHeight) {
  sprite.x = clamp(sprite.x, bounds.left + halfWidth, bounds.right - halfWidth);
  sprite.y = clamp(sprite.y, bounds.top + halfHeight, bounds.bottom - halfHeight);
}

export function getObjectBounds(object, padding = 0) {
  const halfWidth = (object.collisionWidth ?? object.displayWidth) / 2 + padding;
  const halfHeight = (object.collisionHeight ?? object.displayHeight) / 2 + padding;

  return {
    left: object.x - halfWidth,
    right: object.x + halfWidth,
    top: object.y - halfHeight,
    bottom: object.y + halfHeight,
  };
}

export function isPointInBounds(x, y, bounds, radius = 0) {
  return (
    x >= bounds.left + radius &&
    x <= bounds.right - radius &&
    y >= bounds.top + radius &&
    y <= bounds.bottom - radius
  );
}

export function isPointInsideRect(x, y, rect) {
  return x > rect.left && x < rect.right && y > rect.top && y < rect.bottom;
}

export function findSafePoint({
  preferredX,
  preferredY,
  anchorX = preferredX,
  anchorY = preferredY,
  radius = 24,
  bounds,
  isSafe,
  angles = [90, 120, 60, 180, 0, 145, 35, -90, -135, -45],
  distances = [72, 96, 124, 152, 184],
}) {
  if (isSafe(preferredX, preferredY, radius)) {
    return { x: preferredX, y: preferredY };
  }

  for (const distance of distances) {
    for (const angleDeg of angles) {
      const angle = degToRad(angleDeg);
      const x = anchorX + Math.cos(angle) * distance;
      const y = anchorY + Math.sin(angle) * distance;
      if (isSafe(x, y, radius)) {
        return { x, y };
      }
    }
  }

  return {
    x: clamp(preferredX, bounds.left + radius, bounds.right - radius),
    y: clamp(preferredY, bounds.top + radius, bounds.bottom - radius),
  };
}
