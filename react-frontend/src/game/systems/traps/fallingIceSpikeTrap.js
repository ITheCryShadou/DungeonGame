import * as Phaser from "phaser";
import { GAME_RULES } from "../../config/gameBalance";

export function spawnFallingIceSpike(scene) {
  const bounds = scene.getWalkableBounds();
  const targetX = Phaser.Math.Clamp(scene.player.x + Phaser.Math.Between(-80, 80), bounds.left + 32, bounds.right - 32);
  const targetY = Phaser.Math.Clamp(scene.player.y + Phaser.Math.Between(-55, 55), bounds.top + 32, bounds.bottom - 32);
  const indicator = scene.add
    .image(targetX, targetY, "fallingIceSpikeIndicator0")
    .setDisplaySize(82, 52)
    .setDepth(7)
    .setAlpha(0.75);
  indicator.frameKeys = scene.getFrameKeys("fallingIceSpikeIndicator");
  indicator.animationFps = 12;
  indicator.animationFrame = -1;
  indicator.animationStartedAt = scene.time.now;
  indicator.loopAnimation = false;
  indicator.gameDisplayWidth = 82;
  indicator.gameDisplayHeight = 52;
  indicator.owner = "visual";
  indicator.expiresAt = scene.time.now + 860;
  scene.projectileGroup.add(indicator);

  scene.time.delayedCall(820, () => {
    if (!indicator?.active) return;
    indicator.destroy();
    const spike = scene.add
      .image(targetX, targetY - 120, "fallingIceSpikeTrap0")
      .setDisplaySize(56, 94)
      .setDepth(13);
    spike.owner = "enemy";
    spike.damage = GAME_RULES.enemyHitDamage;
    spike.expiresAt = scene.time.now + 900;
    spike.hazardRadius = 36;
    spike.frameKeys = scene.getFrameKeys("fallingIceSpikeTrap");
    spike.animationFps = 13;
    spike.animationFrame = -1;
    spike.animationStartedAt = scene.time.now;
    spike.loopAnimation = false;
    spike.gameDisplayWidth = 56;
    spike.gameDisplayHeight = 94;
    scene.projectileGroup.add(spike);
    scene.physics.add.existing(spike);
    spike.body.setVelocity(0, 420);
    scene.tweens.add({
      targets: spike,
      y: targetY,
      duration: 320,
      ease: "Cubic.easeIn",
      onComplete: () => spike.body?.setVelocity(0, 0),
    });
  });
}

export function updateFallingIceSpikeSpawner(scene, time) {
  if (scene.isBossRoom()) return;
  if (scene.getAliveEnemyCount() <= 0 || scene.roomRewardResolved || scene.chestSprite) return;
  if (!scene.nextFallingIceSpikeAt || time < scene.nextFallingIceSpikeAt) return;
  scene.nextFallingIceSpikeAt = time + Phaser.Math.Between(4600, 7800);
  scene.spawnFallingIceSpike();
}

