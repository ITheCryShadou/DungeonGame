import * as Phaser from "phaser";
import { GAME_RULES, TAROT_CARDS } from "../../config/gameBalance";
import { lowBiasedRandomInt, randomInt } from "../../utils/random";

export function dropChestLoot(scene, lootX, lootY, chestType = "dungeon") {
  if (!scene.pickupGroup) return;

  const lootPosition = scene.findSafePickupPosition(
    lootX + randomInt(-18, 18),
    lootY + randomInt(-6, 12)
  );
  const { x, y } = lootPosition;
  const lootRoll = Math.random();
  const pickup = scene.createChestLootByType(chestType, lootRoll, x, y);

  if (!pickup) return;

  pickup.pickupReadyAt = scene.time.now + 420;
  scene.tweens.add({
    targets: pickup,
    y: pickup.y - 10,
    duration: 180,
    yoyo: true,
    ease: "Sine.easeOut",
  });
}

export function createChestLootByType(scene, chestType, lootRoll, x, y) {
  if (chestType === "blue") {
    if (lootRoll < 0.62) return scene.spawnTempHeartPickup(x, y, 1);
    if (lootRoll < 0.82) return scene.spawnPotion(x, y);
    if (lootRoll < 0.96) return scene.spawnTempHeartPickup(x, y, 0.5);
    return scene.spawnTarotPickup(x, y + 4);
  }

  if (chestType === "golden") {
    if (lootRoll < 0.22) return scene.spawnCurrency("gem", 1, x, y);
    if (lootRoll < 0.30) return scene.spawnTarotPickup(x, y + 4);
    return scene.spawnCurrency("coin", scene.rollCoinAmount(12, 24), x, y);
  }

  if (chestType === "cursed") {
    scene.applyCursedChestPenalty();
    if (lootRoll < 0.18) return scene.spawnTarotPickup(x, y + 4);
    if (lootRoll < 0.46) return scene.spawnCurrency("gem", 1, x, y);
    return scene.spawnCurrency("coin", scene.rollCoinAmount(18, 30), x, y);
  }

  if (chestType === "wooden") {
    if (lootRoll < 0.025) return scene.spawnCurrency("gem", 1, x, y);
    if (lootRoll < 0.055) return scene.spawnTarotPickup(x, y + 4);
    if (lootRoll < 0.26) return scene.spawnPotion(x, y);
    return scene.spawnCurrency("coin", scene.rollCoinAmount(6, 14), x, y);
  }

  if (lootRoll < GAME_RULES.chestGemChance) return scene.spawnCurrency("gem", 1, x, y);
  if (lootRoll < GAME_RULES.chestGemChance + GAME_RULES.chestBlueHeartChance) {
    return scene.spawnTempHeartPickup(x, y, 0.5);
  }
  if (lootRoll < GAME_RULES.chestGemChance + GAME_RULES.chestBlueHeartChance + GAME_RULES.chestTarotChance) {
    return scene.spawnTarotPickup(x, y + 4);
  }
  if (lootRoll < GAME_RULES.chestGemChance + GAME_RULES.chestBlueHeartChance + GAME_RULES.chestTarotChance + GAME_RULES.chestPotionChance) {
    return scene.spawnPotion(x, y);
  }
  return scene.spawnCurrency("coin", scene.rollCoinAmount(), x, y);
}

export function rollCoinAmount(min = GAME_RULES.coinDropMin, max = GAME_RULES.coinDropMax) {
  return lowBiasedRandomInt(min, max);
}

export function spawnPotion(scene, x, y) {
  const potion = scene.add
    .image(x, y, "healPotion")
    .setDisplaySize(30, 44)
    .setDepth(9);
  potion.type = "potion";
  scene.pickupGroup.add(potion);
  return potion;
}

export function spawnTempHeartPickup(scene, x, y, amount = 0.5) {
  const heart = scene.add
    .image(x, y, "blueHeartHalf")
    .setDisplaySize(32, 32)
    .setDepth(9);
  heart.type = "temp-heart";
  heart.amount = amount;
  scene.pickupGroup.add(heart);
  return heart;
}

export function spawnGreenHeartPickup(scene, x, y, amount = 0.5) {
  const heart = scene.add
    .image(x, y, "greenHeartHalf")
    .setDisplaySize(32, 32)
    .setDepth(9);
  heart.type = "green-heart";
  heart.amount = amount;
  scene.pickupGroup.add(heart);
  return heart;
}

export function spawnTarotPickup(scene, x, y) {
  const tarot = scene.add
    .image(x, y, "tarotCard")
    .setDisplaySize(34, 54)
    .setDepth(9);
  tarot.type = "tarot";
  scene.pickupGroup.add(tarot);
  return tarot;
}

export function spawnPreparedTarotPickup(scene, x, y, rarities = []) {
  const eligible = scene.getEligibleTarotCards(TAROT_CARDS);
  const filtered = eligible.filter((card) => rarities.includes(card.rarity ?? "common"));
  const source = filtered.length ? filtered : eligible;
  const tarot = scene.spawnTarotPickup(x, y);
  if (source.length) {
    tarot.preparedCard = Phaser.Utils.Array.GetRandom(source);
  }
  return tarot;
}

export function spawnCurrency(scene, currency, amount, x, y) {
  const iconKey = currency === "gem" ? "gemIcon" : "coinIcon";
  const pickup = scene.add
    .image(x, y, iconKey)
    .setDisplaySize(currency === "gem" ? 30 : 28, currency === "gem" ? 30 : 28)
    .setDepth(9);
  pickup.type = "currency";
  pickup.currency = currency;
  pickup.amount = amount;
  scene.pickupGroup.add(pickup);

  const label = scene.add
    .text(x + 18, y - 22, currency === "gem" ? "+1" : `+${amount}`, {
      fontFamily: "monospace",
      fontSize: "14px",
      color: currency === "gem" ? "#d8b4fe" : "#ffd36b",
    })
    .setDepth(12)
    .setOrigin(0.5);
  scene.tweens.add({
    targets: label,
    y: label.y - 18,
    alpha: 0,
    duration: 900,
    onComplete: () => label.destroy(),
  });
  return pickup;
}

export function collectPickup(scene, pickup) {
  if (pickup.type === "potion") {
    scene.healPlayer(1 * (scene.stats.potionHealMultiplier ?? 1));
    pickup.destroy();
  }

  if (pickup.type === "currency") {
    if (pickup.currency === "gem") {
      scene.gems += pickup.amount;
    } else {
      scene.coins += pickup.amount;
    }
    pickup.destroy();
    scene.updateUi();
  }

  if (pickup.type === "tarot") {
    const preparedCard = pickup.preparedCard;
    pickup.destroy();
    if (preparedCard) {
      const card = scene.prepareCardForOffer(preparedCard);
      scene.applyChosenCard(card, "Challenge reward");
      scene.showCardRewardBanner({
        kicker: "Challenge tarot",
        title: card.title,
        description: card.description,
        color: card.rarity === "cursed" ? "#7c3cff" : card.rarity === "epic" ? "#c084fc" : "#78b7ff",
      });
    } else {
      scene.offerTarotChoice({ advanceFloor: false });
    }
  }

  if (pickup.type === "temp-heart") {
    scene.addTempHearts(pickup.amount ?? 0.5);
    pickup.destroy();
  }

  if (pickup.type === "green-heart") {
    scene.addGreenHearts(pickup.amount ?? 0.5);
    pickup.destroy();
  }
}
