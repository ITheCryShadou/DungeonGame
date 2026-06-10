import * as Phaser from "phaser";
import { TAROT_CARDS } from "../../config/gameBalance";

export function takeCursedRareCard(scene) {
  scene.activeCurses.push("Boss HP +20%");
  const rareCards = scene.getEligibleTarotCards(TAROT_CARDS).filter((card) => ["rare", "epic"].includes(card.rarity));
  const card = scene.prepareCardForOffer(Phaser.Utils.Array.GetRandom(rareCards.length ? rareCards : scene.getEligibleTarotCards(TAROT_CARDS)));
  scene.applyChosenCard(card, "Cursed Room");
  scene.showCardRewardBanner({
    kicker: "Random tarot",
    title: card.title,
    description: card.description,
    color: card.rarity === "epic" ? "#c084fc" : "#78b7ff",
  });
}

export function takeBloodPriceReward(scene) {
  const eligible = scene.getEligibleTarotCards(TAROT_CARDS);
  const epicCards = eligible.filter((card) => card.rarity === "epic");
  const source = epicCards.length ? epicCards : eligible;
  const rawCard = source.length ? Phaser.Utils.Array.GetRandom(source) : null;
  if (rawCard) {
    const card = scene.prepareCardForOffer(rawCard);
    scene.applyChosenCard(card, "Blood Price");
    scene.showCardRewardBanner({
      kicker: "Blood Price",
      title: card.title,
      description: card.description,
      color: "#c084fc",
    });
  }
  scene.decreaseMaxHearts(1);
}

export function takeBossHungerReward(scene) {
  scene.gems += 1;
  scene.activeCurses.push("Boss HP +25%");
  scene.updateUi();
}

export function takeFragilePowerReward(scene) {
  scene.stats.attackDamage *= 1.2;
  scene.stats.dodgeChance = Math.max(-0.5, (scene.stats.dodgeChance ?? 0) - 0.15);
  scene.updateUi();
}

export function takeDarkSpeedReward(scene) {
  scene.stats.speed *= 1.2;
  scene.stats.rollCooldown *= 1.3;
  scene.updateUi();
}

export function takePoisonGiftReward(scene) {
  scene.addGreenHearts(2);
  scene.stats.potionHealMultiplier = Math.max(0.25, (scene.stats.potionHealMultiplier ?? 1) * 0.5);
  scene.updateUi();
}

export function cleanseCurse(scene) {
  const removed = scene.activeCurses.pop();
  scene.showFloatingText(scene.player.x, scene.player.y - 70, removed ? "CURSE CLEANSED" : "NO CURSE", "#d9ccff", 16);
}

export function takeMeditateReward(scene) {
  scene.stats.skillCooldown *= 0.95;
  scene.updateUi();
}

export function takeRepairSoulReward(scene) {
  if (scene.greenHearts < 1) {
    scene.showFloatingText(scene.player.x, scene.player.y - 70, "NO GREEN HEART", "#75f08a", 16);
    return;
  }
  scene.greenHearts = Math.max(0, scene.greenHearts - 1);
  scene.addTempHearts(1);
  scene.updateUi();
}

export function takeFocusBuildReward(scene) {
  const builds = [
    { id: "fire", count: scene.stats.fireCards ?? 0, label: "FIRE" },
    { id: "blueHeart", count: scene.stats.blueHeartCards ?? 0, label: "BLUE" },
    { id: "crit", count: scene.stats.critCards ?? 0, label: "CRIT" },
    { id: "poison", count: scene.stats.poisonCards ?? 0, label: "POISON" },
    { id: "ice", count: scene.stats.iceCards ?? 0, label: "ICE" },
  ].sort((a, b) => b.count - a.count);
  const strongest = builds[0];
  if (!strongest || strongest.count <= 0) {
    scene.showFloatingText(scene.player.x, scene.player.y - 70, "NO BUILD YET", "#d9ccff", 16);
    return;
  }
  scene.focusNextTarotBuild = strongest.id;
  scene.showFloatingText(scene.player.x, scene.player.y - 70, `${strongest.label} FOCUS`, "#ffd36b", 16);
}
