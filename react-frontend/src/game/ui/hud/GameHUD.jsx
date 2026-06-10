import CooldownBar from "./CooldownBar";
import CurrencyBar from "./CurrencyBar";
import HeartsBar from "./HeartsBar";

export default function GameHUD({ stats }) {
  if (!stats) return null;

  return (
    <div className="game-hud">
      <HeartsBar
        hearts={stats.hearts}
        maxHearts={stats.maxHearts}
        tempHearts={stats.tempHearts ?? 0}
        greenHearts={stats.greenHearts ?? 0}
      />
      <CurrencyBar coins={stats.coins ?? 0} gems={stats.gems ?? 0} />
      <CooldownBar
        remaining={stats.skillCooldownRemaining ?? 0}
        cooldown={stats.skillCooldown ?? 4500}
      />
    </div>
  );
}
