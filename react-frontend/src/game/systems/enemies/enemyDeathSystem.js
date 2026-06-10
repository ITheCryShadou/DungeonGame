import * as Phaser from "phaser";
import { ENEMY_TYPES } from "../../config/gameBalance";
import { createIceWraithNova } from "../../entities/enemies/icyEnemies";
import { getSkeletonReviveHealthRatio } from "../../entities/enemies/skeletonEnemies";
import { isBossType } from "../../entities/bosses/bossHelpers";
import { summonSkeletonBossMinions } from "../../entities/bosses/SkeletonBoss";
import { grantBossKillRewards } from "../bosses/bossRewardSystem";

export function tryReviveEnemy(scene, enemy, reviveRatios) {
  if (!enemy.canRevive || enemy.hasRevived || !enemy.animationSet?.revive) return false;
  if (Math.random() > enemy.reviveChance) return false;

  enemy.hasRevived = true;
  enemy.isReviving = true;
  enemy.setVelocity(0, 0);
  enemy.body.enable = false;
  enemy.clearTint();
  enemy.setTint(enemy.type === "boss" ? 0xffc16b : 0xdad1ff);

  const reviveFrames = enemy.animationSet.revive.length;
  const reviveFps = enemy.stripSet.revive.fps;
  const reviveDuration = Math.ceil((reviveFrames / reviveFps) * 1000) + 120;
  scene.playEnemyAnimation(enemy, "revive", { loop: false, lockMs: reviveDuration });

  scene.time.delayedCall(reviveDuration, () => {
    if (!enemy?.active) return;

    enemy.isReviving = false;
    enemy.body.enable = true;
    enemy.health = enemy.maxHealth * getSkeletonReviveHealthRatio(enemy, reviveRatios);
    enemy.aiMode = "idle";
    enemy.nextAiDecisionAt = scene.time.now + 250;
    enemy.clearTint();
    enemy.setTint(enemy.baseTint || 0xffffff);
    scene.playEnemyAnimation(enemy, "idle");

    if (enemy.type === "boss") {
      summonSkeletonBossMinions(scene, enemy);
    }
  });

  return true;
}

export function summonBossSkeletons(scene, boss) {
  const commonCount = Phaser.Math.Between(2, 4);
  const guardCount = Phaser.Math.Between(0, 1);
  const summonTypes = [
    ...Array.from({ length: commonCount }, () => "skeleton"),
    ...Array.from({ length: guardCount }, () => "guard"),
  ];
  const bounds = scene.getWalkableBounds();

  summonTypes.forEach((type, index) => {
    const angle = (Math.PI * 2 * index) / summonTypes.length;
    const distance = type === "guard" ? 110 : 82;
    const x = Phaser.Math.Clamp(
      boss.x + Math.cos(angle) * distance,
      bounds.left + 34,
      bounds.right - 34
    );
    const y = Phaser.Math.Clamp(
      boss.y + Math.sin(angle) * distance,
      bounds.top + 40,
      bounds.bottom - 40
    );
    const summoned = scene.spawnEnemy({
      ...ENEMY_TYPES[type],
      type,
      x,
      y,
      canRevive: false,
      isSummoned: true,
    }, { summoned: true });
    summoned.setAlpha(0);
    scene.tweens.add({
      targets: summoned,
      alpha: 1,
      duration: 260,
    });
  });
}

export function defeatEnemy(scene, enemy) {
  enemy.isAlive = false;
  scene.enemyKills += 1;
  if (enemy.challengeElite) {
    scene.challengeEliteKilled = true;
    scene.showFloatingText(enemy.x, enemy.y - 64, "DASH RESTORED", "#ffcf6b", 16);
  }
  scene.aliveEnemies = Math.max(0, scene.getAliveEnemyCount() - 1);
  enemy.setVelocity(0, 0);
  enemy.body.enable = false;
  const deathFrames = enemy.animationSet?.death?.length ?? 1;
  const deathFps = enemy.stripSet?.death?.fps ?? 8;
  const deathDuration = Math.ceil((deathFrames / deathFps) * 1000);
  scene.playEnemyAnimation(enemy, "death", { loop: false, lockMs: 5000 });
  if (enemy.isBurning) {
    if (scene.stats.ashExplosion) scene.createAshExplosion(enemy);
    if (scene.stats.infernoChain) scene.spreadBurn(enemy);
  }
  if (enemy.isPoisoned) {
    if (scene.stats.plagueCloud) scene.createPoisonCloud(enemy.x, enemy.y);
    if (scene.stats.spreadingPlague) scene.spreadPoison(enemy);
    if (scene.stats.toxicReward && Math.random() < 0.15) scene.addGreenHearts(0.5);
  }
  if (enemy.isChilled && scene.stats.frozenShatter) {
    scene.releaseIceShards(enemy, 5);
    scene.getGroupChildren(scene.enemyGroup).forEach((target) => {
      if (!target?.isAlive || target === enemy || target.isReviving) return;
      const distance = Phaser.Math.Distance.Between(enemy.x, enemy.y, target.x, target.y);
      if (distance < 130) scene.applyEnemyChill(target);
    });
  }
  if (enemy.type === "iceWraith") {
    scene.createIceWraithNova(enemy.x, enemy.y);
  }
  if (enemy.type === "matriarchSoul") {
    scene.time.delayedCall(deathDuration + 80, () => scene.unfreezeFrostTyrant(enemy.sourceBoss));
  }
  if (isBossType(enemy.type)) {
    grantBossKillRewards(scene, enemy);
  }
  if (
    scene.stats.blueHeartDropChance > 0 &&
    Math.random() < scene.stats.blueHeartDropChance
  ) {
    scene.spawnTempHeartPickup(enemy.x, enemy.y + 26, 0.5);
  }
  if (scene.stats.blueHeartCards >= 5 && scene.tempHearts > 0) {
    scene.addTempHearts(0.5);
  }
  if (scene.stats.quickHandsKillTempo) {
    scene.applyQuickHandsTempo();
  }
  scene.time.delayedCall(deathDuration + 40, () => {
    if (!enemy?.active || !enemy.frameKeys?.length) return;
    enemy.animationFrame = enemy.frameKeys.length - 1;
    enemy.setTexture(enemy.frameKeys[enemy.animationFrame]);
    enemy.setDisplaySize(enemy.gameDisplayWidth, enemy.gameDisplayHeight);
    enemy.frameKeys = null;
  });
  scene.time.delayedCall(5000, () => enemy.destroy());
}

export { createIceWraithNova };
