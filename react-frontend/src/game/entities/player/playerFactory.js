export function createPlayer(scene) {
  const { start } = scene.layout;
  scene.player = scene.physics.add
    .image(start.x, start.y, "heroIdle0")
    .setDisplaySize(64, 72)
    .setDepth(10);
  scene.player.body.setSize(28, 34, true);
  scene.player.frameKeys = scene.heroAnimationKeys.idle;
  scene.player.animationFps = scene.heroStrips.idle.fps;
  scene.player.animationFrame = 0;
  scene.player.animationStartedAt = 0;
  scene.player.loopAnimation = true;
  scene.player.animationState = "idle";
  scene.player.gameDisplayWidth = 64;
  scene.player.gameDisplayHeight = 72;
}

