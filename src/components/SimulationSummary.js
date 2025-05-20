// src/components/SimulationSummary.js
import React from "react";
import { generatePolicySummary, generateFacilitySummary } from "../utils/summaryGenerator";

const SimulationSummary = ({ simulationData, facilitiesInstalled }) => {
  const policySummary = generatePolicySummary(simulationData);
  const facilitySummary = generateFacilitySummary(facilitiesInstalled);

  return (
    <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      <h3>Overall Policy Summary</h3>
      <p style={{ whiteSpace: "pre-wrap", marginBottom: 24 }}>{policySummary}</p>
    </div>
  );
};

export default SimulationSummary;
