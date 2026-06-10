import * as Phaser from "phaser";
import { applyChallengeModifiers } from "./challengeModifiers";
import { grantChallengeReward } from "./challengeRewardSystem";

export function startChallengeRoom(scene, variant, fallbackVariants, dashRules) {
  if (scene.challengeActive || scene.challengeCompleted) return;
  const activeVariant = variant ?? Phaser.Utils.Array.GetRandom(fallbackVariants);
  scene.challengeActive = true;
  scene.challengeCompleted = false;
  applyChallengeModifiers(scene, activeVariant, dashRules);
  scene.challengeWave = 0;
  scene.challengeTotalWaves = activeVariant.waves ?? 3;
  scene.challengeEndsAt = scene.time.now + (activeVariant.timeLimit ?? 45000);
  scene.challengeNextWaveAt = scene.time.now;
  scene.challengeTimerText = scene.add
    .text(512, 116, `${activeVariant.title}: ${Math.ceil((activeVariant.timeLimit ?? 45000) / 1000)}s`, {
      fontFamily: "monospace",
      fontSize: "18px",
      color: "#ffcf6b",
      stroke: "#08090e",
      strokeThickness: 4,
    })
    .setOrigin(0.5)
    .setDepth(30);
}

export function updateChallengeRoom(scene, time) {
  if (!scene.challengeActive) return;

  const remaining = Math.max(0, Math.ceil((scene.challengeEndsAt - time) / 1000));
  const dashText = scene.getChallengeDashStatusText(time);
  scene.challengeTimerText?.setText(`${scene.challengeVariant?.title ?? "Challenge"}: ${remaining}s   ${dashText}`);

  if (time >= scene.challengeNextWaveAt && scene.challengeWave < scene.challengeTotalWaves) {
    scene.spawnChallengeWave();
    scene.challengeWave += 1;
    scene.challengeNextWaveAt = time + 8500;
  }

  const wavesDone = scene.challengeWave >= scene.challengeTotalWaves;
  if (wavesDone && scene.getAliveEnemyCount() <= 0) {
    scene.completeChallengeRoom();
    return;
  }

  if (time >= scene.challengeEndsAt) {
    scene.endGame("Failed the challenge room timer");
  }
}

export function completeChallengeRoom(scene) {
  scene.challengeActive = false;
  scene.challengeCompleted = true;
  scene.challengeTimerText?.setText("Challenge completed");
  scene.challengeDashRule = null;
  scene.challengeDashCharges = Infinity;
  scene.challengeDashDisabledUntil = 0;
  grantChallengeReward(scene);
  scene.revealEventExit({ announce: true });
  scene.showFloatingText(scene.player.x, scene.player.y - 72, "CHALLENGE COMPLETE", "#ffd36b", 18);
}

