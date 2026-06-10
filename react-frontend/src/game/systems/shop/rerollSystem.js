import { GAME_RULES } from "../../config/gameBalance";

export function getRerollState(scene) {
  return {
    coinCost: scene.shopCoinRerollCost,
    gemCost: GAME_RULES.shopGemRerollCost,
    gemUsed: scene.shopGemRerollUsed,
  };
}

export function rerollShop(scene, currency) {
  if (!scene.isShopOpen) return null;
  if (currency === "gem") {
    if (scene.shopGemRerollUsed || scene.gems < GAME_RULES.shopGemRerollCost) return null;
    scene.gems -= GAME_RULES.shopGemRerollCost;
    scene.shopGemRerollUsed = true;
    scene.shopCards = scene.rollTravelerCards({ improved: true });
    scene.updateUi();
    return {
      cards: scene.shopCards,
      state: getRerollState(scene),
    };
  }

  if (scene.coins < scene.shopCoinRerollCost) return null;
  scene.coins -= scene.shopCoinRerollCost;
  scene.shopCoinRerollCost += GAME_RULES.shopCoinRerollCostStep;
  scene.shopCards = scene.rollTravelerCards();
  scene.updateUi();
  return {
    cards: scene.shopCards,
    state: getRerollState(scene),
  };
}
