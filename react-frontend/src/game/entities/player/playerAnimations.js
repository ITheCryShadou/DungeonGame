import { setFrameAnimation } from "../../utils/animationHelpers";

const capitalize = (value) => value.charAt(0).toUpperCase() + value.slice(1);

export function registerPlayerStrips(scene) {
  Object.entries(scene.heroStrips).forEach(([name, strip]) => {
    scene.registerHeroStrip(`hero${capitalize(name)}`, strip);
  });
}

export function playHeroAnimation(scene, name, { loop = true, lockMs = 0 } = {}) {
  if (!scene.player || scene.player.animationState === name) return;

  const strip = scene.heroStrips[name];
  const frameKeys = scene.heroAnimationKeys[name];
  if (!strip || !frameKeys) return;

  setFrameAnimation({
    sprite: scene.player,
    state: name,
    frameKeys,
    fps: strip.fps,
    time: scene.time.now,
    loop,
    displayWidth: scene.player.gameDisplayWidth,
    displayHeight: scene.player.gameDisplayHeight,
  });

  if (lockMs > 0) {
    scene.playerAnimationLockedUntil = scene.time.now + lockMs;
  }
}

