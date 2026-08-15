import React from "react";

export default function SiteSuitability({ suitability }) {

  if (!suitability) {
    return (
      <div className="analytics-card">
        <div className="analytics-card-header">
          <h3>Site Suitability</h3>
        </div>

        <p className="empty-state">
          Analyze a location to calculate site suitability.
        </p>
      </div>
    );
  }

  const {
    total,
    factors
  } = suitability;

  return (
    <div className="analytics-card">

      <div className="analytics-card-header">
        <h3>Site Suitability</h3>
        <span className="panel-subtitle">
          Calculated result
        </span>
      </div>

      <div className="suitability-content">

        <div className="suitability-score">
          <strong>{total}%</strong>
          <span>
            {total >= 75 ? "High" : total >= 50 ? "Moderate" : "Low"}
          </span>
        </div>

        <div className="suitability-bars">

          <SuitabilityBar
            label="Solar"
            value={factors.solar}
          />

          <SuitabilityBar
            label="Wind"
            value={factors.wind}
          />

          <SuitabilityBar
            label="Terrain"
            value={factors.terrain}
          />

          <SuitabilityBar
            label="Elevation"
            value={factors.elevation}
          />

          <SuitabilityBar
            label="Infrastructure"
            value={factors.infrastructure}
          />

        </div>

      </div>

    </div>
  );
}


function SuitabilityBar({ label, value }) {

  return (
    <div className="suitability-row">

      <div className="suitability-row-top">
        <span>{label}</span>
        <span>{value}%</span>
      </div>

      <div className="progress">
        <div
          className="progress-fill"
          style={{ width: `${value}%` }}
        />
      </div>

    </div>
  );
}