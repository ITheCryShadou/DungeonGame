import { GAME_RULES } from "../../config/gameBalance";
import {
  applyProjectileConfig,
  configureAnimatedProjectile,
  launchProjectile,
} from "./Projectile";

export function createEnemyProjectile(scene, enemy, texture, angle, speed, size) {
  const projectile = scene.add
    .image(enemy.x, enemy.y - 6, texture)
    .setDisplaySize(size, size)
    .setDepth(11)
    .setRotation(angle);

  applyProjectileConfig(projectile, {
    damage: GAME_RULES.enemyHitDamage,
    owner: "enemy",
    expiresAt: scene.time.now + 2100,
  });

  return launchProjectile(scene, projectile, angle, speed);
}

export function createAnimatedEnemyProjectile(scene, enemy, texture, framePrefix, angle, speed, size, lifetime) {
  const projectile = scene.add
    .image(enemy.x, enemy.y - 8, texture)
    .setDisplaySize(size, size)
    .setDepth(12)
    .setRotation(angle);

  applyProjectileConfig(projectile, {
    owner: "enemy",
    damage: GAME_RULES.enemyHitDamage,
    expiresAt: scene.time.now + lifetime,
  });
  configureAnimatedProjectile(scene, projectile, framePrefix, size, 10);

  return launchProjectile(scene, projectile, angle, speed);
}

export function createBossProjectile(scene, enemy, time, angle) {
  const size = enemy.phase >= 3 ? 48 : 42;
  const projectile = scene.add
    .image(enemy.x, enemy.y - 10, "skeletonBossProjectile")
    .setDisplaySize(size, size)
    .setDepth(11)
    .setRotation(angle);

  applyProjectileConfig(projectile, {
    damage: GAME_RULES.enemyHitDamage,
    owner: "enemy",
    expiresAt: time + 2100,
  });

  const projectileSpeed = enemy.phase >= 2 ? 285 : 235;
  return launchProjectile(scene, projectile, angle, projectileSpeed);
}
