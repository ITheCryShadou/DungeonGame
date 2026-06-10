import { TAROT_CARD_LEVELS, TAROT_CARD_RARITIES } from "./tarotBuilds.config";

export const TAROT_CARDS = [
  {
    id: "quick-hands",
    title: "Quick Hands",
    description: "Attack speed +10%",
    apply(stats) {
      stats.attackCooldown *= 0.9;
    },
  },
  {
    id: "fleet-step",
    title: "Fleet Step",
    description: "Movement speed +12%",
    apply(stats) {
      stats.speed *= 1.12;
    },
  },
  {
    id: "violet-force",
    title: "Violet Force",
    description: "Damage +25%",
    apply(stats) {
      stats.attackDamage *= 1.25;
    },
  },
  {
    id: "soft-heart",
    title: "Soft Heart",
    description: "Restore HP to full",
    theme: "heart",
    apply(stats, scene) {
      scene.healToFull();
    },
  },
  {
    id: "heart-vessel",
    title: "Heart Vessel",
    description: "Max HP +1 heart",
    theme: "heart",
    apply(stats, scene) {
      scene.increaseMaxHearts(1);
    },
  },
  {
    id: "moon-guard",
    title: "Moon Guard",
    description: "Gain +1 temporary blue heart",
    theme: "heart",
    build: "blueHeart",
    apply(stats, scene) {
      scene.addTempHearts(1);
    },
  },
  {
    id: "azure-vessel",
    title: "Azure Vessel",
    description: "Gain +2 temporary blue hearts",
    theme: "heart",
    build: "blueHeart",
    apply(stats, scene) {
      scene.addTempHearts(2);
    },
  },
  {
    id: "blue-splinter",
    title: "Blue Splinter",
    description: "Kills have 10% chance to drop half a blue heart",
    theme: "heart",
    build: "blueHeart",
    apply(stats) {
      stats.blueHeartDropChance = Math.max(stats.blueHeartDropChance, 0.1);
    },
  },
  {
    id: "shield-echo",
    title: "Shield Echo",
    description: "Losing blue hearts creates a magic blast",
    theme: "heart",
    build: "blueHeart",
    apply(stats) {
      stats.shieldEcho = true;
    },
  },
  {
    id: "crystal-blood",
    title: "Crystal Blood",
    description: "+5% damage per blue heart, up to +25%",
    theme: "heart",
    build: "blueHeart",
    apply(stats) {
      stats.crystalBlood = true;
    },
  },
  {
    id: "short-ritual",
    title: "Short Ritual",
    description: "Skill cooldown -15%",
    apply(stats) {
      stats.skillCooldown *= 0.85;
    },
  },
  {
    id: "bone-focus",
    title: "Bone Focus",
    description: "Crit chance +15%",
    theme: "skeleton",
    build: "crit",
    apply(stats) {
      stats.critChance += 0.15;
    },
  },
  {
    id: "grave-fang",
    title: "Grave Fang",
    description: "Crit damage +35%",
    theme: "skeleton",
    build: "crit",
    apply(stats) {
      stats.critMultiplier += 0.35;
    },
  },
  {
    id: "hunters-mark",
    title: "Hunter's Mark",
    description: "First hit on each enemy deals +50% damage",
    theme: "skeleton",
    build: "crit",
    apply(stats) {
      stats.huntersMark = true;
    },
  },
  {
    id: "sharp-ritual",
    title: "Sharp Ritual",
    description: "Crits reduce E cooldown by 0.5s",
    theme: "skeleton",
    build: "crit",
    apply(stats) {
      stats.sharpRitual = true;
    },
  },
  {
    id: "execution-fang",
    title: "Execution Fang",
    description: "Crits execute enemies below 30% HP",
    theme: "skeleton",
    build: "crit",
    apply(stats) {
      stats.executionFang = true;
    },
  },
  {
    id: "obsidian-skin",
    title: "Obsidian Skin",
    description: "20% chance to ignore enemy hit",
    theme: "hell",
    apply(stats) {
      stats.dodgeChance = Math.min(0.55, (stats.dodgeChance ?? 0) + 0.2);
    },
  },
  {
    id: "cinder-edge",
    title: "Cinder Edge",
    description: "15% chance to burn enemies for 3s",
    theme: "hell",
    build: "fire",
    apply(stats) {
      stats.burnChance = Math.max(stats.burnChance, 0.15);
      stats.burnDamage = Math.max(stats.burnDamage, 0.16);
    },
  },
  {
    id: "hellfire-core",
    title: "Hellfire Core",
    description: "Burn damage +50%, re-burn extends burn",
    theme: "hell",
    build: "fire",
    apply(stats) {
      stats.hellfireCore = true;
      stats.burnDamageMultiplier = Math.max(stats.burnDamageMultiplier, 1.5);
    },
  },
  {
    id: "infernal-dash",
    title: "Infernal Dash",
    description: "Dash leaves fire for 2s",
    theme: "hell",
    build: "fire",
    apply(stats) {
      stats.infernalDash = true;
    },
  },
  {
    id: "burning-wave",
    title: "Burning Wave",
    description: "Every 4th attack releases a fire wave",
    theme: "hell",
    build: "fire",
    apply(stats) {
      stats.burningWave = true;
    },
  },
  {
    id: "flame-crit",
    title: "Flame Crit",
    description: "Crits hit burning enemies harder",
    theme: "hell",
    build: "fire",
    apply(stats) {
      stats.flameCrit = true;
    },
  },
  {
    id: "ash-tether",
    title: "Ash Tether",
    description: "Hits slow enemies by 18%",
    theme: "hellBonus",
    apply(stats) {
      stats.enemySlowOnHit = Math.max(stats.enemySlowOnHit, 0.18);
      stats.enemySlowDuration = Math.max(stats.enemySlowDuration, 900);
    },
  },
  {
    id: "war-tempo",
    title: "War Tempo",
    description: "Damage +10%, attack speed +8%",
    apply(stats) {
      stats.attackDamage *= 1.1;
      stats.attackCooldown *= 0.92;
    },
  },
  {
    id: "toxic-edge",
    title: "Toxic Edge",
    description: "15% chance to poison enemies for 4s",
    theme: "poison",
    build: "poison",
    apply(stats) {
      stats.poisonChance = Math.max(stats.poisonChance, 0.15);
      stats.poisonDamage = Math.max(stats.poisonDamage, 0.1);
    },
  },
  {
    id: "rotten-heart",
    title: "Rotten Heart",
    description: "+1 green heart; lost green hearts poison nearby enemies",
    theme: "poison",
    build: "poison",
    apply(stats, scene) {
      scene.addGreenHearts(1);
    },
  },
  {
    id: "plague-cloud",
    title: "Plague Cloud",
    description: "Poisoned enemies leave poison clouds on death",
    theme: "poison",
    build: "poison",
    apply(stats) {
      stats.plagueCloud = true;
    },
  },
  {
    id: "venom-ritual",
    title: "Venom Ritual",
    description: "E skill damage +30% against poisoned enemies",
    theme: "poison",
    build: "poison",
    apply(stats) {
      stats.venomRitual = true;
    },
  },
  {
    id: "toxic-reward",
    title: "Toxic Reward",
    description: "Poisoned kills can restore 0.5 green heart",
    theme: "poison",
    build: "poison",
    apply(stats) {
      stats.toxicReward = true;
    },
  },
  {
    id: "frost-touch",
    title: "Frost Touch",
    description: "15% chance to Chill enemies for 3s",
    theme: "frost",
    build: "ice",
    apply(stats) {
      stats.chillChance = Math.max(stats.chillChance ?? 0, 0.15);
    },
  },
  {
    id: "ice-breaker",
    title: "Ice Breaker",
    description: "Hits against Chilled enemies deal +20% damage",
    theme: "frost",
    build: "ice",
    apply(stats) {
      stats.iceBreaker = true;
    },
  },
  {
    id: "frozen-guard",
    title: "Frozen Guard",
    description: "On damage: 20% chance to Chill nearby enemies",
    theme: "frost",
    build: "ice",
    apply(stats) {
      stats.frozenGuard = true;
    },
  },
  {
    id: "crystal-step",
    title: "Crystal Step",
    description: "Dash can leave an icy trail that slows enemies",
    theme: "frost",
    build: "ice",
    apply(stats) {
      stats.crystalStep = true;
    },
  },
  {
    id: "frost-nova",
    title: "Frost Nova",
    description: "Every 6th attack creates a Chill nova",
    theme: "frost",
    build: "ice",
    apply(stats) {
      stats.frostNova = true;
      stats.frostNovaDamageRatio = Math.max(stats.frostNovaDamageRatio ?? 0.15, 0.15);
    },
  },
  {
    id: "winter-heart",
    title: "Winter Heart",
    description: "With blue or green hearts: 15% chance to ignore projectiles",
    theme: "frost",
    build: "ice",
    apply(stats) {
      stats.winterHeart = true;
    },
  },
  {
    id: "cursed-contract",
    title: "Cursed Contract",
    description: "Damage +45%, max HP -1 heart",
    theme: "cursed",
    rarity: "cursed",
    apply(stats, scene) {
      stats.attackDamage *= 1.45;
      scene.decreaseMaxHearts(1);
    },
  },
  {
    id: "hollow-speed",
    title: "Hollow Speed",
    description: "Speed +25%, dodge chance -15%",
    theme: "cursed",
    rarity: "cursed",
    apply(stats) {
      stats.speed *= 1.25;
      stats.dodgeChance = Math.max(-0.35, (stats.dodgeChance ?? 0) - 0.15);
    },
  },
  {
    id: "nox-astral-engine",
    title: "Astral Engine",
    description: "Nox: E cooldown -18%, projectiles become active",
    theme: "hero",
    rarity: "hero",
    heroId: "nox",
    apply(stats, scene) {
      stats.skillCooldown *= 0.82;
      scene.enableProjectileAttack();
    },
  },
  {
    id: "riven-ember-rhythm",
    title: "Ember Rhythm",
    description: "Riven: attack speed +14%, E burns enemies",
    theme: "hero",
    rarity: "hero",
    heroId: "riven",
    apply(stats) {
      stats.attackCooldown *= 0.86;
      stats.burnChance = Math.max(stats.burnChance, 0.2);
      stats.burnDamage = Math.max(stats.burnDamage, 0.14);
    },
  },
];

TAROT_CARDS.forEach((card) => {
  card.rarity = card.rarity ?? TAROT_CARD_RARITIES[card.id] ?? "common";
  card.levels = card.levels ?? TAROT_CARD_LEVELS[card.id];
});

export const BOSS_CARDS = [
  {
    id: "boss-crimson-crown",
    title: "Crimson Crown",
    description: "Boss reward: damage +15%, crit chance +8%",
    theme: "boss",
    rarity: "boss",
    apply(stats) {
      stats.attackDamage *= 1.15;
      stats.critChance += 0.08;
    },
  },
  {
    id: "boss-heart-of-ashes",
    title: "Heart of Ashes",
    description: "Boss reward: max HP +1 and burn damage +25%",
    theme: "boss",
    rarity: "boss",
    apply(stats, scene) {
      scene.increaseMaxHearts(1);
      stats.burnDamageMultiplier = Math.max(stats.burnDamageMultiplier, 1.25);
    },
  },
];
