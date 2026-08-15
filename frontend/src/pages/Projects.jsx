import React from "react";
import { FolderKanban } from "lucide-react";

export default function Projects() {

  const projects = [
    ["Rajasthan Solar Park", "In Progress"],
    ["Gujarat Wind Farm", "Completed"],
    ["Maharashtra Hybrid Project", "In Progress"],
    ["Kutch Mega Solar Project", "Planning"]
  ];

  return (
    <div className="page-content">

      <div className="page-title">

        <FolderKanban />

        <div>
          <h1>Projects</h1>
          <p>
            Manage renewable energy projects.
          </p>
        </div>

      </div>

      <div className="projects-grid">

        {projects.map(([name, status]) => (

          <div
            className="project-card"
            key={name}
          >

            <FolderKanban />

            <h3>{name}</h3>

            <span>{status}</span>

            <p>
              Renewable energy deployment project
              under the intelligence platform.
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}