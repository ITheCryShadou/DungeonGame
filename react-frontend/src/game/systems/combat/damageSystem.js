import { GAME_RULES } from "../../config/gameBalance";
import { getIncomingDamage, shouldAvoidDamage } from "./dodgeSystem";

export function applyPlayerDamage(scene, damage, sourceEnemy = null) {
  const incomingDamage = getIncomingDamage(damage, GAME_RULES.enemyHitDamage);
  if (shouldAvoidDamage(scene, sourceEnemy)) {
    scene.showFloatingText(scene.player.x, scene.player.y - 66, "DODGE", "#f5f0ff", 18);
    scene.updateUi();
    return;
  }

  const tempAbsorb = Math.min(scene.tempHearts, incomingDamage);
  scene.tempHearts = Math.max(0, scene.tempHearts - tempAbsorb);
  let remainingDamage = incomingDamage - tempAbsorb;
  if (tempAbsorb > 0 && scene.stats.shieldEcho) {
    scene.createShieldEcho();
  }
  if (tempAbsorb > 0 && scene.stats.crystalBarrier) {
    scene.createFrostNova(scene.player.x, scene.player.y, 0.22);
  }

  const greenAbsorb = Math.min(scene.greenHearts, remainingDamage);
  scene.greenHearts = Math.max(0, scene.greenHearts - greenAbsorb);
  remainingDamage -= greenAbsorb;
  if (greenAbsorb > 0) {
    scene.poisonAroundPlayer(sourceEnemy);
  }

  scene.hearts = Math.max(0, scene.hearts - remainingDamage);
  scene.tryFrozenGuard();
}
