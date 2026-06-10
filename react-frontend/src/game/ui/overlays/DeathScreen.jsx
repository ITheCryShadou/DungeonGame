import { HEROES } from "../../config/gameBalance";

function ResultCards({ cards = [] }) {
  if (cards.length === 0) {
    return <span className="result-empty">No cards selected</span>;
  }

  return (
    <div className="result-card-list">
      {cards.map((card, index) => (
        <span key={`${card.id}-${index}`}>
          <strong>{card.title}</strong>
          <em>{card.source}</em>
        </span>
      ))}
    </div>
  );
}

export default function DeathScreen({ result, heroImage, onRestart, onMainMenu }) {
  return (
    <div className="result-overlay">
      <section className="result-panel death-panel">
        <div className="result-hero">
          <img src={heroImage} alt="" />
        </div>
        <div className="result-content">
          <p className="result-kicker">Run ended</p>
          <h2>Death</h2>
          <div className="result-grid">
            <span>Hero<strong>{HEROES[result.heroId]?.name ?? result.heroId}</strong></span>
            <span>Level<strong>{result.levelTitle}</strong></span>
            <span>Floor<strong>{result.floor}/5</strong></span>
            <span>Room<strong>{result.room}/{result.roomCount}</strong></span>
            <span>Enemies killed<strong>{result.killedEnemies}</strong></span>
            <span>Coins gained<strong>{result.coinsGained}</strong></span>
            <span>Gems gained<strong>{result.gems}</strong></span>
            <span>Death reason<strong>{result.deathReason}</strong></span>
          </div>
          <div className="result-section">
            <h3>Selected cards</h3>
            <ResultCards cards={result.selectedCards} />
          </div>
          <div className="result-actions">
            <button type="button" onClick={onRestart}>Restart</button>
            <button type="button" onClick={onMainMenu}>Main menu</button>
          </div>
        </div>
      </section>
    </div>
  );
}
