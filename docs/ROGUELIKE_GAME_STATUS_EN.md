# Roguelike Game Status

This document describes the current standalone state of the Chaos Dungeon roguelike game.

## Location

- App entry: `react-frontend/src/main.jsx`.
- Game UI: `react-frontend/src/game/ui/RoguelikeGame.jsx`.
- Phaser scene: `react-frontend/src/game/scenes/RoguelikeScene.js`.
- Balance and content config: `react-frontend/src/game/config/`.
- Runtime sprites and images: `react-frontend/src/assets/game/`.
- Save data helper: `react-frontend/src/game/utils/saveData.js`.

The old budgeting/backend application has been removed from the runtime. The frontend now opens the game directly.

## Gameplay

- Genre: top-down roguelike.
- A run is built from generated rooms, tunnels, rewards, enemies, and boss encounters.
- Playable level themes include Skeleton Crypt, Hell Depths, and Icy Kingdom.
- Chaos Campaign chains multiple levels into a longer run.
- Special rooms include Award, Challenge, Cursed, Rest, and Merchant encounters.

## Controls

- `WASD` - movement.
- `Left mouse button` - basic attack.
- `E` - hero skill.
- `Shift` - dash.
- `F` - interact with the merchant or room objects.
- `Esc` - pause.

## Main Menu

The menu includes:

- Play.
- Settings.
- Archive.
- Level selection.
- Campaign mode.
- Hero selection.
- Wallet coins.

## Heroes

### Nox

- Default hero.
- Balanced magic combat style.
- Uses arcane projectiles, magic waves, dash shadow effects, and super spell burst assets.

### Riven

- Unlockable blade hero.
- Faster melee style with slash and dagger projectile effects.
- Uses hero-specific upgrades and animations.

## Levels

### Skeleton Crypt

- Skeleton enemies, obstacles, tunnels, merchant room, and Skeleton Boss.
- Some skeletons can revive.
- Skeleton Boss can revive once and summon minions.

### Hell Depths

- Lava rooms, hell enemies, hell obstacles, and Infernal Boss.
- Infernal Boss has two phases and more aggressive projectile patterns in phase two.

### Icy Kingdom

- Ice rooms, frost obstacles, spike traps, falling ice spikes, and Frost Tyrant.
- Enemies include FrostBladeWarrior, FrostPriest, FrozenKnight, IceAxeTitan, IcebladeMaster, and IceWraith.
- Frost Tyrant can enter an ice shell phase and summon Matriarch Soul.

## Rewards And Progression

- Chests can grant coins, gems, potions, tarot cards, and other rewards.
- Tarot cards support fire, blue heart, crit, poison, ice, boss, hero, and cursed builds.
- Duplicate cards upgrade existing cards.
- Blue and green hearts act as temporary protection types.
- Save data is stored locally in the browser.

## Archive

The archive contains:

- Heroes.
- Enemies.
- Bosses.
- Tarot cards.
- Sprite previews and animation data for connected assets.

## Current Architecture

- React handles menus, HUD, overlays, archive, and reward screens.
- Phaser handles the playable scene, movement, combat, collisions, animations, rooms, traps, and enemies.
- Config files keep game balance, hero data, enemies, bosses, campaign rules, chests, rooms, and tarot cards separate from the scene logic.

## Notes

- Runtime assets should stay under `react-frontend/src/assets/game/`.
- Raw or unused source sheets are not required for the game to build.
- The game no longer depends on the removed Java backend or budgeting pages.
