import * as Phaser from "phaser";
import { GAME_RULES } from "../../config/gameBalance";

export function transitionInfernalBossToPhaseTwo(scene, enemy, config) {
  enemy.phaseTwoTriggered = true;
  enemy.phase = 2;
  enemy.health = enemy.maxHealth * config.phaseTwoHeal;
  enemy.speed *= 1.16;
  enemy.projectileCooldown *= 0.72;
  enemy.superProjectileCooldown *= 0.66;
  enemy.animationSet = config.animationKeys.infernalBossPhase2;
  enemy.stripSet = config.enemyStrips.infernalBossPhase2;
  enemy.frameKeys = enemy.animationSet.superAttack;
  enemy.animationFps = enemy.stripSet.superAttack.fps;
  enemy.animationFrame = -1;
  enemy.animationStartedAt = scene.time.now;
  enemy.animationState = "superAttack";
  enemy.loopAnimation = false;
  enemy.animationLockedUntil = scene.time.now + 1250;
  enemy.setTexture(enemy.frameKeys[0]);
  enemy.setTint(0xff7a2f);
  scene.cameras.main.shake(520, 0.01);
  scene.time.delayedCall(520, () => {
    if (!enemy?.active || !enemy.isAlive) return;
    scene.spawnInfernalTornado(enemy);
  });
  scene.time.delayedCall(1250, () => {
    if (!enemy?.active || !enemy.isAlive) return;
    enemy.clearTint();
    enemy.setTint(enemy.baseTint || 0xffffff);
    scene.playBossAnimation(enemy, "idle");
  });
}

export function createInfernalTornado(scene, enemy, maxTornadoes) {
  const currentTornadoes = scene.getGroupChildren(scene.projectileGroup).filter((item) => item?.isTornado).length;
  if (currentTornadoes >= maxTornadoes) return;

  const bounds = scene.getWalkableBounds();
  const x = Phaser.Math.Between(bounds.left + 90, bounds.right - 90);
  const y = Phaser.Math.Between(bounds.top + 90, bounds.bottom - 90);
  const angle = Phaser.Math.FloatBetween(0, Math.PI * 2);
  const speed = Phaser.Math.Between(80, 135);
  const lifetime = Phaser.Math.Between(5000, 10000);
  const tornado = scene.add
    .image(x, y, "infernalTornadoStart0")
    .setDisplaySize(86, 106)
    .setDepth(13);
  tornado.owner = "enemy";
  tornado.damage = GAME_RULES.enemyHitDamage;
  tornado.expiresAt = scene.time.now + lifetime;
  tornado.isTornado = true;
  tornado.hazardRadius = 42;
  tornado.frameKeys = scene.getFrameKeys("infernalTornadoStart");
  tornado.animationFps = 10;
  tornado.animationFrame = -1;
  tornado.animationStartedAt = scene.time.now;
  tornado.loopAnimation = true;
  tornado.gameDisplayWidth = 86;
  tornado.gameDisplayHeight = 106;
  scene.projectileGroup.add(tornado);
  scene.physics.add.existing(tornado);
  tornado.body.setVelocity(Math.cos(angle) * speed, Math.sin(angle) * speed);

  scene.time.delayedCall(620, () => {
    if (!tornado?.active) return;
    tornado.frameKeys = scene.getFrameKeys(Math.random() > 0.5 ? "infernalTornadoContinue" : "infernalTornadoLoop");
    tornado.animationStartedAt = scene.time.now;
    tornado.animationFrame = -1;
  });
  scene.time.delayedCall(lifetime - 650, () => {
    if (!tornado?.active) return;
    tornado.frameKeys = scene.getFrameKeys("infernalTornadoEnd");
    tornado.animationStartedAt = scene.time.now;
    tornado.animationFrame = -1;
    tornado.body.setVelocity(tornado.body.velocity.x * 0.35, tornado.body.velocity.y * 0.35);
  });
}
