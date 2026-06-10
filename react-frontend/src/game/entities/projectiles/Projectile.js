export function applyProjectileConfig(projectile, config = {}) {
  Object.entries(config).forEach(([key, value]) => {
    projectile[key] = value;
  });
  return projectile;
}

export function launchProjectile(scene, projectile, angle, speed) {
  scene.projectileGroup.add(projectile);
  scene.physics.add.existing(projectile);
  projectile.body.setVelocity(Math.cos(angle) * speed, Math.sin(angle) * speed);
  return projectile;
}

export function configureAnimatedProjectile(scene, projectile, framePrefix, size, fps = 10) {
  projectile.frameKeys = scene.getFrameKeys(framePrefix);
  projectile.animationFps = fps;
  projectile.animationFrame = -1;
  projectile.animationStartedAt = scene.time.now;
  projectile.loopAnimation = true;
  projectile.gameDisplayWidth = size;
  projectile.gameDisplayHeight = size;
  return projectile;
}
