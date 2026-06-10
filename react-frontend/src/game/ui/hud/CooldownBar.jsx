export default function CooldownBar({ remaining = 0, cooldown = 4500 }) {
  const cooldownSeconds = Math.max(0.1, cooldown / 1000);
  const progress = Math.max(0, Math.min(1, 1 - remaining / cooldownSeconds));
  const ready = remaining <= 0;

  return (
    <div className={ready ? "skill-cooldown ready" : "skill-cooldown"}>
      <span>E</span>
      <strong>{ready ? "Ready" : `${remaining.toFixed(1)}s`}</strong>
      <em style={{ width: `${progress * 100}%` }} />
    </div>
  );
}
