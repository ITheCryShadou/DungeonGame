import * as Phaser from "phaser";
import {
  GAME_RULES,
  HERO_SHOP_SKILLS,
  SHOP_CARDS,
  TAROT_CARDS,
} from "../../config/gameBalance";

export function createTravelerShop(scene, travelerKeys) {
  scene.purchasedShopCards = new Set();
  scene.shopCards = [];
  scene.shopCoinRerollCost = GAME_RULES.shopCoinRerollBaseCost;
  scene.shopGemRerollUsed = false;
  const travelerKey = Phaser.Utils.Array.GetRandom(travelerKeys);
  scene.travelerCarpet = scene.add
    .image(520, 388, "travelerCarpet")
    .setDisplaySize(210, 118)
    .setDepth(4);
  scene.travelerSprite = scene.add
    .image(520, 306, travelerKey)
    .setDisplaySize(96, 126)
    .setDepth(9);
  scene.shopHint = scene.add
    .text(520, 214, "Press F to trade", {
      fontFamily: "monospace",
      fontSize: "15px",
      color: "#f2eaff",
      backgroundColor: "rgba(15, 13, 24, 0.72)",
      padding: { x: 8, y: 5 },
    })
    .setOrigin(0.5)
    .setDepth(30);
}

export function checkTravelerInteraction(scene) {
  if (!scene.travelerSprite || !Phaser.Input.Keyboard.JustDown(scene.keys.interact)) return;

  const distance = Phaser.Math.Distance.Between(
    scene.player.x,
    scene.player.y,
    scene.travelerSprite.x,
    scene.travelerSprite.y
  );

  if (distance > 96) return;

  scene.openShop();
}

export function openShop(scene) {
  if (scene.isShopOpen) return;

  scene.isShopOpen = true;
  scene.player.setVelocity(0, 0);
  if (!scene.shopCards.length) {
    scene.shopCards = scene.rollTravelerCards();
  }
  scene.callbacks.onShopOffer?.(
    scene.shopCards,
    (cardId) => scene.buyShopCard(cardId),
    () => scene.closeShop(),
    {
      rerollCoins: () => scene.rerollShop("coin"),
      rerollGem: () => scene.rerollShop("gem"),
      getState: () => ({
        coinCost: scene.shopCoinRerollCost,
        gemCost: GAME_RULES.shopGemRerollCost,
        gemUsed: scene.shopGemRerollUsed,
      }),
    }
  );
}

export function rollTravelerCards(scene, { improved = false } = {}) {
  const heroSkill = HERO_SHOP_SKILLS[scene.heroId] ?? HERO_SHOP_SKILLS.nox;
  const heroCard = scene.prepareCardForOffer({
    ...heroSkill,
    theme: "hero",
    rarity: "hero",
    apply: (stats, activeScene) => activeScene.enableProjectileAttack(),
  });
  const pool = [
    ...SHOP_CARDS,
    {
      ...heroSkill,
      theme: "hero",
      rarity: "hero",
      apply: (stats, activeScene) => activeScene.enableProjectileAttack(),
    },
    ...scene.getEligibleTarotCards(TAROT_CARDS),
  ].filter((card) => !scene.purchasedShopCards.has(card.id));

  const cards = [heroCard];
  while (cards.length < 3 && pool.length > 0) {
    const card = scene.pickWeightedTravelerCard(pool, cards, improved);
    if (!card) break;
    cards.push(scene.prepareCardForOffer(card));
  }
  return cards;
}

export function pickWeightedTravelerCard(scene, pool, selectedCards, improved = false) {
  const selectedIds = new Set(selectedCards.map((card) => card.id));
  const candidates = pool.filter((card) => !selectedIds.has(card.id));
  if (candidates.length === 0) return null;

  const rarityWeight = {
    common: improved ? 0.35 : 0.65,
    rare: improved ? 3.4 : 2.4,
    epic: improved ? 4.4 : 3.2,
    cursed: improved ? 3.2 : 2.1,
    hero: improved ? 4.8 : 3.8,
    boss: 0,
  };
  const weighted = candidates.map((card) => {
    const currentLevel = scene.cardLevels[card.id] ?? 0;
    const levelBonus = currentLevel > 0 ? 2 + currentLevel * (improved ? 2.2 : 1.4) : 0;
    return {
      card,
      weight: (rarityWeight[card.rarity ?? "common"] ?? 1) + levelBonus,
    };
  });
  const totalWeight = weighted.reduce((sum, item) => sum + item.weight, 0);
  let roll = Math.random() * totalWeight;
  for (const item of weighted) {
    roll -= item.weight;
    if (roll <= 0) return item.card;
  }
  return weighted[weighted.length - 1]?.card ?? null;
}

export function closeShop(scene) {
  scene.isShopOpen = false;
}

export function buyShopCard(scene, cardId) {
  const card = scene.shopCards.find((item) => item.id === cardId);
  if (!card || scene.purchasedShopCards.has(cardId) || scene.gems < GAME_RULES.shopCardCost) {
    return false;
  }

  scene.gems -= GAME_RULES.shopCardCost;
  scene.purchasedShopCards.add(cardId);
  scene.applyChosenCard(card, "Traveler");
  scene.updateUi();
  return true;
}
