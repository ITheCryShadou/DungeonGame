import tarotCardImage from "../../../assets/game/tarot-card.png";
import tarotCardHealImage from "../../../assets/game/tarot-card-heal.png";
import tarotCardHellImage from "../../../assets/game/tarot-card-hell.png";
import tarotCardHellBonusImage from "../../../assets/game/tarot-card-hell-bonus.png";
import tarotCardSkeletonImage from "../../../assets/game/tarot-card-skeleton.png";
import tarotCardCursedImage from "../../../assets/game/tarot-card-cursed.png";
import tarotCardHeroImage from "../../../assets/game/tarot-card-hero.png";
import tarotCardBossImage from "../../../assets/game/tarot-card-boss.png";
import tarotCardFrostImage from "../../../assets/game/tarot-card-frost.png";
import tarotCardFrost1Image from "../../../assets/game/tarot-card-frost-1.png";
import tarotCardFrost2Image from "../../../assets/game/tarot-card-frost-2.png";
import tarotCardFrost3Image from "../../../assets/game/tarot-card-frost-3.png";
import tarotCardSwamp1Image from "../../../assets/game/tarot-card-swamp-1.png";
import tarotCardSwamp2Image from "../../../assets/game/tarot-card-swamp-2.png";
import tarotCardSwamp3Image from "../../../assets/game/tarot-card-swamp-3.png";
import tarotCardHeaven1Image from "../../../assets/game/tarot-card-heaven-1.png";
import tarotCardHeaven2Image from "../../../assets/game/tarot-card-heaven-2.png";
import tarotCardHeaven3Image from "../../../assets/game/tarot-card-heaven-3.png";
import tarotCardAqua1Image from "../../../assets/game/tarot-card-aqua-1.png";
import tarotCardAqua2Image from "../../../assets/game/tarot-card-aqua-2.png";
import tarotCardAqua3Image from "../../../assets/game/tarot-card-aqua-3.png";

const TAROT_BG_VARIANTS = {
  frost: [tarotCardFrost1Image, tarotCardFrost2Image, tarotCardFrost3Image],
  poison: [tarotCardSwamp1Image, tarotCardSwamp2Image, tarotCardSwamp3Image],
  crit: [tarotCardHeaven1Image, tarotCardHeaven2Image, tarotCardHeaven3Image],
  blueHeart: [tarotCardAqua1Image, tarotCardAqua2Image, tarotCardAqua3Image],
};

function stableTarotVariant(card, images) {
  const key = card.id ?? card.title ?? "";
  const hash = Array.from(key).reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return images[hash % images.length];
}

export function tarotBackground(card) {
  if (card.theme === "cursed" || card.rarity === "cursed") return tarotCardCursedImage;
  if (card.theme === "hero" || card.rarity === "hero") return tarotCardHeroImage;
  if (card.theme === "boss" || card.rarity === "boss") return tarotCardBossImage;
  if (card.build === "poison") return stableTarotVariant(card, TAROT_BG_VARIANTS.poison);
  if (card.build === "crit") return stableTarotVariant(card, TAROT_BG_VARIANTS.crit);
  if (card.build === "ice" || card.theme === "frost") return stableTarotVariant(card, TAROT_BG_VARIANTS.frost);
  if (card.build === "blueHeart") return stableTarotVariant(card, TAROT_BG_VARIANTS.blueHeart);
  if (card.theme === "heart") return tarotCardHealImage;
  if (card.theme === "hell") return tarotCardHellImage;
  if (card.theme === "hellBonus") return tarotCardHellBonusImage;
  if (card.theme === "skeleton") return tarotCardSkeletonImage;
  if (card.theme === "frost") return tarotCardFrostImage;
  return tarotCardImage;
}

export function rarityLabel(card) {
  const value = card.rarity ?? "common";
  const labels = {
    common: "Common",
    rare: "Rare",
    epic: "Epic",
    cursed: "Cursed",
    hero: "Hero Card",
    boss: "Boss Card",
  };
  return labels[value] ?? "Common";
}

export function CardDescription({ card }) {
  return (
    <span>
      {card.previousDescription && (
        <span className="card-upgrade-old">{card.previousDescription}</span>
      )}
      <span className={card.previousDescription ? "card-upgrade-new" : ""}>
        {card.description}
      </span>
    </span>
  );
}

export default function CardRewardOverlay({ offer, chosenTarotId, onChoose }) {
  if (!offer) return null;

  return (
    <div className="tarot-overlay">
      <div className="tarot-panel">
        <p className="tarot-kicker">Floor cleared</p>
        <h2>Choose one tarot card</h2>
        <div className="tarot-grid">
          {offer.cards.map((card) => (
            <button
              key={card.id}
              type="button"
              className={[
                "tarot-card",
                `rarity-${card.rarity ?? "common"}`,
                card.isDuplicate ? "duplicate" : "",
                chosenTarotId === card.id ? "choosing" : "",
              ].filter(Boolean).join(" ")}
              onClick={() => onChoose(card.id)}
              disabled={Boolean(chosenTarotId)}
            >
              <span
                className="tarot-card-art"
                style={{ backgroundImage: `url(${tarotBackground(card)})` }}
              >
                <em className="card-rarity">{rarityLabel(card)}</em>
                <strong>{card.title}</strong>
                <CardDescription card={card} />
                {card.isDuplicate && <small>Upgrade available</small>}
              </span>
              <span className="card-tooltip">
                <strong>{card.title}</strong>
                <em>{rarityLabel(card)}</em>
                <CardDescription card={card} />
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
