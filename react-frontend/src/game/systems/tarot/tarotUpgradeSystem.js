import * as Phaser from "phaser";
import { BOSS_CARDS, TAROT_CARDS } from "../../config/gameBalance";

export function getCardMaxLevel(card) {
  return Math.max(1, card.levels?.length ?? 3);
}

export function toRoman(value) {
  return ["", "I", "II", "III", "IV", "V"][value] ?? `${value}`;
}

export function getGenericUpgradeDescription(scene, card, level) {
  const bonusByBuild = {
    fire: "Bonus upgrade: fire damage +10%",
    blueHeart: "Bonus upgrade: gain +0.5 blue heart",
    crit: "Bonus upgrade: crit chance +5%",
    poison: "Bonus upgrade: poison damage +10%",
    ice: "Bonus upgrade: Chill chance +5%",
  };
  if (bonusByBuild[card.build]) return `${card.description}. ${bonusByBuild[card.build]}`;
  if (card.rarity === "cursed") return `${card.description}. Bonus upgrade: damage +8%`;
  if (card.rarity === "hero") return `${card.description}. Bonus upgrade: skill cooldown -8%`;
  if (card.rarity === "boss") return `${card.description}. Bonus upgrade: damage +10%`;
  return `${card.description}. Bonus upgrade ${scene.toRoman(level)}: damage +5% and speed +4%`;
}

export function prepareCardForOffer(scene, card) {
  const currentLevel = scene.cardLevels[card.id] ?? 0;
  const maxLevel = scene.getCardMaxLevel(card);
  const nextLevel = Math.min(currentLevel + 1, maxLevel);
  const nextLevelData = card.levels?.[nextLevel - 1];
  const previousLevelData = currentLevel > 0 ? card.levels?.[currentLevel - 1] : null;
  const displayTitle = nextLevelData?.title ?? (
    maxLevel > 1 ? `${card.title} ${scene.toRoman(nextLevel)}` : card.title
  );
  const description = nextLevelData?.description ?? (
    currentLevel > 0 ? scene.getGenericUpgradeDescription(card, nextLevel) : card.description
  );

  return {
    ...card,
    baseTitle: card.title,
    title: displayTitle,
    description,
    previousDescription: previousLevelData?.description ?? (currentLevel > 0 ? card.description : null),
    level: nextLevel,
    currentLevel,
    maxLevel,
    isDuplicate: currentLevel > 0,
    rarity: card.rarity ?? "common",
    apply: nextLevelData?.apply ?? ((stats, activeScene) => {
      card.apply?.(stats, activeScene);
      if (currentLevel > 0) {
        activeScene.applyGenericCardUpgrade(card, nextLevel);
      }
    }),
  };
}

export function upgradeRandomCard(scene) {
  const upgradeable = Object.keys(scene.cardLevels).filter((id) => scene.cardLevels[id] < 3);
  if (upgradeable.length === 0) {
    scene.showFloatingText(scene.player.x, scene.player.y - 70, "NO CARD TO UPGRADE", "#d9ccff", 16);
    return;
  }
  const id = Phaser.Utils.Array.GetRandom(upgradeable);
  const source = [...TAROT_CARDS, ...BOSS_CARDS].find((card) => card.id === id);
  if (!source) return;
  const card = scene.prepareCardForOffer(source);
  scene.applyChosenCard(card, "Rest Upgrade");
  scene.showCardRewardBanner({
    kicker: "Card upgraded",
    title: `${card.baseTitle ?? card.title} ${scene.toRoman(card.currentLevel)} -> ${scene.toRoman(card.level)}`,
    description: card.description,
    color: "#ffd36b",
  });
}
