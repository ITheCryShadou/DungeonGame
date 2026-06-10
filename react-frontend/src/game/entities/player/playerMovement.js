import * as Phaser from "phaser";
import { PLAYER_BASE_STATS } from "../../config/gameBalance";

export function movePlayer(scene, time) {
  const velocity = new Phaser.Math.Vector2(0, 0);

  if (scene.keys.left.isDown) velocity.x -= 1;
  if (scene.keys.right.isDown) velocity.x += 1;
  if (scene.keys.up.isDown) velocity.y -= 1;
  if (scene.keys.down.isDown) velocity.y += 1;

  velocity.normalize().scale(scene.isRolling ? scene.stats.rollSpeed : scene.stats.speed);
  scene.player.setVelocity(velocity.x, velocity.y);
  scene.keepPlayerInsideRoom();
  scene.resolveSpriteAgainstObstacles(scene.player, 24, 30);

  if (velocity.x !== 0) {
    scene.player.setFlipX(velocity.x < 0);
  }

  if (scene.playerAnimationLockedUntil > time) return;

  if (scene.isRolling) {
    scene.playHeroAnimation("dash", { loop: false });
  } else if (velocity.lengthSq() > 0) {
    scene.playHeroAnimation(scene.stats.speed > PLAYER_BASE_STATS.speed ? "fastWalk" : "walk");
  } else {
    scene.playHeroAnimation("idle");
  }
}

