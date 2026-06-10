import * as Phaser from "phaser";
import { GAME_RULES } from "../../config/gameBalance";
import {
  createAnimatedEnemyProjectile,
  createBossProjectile,
  createEnemyProjectile,
} from "../../entities/projectiles/projectileFactory";

export function fireEnemyProjectile(scene, enemy, texture, angle, speed, size) {
  return createEnemyProjectile(scene, enemy, texture, angle, speed, size);
}

export function fireAnimatedEnemyProjectile(scene, enemy, texture, framePrefix, angle, speed, size, lifetime) {
  return createAnimatedEnemyProjectile(scene, enemy, texture, framePrefix, angle, speed, size, lifetime);
}

export function fireBossProjectile(scene, enemy, time, angle) {
  return createBossProjectile(scene, enemy, time, angle);
}

export function updateProjectiles(scene, time) {
  scene.getGroupChildren(scene.projectileGroup).forEach((projectile) => {
    if (!projectile?.active) return;
    scene.animateSprite(projectile, time);

    if (projectile.isTornado) {
      scene.updateInfernalTornado(projectile);
    }

    if (projectile.owner === "visual") {
      if (time > projectile.expiresAt) {
        projectile.destroy();
      }
      return;
    }

    if (projectile.owner === "hero") {
      updateHeroProjectile(scene, projectile);
    } else {
      const distance = Phaser.Math.Distance.Between(
        projectile.x,
        projectile.y,
        scene.player.x,
        scene.player.y
      );

      if (distance < (projectile.hazardRadius ?? 30)) {
        if (!projectile.isTornado) {
          createEnemyProjectileImpact(scene, projectile);
          projectile.destroy();
        }
        scene.takeProjectileHit(projectile.damage ?? GAME_RULES.enemyHitDamage, time);
        return;
      }
    }

    if (time > projectile.expiresAt) {
      createEnemyProjectileImpact(scene, projectile);
      projectile.destroy();
    }
  });
}

export function createEnemyProjectileImpact(scene, projectile) {
  if (!projectile?.impactPrefix) return null;
  const impact = scene.add
    .image(projectile.x, projectile.y, `${projectile.impactPrefix}0`)
    .setDisplaySize(projectile.impactSize ?? 62, projectile.impactSize ?? 62)
    .setDepth(13);
  impact.frameKeys = scene.getFrameKeys(projectile.impactPrefix);
  impact.animationFps = 12;
  impact.animationFrame = -1;
  impact.animationStartedAt = scene.time.now;
  impact.loopAnimation = false;
  impact.gameDisplayWidth = projectile.impactSize ?? 62;
  impact.gameDisplayHeight = projectile.impactSize ?? 62;
  scene.projectileGroup.add(impact);
  impact.owner = "visual";
  impact.expiresAt = scene.time.now + 520;
  return impact;
}

export function updateHeroProjectile(scene, projectile) {
  scene.getGroupChildren(scene.enemyGroup).forEach((enemy) => {
    if (!projectile.active || !enemy?.isAlive || enemy.isReviving) return;

    const distance = Phaser.Math.Distance.Between(projectile.x, projectile.y, enemy.x, enemy.y);
    if (distance < (projectile.hazardRadius ?? enemy.displayWidth * 0.28 + 14)) {
      scene.createHeroHitImpact(projectile.x, projectile.y, projectile.rotation, projectile.hitEffect);
      scene.damageEnemy(enemy, projectile.damage ?? scene.stats.attackDamage, {
        canBurn: true,
        canCrit: true,
        canSlow: true,
      });
      if (projectile.appliesChill) scene.applyEnemyChill(enemy);
      projectile.destroy();
    }
  });
}

export function fireHeroProjectile(scene, angle, { noxStrips, rivenStrips }) {
  const isRiven = scene.heroId === "riven";
  const isNox = scene.heroId === "nox";
  const projectile = isRiven
    ? scene.createRivenAnimatedEffect({
      prefix: "rivenDagger",
      strip: rivenStrips.dagger,
      x: scene.player.x + Math.cos(angle) * 38,
      y: scene.player.y + Math.sin(angle) * 38,
      width: 58,
      height: 34,
      rotation: angle,
      depth: 11,
    })
    : scene.createNoxAnimatedEffect({
      prefix: "noxMagicBolt",
      strip: noxStrips.magicBolt,
      x: scene.player.x + Math.cos(angle) * 34,
      y: scene.player.y + Math.sin(angle) * 34,
      width: 58,
      height: 34,
      rotation: angle,
      depth: 11,
    });
  projectile.owner = "hero";
  projectile.hitEffect = isRiven ? "riven" : "nox";
  projectile.damage = scene.stats.attackDamage * (
    isNox && scene.hasNoxVoidBarrage ? 1.08 : isRiven && scene.hasRivenEmberBlade ? 1.1 : 1
  );
  projectile.expiresAt = scene.time.now + (isNox ? 1150 : 1000);
  scene.projectileGroup.add(projectile);
  scene.physics.add.existing(projectile);
  projectile.body.setVelocity(Math.cos(angle) * (isNox ? 500 : 520), Math.sin(angle) * (isNox ? 500 : 520));

  if (isNox && scene.hasNoxVoidBarrage && scene.attackCounter % 3 === 0) {
    const crit = scene.createNoxAnimatedEffect({
      prefix: "noxArcaneOrb",
      strip: noxStrips.arcaneOrb,
      x: scene.player.x + Math.cos(angle) * 30,
      y: scene.player.y + Math.sin(angle) * 30,
      width: 66,
      height: 44,
      rotation: angle,
      depth: 12,
    });
    crit.owner = "hero";
    crit.hitEffect = "nox";
    crit.damage = scene.stats.attackDamage * 1.35;
    crit.expiresAt = scene.time.now + 1050;
    scene.projectileGroup.add(crit);
    scene.physics.add.existing(crit);
    crit.body.setVelocity(Math.cos(angle) * 560, Math.sin(angle) * 560);
  }

  if (isRiven && scene.hasRivenEmberBlade && scene.attackCounter % 3 === 0) {
    const blade = scene.createRivenAnimatedEffect({
      prefix: "rivenLargeSlash",
      strip: rivenStrips.largeSlash,
      x: scene.player.x + Math.cos(angle) * 46,
      y: scene.player.y + Math.sin(angle) * 46,
      width: 92,
      height: 54,
      rotation: angle,
      depth: 12,
    });
    blade.owner = "hero";
    blade.hitEffect = "riven";
    blade.damage = scene.stats.attackDamage * 1.45;
    blade.hazardRadius = 54;
    blade.expiresAt = scene.time.now + 900;
    scene.projectileGroup.add(blade);
    scene.physics.add.existing(blade);
    blade.body.setVelocity(Math.cos(angle) * 480, Math.sin(angle) * 480);
  }

  return projectile;
}
