import React from "react";

export default function StatCard({
  title,
  value,
  icon,
  footer,
  positive = false
}) {
  return (
    <div className="stat-card">

      <div className="stat-card-header">

        <div className="stat-icon">
          {icon}
        </div>

        <div>
          <div className="stat-title">
            {title}
          </div>

          <div className="stat-value">
            {value}
          </div>
        </div>

      </div>

      {footer && (
        <div className="stat-footer">
          <span className={positive ? "stat-positive" : "stat-muted"}>
            {footer}
          </span>
        </div>
      )}

    </div>
  );
}