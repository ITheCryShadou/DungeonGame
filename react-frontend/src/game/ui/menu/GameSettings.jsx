export default function GameSettings({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="settings-overlay">
      <div className="settings-panel">
        <h2>Settings</h2>
        <p>Controls: WASD, LMB, E, Shift.</p>
        <p>Audio and key rebinding can be added next.</p>
        <button type="button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}
