import { HEROES } from "../../config/gameBalance";

export default function HeroSelect({
  heroImages,
  selectedHero,
  unlockedHeroes,
  walletCoins,
  onSelectHero,
  onBuyHero,
}) {
  return (
    <div className="menu-section">
      <h2>Heroes</h2>
      <div className="hero-shop-grid">
        {Object.values(HEROES).map((hero) => {
          const unlocked = unlockedHeroes.includes(hero.id);
          const selected = selectedHero === hero.id;

          return (
            <button
              key={hero.id}
              type="button"
              className={selected ? "hero-shop-card active" : "hero-shop-card"}
              onClick={() => (unlocked ? onSelectHero(hero.id) : onBuyHero(hero.id))}
              disabled={!unlocked && walletCoins < hero.price}
            >
              <img src={heroImages[hero.id]} alt="" />
              <strong>{hero.name}</strong>
              <span>{hero.description}</span>
              <em>
                {unlocked ? (selected ? "Selected" : "Select") : `${hero.price} coins`}
              </em>
            </button>
          );
        })}
      </div>
    </div>
  );
}
