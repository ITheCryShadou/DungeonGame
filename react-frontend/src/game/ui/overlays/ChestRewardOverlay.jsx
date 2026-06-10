export default function ChestRewardOverlay({ reward, onClose }) {
  if (!reward) return null;

  return (
    <div className="tarot-overlay">
      <div className="tarot-panel">
        <p className="tarot-kicker">Chest reward</p>
        <h2>{reward.title}</h2>
        <p>{reward.description}</p>
        <button type="button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
