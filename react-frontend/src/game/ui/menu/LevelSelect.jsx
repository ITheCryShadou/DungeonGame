import { LEVELS } from "../../config/gameBalance";
import CampaignSelect from "./CampaignSelect";

function levelDescription(level) {
  if (level.id === "campaign") return <CampaignSelect />;
  if (level.id === "hell") return <span>Lava rooms, tougher pacing</span>;
  if (level.id === "icy") return <span>Frost rooms, traps, winter magic</span>;
  return <span>Classic skeleton run</span>;
}

export default function LevelSelect({ selectedLevel, onSelectLevel }) {
  return (
    <div className="menu-section">
      <h2>Level</h2>
      <div className="menu-choice-grid">
        {Object.values(LEVELS).map((level) => (
          <button
            key={level.id}
            type="button"
            className={selectedLevel === level.id ? "menu-choice active" : "menu-choice"}
            onClick={() => onSelectLevel(level.id)}
          >
            <strong>{level.title}</strong>
            {levelDescription(level)}
          </button>
        ))}
      </div>
    </div>
  );
}
