import { GAME_RULES } from "../../config/gameBalance";
import { getEnemyDisplaySize, isBossEnemyType } from "./enemyHelpers";

export function createEnemy(scene, enemyData, { summoned = false } = {}, config) {
  const displaySize = scene.getEnemyDisplaySize(enemyData.type);
  const enemy = scene.physics.add
    .image(enemyData.x, enemyData.y, config.enemyFrameKeys[enemyData.type])
    .setDisplaySize(displaySize.width, displaySize.height)
    .setTint(enemyData.tint)
    .setDepth(isBossEnemyType(enemyData.type) || enemyData.type === "matriarchSoul" ? 10 : 9);

  enemy.body.setSize(displaySize.bodyWidth, displaySize.bodyHeight, true);
  enemy.type = enemyData.type;
  const isBossEnemy = isBossEnemyType(enemyData.type);
  const bossBaseMultiplier = isBossEnemy ? 2 : 1;
  const bossCurseMultiplier = isBossEnemy ? scene.getBossCurseMultiplier() : 1;
  const campaignHealthMultiplier = scene.getCampaignEnemyHealthMultiplier();
  const challengeHealthMultiplier = scene.challengeActive ? scene.challengeHealthMultiplier : 1;
  enemy.health = enemyData.health * bossBaseMultiplier * bossCurseMultiplier * campaignHealthMultiplier * challengeHealthMultiplier;
  enemy.maxHealth = enemy.health;
  if (isBossEnemy && scene.activeCurses.includes("Boss HP +25%")) {
    scene.activeCurses.splice(scene.activeCurses.indexOf("Boss HP +25%"), 1);
  }
  enemy.isAlive = true;
  enemy.isReviving = false;
  enemy.isSummoned = summoned || enemyData.isSummoned || false;
  enemy.speed = enemyData.speed * scene.getCampaignEnemySpeedMultiplier() * (scene.challengeActive ? scene.challengeSpeedMultiplier : 1);
  enemy.aiStyle = enemyData.aiStyle ?? "cautious";
  enemy.desiredRange = enemyData.desiredRange ?? 70;
  enemy.retreatHealthRatio = enemyData.retreatHealthRatio ?? 0.35;
  enemy.retreatChance = enemyData.retreatChance ?? 0.35;
  enemy.lungeChance = enemyData.lungeChance ?? 0;
  enemy.superAttackChance = enemyData.superAttackChance ?? 0.25;
  enemy.blockChance = enemyData.blockChance ?? 0;
  enemy.chargeCooldown = enemyData.chargeCooldown ?? 20000;
  enemy.projectileCooldown = enemyData.projectileCooldown ?? 1800;
  enemy.superProjectileCooldown = enemyData.superProjectileCooldown ?? 4400;
  enemy.lastProjectileAt = 0;
  enemy.lastSuperProjectileAt = 0;
  enemy.aiMode = "idle";
  enemy.aiModeUntil = 0;
  enemy.nextAiDecisionAt = 0;
  enemy.strafeDirection = Math.random() > 0.5 ? 1 : -1;
  enemy.nextLungeAt = 0;
  enemy.slowedUntil = 0;
  enemy.slowAmount = 0;
  enemy.contactDamage = GAME_RULES.enemyHitDamage;
  enemy.damageCooldown = enemyData.damageCooldown;
  enemy.lastDamageAt = 0;
  enemy.baseTint = enemyData.tint;
  enemy.animationSet = config.animationKeys[enemyData.type];
  enemy.stripSet = config.enemyStrips[enemyData.type];
  enemy.frameKeys = enemy.animationSet.idle;
  enemy.animationFps = enemy.stripSet.idle.fps;
  if (enemy.type === "hellGolem") {
    enemy.frameKeys = [enemy.animationSet.idle[0]];
    enemy.animationFps = 1;
  }
  enemy.animationFrame = 0;
  enemy.animationState = "idle";
  enemy.loopAnimation = true;
  enemy.animationStartedAt = 0;
  enemy.gameDisplayWidth = displaySize.width;
  enemy.gameDisplayHeight = displaySize.height;
  enemy.hasRevived = enemyData.hasRevived ?? false;
  enemy.canRevive = enemyData.canRevive ?? (!enemy.isSummoned && Boolean(enemy.animationSet.revive));
  enemy.reviveChance = enemyData.reviveChance ?? (
    enemy.type === "boss" ? 1 : config.skeletonReviveChance
  );
  enemy.phase = enemy.type === "infernalBoss" ? 1 : 0;
  enemy.phaseTwoTriggered = false;
  enemy.frostIceTriggered = false;
  enemy.frostFrozen = false;
  enemy.sourceBoss = enemyData.sourceBoss ?? null;

  scene.enemyGroup.add(enemy);
  enemy.setActive(true).setVisible(true);
  scene.aliveEnemies += 1;
  return enemy;
}

export { getEnemyDisplaySize };
