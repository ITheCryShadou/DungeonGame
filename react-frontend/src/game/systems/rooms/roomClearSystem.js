export function canLeaveRoom(scene) {
  if (scene.getAliveEnemyCount() > 0) return false;
  if (scene.challengeActive && !scene.challengeCompleted) return false;
  return true;
}

