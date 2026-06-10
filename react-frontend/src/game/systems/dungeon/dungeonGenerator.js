import { ENEMY_TYPES, GAME_RULES } from "../../config/gameBalance";

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isTooClose(point, targets) {
  return targets.some((target) => {
    const distance = Math.hypot(point.x - target.x, point.y - target.y);
    return distance < target.radius;
  });
}

function pickEnemyType(floor, levelId = "skeleton") {
  if (levelId === "hell") {
    const roll = Math.random();
    if (floor >= 4 && roll > 0.86) return "hellTitan";
    if (floor >= 3 && roll > 0.72) return "hellTank";
    if (roll > 0.5) return "hellGolem";
    if (roll > 0.25) return "hellKiller";
    return "impLittle";
  }

  if (levelId === "icy") {
    const roll = Math.random();
    if (floor >= 4 && roll > 0.86) return "iceAxeTitan";
    if (floor >= 3 && roll > 0.7) return "iceWraith";
    if (roll > 0.54) return "icebladeMaster";
    if (roll > 0.34) return "frozenKnight";
    if (roll > 0.16) return "frostPriest";
    return "frostBladeWarrior";
  }

  if (floor <= 1) return "skeleton";
  if (floor <= 3) return Math.random() > 0.65 ? "guard" : "skeleton";
  const roll = Math.random();
  if (roll > 0.84) return "dogStrong";
  if (roll > 0.62) return "dog";
  if (roll > 0.42) return "guard";
  return "skeleton";
}

const OBSTACLE_TYPES = [
  "columnBroken",
  "columnSkull",
  "column",
  "barrel",
  "box",
  "pileStones",
  "spike",
  "torch",
];

const HELL_OBSTACLE_TYPES = [
  "hellColumnFlag",
  "hellColumnSkull",
  "hellColumnSpikes",
  "hellColumnBigSkull",
  "hellFlag",
  "hellGates",
  "hellRock",
  "hellSpikes",
  "hellTorch",
  "hellTable",
];

const ICY_OBSTACLE_TYPES = [
  "icyChainedTotem",
  "icyCrackedObelisk",
  "icyFrostedBrazier",
  "icyRunePedestal",
  "icySarcophagus",
  "icyStonePillar",
  "icyFrostStatue",
  "icySnowCrate",
  "icySpikedMound",
];

export function createFloorLayout(floor) {
  return createRoomLayout({ floor, room: 1, isBossRoom: false });
}

export function createFloorPlan(floor) {
  const roomCount =
    floor === GAME_RULES.floorsPerLevel
      ? GAME_RULES.maxRoomsPerFloor
      : randomBetween(GAME_RULES.minRoomsPerFloor, GAME_RULES.maxRoomsPerFloor);
  const roomTypes = Array.from({ length: roomCount }, (_, index) => {
    const room = index + 1;
    const isBossRoom = floor === GAME_RULES.floorsPerLevel && room === roomCount;
    if (room === 1 || isBossRoom) return "combat";

    const roll = Math.random();
    if (roll < 0.09) return "award";
    if (roll < 0.16) return "challenge";
    if (roll < 0.23) return "cursed";
    if (roll < 0.31) return "rest";
    return "combat";
  });

  return {
    floor,
    roomCount,
    roomTypes,
  };
}

export function createRoomLayout({ floor, room, isBossRoom, levelId = "skeleton", roomType = "combat" }) {
  const roomPadding = 48;
  const roomWidth = GAME_RULES.roomWidth;
  const roomHeight = GAME_RULES.roomHeight;
  const isEventRoom = roomType !== "combat";
  const obstacleCount = isBossRoom || isEventRoom
    ? 0
    : levelId === "icy"
      ? randomBetween(1, 3)
      : randomBetween(3, 6);
  const enemyCount = isEventRoom ? 0 : (isBossRoom ? 1 : Math.min(1 + floor + room + (levelId === "hell" || levelId === "icy" ? 1 : 0), 7));
  const obstacleTypes = levelId === "icy"
    ? ICY_OBSTACLE_TYPES
    : levelId === "hell"
      ? HELL_OBSTACLE_TYPES
      : OBSTACLE_TYPES;
  const spawnPoint = isEventRoom
    ? { x: roomWidth / 2, y: roomHeight - 80 }
    : { x: 130, y: roomHeight / 2 };
  const exitPoint = isEventRoom
    ? { x: roomWidth / 2, y: roomHeight - 80 }
    : { x: roomWidth - 85, y: roomHeight / 2 };
  const rewardPoint = { x: roomWidth / 2, y: roomHeight / 2 };
  const reservedPoints = [
    { ...spawnPoint, radius: 150 },
    { ...exitPoint, radius: 150 },
    { ...rewardPoint, radius: 110 },
  ];

  const obstacles = [];
  let obstacleAttempts = 0;

  while (obstacles.length < obstacleCount && obstacleAttempts < 120) {
    obstacleAttempts += 1;
    const obstacle = {
      id: `obstacle-${obstacles.length}`,
      type: obstacleTypes[randomBetween(0, obstacleTypes.length - 1)],
      x: randomBetween(roomPadding + 90, roomWidth - roomPadding - 90),
      y: randomBetween(roomPadding + 90, roomHeight - roomPadding - 90),
      width: randomBetween(54, 92),
      height: randomBetween(54, 96),
    };

    const tooCloseToReservedPoint = isTooClose(obstacle, reservedPoints);
    const tooCloseToOtherObstacle = isTooClose(
      obstacle,
      obstacles.map((item) => ({ ...item, radius: 92 }))
    );

    if (!tooCloseToReservedPoint && !tooCloseToOtherObstacle) {
      obstacles.push(obstacle);
    }
  }

  const enemies = Array.from({ length: enemyCount }, (_, index) => {
    const type = isBossRoom
      ? (levelId === "icy" ? "frostTyrant" : levelId === "hell" ? "infernalBoss" : "boss")
      : pickEnemyType(floor, levelId);
    const enemyReservedPoints = [
      { ...spawnPoint, radius: 235 },
      { ...exitPoint, radius: 120 },
      ...obstacles.map((item) => ({ ...item, radius: 86 })),
    ];
    let point = {
      x: randomBetween(roomPadding + 120, roomWidth - roomPadding - 120),
      y: randomBetween(roomPadding + 120, roomHeight - roomPadding - 120),
    };
    let enemyAttempts = 0;

    while (isTooClose(point, enemyReservedPoints) && enemyAttempts < 80) {
      enemyAttempts += 1;
      point = {
        x: randomBetween(roomPadding + 120, roomWidth - roomPadding - 120),
        y: randomBetween(roomPadding + 120, roomHeight - roomPadding - 120),
      };
    }

    return {
      id: `enemy-${floor}-${index}`,
      type,
      x: point.x,
      y: point.y,
      ...ENEMY_TYPES[type],
    };
  });

  const traps = [];
  if (levelId === "icy" && !isBossRoom && !isEventRoom) {
    const trapCount = randomBetween(0, 2);
    let trapAttempts = 0;
    while (traps.length < trapCount && trapAttempts < 80) {
      trapAttempts += 1;
      const trap = {
        id: `icy-trap-${traps.length}`,
        type: "frostSpikeTrap",
        x: randomBetween(roomPadding + 140, roomWidth - roomPadding - 140),
        y: randomBetween(roomPadding + 120, roomHeight - roomPadding - 120),
        radius: 34,
      };
      const tooCloseToReservedPoint = isTooClose(trap, reservedPoints);
      const tooCloseToObstacle = isTooClose(trap, obstacles.map((item) => ({ ...item, radius: 82 })));
      const tooCloseToTrap = isTooClose(trap, traps.map((item) => ({ ...item, radius: 105 })));
      if (!tooCloseToReservedPoint && !tooCloseToObstacle && !tooCloseToTrap) {
        traps.push(trap);
      }
    }
  }

  return {
    room: {
      x: 32,
      y: 20,
      width: roomWidth,
      height: roomHeight,
    },
    roomType,
    start: {
      x: spawnPoint.x,
      y: spawnPoint.y,
    },
    exit: {
      x: exitPoint.x,
      y: exitPoint.y,
      width: isEventRoom ? 130 : 64,
      height: isEventRoom ? 54 : 110,
    },
    obstacles,
    traps,
    enemies,
  };
}

export function chooseTarotCards(allCards) {
  const shuffled = [...allCards].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 2);
}
