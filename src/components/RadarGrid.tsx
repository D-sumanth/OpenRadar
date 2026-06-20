import { mission } from "@/data/mission";

export function RadarGrid() {
  const activeCount = Math.min(mission.supporterCount, mission.supporterTarget);
  const dots = Array.from({ length: mission.supporterTarget }, (_, index) => index < activeCount);

  return (
    <div className="radar-panel" aria-label={`${activeCount} of ${mission.supporterTarget} radar signals active`}>
      <div className="radar-sweep" />
      <div className="radar-dot-grid">
        {dots.map((active, index) => (
          <span
            // Stable static grid; supporter index maps to one radar signal slot.
            key={index}
            className={active ? "radar-dot radar-dot-active" : "radar-dot"}
          />
        ))}
      </div>
    </div>
  );
}
