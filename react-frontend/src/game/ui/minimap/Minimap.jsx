const ROOM_TYPE_META = {
  combat: { label: "Combat", short: "C", className: "combat" },
  award: { label: "Award room", short: "A", className: "award" },
  challenge: { label: "Challenge room", short: "T", className: "challenge" },
  cursed: { label: "Cursed room", short: "X", className: "cursed" },
  rest: { label: "Rest room", short: "R", className: "rest" },
  boss: { label: "Boss room", short: "B", className: "boss" },
};

export default function Minimap({ stats }) {
  const roomCount = stats?.roomCount ?? 0;
  if (!roomCount) return null;

  const rooms = Array.from({ length: roomCount }, (_, index) => {
    const roomNumber = index + 1;
    const isBossRoom = stats?.floor === 5 && roomNumber === roomCount;
    const type = isBossRoom ? "boss" : (stats?.roomTypes?.[index] ?? "combat");
    return {
      roomNumber,
      type,
      meta: ROOM_TYPE_META[type] ?? ROOM_TYPE_META.combat,
      isCurrent: roomNumber === stats?.room,
      isVisited: roomNumber < (stats?.room ?? 1),
    };
  });

  return (
    <section className="floor-minimap" aria-label="Floor mini-map">
      <div className="floor-minimap-header">
        <span>Floor map</span>
        <strong>{stats?.floor ?? 1}/5</strong>
      </div>
      <div className="floor-minimap-track">
        {rooms.map((room, index) => (
          <div key={room.roomNumber} className="floor-minimap-node-wrap">
            <span
              className={[
                "floor-minimap-node",
                room.meta.className,
                room.isCurrent ? "current" : "",
                room.isVisited ? "visited" : "",
              ].filter(Boolean).join(" ")}
              title={`${room.roomNumber}. ${room.meta.label}`}
              aria-label={`${room.roomNumber}. ${room.meta.label}${room.isCurrent ? ", current" : ""}`}
            >
              {room.meta.short}
            </span>
            {index < rooms.length - 1 && <em aria-hidden="true" />}
          </div>
        ))}
      </div>
      <div className="floor-minimap-legend">
        {Object.entries(ROOM_TYPE_META).map(([type, meta]) => (
          <span key={type}>
            <i className={meta.className} />
            {meta.label}
          </span>
        ))}
      </div>
    </section>
  );
}
