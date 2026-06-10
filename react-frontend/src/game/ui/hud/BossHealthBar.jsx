import { useEffect, useRef, useState } from "react";
import bossHotBarSkeleton from "../../../assets/game/boss-hotbar-skeleton.png";
import bossHotBarHell from "../../../assets/game/boss-hotbar-hell.png";

const BOSS_HOT_BARS = {
  skeleton: bossHotBarSkeleton,
  hell: bossHotBarHell,
  icy: bossHotBarSkeleton,
};

export default function BossHealthBar({ stats }) {
  const ratio = stats.bossMaxHealth > 0
    ? Math.max(0, Math.min(1, stats.bossHealth / stats.bossMaxHealth))
    : 0;
  const [shownRatio, setShownRatio] = useState(0);
  const bossKey = `${stats.levelId}-${stats.bossType}-${stats.floor}`;
  const lastBossKey = useRef(null);

  useEffect(() => {
    if (lastBossKey.current !== bossKey) {
      lastBossKey.current = bossKey;
      setShownRatio(0);
      const timer = window.setTimeout(() => setShownRatio(ratio), 80);
      return () => window.clearTimeout(timer);
    }

    setShownRatio(ratio);
    return undefined;
  }, [bossKey, ratio]);

  if (ratio <= 0) return null;

  return (
    <div className="boss-health-bar" aria-label={`${stats.bossName} HP`}>
      <div className="boss-health-track">
        <span style={{ width: `${shownRatio * 100}%` }} />
      </div>
      <img src={BOSS_HOT_BARS[stats.bossType] ?? bossHotBarSkeleton} alt="" aria-hidden="true" />
      <strong>{stats.bossName}</strong>
      <em>
        {Math.ceil(stats.bossHealth)}/{stats.bossMaxHealth}
      </em>
    </div>
  );
}
