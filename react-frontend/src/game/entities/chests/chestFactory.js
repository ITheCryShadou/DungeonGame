import { getChestConfig, markChestClosed } from "./Chest";

export function createChestSprite(scene, chestType, chestTypes) {
  const { room } = scene.layout;
  const chestConfig = getChestConfig(chestTypes, chestType);
  const chest = scene.add
    .image(room.x + room.width / 2, room.y + room.height / 2, chestConfig.icon)
    .setDisplaySize(chestConfig.displayWidth, chestConfig.displayHeight)
    .setDepth(8);

  return markChestClosed(chest, chestType, chestConfig);
}
