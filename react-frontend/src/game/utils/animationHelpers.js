export function safePlayAnimation(sprite, key, options) {
  if (!sprite?.anims || !key) return false;
  if (sprite.anims.currentAnim?.key === key) return false;
  sprite.play(key, options);
  return true;
}

export function createAnimationIfMissing(scene, key, config) {
  if (!scene?.anims || scene.anims.exists(key)) return false;
  scene.anims.create({ key, ...config });
  return true;
}

export function setFrameAnimation({
  sprite,
  state,
  frameKeys,
  fps,
  time,
  loop = true,
  displayWidth,
  displayHeight,
}) {
  if (!sprite || !frameKeys?.length) return false;

  sprite.animationState = state;
  sprite.frameKeys = frameKeys;
  sprite.animationFps = fps;
  sprite.animationFrame = -1;
  sprite.animationStartedAt = time;
  sprite.loopAnimation = loop;
  sprite.setTexture(frameKeys[0]);
  sprite.setDisplaySize(displayWidth, displayHeight);
  return true;
}

export function advanceFrameAnimation(sprite, time) {
  if (!sprite?.frameKeys || sprite.frameKeys.length === 0) return false;

  const frameDuration = 1000 / sprite.animationFps;
  const elapsed = Math.max(0, time - (sprite.animationStartedAt ?? 0));
  const nextFrame = sprite.loopAnimation === false
    ? Math.min(sprite.frameKeys.length - 1, Math.floor(elapsed / frameDuration))
    : Math.floor(elapsed / frameDuration) % sprite.frameKeys.length;

  if (sprite.animationFrame === nextFrame) return false;

  sprite.animationFrame = nextFrame;
  sprite.setTexture(sprite.frameKeys[nextFrame]);
  sprite.setDisplaySize(sprite.gameDisplayWidth, sprite.gameDisplayHeight);
  return true;
}

export function getIndexedFrameKeys(sourceKeys = [], frameIndexes = []) {
  return frameIndexes
    .map((index) => sourceKeys[index])
    .filter(Boolean);
}
