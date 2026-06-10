export const TAROT_CARD_RARITIES = {
  "quick-hands": "common",
  "fleet-step": "common",
  "soft-heart": "common",
  "moon-guard": "common",
  "short-ritual": "common",
  "war-tempo": "common",
  "toxic-edge": "common",
  "frost-touch": "common",
  "heart-vessel": "rare",
  "azure-vessel": "rare",
  "blue-splinter": "rare",
  "bone-focus": "rare",
  "grave-fang": "rare",
  "obsidian-skin": "rare",
  "cinder-edge": "rare",
  "rotten-heart": "rare",
  "ice-breaker": "rare",
  "frozen-guard": "rare",
  "crystal-step": "rare",
  "violet-force": "epic",
  "shield-echo": "epic",
  "crystal-blood": "epic",
  "hunters-mark": "epic",
  "sharp-ritual": "epic",
  "execution-fang": "epic",
  "hellfire-core": "epic",
  "infernal-dash": "epic",
  "burning-wave": "epic",
  "flame-crit": "epic",
  "ash-tether": "epic",
  "plague-cloud": "epic",
  "venom-ritual": "epic",
  "toxic-reward": "epic",
  "frost-nova": "epic",
  "winter-heart": "epic",
};

export const TAROT_CARD_LEVELS = {
  "quick-hands": [
    {
      title: "Quick Hands I",
      description: "Attack speed +10%",
      apply(stats) {
        stats.attackCooldown *= 0.9;
      },
    },
    {
      title: "Quick Hands II",
      description: "Attack speed +18%",
      apply(stats) {
        stats.attackCooldown *= 0.911;
      },
    },
    {
      title: "Quick Hands III",
      description: "Attack speed +25%, kills give +10% attack speed for 2s",
      apply(stats) {
        stats.attackCooldown *= 0.914;
        stats.quickHandsKillTempo = true;
      },
    },
  ],
  "fleet-step": [
    {
      title: "Fleet Step I",
      description: "Movement speed +12%",
      apply(stats) {
        stats.speed *= 1.12;
      },
    },
    {
      title: "Fleet Step II",
      description: "Movement speed +20%",
      apply(stats) {
        stats.speed *= 1.071;
      },
    },
    {
      title: "Fleet Step III",
      description: "Movement speed +28%, dash cooldown -10%",
      apply(stats) {
        stats.speed *= 1.067;
        stats.rollCooldown *= 0.9;
      },
    },
  ],
  "violet-force": [
    {
      title: "Violet Force I",
      description: "Damage +25%",
      apply(stats) {
        stats.attackDamage *= 1.25;
      },
    },
    {
      title: "Violet Force II",
      description: "Damage +38%",
      apply(stats) {
        stats.attackDamage *= 1.104;
      },
    },
    {
      title: "Violet Force III",
      description: "Damage +50%, crit chance +8%",
      apply(stats) {
        stats.attackDamage *= 1.087;
        stats.critChance += 0.08;
      },
    },
  ],
  "cinder-edge": [
    {
      title: "Cinder Edge I",
      description: "15% chance to burn enemies for 3s",
      apply(stats) {
        stats.burnChance = Math.max(stats.burnChance, 0.15);
        stats.burnDamage = Math.max(stats.burnDamage, 0.16);
      },
    },
    {
      title: "Cinder Edge II",
      description: "22% chance to burn enemies for 3s",
      apply(stats) {
        stats.burnChance = Math.max(stats.burnChance, 0.22);
        stats.burnDamage = Math.max(stats.burnDamage, 0.2);
      },
    },
    {
      title: "Cinder Edge III",
      description: "28% burn chance; burning enemies take +8% damage",
      apply(stats) {
        stats.burnChance = Math.max(stats.burnChance, 0.28);
        stats.burnDamage = Math.max(stats.burnDamage, 0.24);
        stats.flameCrit = true;
      },
    },
  ],
  "frost-touch": [
    {
      title: "Frost Touch I",
      description: "15% chance to Chill enemies for 3s",
      apply(stats) {
        stats.chillChance = Math.max(stats.chillChance ?? 0, 0.15);
      },
    },
    {
      title: "Frost Touch II",
      description: "22% chance to Chill enemies for 3s",
      apply(stats) {
        stats.chillChance = Math.max(stats.chillChance ?? 0, 0.22);
      },
    },
    {
      title: "Frost Touch III",
      description: "28% Chill chance; Chill lasts +1s",
      apply(stats) {
        stats.chillChance = Math.max(stats.chillChance ?? 0, 0.28);
        stats.chillDuration = Math.max(stats.chillDuration ?? 3000, 4000);
      },
    },
  ],
  "frost-nova": [
    {
      title: "Frost Nova I",
      description: "Every 6th attack creates a Chill nova for 15% damage",
      apply(stats) {
        stats.frostNova = true;
        stats.frostNovaDamageRatio = Math.max(stats.frostNovaDamageRatio ?? 0.15, 0.15);
      },
    },
    {
      title: "Frost Nova II",
      description: "Every 6th attack creates a Chill nova for 30% damage",
      apply(stats) {
        stats.frostNova = true;
        stats.frostNovaDamageRatio = Math.max(stats.frostNovaDamageRatio ?? 0.15, 0.3);
      },
    },
    {
      title: "Frost Nova III",
      description: "Every 5th attack creates a stronger Chill nova",
      apply(stats) {
        stats.frostNova = true;
        stats.frostNovaDamageRatio = Math.max(stats.frostNovaDamageRatio ?? 0.15, 0.36);
        stats.frostNovaAttackInterval = 5;
      },
    },
  ],
};

export const TAROT_BUILDS = {
  fire: { id: "fire", cardsRequired: [3, 5] },
  blueHeart: { id: "blueHeart", cardsRequired: [3, 5] },
  crit: { id: "crit", cardsRequired: [3, 5] },
  poison: { id: "poison", cardsRequired: [3, 5] },
  ice: { id: "ice", cardsRequired: [3, 5] },
};
