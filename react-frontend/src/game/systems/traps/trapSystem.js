import * as Phaser from "phaser";
import { createFrostSpikeTrap, updateFrostSpikeTrap } from "./frostSpikeTrap";
import { updateFallingIceSpikeSpawner } from "./fallingIceSpikeTrap";

export function createIcyRoomTraps(scene) {
  if (scene.levelId !== "icy" || scene.isBossRoom() || scene.isEventRoom()) return;
  (scene.layout.traps ?? []).forEach((trap) => {
    createFrostSpikeTrap(scene, trap);
  });
  scene.nextFallingIceSpikeAt = scene.time.now + Phaser.Math.Between(3200, 6500);
}

export function updateIcyHazards(scene, time) {
  if (scene.levelId !== "icy" || scene.isEventRoom()) return;

  scene.getGroupChildren(scene.icyTrapGroup).forEach((trap) => {
    updateFrostSpikeTrap(scene, trap, time);
  });

  updateFallingIceSpikeSpawner(scene, time);
}

