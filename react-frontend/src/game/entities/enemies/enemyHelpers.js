import * as Phaser from "phaser";
import { isEnemyAlive } from "./Enemy";
import { getHellEnemyDisplaySize, getHellEnemyName } from "./hellEnemies";
import { getIcyEnemyDisplaySize, getIcyEnemyName } from "./icyEnemies";
import { getSkeletonEnemyDisplaySize, getSkeletonEnemyName } from "./skeletonEnemies";

export function isBossEnemyType(type) {
  return type === "boss" || type === "infernalBoss" || type === "frostTyrant";
}

export function getEnemyDisplaySize(type) {
  return (
    getIcyEnemyDisplaySize(type) ??
    getHellEnemyDisplaySize(type) ??
    getSkeletonEnemyDisplaySize(type) ??
    { width: 54, height: 66, bodyWidth: 28, bodyHeight: 32 }
  );
}

export function getEnemyName(type) {
  return getIcyEnemyName(type) ?? getHellEnemyName(type) ?? getSkeletonEnemyName(type) ?? "enemy";
}

export function getActiveBoss(scene) {
  if (!scene.isBossRoom()) return null;
  return scene.getGroupChildren(scene.enemyGroup).find(
    (enemy) => isEnemyAlive(enemy) && isBossEnemyType(enemy.type)
  ) ?? null;
}

export function getEnemyDistanceToPlayer(scene, enemy) {
  return Phaser.Math.Distance.Between(enemy.x, enemy.y, scene.player.x, scene.player.y);
}

export function faceEnemyTowardPlayer(scene, enemy) {
  if (!enemy?.setFlipX || !scene.player) return;
  enemy.setFlipX(scene.player.x < enemy.x);
}

export function getContactAttackAnimation(enemy) {
  return enemy.animationSet?.superAttack && Math.random() < enemy.superAttackChance
    ? "superAttack"
    : "attack";
}
