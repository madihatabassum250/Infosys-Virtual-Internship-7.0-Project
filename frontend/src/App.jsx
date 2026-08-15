import React, { useState } from "react";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import SolarAnalysis from "./pages/SolarAnalysis";
import WindAnalysis from "./pages/WindAnalysis";
import SiteSuitability from "./pages/SiteSuitability";
import MapExplorer from "./pages/MapExplorer";
import AIRecommendations from "./pages/AIRecommendations";
import Projects from "./pages/Projects";
import Reports from "./pages/Reports";
import DataSources from "./pages/DataSources";
import Alerts from "./pages/Alerts";
import Settings from "./pages/Settings";

function App() {

  const [activePage, setActivePage] =
    useState("Dashboard");

  function renderPage() {

    switch (activePage) {

      case "Solar Analysis":
        return <SolarAnalysis />;

      case "Wind Analysis":
        return <WindAnalysis />;

      case "Site Suitability":
        return <SiteSuitability />;

      case "Map Explorer":
        return <MapExplorer />;

      case "AI Recommendations":
        return <AIRecommendations />;

      case "Projects":
        return <Projects />;

      case "Reports":
        return <Reports />;

      case "Data Sources":
        return <DataSources />;

      case "Alerts":
        return <Alerts />;

      case "Settings":
        return <Settings />;

      default:
        return (
          <Dashboard
            setActivePage={setActivePage}
          />
        );
    }
  }

  return (
    <div className="app">

      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <div className="main">

        <Navbar />

        <div className="page-container">
          {renderPage()}
        </div>

      </div>

    </div>
  );
}

export default App;