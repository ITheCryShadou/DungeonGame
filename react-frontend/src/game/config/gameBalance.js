import { BOSSES } from "./bosses.config";
import { CAMPAIGN_RULES, CORE_GAME_RULES } from "./campaign.config";
import { CHEST_RULES, SHOP_RULES } from "./chests.config";
import { ENEMIES } from "./enemies.config";
import { ROOM_RULES } from "./rooms.config";

export { BOSSES } from "./bosses.config";
export { CAMPAIGN_RULES, CORE_GAME_RULES } from "./campaign.config";
export { CHEST_RULES, SHOP_CARDS, SHOP_RULES } from "./chests.config";
export { ENEMIES } from "./enemies.config";
export { HEROES, HERO_SHOP_SKILLS, PLAYER_BASE_STATS } from "./heroes.config";
export { LEVELS } from "./levels.config";
export { ROOM_RULES } from "./rooms.config";
export { BOSS_CARDS, TAROT_CARDS } from "./tarot.config";
export { TAROT_BUILDS, TAROT_CARD_LEVELS, TAROT_CARD_RARITIES } from "./tarotBuilds.config";

export const GAME_RULES = {
  maxHearts: CORE_GAME_RULES.maxHearts,
  enemyHitDamage: CORE_GAME_RULES.enemyHitDamage,
  floorsPerLevel: CAMPAIGN_RULES.floorsPerLevel,
  floorCount: CAMPAIGN_RULES.floorCount,
  minRoomsPerFloor: ROOM_RULES.minRoomsPerFloor,
  maxRoomsPerFloor: ROOM_RULES.maxRoomsPerFloor,
  chestSpawnChance: CHEST_RULES.chestSpawnChance,
  chestGemChance: CHEST_RULES.chestGemChance,
  chestBlueHeartChance: CHEST_RULES.chestBlueHeartChance,
  chestTarotChance: CHEST_RULES.chestTarotChance,
  chestPotionChance: CHEST_RULES.chestPotionChance,
  chestTypeWeights: CHEST_RULES.chestTypeWeights,
  merchantTunnelChance: SHOP_RULES.merchantTunnelChance,
  merchantForceAfterTunnels: SHOP_RULES.merchantForceAfterTunnels,
  shopCardCost: SHOP_RULES.shopCardCost,
  shopCoinRerollBaseCost: SHOP_RULES.shopCoinRerollBaseCost,
  shopCoinRerollCostStep: SHOP_RULES.shopCoinRerollCostStep,
  shopGemRerollCost: SHOP_RULES.shopGemRerollCost,
  coinDropMin: CHEST_RULES.coinDropMin,
  coinDropMax: CHEST_RULES.coinDropMax,
  roomWidth: ROOM_RULES.roomWidth,
  roomHeight: ROOM_RULES.roomHeight,
};

export const ENEMY_TYPES = {
  ...ENEMIES,
  ...BOSSES,
};
