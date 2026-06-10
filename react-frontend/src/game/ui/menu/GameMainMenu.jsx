import heroIcon from "../../../assets/game/heroes/nox/Nox-Icon.png";
import rivenIcon from "../../../assets/game/heroes/riven/Riven-Icon.png";
import coinImage from "../../../assets/game/coin.png";
import { LEVELS } from "../../config/gameBalance";
import { CurrencyPill } from "../hud/CurrencyBar";
import HeroSelect from "./HeroSelect";
import LevelSelect from "./LevelSelect";

export const HERO_IMAGES = {
  nox: heroIcon,
  riven: rivenIcon,
};

export default function GameMainMenu({
  selectedHero,
  selectedLevel,
  walletCoins,
  unlockedHeroes,
  onStartGame,
  onSelectHero,
  onBuyHero,
  onSelectLevel,
  onOpenSettings,
  onOpenArchive,
  onExit,
}) {
  return (
    <>
      <div className="menu-hero-wrap">
        <img src={HERO_IMAGES[selectedHero]} alt="" className="menu-hero-sprite" />
      </div>

      <section className="menu-panel">
        <p className="menu-kicker">Chaos dungeon</p>
        <h1>Roguelike</h1>
        <div className="menu-wallet">
          <CurrencyPill icon={coinImage} value={walletCoins} label="Coins" />
          <span>{LEVELS[selectedLevel].title}</span>
        </div>

        <LevelSelect selectedLevel={selectedLevel} onSelectLevel={onSelectLevel} />

        <HeroSelect
          heroImages={HERO_IMAGES}
          selectedHero={selectedHero}
          unlockedHeroes={unlockedHeroes}
          walletCoins={walletCoins}
          onSelectHero={onSelectHero}
          onBuyHero={onBuyHero}
        />

        <div className="menu-actions">
          <button type="button" onClick={onStartGame}>
            Play
          </button>
          <button type="button" onClick={onOpenSettings}>
            Settings
          </button>
          <button type="button" onClick={onOpenArchive}>
            Archive
          </button>
          <button type="button" onClick={onExit}>
            Main menu
          </button>
        </div>
      </section>
    </>
  );
}
