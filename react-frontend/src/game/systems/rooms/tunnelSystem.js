import * as Phaser from "phaser";
import { GAME_RULES } from "../../config/gameBalance";

export function enterTunnel(scene, { toBoss, roomType = "combat", onComplete }) {
  scene.isTransitioning = true;
  scene.tunnelHasTraveler = scene.shouldSpawnTraveler(toBoss);
  scene.pendingTunnelRoomType = roomType;
  scene.pendingTunnelComplete = onComplete;
  scene.clearFloorObjects();
  const tunnelTexture = scene.getTunnelTexture(toBoss);

  scene.roomBackground = scene.add
    .image(scene.scale.width / 2, scene.scale.height / 2, tunnelTexture)
    .setDisplaySize(GAME_RULES.roomWidth, GAME_RULES.roomHeight)
    .setDepth(0);

  scene.tunnelLabel = scene.add
    .text(512, 72, toBoss ? "Boss tunnel" : "Tunnel", {
      fontFamily: "monospace",
      fontSize: "22px",
      color: "#f5f0ff",
    })
    .setOrigin(0.5)
    .setDepth(30);

  if (toBoss) {
    scene.showBossWarning();
  }

  scene.createTunnelPlayer();

  if (scene.tunnelHasTraveler) {
    scene.createTravelerShop();
    scene.createTunnelExit();
    return;
  }

  scene.tweens.add({
    targets: scene.player,
    x: 870,
    duration: 1250,
    ease: "Sine.easeInOut",
    onComplete: () => scene.finishTunnel(),
  });
}

export function createTunnelPlayer(scene) {
  scene.player = scene.physics.add
    .image(150, 330, "heroWalk0")
    .setDisplaySize(64, 72)
    .setDepth(10);
  scene.player.body.setSize(28, 34, true);
  scene.player.frameKeys = scene.heroAnimationKeys.walk;
  scene.player.animationFps = scene.heroStrips.walk.fps;
  scene.player.animationFrame = -1;
  scene.player.animationStartedAt = scene.time.now;
  scene.player.loopAnimation = true;
  scene.player.gameDisplayWidth = 64;
  scene.player.gameDisplayHeight = 72;
}

export function updateTunnel(scene, time) {
  if (!scene.tunnelHasTraveler) {
    scene.updateSpriteAnimations(time);
    return;
  }

  if (!scene.isShopOpen) {
    scene.moveTunnelPlayer(time);
    scene.checkTravelerInteraction();
    scene.checkTunnelExit();
  }

  scene.updateSpriteAnimations(time);
  scene.updateUi();
}

export function moveTunnelPlayer(scene, time) {
  const velocity = new Phaser.Math.Vector2(0, 0);

  if (scene.keys.left.isDown) velocity.x -= 1;
  if (scene.keys.right.isDown) velocity.x += 1;
  if (scene.keys.up.isDown) velocity.y -= 1;
  if (scene.keys.down.isDown) velocity.y += 1;

  velocity.normalize().scale(scene.stats.speed);
  scene.player.setVelocity(velocity.x, velocity.y);
  scene.player.x = Phaser.Math.Clamp(scene.player.x, 108, 906);
  scene.player.y = Phaser.Math.Clamp(scene.player.y, 220, 472);

  if (velocity.x !== 0) {
    scene.player.setFlipX(velocity.x < 0);
  }

  if (velocity.lengthSq() > 0) {
    scene.playHeroAnimation("walk");
  } else {
    scene.playHeroAnimation("idle");
  }
}

export function checkTunnelExit(scene) {
  if (!scene.tunnelExitZone) return;
  const bounds = scene.tunnelExitZone.getBounds();
  const isTouching =
    scene.player.x > bounds.left &&
    scene.player.x < bounds.right &&
    scene.player.y > bounds.top &&
    scene.player.y < bounds.bottom;

  if (isTouching) {
    scene.finishTunnel();
  }
}

export function finishTunnel(scene) {
  scene.isTransitioning = false;
  const onComplete = scene.pendingTunnelComplete;
  scene.pendingTunnelComplete = null;
  scene.pendingTunnelRoomType = null;
  scene.clearFloorObjects();
  onComplete?.();
}

