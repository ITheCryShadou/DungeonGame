export function createEnemies(scene) {
  scene.enemyGroup = scene.add.group();
  scene.pickupGroup = scene.add.group();
  scene.projectileGroup = scene.add.group();
  scene.icyTrapGroup = scene.add.group();
  scene.fireTrailGroup = scene.add.group();
  scene.aliveEnemies = 0;

  scene.layout.enemies.forEach((enemyData) => {
    scene.spawnEnemy(enemyData);
  });
  scene.createIcyRoomTraps();
}
