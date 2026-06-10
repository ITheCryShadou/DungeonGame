export function applyGenericCardUpgrade(scene, card, level) {
  if (card.build === "fire") {
    scene.stats.burnDamageMultiplier = (scene.stats.burnDamageMultiplier ?? 1) * 1.1;
  } else if (card.build === "blueHeart") {
    scene.addTempHearts(0.5);
  } else if (card.build === "crit") {
    scene.stats.critChance += 0.05;
  } else if (card.build === "poison") {
    scene.stats.poisonDamage = Math.max(scene.stats.poisonDamage ?? 0, scene.stats.attackDamage * 0.08) * 1.1;
  } else if (card.build === "ice") {
    scene.stats.chillChance = Math.min(0.6, (scene.stats.chillChance ?? 0) + 0.05);
    scene.stats.chillDuration = Math.max(scene.stats.chillDuration ?? 3000, 3400);
  } else if (card.rarity === "hero") {
    scene.stats.skillCooldown *= 0.92;
  } else if (card.rarity === "boss") {
    scene.stats.attackDamage *= 1.1;
  } else if (card.rarity === "cursed") {
    scene.stats.attackDamage *= 1.08;
  } else {
    scene.stats.attackDamage *= 1.05;
    scene.stats.speed *= 1.04;
  }

  scene.showFloatingText(scene.player.x, scene.player.y - 92, `UPGRADE ${scene.toRoman(level)}`, "#ffd36b", 16);
}
