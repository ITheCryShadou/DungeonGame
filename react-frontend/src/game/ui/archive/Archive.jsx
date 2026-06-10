import { ARCHIVE_ENEMIES, ARCHIVE_HEROES, ARCHIVE_TAROT } from "../../config/archive.config";
import AnimationPreview from "./AnimationPreview";
import ArchiveEnemyTab from "./ArchiveEnemyTab";
import ArchiveHeroTab from "./ArchiveHeroTab";
import ArchiveTarotTab from "./ArchiveTarotTab";

function entriesForTab(tab) {
  if (tab === "heroes") return ARCHIVE_HEROES;
  if (tab === "tarot") return ARCHIVE_TAROT;
  return ARCHIVE_ENEMIES;
}

function ArchiveListForTab({ tab, entries, activeEntry, onEntryChange }) {
  const props = { entries, activeEntry, onEntryChange };
  if (tab === "heroes") return <ArchiveHeroTab {...props} />;
  if (tab === "tarot") return <ArchiveTarotTab {...props} />;
  return <ArchiveEnemyTab {...props} />;
}

export default function Archive({
  tab,
  entryId,
  animationIndex,
  onTabChange,
  onEntryChange,
  onAnimationChange,
  onClose,
}) {
  const entries = entriesForTab(tab);
  const activeEntry = entries.find((entry) => entry.id === entryId) ?? entries[0];
  const activeAnimation = activeEntry.animations[animationIndex] ?? activeEntry.animations[0];

  function changeTab(nextTab) {
    const nextEntries = entriesForTab(nextTab);
    onTabChange(nextTab);
    onEntryChange(nextEntries[0].id);
    onAnimationChange(0);
  }

  function changeEntry(nextEntryId) {
    onEntryChange(nextEntryId);
    onAnimationChange(0);
  }

  return (
    <div className="archive-overlay">
      <section className="archive-panel">
        <header className="archive-header">
          <div>
            <p className="menu-kicker">Game archive</p>
            <h2>Archive</h2>
          </div>
          <button type="button" onClick={onClose}>
            Close
          </button>
        </header>

        <div className="archive-tabs">
          <button
            type="button"
            className={tab === "heroes" ? "active" : ""}
            onClick={() => changeTab("heroes")}
          >
            Heroes
          </button>
          <button
            type="button"
            className={tab === "enemies" ? "active" : ""}
            onClick={() => changeTab("enemies")}
          >
            Enemies
          </button>
          <button
            type="button"
            className={tab === "tarot" ? "active" : ""}
            onClick={() => changeTab("tarot")}
          >
            Tarot
          </button>
        </div>

        <div className="archive-layout">
          <ArchiveListForTab
            tab={tab}
            entries={entries}
            activeEntry={activeEntry}
            onEntryChange={changeEntry}
          />

          <article className="archive-detail">
            <div className="archive-profile">
              <div className="archive-icon-frame">
                <img src={activeEntry.icon} alt="" />
              </div>
              <div>
                <p className="menu-kicker">{activeEntry.type}</p>
                <h3>{activeEntry.name}</h3>
                <p>{activeEntry.description}</p>
              </div>
            </div>

            <div className="archive-main-preview">
              <div className="archive-preview-frame">
                <AnimationPreview animation={activeAnimation} />
              </div>
              <div className="archive-preview-info">
                <span>Animation</span>
                <strong>{activeAnimation.label}</strong>
              </div>
            </div>

            <div className="archive-animation-list">
              {activeEntry.animations.map((animation, index) => (
                <button
                  key={animation.label}
                  type="button"
                  className={activeAnimation.label === animation.label ? "active" : ""}
                  onClick={() => onAnimationChange(index)}
                >
                  <img src={animation.image} alt="" aria-hidden="true" />
                  <span>{animation.label}</span>
                </button>
              ))}
            </div>

            <div className="archive-info-grid">
              <section>
                <h4>Stats</h4>
                <div className="archive-stat-grid">
                  {activeEntry.stats.map((item) => (
                    <span key={item.label}>
                      {item.label}
                      <strong>{item.value}</strong>
                    </span>
                  ))}
                </div>
              </section>

              <section>
                <h4>Attacks</h4>
                <ul className="archive-attack-list">
                  {activeEntry.attacks.map((attack) => (
                    <li key={attack}>{attack}</li>
                  ))}
                </ul>
              </section>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
