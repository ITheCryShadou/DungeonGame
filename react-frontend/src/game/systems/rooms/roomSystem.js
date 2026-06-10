import { GAME_RULES } from "../../config/gameBalance";
import { createRoomLayout } from "../dungeon/dungeonGenerator";

export function startRoom(scene) {
  scene.clearFloorObjects();
  if (scene.stats.shieldPulse && scene.tempHearts <= 0) {
    scene.addTempHearts(0.5);
    scene.showFloatingText(148, 252, "SHIELD PULSE", "#78d8ff", 18);
  }
  scene.layout = createRoomLayout({
    floor: scene.floor,
    room: scene.room,
    isBossRoom: scene.isBossRoom(),
    levelId: scene.levelId,
    roomType: scene.getCurrentRoomType(),
  });
  scene.drawRoom();
  scene.createPlayer();
  scene.createEnemies();
  scene.createExit();
  scene.createEventRoomChoices();
  scene.grantSpawnProtection();
  scene.updateUi();
}

export function getCurrentRoomType(scene) {
  if (scene.isBossRoom()) return "combat";
  return scene.floorPlan.roomTypes?.[scene.room - 1] ?? "combat";
}

export function getRoomTypeAt(scene, roomNumber) {
  if (scene.floor === GAME_RULES.floorsPerLevel && roomNumber === scene.floorPlan.roomCount) {
    return "combat";
  }
  return scene.floorPlan.roomTypes?.[roomNumber - 1] ?? "combat";
}

export function isEventRoom(scene) {
  return scene.layout?.roomType && scene.layout.roomType !== "combat";
}

export function clearFloorObjects(scene) {
  [
    scene.roomGraphics,
    scene.roomBackground,
    scene.wallGroup,
    scene.obstacleGroup,
    scene.enemyGroup,
    scene.pickupGroup,
    scene.projectileGroup,
    scene.icyTrapGroup,
    scene.fireTrailGroup,
    scene.chestSprite,
    scene.exitZone,
    scene.exitLabel,
    scene.tunnelLabel,
    scene.heartUiGroup,
    scene.tunnelExitZone,
    scene.tunnelExitLabel,
    scene.travelerSprite,
    scene.travelerCarpet,
    scene.shopHint,
    scene.eventChoiceGroup,
    scene.eventRoomTitle,
    scene.challengeTimerText,
    scene.player,
  ].forEach((item) => item?.destroy?.(true));
  scene.chestSprite = null;
  scene.tunnelLabel = null;
  scene.tunnelExitZone = null;
  scene.tunnelExitLabel = null;
  scene.travelerSprite = null;
  scene.travelerCarpet = null;
  scene.shopHint = null;
  scene.eventChoiceGroup = null;
  scene.eventRoomTitle = null;
  scene.eventExitRevealed = false;
  scene.challengeTimerText = null;
  scene.challengeActive = false;
  scene.challengeCompleted = false;
  scene.challengeVariant = null;
  scene.challengeSpeedMultiplier = 1;
  scene.challengeHealthMultiplier = 1;
  scene.challengeNextWaveAt = 0;
  scene.roomRewardResolved = false;
  scene.aliveEnemies = 0;
  scene.nextFallingIceSpikeAt = 0;
}

export function drawRoom(scene, obstacleTextures) {
  const { room, obstacles } = scene.layout;

  scene.roomGraphics = scene.add.graphics();
  scene.roomGraphics.fillStyle(0x161820, 1);
  scene.roomGraphics.fillRect(0, 0, scene.scale.width, scene.scale.height);
  scene.roomBackground = scene.add
    .image(
      room.x + room.width / 2,
      room.y + room.height / 2,
      scene.getRoomTexture()
    )
    .setDisplaySize(room.width, room.height)
    .setDepth(0);
  scene.roomGraphics.lineStyle(4, 0x8f6cff, 0.55);
  scene.roomGraphics.strokeRoundedRect(room.x, room.y, room.width, room.height, 12);

  scene.wallGroup = scene.add.group();
  scene.addWall(room.x + room.width / 2, room.y - 8, room.width, 20);
  scene.addWall(room.x + room.width / 2, room.y + room.height + 8, room.width, 20);
  scene.addWall(room.x - 8, room.y + room.height / 2, 20, room.height);
  scene.addWall(room.x + room.width + 8, room.y + room.height / 2, 20, room.height);

  scene.obstacleGroup = scene.add.group();
  obstacles.forEach((obstacle) => scene.addObstacle(obstacle, obstacleTextures));
}

export function addWall(scene, x, y, width, height) {
  const wall = scene.add.rectangle(x, y, width, height, 0x11131b, 0);
  scene.wallGroup.add(wall);
}

export function addObstacle(scene, obstacle, obstacleTextures) {
  const block = scene.add.image(
    obstacle.x,
    obstacle.y,
    obstacleTextures[obstacle.type] ?? "obstacleColumn"
  );
  block
    .setDisplaySize(obstacle.width, obstacle.height)
    .setDepth(4);
  block.collisionWidth = obstacle.width * 0.78;
  block.collisionHeight = obstacle.height * 0.58;
  scene.obstacleGroup.add(block);
}

