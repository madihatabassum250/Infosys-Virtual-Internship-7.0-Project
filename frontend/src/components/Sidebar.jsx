import React from "react";

import {
  LayoutDashboard,
  Sun,
  Wind,
  Target,
  Map,
  Sparkles,
  FolderKanban,
  FileText,
  Database,
  Bell,
  Settings,
  CircleHelp,
  Bot
} from "lucide-react";

const menuItems = [
  ["Dashboard", LayoutDashboard],
  ["Solar Analysis", Sun],
  ["Wind Analysis", Wind],
  ["Site Suitability", Target],
  ["Map Explorer", Map],
  ["AI Recommendations", Sparkles],
  ["Projects", FolderKanban],
  ["Reports", FileText],
  ["Data Sources", Database],
  ["Alerts", Bell],
  ["Settings", Settings]
];

export default function Sidebar({ activePage, setActivePage }) {

  return (
    <aside className="sidebar">

      <div className="brand">

        <div className="brand-logo">
          <Sun size={31} />
          <Wind size={27} />
        </div>

        <h2>Solar & Wind</h2>

        <p>
          Deployment Intelligence
          <br />
          Platform
        </p>

      </div>

      <nav className="sidebar-nav">

        {menuItems.map(([name, Icon]) => (

          <button
            key={name}
            className={`nav-item ${
              activePage === name ? "active" : ""
            }`}
            onClick={() => setActivePage(name)}
          >

            <Icon size={18} />

            <span>{name}</span>

            {name === "Alerts" && (
              <em>8</em>
            )}

          </button>

        ))}

      </nav>

      <div className="assistant-card">

        <div className="assistant-heading">
          <Bot size={22} />

          <div>
            <strong>AI Assistant</strong>
            <small>● Online</small>
          </div>
        </div>

        <p>
          Ask me anything about solar, wind potential
          and site selection.
        </p>

        <button
          onClick={() =>
            setActivePage("AI Recommendations")
          }
        >
          Ask AI →
        </button>

      </div>

      <div className="help-link">
        <CircleHelp size={17} />
        Help & Support
      </div>

      <div className="theme-control">
        <span>☼ Theme</span>
        <span>◐</span>
      </div>

    </aside>
  );
}