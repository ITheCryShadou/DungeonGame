import * as Phaser from "phaser";
import { BOSS_CARDS, TAROT_CARDS } from "../../config/gameBalance";
import { chooseTarotCards, createFloorPlan } from "../dungeon/dungeonGenerator";

export function showCardRewardBanner(scene, { kicker, title, description, color = "#f7efff" }) {
  const panel = scene.add
    .rectangle(512, 150, 520, 104, 0x10121b, 0.86)
    .setStrokeStyle(2, Phaser.Display.Color.HexStringToColor(color).color, 0.85)
    .setDepth(60)
    .setAlpha(0);
  const label = scene.add
    .text(512, 150, `${kicker}\n${title}\n${description}`, {
      fontFamily: "monospace",
      fontSize: "14px",
      color: "#f7efff",
      align: "center",
      lineSpacing: 4,
      wordWrap: { width: 470 },
    })
    .setOrigin(0.5)
    .setDepth(61)
    .setAlpha(0);

  label.setTint(0xffffff);
  scene.tweens.add({
    targets: [panel, label],
    y: "-=8",
    alpha: 1,
    duration: 180,
    ease: "Sine.easeOut",
    onComplete: () => {
      scene.time.delayedCall(1900, () => {
        scene.tweens.add({
          targets: [panel, label],
          y: "-=16",
          alpha: 0,
          duration: 320,
          ease: "Sine.easeIn",
          onComplete: () => {
            panel.destroy();
            label.destroy();
          },
        });
      });
    },
  });
}

export function grantBossCard(scene) {
  const availableCards = scene.getEligibleTarotCards(BOSS_CARDS);
  if (availableCards.length === 0) return;
  const card = scene.prepareCardForOffer(Phaser.Utils.Array.GetRandom(availableCards));
  scene.applyChosenCard(card, "Boss");
  scene.bossRewards.push(card.title);
  scene.showFloatingText(scene.player.x, scene.player.y - 74, `BOSS CARD: ${card.title}`, "#ff5f5f", 18);
}

export function offerTarotChoice(scene, { advanceFloor = true } = {}) {
  scene.isChoosingTarot = true;
  scene.physics.pause();

  const eligibleCards = scene.getEligibleTarotCards(TAROT_CARDS);
  const focusedCards = scene.focusNextTarotBuild
    ? eligibleCards.filter((card) => card.build === scene.focusNextTarotBuild)
    : [];
  const sourceCards = focusedCards.length ? focusedCards : eligibleCards;
  if (focusedCards.length) {
    scene.focusNextTarotBuild = null;
  }

  const cards = chooseTarotCards(sourceCards)
    .map((card) => scene.prepareCardForOffer(card));
  scene.callbacks.onTarotOffer?.(cards, (cardId) => {
    const card = cards.find((item) => item.id === cardId);
    if (card) {
      scene.applyChosenCard(card, "Tarot");
    }
    scene.isChoosingTarot = false;
    scene.physics.resume();

    if (advanceFloor) {
      scene.floor += 1;
      scene.room = 1;
      scene.floorPlan = createFloorPlan(scene.floor);
      scene.startRoom();
    }
  });
}
