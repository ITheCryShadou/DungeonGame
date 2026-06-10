import * as Phaser from "phaser";
import { getBossHealthPercent, isBossAlive } from "./Boss";

export function isBossType(type) {
  return type === "boss" || type === "infernalBoss" || type === "frostTyrant";
}

export function isBossOrBossMinionType(type) {
  return isBossType(type) || type === "matriarchSoul";
}

export function getActiveBoss(scene) {
  if (!scene.isBossRoom()) return null;
  return scene.getGroupChildren(scene.enemyGroup).find(
    (enemy) => isBossAlive(enemy) && isBossType(enemy.type)
  ) ?? null;
}

export function getBossDistanceToPlayer(scene, boss) {
  return Phaser.Math.Distance.Between(boss.x, boss.y, scene.player.x, scene.player.y);
}

export function faceBossTowardPlayer(scene, boss) {
  if (!boss?.setFlipX || !scene.player) return;
  boss.setFlipX(scene.player.x < boss.x);
}

export { getBossHealthPercent };
