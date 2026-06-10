import { applyPlayerDamage as applyPlayerDamageSystem } from "../../systems/combat/damageSystem";
import { GAME_RULES } from "../../config/gameBalance";
import { getContactAttackAnimation } from "../enemies/enemyHelpers";

export function takeEnemyHit(scene, player, enemy, { hitInvulnerabilityMs }) {
  const now = scene.time.now;
  if (now < scene.invulnerableUntil || now - enemy.lastDamageAt < enemy.damageCooldown) return;

  enemy.lastDamageAt = now;
  const attackAnimation = getContactAttackAnimation(enemy);
  scene.playEnemyAnimation(enemy, attackAnimation, { loop: false, lockMs: attackAnimation === "superAttack" ? 520 : 360 });
  const contactDamage = (enemy.contactDamage ?? GAME_RULES.enemyHitDamage) *
    (enemy.poisonDamageReduction ? 1 - enemy.poisonDamageReduction : 1);
  scene.applyPlayerDamage(contactDamage, enemy);
  scene.invulnerableUntil = now + hitInvulnerabilityMs;
  scene.cameras.main.shake(
    attackAnimation === "superAttack" ? 230 : 130,
    attackAnimation === "superAttack" ? 0.009 : 0.006
  );
  player.setTint(0xff6b8a);
  scene.playHeroAnimation("damaged", { loop: false, lockMs: 320 });

  scene.time.delayedCall(180, () => player.clearTint());

  if (scene.hearts <= 0) {
    scene.endGame(`Defeated by ${scene.getEnemyName(enemy.type)}`);
  }
}

export function takeProjectileHit(scene, damage, time, { hitInvulnerabilityMs }) {
  if (time < scene.invulnerableUntil) return;

  scene.applyPlayerDamage(damage, { isProjectile: true });
  scene.invulnerableUntil = time + hitInvulnerabilityMs;
  scene.cameras.main.shake(120, 0.005);
  scene.player.setTint(0xff6b8a);
  scene.playHeroAnimation("damaged", { loop: false, lockMs: 320 });
  scene.time.delayedCall(180, () => scene.player?.clearTint());

  if (scene.hearts <= 0) {
    scene.endGame("Defeated by projectile");
  }
}

export function healPlayer(scene, amount) {
  scene.hearts = Math.min(scene.maxHearts, scene.hearts + amount);
  scene.updateUi();
}

export function addTempHearts(scene, amount) {
  scene.tempHearts = Math.max(0, scene.tempHearts + amount);
  scene.updateUi();
}

export function addGreenHearts(scene, amount) {
  scene.greenHearts = Math.max(0, scene.greenHearts + amount);
  scene.updateUi();
}

export function grantSpawnProtection(scene, { spawnInvulnerabilityMs }) {
  scene.invulnerableUntil = scene.time.now + spawnInvulnerabilityMs;
  scene.player?.setAlpha(0.62);
  scene.time.delayedCall(spawnInvulnerabilityMs, () => {
    if (!scene.player?.active || scene.isRolling) return;
    scene.player.setAlpha(1);
  });
}

export function applyPlayerDamage(scene, damage, sourceEnemy = null) {
  applyPlayerDamageSystem(scene, damage, sourceEnemy);
}

export function healToFull(scene) {
  scene.hearts = scene.maxHearts;
  scene.updateUi();
}

export function increaseMaxHearts(scene, amount) {
  scene.maxHearts += amount;
  scene.hearts = Math.min(scene.maxHearts, scene.hearts + amount);
  scene.updateUi();
}

export function decreaseMaxHearts(scene, amount) {
  scene.maxHearts = Math.max(1, scene.maxHearts - amount);
  scene.hearts = Math.min(scene.hearts, scene.maxHearts);
  scene.updateUi();
}
