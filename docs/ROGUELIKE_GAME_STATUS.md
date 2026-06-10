# Roguelike Game Status

Документ описывает актуальное состояние standalone-игры Chaos Dungeon.

## Где находится игра

- Вход приложения: `react-frontend/src/main.jsx`.
- Основной React UI игры: `react-frontend/src/game/ui/RoguelikeGame.jsx`.
- Phaser-сцена: `react-frontend/src/game/scenes/RoguelikeScene.js`.
- Баланс, герои, враги, боссы, комнаты, сундуки и tarot: `react-frontend/src/game/config/`.
- Игровые картинки и sprites: `react-frontend/src/assets/game/`.
- Сохранения в браузере: `react-frontend/src/game/utils/saveData.js`.

Старый budgeting/backend проект удален из runtime. Приложение теперь сразу открывает игру.

## Общая структура

- Жанр: top-down roguelike.
- Забег строится из комнат, тоннелей, врагов, наград и boss encounters.
- Доступные темы уровней: Skeleton Crypt, Hell Depths, Icy Kingdom.
- Chaos Campaign соединяет несколько уровней в один длинный run.
- Специальные комнаты: Award, Challenge, Cursed, Rest и Merchant.

## Управление

- `WASD` - движение.
- `ЛКМ` - обычная атака.
- `E` - активный навык героя.
- `Shift` - dash.
- `F` - взаимодействие с торговцем или объектами комнаты.
- `Esc` - пауза.

## Главное меню

В меню есть:

- старт игры;
- настройки;
- архив;
- выбор уровня;
- режим кампании;
- выбор героя;
- кошелек coins.

## Герои

### Nox

- Базовый герой.
- Магический стиль боя.
- Использует arcane projectiles, magic waves, dash shadow effects и super spell burst assets.

### Riven

- Дополнительный герой.
- Быстрый melee-стиль с клинком.
- Использует slash, dagger projectile effects и hero-specific upgrades.

## Уровни

### Skeleton Crypt

- Скелетные враги, препятствия, тоннели, merchant room и Skeleton Boss.
- Некоторые скелеты могут возрождаться.
- Skeleton Boss может воскреснуть один раз и призвать minions.

### Hell Depths

- Лавовые комнаты, hell enemies, hell obstacles и Infernal Boss.
- Infernal Boss имеет две фазы и более агрессивные projectile patterns во второй фазе.

### Icy Kingdom

- Ледяные комнаты, frost obstacles, spike traps, falling ice spikes и Frost Tyrant.
- Враги: FrostBladeWarrior, FrostPriest, FrozenKnight, IceAxeTitan, IcebladeMaster и IceWraith.
- Frost Tyrant может входить в ice shell phase и призывать Matriarch Soul.

## Награды и прогресс

- Сундуки могут давать coins, gems, potions, tarot cards и другие награды.
- Tarot поддерживает fire, blue heart, crit, poison, ice, boss, hero и cursed builds.
- Повторная карта улучшает уже выбранную карту.
- Blue hearts и green hearts работают как временная защита.
- Сохранения лежат локально в браузере.

## Архив

Архив содержит:

- героев;
- врагов;
- боссов;
- tarot cards;
- sprite previews и данные анимаций для подключенных assets.

## Архитектура

- React отвечает за меню, HUD, overlays, архив и reward screens.
- Phaser отвечает за playable scene, движение, бой, collisions, animations, комнаты, traps и enemies.
- Config-файлы отделяют баланс и контент от логики сцены.

## Заметки

- Runtime assets должны оставаться в `react-frontend/src/assets/game/`.
- Сырые или неиспользуемые source sheets не нужны для сборки игры.
- Игра больше не зависит от Java backend, budgeting pages или старых app providers.
