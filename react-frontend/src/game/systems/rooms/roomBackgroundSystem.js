export function getRoomTexture(scene, specialRoomTextures) {
  const specialTexture = specialRoomTextures[scene.layout?.roomType];
  if (specialTexture) return specialTexture;

  if (scene.levelId === "hell") {
    return scene.isBossRoom() ? "hellBgBoss" : "hellBgCommon";
  }

  if (scene.levelId === "icy") {
    return scene.isBossRoom() ? "icyBgBoss" : "icyBgCommon";
  }

  return scene.isBossRoom() ? "roomBgBoss" : "roomBgCommon";
}

export function getTunnelTexture(scene, toBoss, specialTunnelTextures) {
  if (scene.tunnelHasTraveler) {
    return "travelerRoomBg";
  }

  const specialTunnel = specialTunnelTextures[scene.pendingTunnelRoomType];
  if (specialTunnel) return specialTunnel;

  if (scene.levelId === "hell") {
    return toBoss ? "hellTunnelBoss" : "hellTunnel";
  }

  if (scene.levelId === "icy") {
    return "icyTunnelBg";
  }

  return toBoss ? "roomTunnelBoss" : "roomTunnel";
}

