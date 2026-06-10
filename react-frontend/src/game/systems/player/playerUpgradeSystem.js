export function enableProjectileAttack(scene) {
  scene.hasProjectileAttack = true;
  if (scene.heroId === "nox") {
    scene.hasNoxVoidBarrage = true;
    scene.stats.skillCooldown *= 0.92;
  }
  if (scene.heroId === "riven") {
    scene.hasRivenEmberBlade = true;
    scene.stats.attackCooldown *= 0.94;
  }
  scene.updateUi();
}

