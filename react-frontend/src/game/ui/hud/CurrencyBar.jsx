import coinImage from "../../../assets/game/coin.png";
import gemImage from "../../../assets/game/gem.png";

export function CurrencyPill({ icon, value, label }) {
  return (
    <span className="currency-pill" aria-label={`${label}: ${value}`}>
      <img src={icon} alt="" aria-hidden="true" />
      <strong>{value}</strong>
    </span>
  );
}

export default function CurrencyBar({ coins = 0, gems = 0, className = "game-hud-currency" }) {
  return (
    <div className={className}>
      <CurrencyPill icon={coinImage} value={coins} label="Coins" />
      <CurrencyPill icon={gemImage} value={gems} label="Gems" />
    </div>
  );
}
