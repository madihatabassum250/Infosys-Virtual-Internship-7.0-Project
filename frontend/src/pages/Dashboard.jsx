import React, {useState} from "react";
import Sidebar from "../components/Sidebar";

import StatCard from "../components/StatCard";
import MapView from "../components/MapView";
import PerformanceChart from "../components/PerformanceChart";

import SiteSuitability from "../components/SiteSuitability";
import PotentialDistribution from "../components/PotentialDistribution";
import{
    calculateSiteSuitability,
    calculatePotentialDistribution
} from "../services/siteCalculationService";
import TopSites from "../components/TopSites";
import RecentProjects from "../components/RecentProjects";

import AnalyzeLocation from "../components/AnalyzeLocation";
import AIInsights from "../components/AIInsights";

function Dashboard() {
    const[suitability,setSuitability] = useState(null);
    const[distribution, setDistribution] = useState(null);
    const handleAnalysis = (environmentData) => {
        const result = calculateSiteSuitability(environmentData);
        const potential = calculatePotentialDistribution(result.total);
        setSuitability(result);
        setDistribution(potential);
    }
  return (
    <div className="app">
      <div className="app-shell">

        {/* LEFT SIDEBAR */}
        <Sidebar />

        {/* MAIN AREA */}
        <main className="main-content">

          <div className="dashboard">

            {/* =========================
                STAT CARDS
            ========================== */}
            <section className="stats-grid">

              <StatCard
                title="Avg. Solar Irradiance"
                value="5.21"
                unit="kWh/m²/day"
                change="8.2%"
                icon="☀️"
              />

              <StatCard
                title="Avg. Wind Speed"
                value="6.8"
                unit="m/s"
                change="5.6%"
                icon="💨"
              />

              <StatCard
                title="Total Sites Analyzed"
                value="1,248"
                change="12.5%"
                icon="▣"
              />

              <StatCard
                title="High Potential Sites"
                value="312"
                change="9.1%"
                icon="◉"
              />

              <StatCard
                title="Total Capacity Identified"
                value="1.25 GW"
                change="Across 312 Sites"
                icon="⚡"
              />

            </section>


            {/* =========================
                MAP + PERFORMANCE
            ========================== */}
            <section className="main-visual-grid">

              <div className="panel map-panel">
                <MapView />
              </div>

              <div className="panel chart-panel">
                <PerformanceChart />
              </div>

            </section>


            {/* =========================
                ANALYTICS CARDS
            ========================== */}
            <section className="analytics-grid">

              <div className="analytics-card">
                <SiteSuitability 
                suitability={suitability}/>
              </div>

              <div className="analytics-card">
                <PotentialDistribution  distribution={distribution}/>
              </div>

              <div className="analytics-card">
                <TopSites />
              </div>

              <div className="analytics-card">
                <RecentProjects />
              </div>

            </section>


            {/* =========================
                ANALYZE LOCATION
            ========================== */}
            <AnalyzeLocation  onAnalysis={handleAnalysis}/>


            {/* =========================
                AI INSIGHTS
            ========================== */}
            <AIInsights />

          </div>

        </main>

      </div>
    </div>
  );
}

export default Dashboard;