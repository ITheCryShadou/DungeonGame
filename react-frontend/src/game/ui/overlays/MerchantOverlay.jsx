import tarotTraveler1 from "../../../assets/game/tarot-traveler-1.png";
import tarotTraveler2 from "../../../assets/game/tarot-traveler-2.png";
import tarotTraveler3 from "../../../assets/game/tarot-traveler-3.png";
import travelerShopImage from "../../../assets/game/traveler/Traveler-Shop.png";
import coinImage from "../../../assets/game/coin.png";
import gemImage from "../../../assets/game/gem.png";
import { CurrencyPill } from "../hud/CurrencyBar";
import { CardDescription, rarityLabel, tarotBackground } from "./CardRewardOverlay";

const SHOP_CARD_IMAGES = {
  traveler1: tarotTraveler1,
  traveler2: tarotTraveler2,
  traveler3: tarotTraveler3,
};

export default function MerchantOverlay({
  offer,
  stats,
  buyingCardId,
  onBuy,
  onReroll,
  onClose,
}) {
  if (!offer) return null;

  return (
    <div className="shop-overlay">
      <div className="shop-panel">
        <div className="shop-traveler">
          <img src={travelerShopImage} alt="" />
        </div>
        <div className="shop-content">
          <div className="shop-heading">
            <p className="tarot-kicker">Traveler shop</p>
            <h2>Choose a tarot</h2>
            <CurrencyPill icon={gemImage} value={stats?.gems ?? 0} label="Gems" />
          </div>
          <div className="shop-card-grid">
            {offer.cards.map((card) => {
              const purchased = offer.purchased.includes(card.id);
              const canBuy = (stats?.gems ?? 0) >= 1 && !purchased;

              return (
                <button
                  key={card.id}
                  type="button"
                  className={[
                    "shop-card",
                    `rarity-${card.rarity ?? "common"}`,
                    card.isDuplicate ? "duplicate" : "",
                    buyingCardId === card.id ? "buying" : "",
                  ].filter(Boolean).join(" ")}
                  disabled={!canBuy}
                  onClick={() => onBuy(card.id)}
                >
                  <span
                    className="shop-card-art"
                    style={{
                      backgroundImage: `url(${card.theme === "hero" ? tarotBackground(card) : SHOP_CARD_IMAGES[card.asset]})`,
                    }}
                  >
                    <em className="card-rarity">{rarityLabel(card)}</em>
                    <strong>{card.title}</strong>
                    <CardDescription card={card} />
                    <em className="shop-card-cost">
                      <img src={gemImage} alt="" aria-hidden="true" /> 1
                    </em>
                  </span>
                  <span className="card-tooltip">
                    <strong>{card.title}</strong>
                    <em>{rarityLabel(card)}</em>
                    <CardDescription card={card} />
                  </span>
                  {purchased && <span className="shop-card-state">Bought</span>}
                </button>
              );
            })}
          </div>
          <div className="shop-reroll-row">
            <button
              type="button"
              className="shop-reroll"
              disabled={(stats?.coins ?? 0) < (offer.rerollState?.coinCost ?? 10)}
              onClick={() => onReroll("coin")}
            >
              Reroll <img src={coinImage} alt="" aria-hidden="true" /> {offer.rerollState?.coinCost ?? 10}
            </button>
            <button
              type="button"
              className="shop-reroll improved"
              disabled={offer.rerollState?.gemUsed || (stats?.gems ?? 0) < (offer.rerollState?.gemCost ?? 1)}
              onClick={() => onReroll("gem")}
            >
              Rare reroll <img src={gemImage} alt="" aria-hidden="true" /> {offer.rerollState?.gemCost ?? 1}
            </button>
          </div>
          <button type="button" className="shop-close" onClick={onClose}>
            Leave
          </button>
        </div>
      </div>
    </div>
  );
}
