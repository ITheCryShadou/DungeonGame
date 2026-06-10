export const STORAGE_KEYS = {
  coins: "roguelike.wallet.coins",
  heroes: "roguelike.unlockedHeroes",
  hero: "roguelike.selectedHero",
  level: "roguelike.selectedLevel",
};

function getLocalStorage() {
  return typeof window !== "undefined" ? window.localStorage : null;
}

export function readNumber(key, fallback) {
  const storage = getLocalStorage();
  const value = Number(storage?.getItem(key));
  return Number.isFinite(value) ? value : fallback;
}

export function readJson(key, fallback) {
  const storage = getLocalStorage();
  try {
    return JSON.parse(storage?.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
}

export function writeValue(key, value) {
  getLocalStorage()?.setItem(key, String(value));
}

export function writeJson(key, value) {
  getLocalStorage()?.setItem(key, JSON.stringify(value));
}

export function loadWalletCoins() {
  return readNumber(STORAGE_KEYS.coins, 0);
}

export function saveWalletCoins(coins) {
  writeValue(STORAGE_KEYS.coins, coins);
}

export function loadUnlockedHeroes() {
  const saved = readJson(STORAGE_KEYS.heroes, ["nox"]);
  return saved.includes("nox") ? saved : ["nox"];
}

export function saveUnlockedHeroes(heroIds) {
  writeJson(STORAGE_KEYS.heroes, heroIds);
}

export function loadSelectedHero() {
  return getLocalStorage()?.getItem(STORAGE_KEYS.hero) || "nox";
}

export function saveSelectedHero(heroId) {
  writeValue(STORAGE_KEYS.hero, heroId);
}

export function loadSelectedLevel() {
  return getLocalStorage()?.getItem(STORAGE_KEYS.level) || "skeleton";
}

export function saveSelectedLevel(levelId) {
  writeValue(STORAGE_KEYS.level, levelId);
}
