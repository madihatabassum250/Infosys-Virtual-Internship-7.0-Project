import React from "react";

export default function PotentialDistribution({ distribution }) {

  if (!distribution) {
    return (
      <div className="analytics-card">
        <div className="analytics-card-header">
          <h3>Potential Distribution</h3>
        </div>

        <p className="empty-state">
          Analyze a location to see potential distribution.
        </p>
      </div>
    );
  }

  const excellent = distribution.find(
    item => item.name === "Excellent"
  )?.value || 0;

  const veryGood = distribution.find(
    item => item.name === "Very Good"
  )?.value || 0;

  const good = distribution.find(
    item => item.name === "Good"
  )?.value || 0;

  const moderate = distribution.find(
    item => item.name === "Moderate"
  )?.value || 0;

  const low = distribution.find(
    item => item.name === "Low"
  )?.value || 0;

  const excellentEnd = excellent * 3.6;
  const veryGoodEnd = excellentEnd + veryGood * 3.6;
  const goodEnd = veryGoodEnd + good * 3.6;
  const moderateEnd = goodEnd + moderate * 3.6;

  return (
    <div className="analytics-card">

      <div className="analytics-card-header">
        <h3>Potential Distribution</h3>

        <span className="panel-subtitle">
          Site classification
        </span>
      </div>

      <div className="distribution-content">

        <div
          className="donut"
          style={{
            background: `
              conic-gradient(
                #16c95c 0deg ${excellentEnd}deg,
                #6acb36 ${excellentEnd}deg ${veryGoodEnd}deg,
                #f6bd21 ${veryGoodEnd}deg ${goodEnd}deg,
                #f27a18 ${goodEnd}deg ${moderateEnd}deg,
                #ed3525 ${moderateEnd}deg 360deg
              )
            `
          }}
        >
          <div className="donut-center">
            <strong>100%</strong>
            <span>Potential</span>
          </div>
        </div>

        <div className="distribution-legend">

          <DistributionItem
            label="Excellent"
            value={excellent}
            className="excellent"
          />

          <DistributionItem
            label="Very Good"
            value={veryGood}
            className="very-good"
          />

          <DistributionItem
            label="Good"
            value={good}
            className="good"
          />

          <DistributionItem
            label="Moderate"
            value={moderate}
            className="moderate"
          />

          <DistributionItem
            label="Low"
            value={low}
            className="low"
          />

        </div>

      </div>

    </div>
  );
}


function DistributionItem({ label, value, className }) {

  return (
    <div className="distribution-item">

      <span className={`distribution-dot ${className}`} />

      <span>
        {label} — {value}%
      </span>

    </div>
  );
}