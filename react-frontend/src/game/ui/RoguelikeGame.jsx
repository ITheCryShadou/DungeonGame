import { useEffect, useRef, useState } from "react";
import { createRoguelikeGame } from "../createRoguelikeGame";
import { HEROES } from "../config/gameBalance";
import { createCampaignSequence } from "../systems/campaign/campaignSystem";
import {
  loadSelectedHero,
  loadSelectedLevel,
  loadUnlockedHeroes,
  loadWalletCoins,
  saveSelectedHero,
  saveSelectedLevel,
  saveUnlockedHeroes,
  saveWalletCoins,
} from "../utils/saveData";
import heroIcon from "../../assets/game/heroes/nox/Nox-Icon.png";
import Archive from "./archive/Archive";
import BossHealthBar from "./hud/BossHealthBar";
import CurrencyBar from "./hud/CurrencyBar";
import DodgeStat from "./hud/DodgeStat";
import GameHUD from "./hud/GameHUD";
import HeartsBar from "./hud/HeartsBar";
import GameMainMenu, { HERO_IMAGES } from "./menu/GameMainMenu";
import GameSettings from "./menu/GameSettings";
import Minimap from "./minimap/Minimap";
import CardRewardOverlay from "./overlays/CardRewardOverlay";
import DeathScreen from "./overlays/DeathScreen";
import MerchantOverlay from "./overlays/MerchantOverlay";
import PauseOverlay from "./overlays/PauseOverlay";
import VictoryScreen from "./overlays/VictoryScreen";
import "../styles/RoguelikeGame.css";

function RoguelikeGame() {
  const gameHostRef = useRef(null);
  const gameRef = useRef(null);
  const [screen, setScreen] = useState("menu");
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [archiveOpen, setArchiveOpen] = useState(false);
  const [archiveTab, setArchiveTab] = useState("heroes");
  const [archiveEntryId, setArchiveEntryId] = useState("nox");
  const [archiveAnimationIndex, setArchiveAnimationIndex] = useState(0);
  const [tarotOffer, setTarotOffer] = useState(null);
  const [shopOffer, setShopOffer] = useState(null);
  const [runResult, setRunResult] = useState(null);
  const [runSeed, setRunSeed] = useState(0);
  const [chosenTarotId, setChosenTarotId] = useState(null);
  const [buyingCardId, setBuyingCardId] = useState(null);
  const [stats, setStats] = useState(null);
  const [walletCoins, setWalletCoins] = useState(() => loadWalletCoins());
  const [unlockedHeroes, setUnlockedHeroes] = useState(() => loadUnlockedHeroes());
  const [selectedHero, setSelectedHero] = useState(() => loadSelectedHero());
  const [selectedLevel, setSelectedLevel] = useState(() => loadSelectedLevel());

  useEffect(() => {
    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, []);

  useEffect(() => {
    if (screen !== "playing" || !gameHostRef.current || gameRef.current) return;

    gameRef.current = createRoguelikeGame(gameHostRef.current, {
      heroId: selectedHero,
      levelId: selectedLevel === "campaign" ? "skeleton" : selectedLevel,
      levelSequence: selectedLevel === "campaign" ? createCampaignSequence() : [selectedLevel],
      startingCoins: walletCoins,
      onTarotOffer(cards, chooseCard) {
        setTarotOffer({ cards, chooseCard });
      },
      onStatsChange(nextStats) {
        setStats(nextStats);
      },
      onShopOffer(cards, buyCard, closeShop, rerollApi) {
        setShopOffer({
          cards,
          buyCard,
          closeShop,
          rerollApi,
          rerollState: rerollApi?.getState?.() ?? { coinCost: 10, gemCost: 1, gemUsed: false },
          purchased: [],
        });
      },
      onRunComplete(result) {
        setRunResult(result);
      },
    });

    return () => {
      gameRef.current?.destroy(true);
      gameRef.current = null;
    };
  }, [screen, selectedHero, selectedLevel, walletCoins, runSeed]);

  useEffect(() => {
    const scene = gameRef.current?.scene?.getScene?.("RoguelikeScene");

    if (!scene || tarotOffer || shopOffer || runResult) return;

    if (settingsOpen) {
      scene.scene.pause();
    } else {
      scene.scene.resume();
    }
  }, [settingsOpen, tarotOffer, shopOffer, runResult]);

  useEffect(() => {
    function handlePauseKey(event) {
      if (event.key !== "Escape" || screen !== "playing" || tarotOffer || shopOffer || runResult) return;
      event.preventDefault();
      setSettingsOpen((open) => !open);
    }

    window.addEventListener("keydown", handlePauseKey);
    return () => window.removeEventListener("keydown", handlePauseKey);
  }, [screen, tarotOffer, shopOffer, runResult]);

  function chooseTarot(cardId) {
    if (!tarotOffer || chosenTarotId) return;
    setChosenTarotId(cardId);
    window.setTimeout(() => {
      tarotOffer.chooseCard(cardId);
      setTarotOffer(null);
      setChosenTarotId(null);
    }, 420);
  }

  function buyShopCard(cardId) {
    if (!shopOffer || shopOffer.purchased.includes(cardId) || buyingCardId) return;

    const bought = shopOffer.buyCard(cardId);
    if (bought) {
      setBuyingCardId(cardId);
      setShopOffer((offer) => ({
        ...offer,
        purchased: [...offer.purchased, cardId],
      }));
      window.setTimeout(() => setBuyingCardId(null), 520);
    }
  }

  function rerollShop(currency) {
    if (!shopOffer) return;
    const result = currency === "gem"
      ? shopOffer.rerollApi?.rerollGem?.()
      : shopOffer.rerollApi?.rerollCoins?.();
    if (!result) return;
    setShopOffer((offer) => ({
      ...offer,
      cards: result.cards,
      rerollState: result.state,
    }));
  }

  function closeShop() {
    shopOffer?.closeShop();
    setShopOffer(null);
  }

  function startGame() {
    setStats(null);
    setTarotOffer(null);
    setShopOffer(null);
    setRunResult(null);
    setChosenTarotId(null);
    setBuyingCardId(null);
    setSettingsOpen(false);
    setRunSeed((value) => value + 1);
    setScreen("playing");
  }

  function saveRunRewards(result) {
    const nextCoins = result?.coins ?? walletCoins;
    setWalletCoins(nextCoins);
    saveWalletCoins(nextCoins);
  }

  function finishRun(result, { saveRewards = true } = {}) {
    if (saveRewards) {
      saveRunRewards(result);
    }
    setTarotOffer(null);
    setShopOffer(null);
    setRunResult(null);
    setChosenTarotId(null);
    setBuyingCardId(null);
    setSettingsOpen(false);
    gameRef.current?.destroy(true);
    gameRef.current = null;
    setScreen("menu");
  }

  function restartRun() {
    setTarotOffer(null);
    setShopOffer(null);
    setRunResult(null);
    setChosenTarotId(null);
    setBuyingCardId(null);
    setSettingsOpen(false);
    setStats(null);
    gameRef.current?.destroy(true);
    gameRef.current = null;
    setRunSeed((value) => value + 1);
    setScreen("playing");
  }

  function continueCampaign() {
    runResult?.continueCampaign?.();
    setRunResult(null);
  }

  function selectHero(heroId) {
    if (!unlockedHeroes.includes(heroId)) return;
    setSelectedHero(heroId);
    saveSelectedHero(heroId);
  }

  function buyHero(heroId) {
    const hero = HEROES[heroId];
    if (!hero || unlockedHeroes.includes(heroId) || walletCoins < hero.price) return;

    const nextCoins = walletCoins - hero.price;
    const nextHeroes = [...unlockedHeroes, heroId];
    setWalletCoins(nextCoins);
    setUnlockedHeroes(nextHeroes);
    setSelectedHero(heroId);
    saveWalletCoins(nextCoins);
    saveUnlockedHeroes(nextHeroes);
    saveSelectedHero(heroId);
  }

  function selectLevel(levelId) {
    setSelectedLevel(levelId);
    saveSelectedLevel(levelId);
  }

  function exitToMain() {
    gameRef.current?.destroy(true);
    gameRef.current = null;
    setRunResult(null);
    setChosenTarotId(null);
    setBuyingCardId(null);
    setScreen("menu");
  }

  if (screen === "menu") {
    return (
      <div className="game-menu">
        <GameMainMenu
          selectedHero={selectedHero}
          selectedLevel={selectedLevel}
          walletCoins={walletCoins}
          unlockedHeroes={unlockedHeroes}
          onStartGame={startGame}
          onSelectHero={selectHero}
          onBuyHero={buyHero}
          onSelectLevel={selectLevel}
          onOpenSettings={() => setSettingsOpen(true)}
          onOpenArchive={() => setArchiveOpen(true)}
          onExit={exitToMain}
        />

        <GameSettings open={settingsOpen} onClose={() => setSettingsOpen(false)} />

        {archiveOpen && (
          <Archive
            tab={archiveTab}
            entryId={archiveEntryId}
            animationIndex={archiveAnimationIndex}
            onTabChange={setArchiveTab}
            onEntryChange={setArchiveEntryId}
            onAnimationChange={setArchiveAnimationIndex}
            onClose={() => setArchiveOpen(false)}
          />
        )}
      </div>
    );
  }

  return (
    <div className="roguelike-shell">
      <button
        type="button"
        className="game-settings-button"
        onClick={() => setSettingsOpen(true)}
      >
        Settings
      </button>

      <section className="roguelike-stage">
        <div ref={gameHostRef} className="roguelike-canvas" />

        <GameHUD stats={stats} />

        {stats?.boss && stats.bossHealth > 0 && <BossHealthBar stats={stats} />}

        {!stats && !tarotOffer && !shopOffer && (
          <div className="game-loading">
            <span>Loading dungeon...</span>
          </div>
        )}

        <CardRewardOverlay
          offer={tarotOffer}
          chosenTarotId={chosenTarotId}
          onChoose={chooseTarot}
        />

        <MerchantOverlay
          offer={shopOffer}
          stats={stats}
          buyingCardId={buyingCardId}
          onBuy={buyShopCard}
          onReroll={rerollShop}
          onClose={closeShop}
        />

        {runResult?.outcome === "death" && (
          <DeathScreen
            result={runResult}
            heroImage={HERO_IMAGES[runResult.heroId] ?? heroIcon}
            onRestart={restartRun}
            onMainMenu={() => finishRun(runResult, { saveRewards: false })}
          />
        )}

        {(runResult?.outcome === "victory" || runResult?.outcome === "campaign-level") && (
          <VictoryScreen
            result={runResult}
            onContinueCampaign={continueCampaign}
            onEndRun={() => finishRun(runResult, { saveRewards: true })}
            onMainMenu={() => finishRun(runResult, { saveRewards: true })}
          />
        )}
      </section>

      <aside className="roguelike-panel">
        <h1>Roguelike</h1>
        {stats && <Minimap stats={stats} />}
        <div className="stat-list">
          <p>Floor: {stats?.floor ?? 1}/5</p>
          <p>
            Room:{" "}
            {stats?.boss
              ? "Boss"
              : `${stats?.room ?? 1}/${stats?.roomCount ?? 3}`}
          </p>
          <HeartsBar
            hearts={stats?.hearts ?? 4}
            maxHearts={stats?.maxHearts ?? 4}
            tempHearts={stats?.tempHearts ?? 0}
            greenHearts={stats?.greenHearts ?? 0}
          />
          <CurrencyBar
            className="panel-currency"
            coins={stats?.coins ?? 0}
            gems={stats?.gems ?? 0}
          />
          <p>Enemies: {stats?.enemies ?? 0}</p>
          <p>Speed: {stats?.speed ?? 210}</p>
          <p>Damage: {stats?.damage ?? 1}</p>
          <p>Crit: {stats?.critChance ?? 5}%</p>
          <DodgeStat value={stats?.dodgeChance ?? 0} />
          <p>Attack cd: {stats?.attackCooldown ?? 420}ms</p>
          <p>
            Skill E:{" "}
            {(stats?.skillCooldownRemaining ?? 0) <= 0
              ? "Ready"
              : `${stats?.skillCooldownRemaining}s`}
          </p>
          <p>Projectile: {stats?.projectileAttack ? "yes" : "no"}</p>
          <p>
            Builds: F{stats?.synergies?.fire ?? 0} / B{stats?.synergies?.blueHeart ?? 0} / C
            {stats?.synergies?.crit ?? 0} / P{stats?.synergies?.poison ?? 0} / I{stats?.synergies?.ice ?? 0}
          </p>
        </div>
      </aside>

      <PauseOverlay
        open={settingsOpen}
        onResume={() => setSettingsOpen(false)}
        onExit={exitToMain}
      />
    </div>
  );
}

export default RoguelikeGame;
