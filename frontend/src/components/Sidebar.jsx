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
  ["Settings", Settings],
];


export default function Sidebar({
  activePage,
  setActivePage,
}) {

  return (

    <aside className="sidebar">

      {/* =====================================================
          BRAND
      ===================================================== */}

      <div className="brand">

        <div className="brand-logo">

          <Sun size={31} />

          <Wind size={27} />

        </div>


        <h2>
          Solar & Wind
        </h2>


        <p>
          Deployment Intelligence
          <br />
          Platform
        </p>

      </div>


      {/* =====================================================
          NAVIGATION
      ===================================================== */}

      <nav className="sidebar-nav">

        {menuItems.map(
          ([name, Icon]) => (

            <button
              key={name}
              type="button"
              className={`nav-item ${
                activePage === name
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setActivePage(name)
              }
            >

              <Icon
                size={18}
                strokeWidth={1.8}
              />


              <span>
                {name}
              </span>


              {name === "Alerts" && (

                <em>
                  8
                </em>

              )}

            </button>

          )
        )}

      </nav>


      {/* =====================================================
          BOTTOM LINKS
          AI ASSISTANT REMOVED
      ===================================================== */}

      <div className="sidebar-bottom">

        <button
          type="button"
          className="sidebar-bottom-link"
        >

          <CircleHelp size={17} />

          <span>
            Help & Support
          </span>

        </button>


        <button
          type="button"
          className="sidebar-bottom-link theme-button"
        >

          <span>
            ☼ Theme
          </span>

          <span>
            ◐
          </span>

        </button>

      </div>

    </aside>

  );
}