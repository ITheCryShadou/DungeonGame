export function applyCardSynergy(scene, card) {
  if (!card?.build) return;
  const counterByBuild = {
    fire: "fireCards",
    blueHeart: "blueHeartCards",
    crit: "critCards",
    poison: "poisonCards",
    ice: "iceCards",
  };
  const counter = counterByBuild[card.build];
  if (!counter) return;

  scene.stats[counter] += 1;

  if (card.build === "fire") {
    if (scene.stats.fireCards >= 3 && !scene.stats.ashExplosion) {
      scene.stats.ashExplosion = true;
      scene.showFloatingText(scene.player.x, scene.player.y - 62, "ASH EXPLOSION", "#ff8a3d", 18);
    }
    if (scene.stats.fireCards >= 5 && !scene.stats.infernoChain) {
      scene.stats.infernoChain = true;
      scene.showFloatingText(scene.player.x, scene.player.y - 62, "INFERNO CHAIN", "#ff5f3d", 18);
    }
  }

  if (card.build === "blueHeart") {
    if (scene.stats.blueHeartCards >= 3 && !scene.stats.shieldPulse) {
      scene.stats.shieldPulse = true;
      scene.showFloatingText(scene.player.x, scene.player.y - 62, "SHIELD PULSE", "#78d8ff", 18);
    }
    if (scene.stats.blueHeartCards >= 5 && !scene.stats.azureBarrier) {
      scene.stats.azureBarrier = true;
      scene.showFloatingText(scene.player.x, scene.player.y - 62, "AZURE BARRIER", "#67bfff", 18);
    }
  }

  if (card.build === "crit") {
    if (scene.stats.critCards >= 3 && !scene.stats.killerTempo) {
      scene.stats.killerTempo = true;
      scene.showFloatingText(scene.player.x, scene.player.y - 62, "KILLER TEMPO", "#ffd36b", 18);
    }
    if (scene.stats.critCards >= 5 && !scene.stats.perfectStrike) {
      scene.stats.perfectStrike = true;
      scene.showFloatingText(scene.player.x, scene.player.y - 62, "PERFECT STRIKE", "#fff2df", 18);
    }
  }

  if (card.build === "poison") {
    if (scene.stats.poisonCards >= 3 && !scene.stats.spreadingPlague) {
      scene.stats.spreadingPlague = true;
      scene.showFloatingText(scene.player.x, scene.player.y - 62, "SPREADING PLAGUE", "#75f08a", 18);
    }
    if (scene.stats.poisonCards >= 5 && !scene.stats.blackVenom) {
      scene.stats.blackVenom = true;
      scene.showFloatingText(scene.player.x, scene.player.y - 62, "BLACK VENOM", "#55d16a", 18);
    }
  }

  if (card.build === "ice") {
    if (scene.stats.iceCards >= 3 && !scene.stats.deepChill) {
      scene.stats.deepChill = true;
      scene.showFloatingText(scene.player.x, scene.player.y - 62, "DEEP CHILL", "#9ee7ff", 18);
    }
    if (scene.stats.iceCards >= 5 && !scene.stats.frozenShatter) {
      scene.stats.frozenShatter = true;
      scene.showFloatingText(scene.player.x, scene.player.y - 62, "FROZEN SHATTER", "#c7efff", 18);
    }
  }

  scene.applyMixedIceSynergies();
}

export function applyMixedIceSynergies(scene) {
  if ((scene.stats.iceCards ?? 0) <= 0) return;
  const unlock = (key, label, color = "#9ee7ff") => {
    if (scene.stats[key]) return;
    scene.stats[key] = true;
    scene.showFloatingText(scene.player.x, scene.player.y - 84, label, color, 16);
  };

  if ((scene.stats.critCards ?? 0) > 0) unlock("shatterCritical", "SHATTER CRITICAL", "#ffd36b");
  if ((scene.stats.blueHeartCards ?? 0) > 0) unlock("crystalBarrier", "CRYSTAL BARRIER", "#78d8ff");
  if ((scene.stats.fireCards ?? 0) > 0) unlock("steamBurst", "STEAM BURST", "#ffcf8a");
  if ((scene.stats.poisonCards ?? 0) > 0) unlock("numbingVenom", "NUMBING VENOM", "#75f08a");
  if (scene.stats.crystalStep || scene.stats.infernalDash) unlock("frozenAfterimage", "FROZEN AFTERIMAGE", "#c7efff");
}
