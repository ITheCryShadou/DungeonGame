import * as Phaser from "phaser";
import { rollChallengeVariant } from "../challenge/challengeModifiers";

export function createEventRoomChoices(scene, challengeVariants, challengeDashRules) {
  if (!scene.isEventRoom()) return;

  const roomType = scene.layout.roomType;
  const titleByType = {
    award: "Award Room",
    challenge: "Challenge Room",
    cursed: "Cursed Room",
    rest: "Rest Room",
  };
  scene.eventChoiceGroup = scene.add.group();
  scene.eventRoomTitle = scene.add
    .text(512, 78, titleByType[roomType] ?? "Event Room", {
      fontFamily: "monospace",
      fontSize: "24px",
      color: roomType === "cursed" ? "#b98cff" : "#f5f0ff",
      stroke: "#08090e",
      strokeThickness: 5,
    })
    .setOrigin(0.5)
    .setDepth(20);

  const positions = [
    { x: 350, y: 300 },
    { x: 512, y: 220 },
    { x: 674, y: 300 },
  ];
  const choices = scene.getEventRoomChoices(roomType, challengeVariants, challengeDashRules);
  choices.forEach((choice, index) => scene.createEventChoice(choice, positions[index]));
}

export function getEventRoomChoices(scene, roomType, challengeVariants, challengeDashRules) {
  if (roomType === "award") {
    return Phaser.Utils.Array.Shuffle([
      { id: "award-tarot", label: "Tarot", detail: "Choose a card", icon: "tarotCard", apply: () => scene.offerTarotChoice({ advanceFloor: false }) },
      { id: "award-chest", label: "Chest", detail: "Random chest", icon: "dungeonChestIcon", apply: () => scene.spawnRewardChestAt(512, 300) },
      (() => {
        const amount = scene.rollCoinAmount(10, 22);
        return { id: "award-coins", label: "Coins", detail: `+${amount} coins`, icon: "coinIcon", apply: () => { scene.coins += amount; scene.updateUi(); } };
      })(),
      { id: "award-blue-heart", label: "Blue heart", detail: "+0.5 shield", icon: "blueHeartHalf", apply: () => scene.addTempHearts(0.5) },
      { id: "award-heal", label: "Potion", detail: "Restore 1 heart", icon: "healPotion", apply: () => scene.healPlayer(1) },
      { id: "award-upgrade", label: "Upgrade", detail: "Improve a card", icon: "tarotCard", apply: () => scene.upgradeRandomCard() },
      { id: "award-gem", label: "Gem", detail: "+1 gem", icon: "gemIcon", apply: () => { scene.gems += 1; scene.updateUi(); } },
    ]).slice(0, 3);
  }

  if (roomType === "challenge") {
    const challenge = rollChallengeVariant(challengeVariants, challengeDashRules);
    return [
      {
        id: "challenge-start",
        label: challenge.title,
        detail: `${challenge.detail}\n${challenge.dashRule.label}`,
        icon: "cursedChestIcon",
        apply: () => scene.startChallengeRoom(challenge),
      },
    ];
  }

  if (roomType === "cursed") {
    return Phaser.Utils.Array.Shuffle([
      { id: "curse-blood-price", label: "Blood Price", detail: "Epic card, -1 max HP", icon: "tarotCard", apply: () => scene.takeBloodPriceReward() },
      { id: "curse-boss-hunger", label: "Boss Hunger", detail: "+1 gem, next boss +25% HP", icon: "gemIcon", apply: () => scene.takeBossHungerReward() },
      { id: "curse-fragile-power", label: "Fragile Power", detail: "+20% damage, dodge -15%", icon: "cursedChestIcon", apply: () => scene.takeFragilePowerReward() },
      { id: "curse-dark-speed", label: "Dark Speed", detail: "+20% speed, dash cd +30%", icon: "cursedChestIcon", apply: () => scene.takeDarkSpeedReward() },
      { id: "curse-poison-gift", label: "Poison Gift", detail: "+2 green HP, potions -50%", icon: "greenHeartHalf", apply: () => scene.takePoisonGiftReward() },
    ]).slice(0, 3);
  }

  return Phaser.Utils.Array.Shuffle([
    { id: "rest-heal", label: "Rest", detail: "Restore 1 heart", icon: "healPotion", apply: () => scene.healPlayer(1) },
    { id: "rest-cleanse", label: "Cleanse", detail: "Remove a curse", icon: "tarotCard", apply: () => scene.cleanseCurse() },
    { id: "rest-upgrade", label: "Upgrade", detail: "Improve a card", icon: "tarotCard", apply: () => scene.upgradeRandomCard() },
    { id: "rest-buy-heal", label: "Buy heal", detail: "10 coins -> 1 heart", icon: "coinIcon", apply: () => scene.buyRestHeal() },
    { id: "rest-meditate", label: "Meditate", detail: "E cooldown -5%", icon: "tarotCard", apply: () => scene.takeMeditateReward() },
    { id: "rest-repair-soul", label: "Repair Soul", detail: "Green HP -> blue HP", icon: "blueHeartHalf", apply: () => scene.takeRepairSoulReward() },
    { id: "rest-focus-build", label: "Focus Build", detail: "Next tarot follows best build", icon: "tarotCard", apply: () => scene.takeFocusBuildReward() },
  ]).slice(0, 3);
}

export function createEventChoice(scene, choice, position) {
  const marker = scene.add
    .rectangle(position.x, position.y, 120, 92, 0x171923, 0.78)
    .setStrokeStyle(2, 0xb98cff, 0.65)
    .setDepth(8);
  const icon = scene.add.image(position.x, position.y - 14, choice.icon).setDisplaySize(34, 34).setDepth(9);
  const label = scene.add
    .text(position.x, position.y + 26, `${choice.label}\n${choice.detail}`, {
      fontFamily: "monospace",
      fontSize: "12px",
      color: "#f5f0ff",
      align: "center",
    })
    .setOrigin(0.5)
    .setDepth(9);
  marker.choice = choice;
  marker.choiceRadius = 72;
  scene.eventChoiceGroup.add(marker);
  scene.eventChoiceGroup.add(icon);
  scene.eventChoiceGroup.add(label);
}

export function resolveEventChoice(scene, marker) {
  if (!marker?.choice || marker.choiceResolved) return;
  marker.choiceResolved = true;
  const choice = marker.choice;
  scene.getGroupChildren(scene.eventChoiceGroup).forEach((item) => item?.destroy?.());
  scene.eventChoiceGroup = scene.add.group();
  choice.apply?.(choice);
  if (scene.layout?.roomType !== "challenge") {
    scene.revealEventExit({ announce: true });
  }
  scene.showFloatingText(scene.player.x, scene.player.y - 62, choice.label.toUpperCase(), "#f5f0ff", 16);
}
