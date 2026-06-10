import { setFrameAnimation } from "../../utils/animationHelpers";
import { getHellGolemAnimationFrameKeys } from "./hellEnemies";
import {
  getIcyMovementLoopKeys,
  shouldUseIcyMovementLoop,
} from "./icyEnemies";

function capitalize(value) {
  return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
}

export function registerAllEnemyStrips(scene, enemyStrips) {
  scene.registerEnemyStrips("enemySkeleton", enemyStrips.skeleton);
  scene.registerEnemyStrips("enemyGuard", enemyStrips.guard);
  scene.registerEnemyStrips("enemyDog", enemyStrips.dog);
  scene.registerEnemyStrips("enemyDogStrong", enemyStrips.dogStrong);
  scene.registerEnemyStrips("enemyHellGolem", enemyStrips.hellGolem);
  scene.registerEnemyStrips("enemyHellKiller", enemyStrips.hellKiller);
  scene.registerEnemyStrips("enemyHellTank", enemyStrips.hellTank);
  scene.registerEnemyStrips("enemyHellTitan", enemyStrips.hellTitan);
  scene.registerEnemyStrips("enemyImpLittle", enemyStrips.impLittle);
  scene.registerEnemyStrips("enemyFrostBladeWarrior", enemyStrips.frostBladeWarrior);
  scene.registerEnemyStrips("enemyFrostPriest", enemyStrips.frostPriest);
  scene.registerEnemyStrips("enemyFrozenKnight", enemyStrips.frozenKnight);
  scene.registerEnemyStrips("enemyIceAxeTitan", enemyStrips.iceAxeTitan);
  scene.registerEnemyStrips("enemyIcebladeMaster", enemyStrips.icebladeMaster);
  scene.registerEnemyStrips("enemyIceWraith", enemyStrips.iceWraith);
}

export function registerEnemyStrips(scene, prefix, strips, icyWalkAnchorProfiles) {
  Object.entries(strips).forEach(([name, strip]) => {
    const walkAnchorProfile = icyWalkAnchorProfiles[prefix];
    const shouldUseFootAnchor = Boolean(walkAnchorProfile);
    const shouldTrimAnchor = !shouldUseFootAnchor && prefix.startsWith("enemyMatriarch");
    scene.registerStrip(`${prefix}${capitalize(name)}`, {
      ...strip,
      anchorMode: shouldUseFootAnchor ? "foot" : shouldTrimAnchor ? "trim" : null,
      anchorProfile: walkAnchorProfile,
    });
  });
}

export function playEnemyAnimation(scene, enemy, name, { loop = true, lockMs = 0 } = {}, icyMovementLoopFrames) {
  if (!enemy || enemy.animationState === name || !enemy.animationSet?.[name]) return;

  const strip = enemy.stripSet[name];
  enemy.animationState = name;
  const hellGolemFrames = getHellGolemAnimationFrameKeys(enemy, name);
  if (hellGolemFrames) {
    enemy.frameKeys = hellGolemFrames.frameKeys;
    enemy.animationFps = hellGolemFrames.fps;
  } else if (shouldUseIcyMovementLoop(enemy, name, loop, icyMovementLoopFrames)) {
    enemy.frameKeys = getIcyMovementLoopKeys(enemy, name, icyMovementLoopFrames);
    enemy.animationFps = Math.max(6, Math.round(strip.fps * 0.92));
  } else {
    enemy.frameKeys = enemy.animationSet[name];
    enemy.animationFps = strip.fps;
  }
  setFrameAnimation({
    sprite: enemy,
    state: name,
    frameKeys: enemy.frameKeys,
    fps: enemy.animationFps,
    time: scene.time.now,
    loop,
    displayWidth: enemy.gameDisplayWidth,
    displayHeight: enemy.gameDisplayHeight,
  });

  if (lockMs > 0) {
    enemy.animationLockedUntil = scene.time.now + lockMs;
  }
}
