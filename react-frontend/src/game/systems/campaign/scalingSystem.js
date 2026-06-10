export function getCampaignEnemyHealthMultiplier(scene) {
  if (scene.levelSequence.length <= 1) return 1;
  return 1 + scene.stageIndex * 0.32;
}

export function getCampaignEnemySpeedMultiplier(scene) {
  if (scene.levelSequence.length <= 1) return 1;
  return 1 + scene.stageIndex * 0.07;
}

export function getBossCurseMultiplier(scene) {
  return scene.activeCurses.reduce((multiplier, curse) => {
    if (curse === "Boss HP +20%") return multiplier * 1.2;
    if (curse === "Boss HP +25%") return multiplier * 1.25;
    return multiplier;
  }, 1);
}
