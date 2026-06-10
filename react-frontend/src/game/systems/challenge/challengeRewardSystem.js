export function grantChallengeReward(scene) {
  scene.spawnCurrency("coin", scene.rollCoinAmount(18, 28), 512, 280);
  if (scene.challengeVariant?.reward === "rare") {
    scene.spawnPreparedTarotPickup(560, 282, ["rare"]);
  } else if (scene.challengeVariant?.reward === "insane") {
    if (Math.random() < 0.5) {
      scene.spawnPreparedTarotPickup(560, 282, ["epic"]);
    } else {
      scene.spawnPreparedTarotPickup(560, 282, ["cursed"]);
    }
  } else if (Math.random() < 0.18) {
    scene.spawnTarotPickup(560, 282);
  }
}

