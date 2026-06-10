import * as Phaser from "phaser";

export function getPlayerAimAngle(scene) {
  const pointer = scene.input.activePointer;
  return Phaser.Math.Angle.Between(scene.player.x, scene.player.y, pointer.worldX, pointer.worldY);
}
