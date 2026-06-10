export function registerBossStrips(scene, enemyStrips) {
  scene.registerEnemyStrips("enemyBoss", enemyStrips.boss);
  scene.registerEnemyStrips("enemyInfernalBoss", enemyStrips.infernalBoss);
  scene.registerEnemyStrips("enemyInfernalBossPhase2", enemyStrips.infernalBossPhase2);
  scene.registerEnemyStrips("enemyFrostTyrant", enemyStrips.frostTyrant);
  scene.registerEnemyStrips("enemyMatriarchSoul", enemyStrips.matriarchSoul);
}

export function playBossAnimation(scene, boss, name, options = {}) {
  return scene.playEnemyAnimation(boss, name, options);
}
