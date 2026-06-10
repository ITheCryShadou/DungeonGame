import * as Phaser from "phaser";
import { ENEMY_TYPES } from "../../config/gameBalance";

export function enterFrostTyrantIceShell(scene, enemy) {
  enemy.frostIceTriggered = true;
  enemy.frostFrozen = true;
  enemy.invulnerable = true;
  enemy.setVelocity(0, 0);
  scene.playBossAnimation(enemy, "intoIceStart", { loop: false, lockMs: 900 });
  scene.showFloatingText(enemy.x, enemy.y - 82, "ICE SHELL", "#9ee7ff", 20);
  scene.cameras.main.shake(360, 0.006);

  scene.time.delayedCall(780, () => {
    if (!enemy?.active || !enemy.isAlive) return;
    scene.playBossAnimation(enemy, "intoIceEnd", { loop: false, lockMs: 999999 });
    scene.spawnMatriarchSoul(enemy);
  });
}

export function spawnMatriarchSoul(scene, sourceBoss, soulHealth) {
  const bounds = scene.getWalkableBounds();
  const x = Phaser.Math.Between(bounds.left + 120, bounds.right - 120);
  const y = Phaser.Math.Between(bounds.top + 120, bounds.bottom - 120);
  const soul = scene.spawnEnemy({
    ...ENEMY_TYPES.matriarchSoul,
    type: "matriarchSoul",
    x,
    y,
    health: soulHealth,
    sourceBoss,
    canRevive: false,
    isSummoned: true,
  }, { summoned: true });
  soul.sourceBoss = sourceBoss;
  soul.setAlpha(0);
  scene.playBossAnimation(soul, "appear", { loop: false, lockMs: 920 });
  scene.tweens.add({ targets: soul, alpha: 1, duration: 380 });
}

export function unfreezeFrostTyrant(scene, boss) {
  if (!boss?.active || !boss.isAlive) return;
  boss.frostFrozen = false;
  boss.invulnerable = false;
  boss.animationLockedUntil = 0;
  boss.clearTint();
  boss.setTint(boss.baseTint || 0xffffff);
  scene.playBossAnimation(boss, "walk");
  scene.showFloatingText(boss.x, boss.y - 82, "SHELL BROKEN", "#f5f0ff", 18);
  scene.cameras.main.shake(420, 0.007);
}
