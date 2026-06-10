export default function PauseOverlay({ open, onResume, onExit }) {
  if (!open) return null;

  return (
    <div className="settings-overlay">
      <div className="settings-panel">
        <h2>Settings</h2>
        <p>Game is paused. Press Esc to resume.</p>
        <div className="settings-actions">
          <button type="button" onClick={onResume}>
            Resume
          </button>
          <button type="button" onClick={onExit}>
            Exit to main menu
          </button>
        </div>
      </div>
    </div>
  );
}
