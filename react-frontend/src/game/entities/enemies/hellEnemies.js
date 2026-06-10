export function getHellEnemyDisplaySize(type) {
  if (type === "infernalBoss") {
    return { width: 128, height: 116, bodyWidth: 58, bodyHeight: 54 };
  }

  if (type === "hellTitan") {
    return { width: 92, height: 96, bodyWidth: 42, bodyHeight: 44 };
  }

  if (type === "hellTank" || type === "hellGolem") {
    return { width: 82, height: 86, bodyWidth: 38, bodyHeight: 40 };
  }

  if (type === "hellKiller") {
    return { width: 70, height: 76, bodyWidth: 32, bodyHeight: 36 };
  }

  if (type === "impLittle") {
    return { width: 58, height: 64, bodyWidth: 28, bodyHeight: 30 };
  }

  return null;
}

export function getHellEnemyName(type) {
  const names = {
    impLittle: "Imp Little",
    hellKiller: "Hell Killer",
    hellGolem: "Hell Golem",
    hellTank: "Hell Tank",
    hellTitan: "Hell Titan",
    infernalBoss: "Infernal Boss",
  };
  return names[type] ?? null;
}

export function getHellGolemAnimationFrameKeys(enemy, name) {
  if (enemy.type !== "hellGolem") return null;
  if (name === "idle") {
    return {
      frameKeys: [enemy.animationSet[name][0]],
      fps: 1,
    };
  }
  if (name === "walk") {
    return {
      frameKeys: [
        enemy.animationSet[name][0],
        enemy.animationSet[name][1],
        enemy.animationSet[name][2],
        enemy.animationSet[name][1],
      ].filter(Boolean),
      fps: 4,
    };
  }
  return null;
}
