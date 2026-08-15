import React from "react";

export default function StatCard({
  icon: Icon,
  title,
  value,
  unit,
  trend,
  color
}) {
  return (
    <div className={`stat-card ${color || ""}`}>

      <div className="stat-icon">
        {Icon && <Icon size={25} />}
      </div>

      <div className="stat-content">
        <span>{title}</span>

        <strong>{value}</strong>

        {unit && (
          <small>{unit}</small>
        )}

        {trend && (
          <label>
            ↑ {trend}
            <i> vs last month</i>
          </label>
        )}
      </div>

      <div className="mini-chart">
        {[25, 38, 29, 48, 35, 52, 42].map(
          (height, index) => (
            <i
              key={index}
              style={{ height: `${height}px` }}
            />
          )
        )}
      </div>

    </div>
  );
}