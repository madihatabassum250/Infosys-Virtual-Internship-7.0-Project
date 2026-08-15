import React from "react";

export default function PerformanceChart() {

  return (
    <section className="panel performance-panel">

      <div className="panel-header">

        <h3>Performance Overview</h3>

        <select>
          <option>This Year</option>
          <option>Last Year</option>
        </select>

      </div>

      <div className="chart-legend">

        <span className="solar-line">
          ● Solar Potential (kWh/m²/day)
        </span>

        <span className="wind-line">
          ● Wind Potential (m/s)
        </span>

      </div>

      <div className="performance-chart">

        <svg viewBox="0 0 600 220">

          <polyline
            points="
            0,155
            35,145
            70,135
            105,112
            140,150
            175,132
            210,115
            245,95
            280,115
            315,120
            350,105
            385,87
            420,62
            455,95
            490,72
            525,82
            560,65
            600,92"
            fill="none"
            stroke="#f5a623"
            strokeWidth="4"
          />

          <polyline
            points="
            0,190
            35,180
            70,170
            105,150
            140,185
            175,165
            210,145
            245,125
            280,160
            315,145
            350,130
            385,118
            420,145
            455,165
            490,140
            525,155
            560,132
            600,172"
            fill="none"
            stroke="#4287ff"
            strokeWidth="4"
          />

        </svg>

      </div>

      <div className="months">
        <span>Jan</span>
        <span>Feb</span>
        <span>Mar</span>
        <span>Apr</span>
        <span>May</span>
        <span>Jun</span>
        <span>Jul</span>
        <span>Aug</span>
        <span>Sep</span>
        <span>Oct</span>
        <span>Nov</span>
        <span>Dec</span>
      </div>

    </section>
  );
}