export function getChestConfig(chestTypes, chestType = "dungeon") {
  return chestTypes[chestType] ?? chestTypes.dungeon;
}

export function getChestStrip(chestStrips, chestType = "dungeon") {
  return chestStrips[chestType] ?? chestStrips.dungeon;
}

export function markChestClosed(chest, chestType, chestConfig) {
  chest.isOpened = false;
  chest.chestType = chestType;
  chest.frameKeys = null;
  chest.gameDisplayWidth = chestConfig.displayWidth;
  chest.gameDisplayHeight = chestConfig.displayHeight;
  return chest;
}

export function configureChestOpening(scene, chest, chestType, chestTypes, chestStrips) {
  const chestConfig = getChestConfig(chestTypes, chestType);
  const chestStrip = getChestStrip(chestStrips, chestType);

  chest.frameKeys = Array.from(
    { length: chestStrip.frames },
    (_, index) => `${chestConfig.openPrefix}${index}`
  );
  chest.animationFps = 16;
  chest.animationFrame = -1;
  chest.animationStartedAt = scene.time.now;
  chest.loopAnimation = false;
  chest.gameDisplayWidth = chestConfig.openWidth;
  chest.gameDisplayHeight = chestConfig.openHeight;
  chest.setTexture(`${chestConfig.openPrefix}0`).setDisplaySize(chestConfig.openWidth, chestConfig.openHeight);

  return { chestConfig, chestStrip };
}

export function finalizeOpenedChest(chest, chestConfig, chestStrip) {
  chest.frameKeys = null;
  chest.setTexture(chestConfig.finalTexture ?? `${chestConfig.openPrefix}${chestStrip.frames - 1}`)
    .setDisplaySize(chestConfig.openWidth, chestConfig.openHeight);
  return chest;
}
