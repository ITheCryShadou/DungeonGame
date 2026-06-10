export function ArchiveEntryList({ entries, activeEntry, onEntryChange }) {
  return (
    <nav className="archive-list" aria-label="Archive entries">
      {entries.map((entry) => (
        <button
          key={entry.id}
          type="button"
          className={activeEntry.id === entry.id ? "archive-entry active" : "archive-entry"}
          onClick={() => onEntryChange(entry.id)}
        >
          <img src={entry.icon} alt="" aria-hidden="true" />
          <span>
            <strong>{entry.name}</strong>
            <em>{entry.type}</em>
          </span>
        </button>
      ))}
    </nav>
  );
}

export default function ArchiveHeroTab(props) {
  return <ArchiveEntryList {...props} />;
}
