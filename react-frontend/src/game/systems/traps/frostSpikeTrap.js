import * as Phaser from "phaser";
import { GAME_RULES } from "../../config/gameBalance";

export function createFrostSpikeTrap(scene, trap) {
  const marker = scene.add
    .image(trap.x, trap.y, "frostSpikeTrap0")
    .setDisplaySize(70, 34)
    .setDepth(6)
    .setAlpha(0.88);
  marker.trapType = "frostSpike";
  marker.radius = trap.radius ?? 34;
  marker.frameKeys = scene.getFrameKeys("frostSpikeTrap");
  marker.animationFps = 10;
  marker.animationFrame = -1;
  marker.animationStartedAt = scene.time.now + Phaser.Math.Between(0, 400);
  marker.loopAnimation = true;
  marker.gameDisplayWidth = 70;
  marker.gameDisplayHeight = 34;
  marker.triggeredAt = 0;
  scene.icyTrapGroup.add(marker);
  return marker;
}

export function updateFrostSpikeTrap(scene, trap, time) {
  if (!trap?.active) return;
  scene.animateSprite(trap, time);
  const distance = Phaser.Math.Distance.Between(scene.player.x, scene.player.y, trap.x, trap.y);
  if (distance < (trap.radius ?? 34) && time - (trap.triggeredAt ?? 0) > 1200) {
    trap.triggeredAt = time;
    scene.takeProjectileHit(GAME_RULES.enemyHitDamage, time);
    scene.showFloatingText(trap.x, trap.y - 28, "FROST SPIKES", "#9ee7ff", 14);
  }
}

