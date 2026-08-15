import React from "react";

const projects = [
  ["☀️", "Rajasthan Solar Park", "Updated 2h ago", "In Progress"],
  ["🌬️", "Gujarat Wind Farm", "Updated 5h ago", "Completed"],
  ["☀️", "Maharashtra Hybrid Project", "Updated 1d ago", "In Progress"],
  ["🌬️", "Kutch Mega Solar Project", "Updated 2d ago", "Planning"]
];

export default function RecentProjects() {

  return (
    <section className="panel recent-projects">

      <div className="panel-header">

        <h3>Recent Projects</h3>

        <button>View All</button>

      </div>

      {projects.map(
        ([icon, name, time, status]) => (

          <div
            className="project-row"
            key={name}
          >

            <div className="project-icon">
              {icon}
            </div>

            <div>
              <strong>{name}</strong>
              <small>{time}</small>
            </div>

            <em className={
              status === "Completed"
                ? "completed"
                : status === "Planning"
                ? "planning"
                : ""
            }>
              {status}
            </em>

          </div>

        )
      )}

    </section>
  );
}