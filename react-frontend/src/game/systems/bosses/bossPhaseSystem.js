import { getBossHealthPercent } from "../../entities/bosses/Boss";
import { transitionInfernalBossToPhaseTwo } from "../../entities/bosses/InfernalBoss";
import { enterFrostTyrantIceShell } from "../../entities/bosses/FrostTyrant";

export function triggerInfernalPhaseTwo(scene, enemy, config) {
  return transitionInfernalBossToPhaseTwo(scene, enemy, config);
}

export function triggerFrostTyrantIce(scene, enemy) {
  return enterFrostTyrantIceShell(scene, enemy);
}

export function tryTriggerBossPhaseFromDamage(scene, enemy, thresholds) {
  const healthPercent = getBossHealthPercent(enemy);
  if (
    enemy.type === "frostTyrant" &&
    !enemy.frostIceTriggered &&
    healthPercent <= thresholds.frostTyrantIce &&
    enemy.health > 0
  ) {
    scene.triggerFrostTyrantIce(enemy);
    return true;
  }
  if (
    enemy.type === "infernalBoss" &&
    !enemy.phaseTwoTriggered &&
    healthPercent <= thresholds.infernalPhaseTwo
  ) {
    scene.triggerInfernalPhaseTwo(enemy);
    return true;
  }
  return false;
}
