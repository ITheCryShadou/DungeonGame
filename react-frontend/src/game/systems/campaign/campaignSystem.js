import { LEVELS } from "../../config/gameBalance";
import { createFloorPlan } from "../dungeon/dungeonGenerator";

const PLAYABLE_LEVEL_IDS = ["skeleton", "hell", "icy"];

export function createCampaignSequence(length = 5) {
  return Array.from({ length }, () => (
    PLAYABLE_LEVEL_IDS[Math.floor(Math.random() * PLAYABLE_LEVEL_IDS.length)]
  ));
}

export function createRunSummary(scene, extra = {}) {
  const level = LEVELS[scene.levelId] ?? LEVELS.skeleton;
  const isCampaign = scene.levelSequence.length > 1;
  const nextLevelId = isCampaign ? scene.levelSequence[scene.stageIndex + 1] : null;
  const nextLevel = nextLevelId ? LEVELS[nextLevelId] : null;

  return {
    levelId: scene.levelId,
    levelTitle: level.title,
    heroId: scene.heroId,
    floor: scene.floor,
    room: scene.room,
    roomCount: scene.floorPlan.roomCount,
    killedEnemies: scene.enemyKills,
    coins: scene.coins,
    coinsGained: Math.max(0, scene.coins - scene.startingCoins),
    gems: scene.gems,
    selectedCards: [...scene.selectedCards],
    elapsedMs: Math.max(0, scene.time.now - scene.runStartedAt),
    bossRewards: [...scene.bossRewards],
    unlockedContent: [],
    campaign: {
      active: isCampaign,
      stage: scene.stageIndex + 1,
      stageCount: scene.levelSequence.length,
      nextLevelId,
      nextLevelTitle: nextLevel?.title ?? null,
    },
    ...extra,
  };
}

export function winRun(scene) {
  if (scene.levelSequence.length > 1 && scene.stageIndex < scene.levelSequence.length - 1) {
    scene.physics.pause();
    scene.callbacks.onRunComplete?.(scene.createRunSummary({
      outcome: "campaign-level",
      title: `Level ${scene.stageIndex + 1}/${scene.levelSequence.length} completed`,
      continueCampaign: () => scene.advanceCampaignStage(),
    }));
    return;
  }

  scene.isGameOver = true;
  scene.physics.pause();
  scene.callbacks.onRunComplete?.(scene.createRunSummary({
    outcome: "victory",
    title: `${scene.levelId === "hell" ? "Hell" : "Crypt"} cleared`,
  }));
  scene.add
    .text(512, 300, `${scene.levelId === "hell" ? "Hell" : "Crypt"} cleared`, {
      fontFamily: "monospace",
      fontSize: "42px",
      color: "#f4e8ff",
    })
    .setOrigin(0.5)
    .setDepth(40);
}

export function advanceCampaignStage(scene) {
  if (scene.stageIndex >= scene.levelSequence.length - 1) return false;

  scene.stageIndex += 1;
  scene.levelId = scene.levelSequence[scene.stageIndex];
  scene.floor = 1;
  scene.room = 1;
  scene.floorPlan = createFloorPlan(scene.floor);
  scene.clearFloorObjects();
  scene.isChoosingTarot = false;
  scene.isTransitioning = false;
  scene.invulnerableUntil = scene.time.now + 1100;
  scene.startRoom();
  scene.physics.resume();
  return true;
}
