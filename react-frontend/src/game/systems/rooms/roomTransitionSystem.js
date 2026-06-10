import * as Phaser from "phaser";
import { GAME_RULES } from "../../config/gameBalance";
import { createFloorPlan } from "../dungeon/dungeonGenerator";
import { canLeaveRoom } from "./roomClearSystem";

export function createExit(scene) {
  const { exit } = scene.layout;
  const isEventRoom = scene.isEventRoom();
  scene.exitReadyAt = scene.time.now + (isEventRoom ? 5000 : 0);
  scene.eventExitRevealed = !isEventRoom;
  scene.exitZone = scene.add.rectangle(exit.x, exit.y, exit.width, exit.height, 0x6b4bb5, 0.35);
  scene.exitZone.setStrokeStyle(2, 0xa988ff, 0.9);
  scene.exitLabel = scene.add
    .text(exit.x, exit.y - (isEventRoom ? 42 : 7), "EXIT", {
      fontFamily: "monospace",
      fontSize: "14px",
      color: "#d9ccff",
    })
    .setOrigin(0.5)
    .setDepth(12);

  if (isEventRoom) {
    const exitFloor = scene.floor;
    const exitRoom = scene.room;
    scene.exitZone.setVisible(false);
    scene.exitLabel.setVisible(false);
    scene.time.delayedCall(5000, () => {
      if (scene.floor === exitFloor && scene.room === exitRoom) {
        scene.revealEventExit();
      }
    });
  }
}

export function revealEventExit(scene, { announce = false } = {}) {
  if (!scene.isEventRoom() || scene.eventExitRevealed || !scene.exitZone || !scene.exitLabel) return;

  scene.eventExitRevealed = true;
  scene.exitReadyAt = scene.time.now + 250;
  scene.exitZone.setVisible(true).setAlpha(0);
  scene.exitLabel.setVisible(true).setAlpha(0);
  scene.tweens.add({
    targets: [scene.exitZone, scene.exitLabel],
    alpha: 1,
    duration: 260,
    ease: "Sine.easeOut",
  });

  if (announce) {
    scene.showFloatingText(scene.player.x, scene.player.y - 82, "EXIT OPEN", "#d9ccff", 16);
  }
}

export function checkPlayerInteractions(scene) {
  scene.getGroupChildren(scene.enemyGroup).forEach((enemy) => {
    if (!enemy?.isAlive || enemy.isReviving) return;

    const distance = Phaser.Math.Distance.Between(
      scene.player.x,
      scene.player.y,
      enemy.x,
      enemy.y
    );

    if (distance < 42) {
      scene.takeEnemyHit(scene.player, enemy);
    }
  });

  scene.getGroupChildren(scene.pickupGroup).forEach((pickup) => {
    if (!pickup?.active) return;
    if (scene.time.now < (pickup.pickupReadyAt ?? 0)) return;

    const distance = Phaser.Math.Distance.Between(
      scene.player.x,
      scene.player.y,
      pickup.x,
      pickup.y
    );

    if (distance < 32) {
      scene.collectPickup(scene.player, pickup);
    }
  });

  scene.getGroupChildren(scene.eventChoiceGroup).forEach((marker) => {
    if (!marker?.choice || marker.choiceResolved) return;
    const distance = Phaser.Math.Distance.Between(scene.player.x, scene.player.y, marker.x, marker.y);
    if (distance < (marker.choiceRadius ?? 68)) {
      scene.resolveEventChoice(marker);
    }
  });

  if (scene.chestSprite && !scene.chestSprite.isOpened) {
    const chestDistance = Phaser.Math.Distance.Between(
      scene.player.x,
      scene.player.y,
      scene.chestSprite.x,
      scene.chestSprite.y
    );

    if (chestDistance < 58) {
      scene.openChest();
    }
  }

  if (scene.exitZone && scene.isPlayerTouchingExit()) {
    scene.tryLeaveFloor();
  }
}

export function isPlayerTouchingExit(scene) {
  if (scene.time.now < (scene.exitReadyAt ?? 0)) return false;
  if (scene.isEventRoom() && !scene.eventExitRevealed) return false;
  const bounds = scene.exitZone.getBounds();

  return (
    scene.player.x > bounds.left &&
    scene.player.x < bounds.right &&
    scene.player.y > bounds.top &&
    scene.player.y < bounds.bottom
  );
}

export function tryLeaveFloor(scene) {
  if (!canLeaveRoom(scene)) return;

  if (scene.isBossRoom()) {
    scene.winRun();
    return;
  }

  if (scene.room < scene.floorPlan.roomCount) {
    const nextRoom = scene.room + 1;
    const toBoss = scene.floor === GAME_RULES.floorsPerLevel && nextRoom === scene.floorPlan.roomCount;
    const nextRoomType = scene.getRoomTypeAt(nextRoom);
    scene.enterTunnel({
      toBoss,
      roomType: nextRoomType,
      onComplete: () => {
        scene.room = nextRoom;
        scene.startRoom();
      },
    });
    return;
  }

  scene.enterTunnel({
    toBoss: false,
    roomType: "combat",
    onComplete: () => {
      scene.floor += 1;
      scene.room = 1;
      scene.floorPlan = createFloorPlan(scene.floor);
      scene.startRoom();
    },
  });
}
