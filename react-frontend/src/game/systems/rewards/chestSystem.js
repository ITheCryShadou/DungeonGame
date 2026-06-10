import { GAME_RULES } from "../../config/gameBalance";
import { configureChestOpening, finalizeOpenedChest } from "../../entities/chests/Chest";
import { createChestSprite } from "../../entities/chests/chestFactory";
import { weightedRandom } from "../../utils/random";

export function maybeSpawnChest(scene, chestTypes) {
  if (scene.isEventRoom()) return;
  if (scene.getAliveEnemyCount() > 0 || scene.chestSprite || scene.roomRewardResolved) return;

  scene.roomRewardResolved = true;
  scene.icyTrapGroup?.destroy?.(true);
  scene.icyTrapGroup = scene.add.group();
  if (Math.random() > GAME_RULES.chestSpawnChance) return;

  const chestType = scene.chooseChestType();
  scene.chestSprite = createChestSprite(scene, chestType, chestTypes);
}

export function chooseChestType() {
  return weightedRandom(GAME_RULES.chestTypeWeights ?? { dungeon: 1 }, "dungeon");
}

export function openChest(scene, chestTypes, chestStrips) {
  if (!scene.chestSprite || scene.chestSprite.isOpened) return;

  scene.chestSprite.isOpened = true;
  scene.roomRewardResolved = true;
  const lootX = scene.chestSprite.x;
  const lootY = scene.chestSprite.y + 58;
  const chestType = scene.chestSprite.chestType ?? "dungeon";
  const { chestConfig, chestStrip } = configureChestOpening(
    scene,
    scene.chestSprite,
    chestType,
    chestTypes,
    chestStrips
  );

  scene.time.delayedCall(520, () => {
    if (!scene.chestSprite?.active) return;
    finalizeOpenedChest(scene.chestSprite, chestConfig, chestStrip);
  });

  scene.time.delayedCall(260, () => scene.dropChestLoot(lootX, lootY, chestType));
}

export function applyCursedChestPenalty(scene) {
  scene.showFloatingText(scene.player.x, scene.player.y - 68, "CURSED CHEST", "#7c3cff", 18);
  if (Math.random() < 0.5) {
    scene.applyPlayerDamage(0.5);
    return;
  }
  scene.stats.dodgeChance = Math.max(-0.35, (scene.stats.dodgeChance ?? 0) - 0.08);
}
