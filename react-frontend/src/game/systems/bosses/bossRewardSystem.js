export function grantBossKillRewards(scene, enemy) {
  scene.spawnCurrency("gem", 1, enemy.x, enemy.y + 42);
  scene.bossRewards.push("Gem x1");
  scene.grantBossCard();
}
