function formatRunTime(ms = 0) {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${minutes}:${seconds}`;
}

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

export default function VictoryScreen({ result, onContinueCampaign, onEndRun, onMainMenu }) {
  const isCampaignStep = result.outcome === "campaign-level";
  const rewards = [
    `${result.coinsGained} coins`,
    `${result.gems} gems`,
  ];

  return (
    <div className="result-overlay">
      <section className="result-panel victory-panel">
        <div className="result-content wide">
          <p className="result-kicker">{isCampaignStep ? result.title : "Level cleared"}</p>
          <h2>Victory</h2>
          <div className="result-grid">
            <span>Completed level<strong>{result.levelTitle}</strong></span>
            <span>Time<strong>{formatRunTime(result.elapsedMs)}</strong></span>
            <span>Rewards<strong>{rewards.join(" / ")}</strong></span>
            <span>Boss reward<strong>{result.bossRewards?.join(", ") || "None"}</strong></span>
            <span>Unlocked content<strong>{result.unlockedContent?.join(", ") || "None yet"}</strong></span>
            <span>Next campaign level<strong>{result.campaign?.nextLevelTitle || "None"}</strong></span>
          </div>
          <div className="result-section">
            <h3>Selected cards</h3>
            <ResultCards cards={result.selectedCards} />
          </div>
          <div className="result-actions">
            {isCampaignStep ? (
              <>
                <button type="button" onClick={onContinueCampaign}>Continue campaign</button>
                <button type="button" onClick={onEndRun}>End run and save rewards</button>
              </>
            ) : (
              <button type="button" onClick={onMainMenu}>Main menu</button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
