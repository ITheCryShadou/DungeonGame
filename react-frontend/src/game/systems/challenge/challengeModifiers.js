import * as Phaser from "phaser";

export function rollChallengeVariant(variants, dashRules) {
  return {
    ...Phaser.Utils.Array.GetRandom(variants),
    dashRule: Phaser.Utils.Array.GetRandom(dashRules),
  };
}

export function applyChallengeModifiers(scene, variant, dashRules) {
  scene.challengeVariant = variant;
  scene.challengeDashRule = variant.dashRule ?? Phaser.Utils.Array.GetRandom(dashRules);
  scene.challengeDashCharges = scene.challengeDashRule.id === "oneCharge" ? 1 : Infinity;
  scene.challengeDashDisabledUntil = scene.challengeDashRule.id === "disabledStart" ? scene.time.now + 25_000 : 0;
  scene.challengeEliteKilled = scene.challengeDashRule.id !== "eliteKill";
  scene.challengeEliteSpawned = false;
  scene.challengeSpeedMultiplier = variant.speedMultiplier ?? 1.35;
  scene.challengeHealthMultiplier = variant.healthMultiplier ?? 1;
}

export function getChallengeDashBlockReason(scene, time) {
  if (!scene.challengeActive || !scene.challengeDashRule) return "";
  if (scene.challengeDashRule.id === "oneCharge" && scene.challengeDashCharges <= 0) return "NO CHARGE";
  if (scene.challengeDashRule.id === "disabledStart" && time < scene.challengeDashDisabledUntil) return "DASH LOCKED";
  if (scene.challengeDashRule.id === "eliteKill" && !scene.challengeEliteKilled) return "KILL ELITE";
  return "";
}

export function getChallengeDashStatusText(scene, time) {
  if (!scene.challengeDashRule) return "Dash ready";
  if (scene.challengeDashRule.id === "cooldown2") return "Dash cd x2";
  if (scene.challengeDashRule.id === "oneCharge") return `Dash charges ${scene.challengeDashCharges}`;
  if (scene.challengeDashRule.id === "disabledStart") {
    const remaining = Math.max(0, Math.ceil((scene.challengeDashDisabledUntil - time) / 1000));
    return remaining > 0 ? `Dash in ${remaining}s` : "Dash ready";
  }
  if (scene.challengeDashRule.id === "eliteKill") return scene.challengeEliteKilled ? "Dash ready" : "Dash: kill elite";
  return scene.challengeDashRule.label;
}

