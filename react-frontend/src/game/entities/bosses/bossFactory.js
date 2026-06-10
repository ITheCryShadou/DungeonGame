import { createEnemy } from "../enemies/enemyFactory";

export function createBoss(scene, bossData, options = {}, config) {
  return createEnemy(scene, bossData, options, config);
}
