import * as Phaser from "phaser";

export function spawnChallengeWave(scene, enemyTypes, fallbackVariant) {
  const bounds = scene.getWalkableBounds();
  const variant = scene.challengeVariant ?? fallbackVariant;
  const count = Math.max(1, 2 + scene.challengeWave + (variant.extraEnemies ?? 0));
  Array.from({ length: count }).forEach((_, index) => {
    const type = scene.levelId === "hell"
      ? Phaser.Utils.Array.GetRandom(["impLittle", "hellKiller", "hellGolem"])
      : Phaser.Utils.Array.GetRandom(["skeleton", "guard", "dog"]);
    const isElite = scene.shouldMakeChallengeEnemyElite(index);
    const angle = Phaser.Math.DegToRad((360 / Math.max(1, count)) * index + Phaser.Math.Between(-18, 18));
    const x = variant.aroundPlayer
      ? Phaser.Math.Clamp(scene.player.x + Math.cos(angle) * Phaser.Math.Between(170, 240), bounds.left + 40, bounds.right - 40)
      : Phaser.Math.Clamp(310 + index * 120, bounds.left + 40, bounds.right - 40);
    const y = variant.aroundPlayer
      ? Phaser.Math.Clamp(scene.player.y + Math.sin(angle) * Phaser.Math.Between(120, 210), bounds.top + 80, bounds.bottom - 130)
      : Phaser.Math.Between(bounds.top + 80, bounds.bottom - 130);
    scene.createChallengeSpawnIndicator(x, y, () => {
      if (!scene.challengeActive) return;
      const enemy = scene.spawnEnemy({
        ...enemyTypes[type],
        type,
        x,
        y,
        health: enemyTypes[type].health * (isElite ? 1.75 : 1),
        speed: enemyTypes[type].speed * (isElite ? 1.12 : 1),
        canRevive: false,
        isSummoned: true,
      }, { summoned: true });
      if (isElite) {
        enemy.challengeElite = true;
        enemy.setTint(0xf6a23a);
        scene.showFloatingText(enemy.x, enemy.y - 54, "ELITE", "#ffcf6b", 16);
      }
      enemy.setAlpha(0);
      scene.tweens.add({ targets: enemy, alpha: 1, duration: 240 });
    });
  });
}

export function shouldMakeChallengeEnemyElite(scene, index) {
  if (scene.challengeVariant?.eliteEnemies && index % 2 === 0) return true;
  if (
    scene.challengeDashRule?.id === "eliteKill" &&
    !scene.challengeEliteSpawned &&
    scene.challengeWave === 0 &&
    index === 0
  ) {
    scene.challengeEliteSpawned = true;
    return true;
  }
  return false;
}

export function createChallengeSpawnIndicator(scene, x, y, onSpawn) {
  const marker = scene.add
    .circle(x, y, 28, 0xffcf6b, 0.16)
    .setStrokeStyle(2, 0xffcf6b, 0.82)
    .setDepth(15);
  scene.tweens.add({
    targets: marker,
    scaleX: 1.42,
    scaleY: 1.42,
    alpha: 0.52,
    duration: 520,
    yoyo: true,
    repeat: 1,
    ease: "Sine.easeInOut",
  });
  scene.time.delayedCall(900, () => {
    marker.destroy();
    onSpawn?.();
  });
}

