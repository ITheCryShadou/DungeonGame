import * as Phaser from "phaser";
import { getIndexedFrameKeys } from "../../utils/animationHelpers";
import { GAME_RULES } from "../../config/gameBalance";

export function getIcyEnemyDisplaySize(type) {
  if (type === "frostTyrant") {
    return { width: 146, height: 136, bodyWidth: 62, bodyHeight: 58 };
  }

  if (type === "matriarchSoul") {
    return { width: 96, height: 126, bodyWidth: 46, bodyHeight: 54 };
  }

  if (type === "iceAxeTitan") {
    return { width: 86, height: 88, bodyWidth: 40, bodyHeight: 42 };
  }

  if (type === "frostPriest" || type === "iceWraith") {
    return { width: 66, height: 74, bodyWidth: 30, bodyHeight: 34 };
  }

  if (type === "frozenKnight") {
    return { width: 72, height: 76, bodyWidth: 34, bodyHeight: 36 };
  }

  if (type === "icebladeMaster") {
    return { width: 62, height: 72, bodyWidth: 28, bodyHeight: 34 };
  }

  if (type === "frostBladeWarrior") {
    return { width: 64, height: 72, bodyWidth: 30, bodyHeight: 34 };
  }

  return null;
}

export function getIcyEnemyName(type) {
  const names = {
    frostBladeWarrior: "Frost Blade Warrior",
    frostPriest: "Frost Priest",
    frozenKnight: "Frozen Knight",
    iceAxeTitan: "Ice Axe Titan",
    icebladeMaster: "Iceblade Master",
    iceWraith: "Ice Wraith",
    frostTyrant: "Frost Tyrant",
    matriarchSoul: "Matriarch Soul",
  };
  return names[type] ?? null;
}

export function shouldUseIcyMovementLoop(enemy, name, loop, movementLoopFrames) {
  return Boolean(
    loop &&
    (name === "walk" || name === "run") &&
    movementLoopFrames[enemy.type] &&
    enemy.type !== "frostTyrant"
  );
}

export function getIcyMovementLoopKeys(enemy, name, movementLoopFrames) {
  const sourceKeys = enemy.animationSet[name] ?? [];
  return getIndexedFrameKeys(sourceKeys, movementLoopFrames[enemy.type]);
}

export function shouldFrozenKnightBlock(enemy, { isBurn, isPoison, isBleed, isFrost }) {
  return Boolean(
    enemy.type === "frozenKnight" &&
    !isBurn &&
    !isPoison &&
    !isBleed &&
    !isFrost &&
    Math.random() < (enemy.blockChance ?? 0)
  );
}

export function createIceWraithNova(scene, x, y) {
  const nova = scene.add
    .image(x, y, "iceWraithNova0")
    .setDisplaySize(138, 92)
    .setDepth(13);
  nova.owner = "enemy";
  nova.damage = GAME_RULES.enemyHitDamage;
  nova.expiresAt = scene.time.now + 760;
  nova.hazardRadius = 74;
  nova.frameKeys = scene.getFrameKeys("iceWraithNova");
  nova.animationFps = 12;
  nova.animationFrame = -1;
  nova.animationStartedAt = scene.time.now;
  nova.loopAnimation = false;
  nova.gameDisplayWidth = 138;
  nova.gameDisplayHeight = 92;
  scene.projectileGroup.add(nova);
}
