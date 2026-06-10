export const CHEST_RULES = {
  chestSpawnChance: 1,
  chestGemChance: 0.05,
  chestBlueHeartChance: 0.12,
  chestTarotChance: 0.14,
  chestPotionChance: 0.22,
  chestTypeWeights: {
    dungeon: 50,
    wooden: 35,
    blue: 7,
    golden: 5,
    cursed: 3,
  },
  coinDropMin: 5,
  coinDropMax: 10,
};

export const SHOP_RULES = {
  merchantTunnelChance: 0.05,
  merchantForceAfterTunnels: 5,
  shopCardCost: 1,
  shopCoinRerollBaseCost: 10,
  shopCoinRerollCostStep: 5,
  shopGemRerollCost: 1,
};

export const SHOP_CARDS = [
  {
    id: "traveler-heart-vessel",
    title: "Vessel of Dawn",
    description: "Max HP +1 heart",
    asset: "traveler1",
    apply(stats, scene) {
      scene.increaseMaxHearts(1);
    },
  },
  {
    id: "traveler-star-shot",
    title: "Star Shot",
    description: "LMB also fires a projectile",
    asset: "traveler2",
    apply(stats, scene) {
      scene.enableProjectileAttack();
    },
  },
  {
    id: "traveler-silk-boots",
    title: "Silk Boots",
    description: "Dash cooldown -20%",
    asset: "traveler3",
    apply(stats) {
      stats.rollCooldown *= 0.8;
    },
  },
];
