import React from "react";
import { generatePolicySummary, generateFacilitySummary } from "../utils/summaryGenerator";

const SimulationSummary2 = ({ simulationData, facilitiesInstalled }) => {
  const policySummary = generatePolicySummary(simulationData);
  const facilitySummary = generateFacilitySummary(facilitiesInstalled);

  return (
    <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      <pre style={{ whiteSpace: "pre-wrap", background: "#f9f9f9", padding: 12, borderRadius: 6 }}>
        {facilitySummary}
      </pre>
    </div>
  );
};

export default SimulationSummary2;
