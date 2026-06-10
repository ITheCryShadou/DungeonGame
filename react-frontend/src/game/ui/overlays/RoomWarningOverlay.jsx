export default function RoomWarningOverlay({ warning }) {
  if (!warning) return null;

  return (
    <div className="room-warning-overlay">
      <strong>{warning}</strong>
    </div>
  );
}
