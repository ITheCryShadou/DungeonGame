import { TAROT_CARDS } from "../../config/gameBalance";

export function getEligibleTarotCards(scene, sourceCards = TAROT_CARDS) {
  return sourceCards.filter((card) => {
    if (card.heroId && card.heroId !== scene.heroId) return false;
    const currentLevel = scene.cardLevels[card.id] ?? 0;
    const maxLevel = scene.getCardMaxLevel(card);
    return currentLevel < maxLevel;
  });
}

export function applyChosenCard(scene, card, source = "Tarot") {
  card.apply?.(scene.stats, scene);
  scene.cardLevels[card.id] = Math.max(scene.cardLevels[card.id] ?? 0, card.level ?? 1);
  scene.applyCardSynergy(card);
  scene.selectedCards.push({
    id: card.id,
    title: card.title,
    description: card.description,
    rarity: card.rarity,
    level: card.level,
    source,
  });
}
