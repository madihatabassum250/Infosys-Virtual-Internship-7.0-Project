import React, {
  useEffect,
  useState,
} from "react";

import AnalyzeLocation from "../components/AnalyzeLocation";
import MapView from "../components/MapView";
import PerformanceChart from "../components/PerformanceChart";
import SiteSuitability from "../components/SiteSuitability";
import PotentialDistribution from "../components/PotentialDistribution";
import TopSites from "../components/TopSites";
import RecentProjects from "../components/RecentProjects";
import AIInsights from "../components/AIInsights";

import {
  Sun,
  Wind,
  MapPin,
  Zap,
  Target,
} from "lucide-react";

// ============================================================
// EMPTY ANALYSIS
// ============================================================

const emptyAnalysis = {
  village: "",
  district: "",
  state: "",
  country: "",
  date: "",

  latitude: null,
  longitude: null,

  displayName: "",

  avgSolar: 0,
  avgWind: 0,

  temperature: 0,
  humidity: 0,

  solarScore: 0,
  windScore: 0,

  suitabilityScore: 0,
  suitabilityCategory: "No Analysis",

  evaluationScores: {
    renewableResources: 0,
    terrain: 0,
    infrastructure: 0,
    environmental: 0,
    economic: 0,
  },

  windCapacityFactor: 0,
  windClass: "",
  windSiteClassification: "",

  solarEnergy: 0,
  windEnergy: 0,
  totalHybridEnergy: 0,

  estimatedCapacity: 0,

  backendResult: null,

  solarFeatures: {},
  windFeatures: {},
  energyPrediction: {},
  evaluation: {},
  forecasting: {},
  optimization: {},
};

// ============================================================
// DASHBOARD
// ============================================================

export default function Dashboard() {
  const [
    analysis,
    setAnalysis,
  ] = useState(emptyAnalysis);

  const [
    analysisHistory,
    setAnalysisHistory,
  ] = useState([]);

  // ==========================================================
  // LOAD HISTORY
  // ==========================================================

  useEffect(() => {
    try {
      const saved =
        JSON.parse(
          localStorage.getItem(
            "analysisHistory"
          )
        ) || [];

      setAnalysisHistory(saved);

      if (saved.length > 0) {
        setAnalysis(
          saved[saved.length - 1]
        );
      }
    } catch (error) {
      console.error(
        "Unable to load analysis history:",
        error
      );
    }
  }, []);

  // ==========================================================
  // NEW ANALYSIS
  // ==========================================================

  const handleAnalysisComplete = (
    result
  ) => {
    console.log(
      "Dashboard received analysis:",
      result
    );

    setAnalysis(result);

    try {
      const saved =
        JSON.parse(
          localStorage.getItem(
            "analysisHistory"
          )
        ) || [];

      setAnalysisHistory(saved);
    } catch (error) {
      console.error(
        "Unable to update analysis history:",
        error
      );
    }
  };

  // ==========================================================
  // DASHBOARD CALCULATIONS
  // ==========================================================

  const totalSitesAnalyzed =
    analysisHistory.length;

  const highPotentialSites =
    analysisHistory.filter(
      (site) =>
        Number(
          site.suitabilityScore || 0
        ) >= 65
    ).length;

  const totalCapacity =
    analysisHistory.reduce(
      (
        total,
        site
      ) =>
        total +
        Number(
          site.estimatedCapacity || 0
        ),
      0
    );

  // ==========================================================
  // STAT CARDS
  // ==========================================================

  const stats = [
    {
      title:
        "Avg. Solar Irradiance",

      value:
        Number(
          analysis.avgSolar || 0
        ) > 0
          ? `${Number(
              analysis.avgSolar
            ).toFixed(1)} kWh/m²/day`
          : "--",

      icon: <Sun size={21} />,

      footer:
        Number(
          analysis.avgSolar || 0
        ) > 0
          ? "NASA POWER data"
          : "Analyze a location",
    },

    {
      title:
        "Avg. Wind Speed",

      value:
        Number(
          analysis.avgWind || 0
        ) > 0
          ? `${Number(
              analysis.avgWind
            ).toFixed(2)} m/s`
          : "--",

      icon: <Wind size={21} />,

      footer:
        Number(
          analysis.avgWind || 0
        ) > 0
          ? "NASA POWER data"
          : "Analyze a location",
    },

    {
      title:
        "Total Sites Analyzed",

      value:
        totalSitesAnalyzed,

      icon: <MapPin size={21} />,

      footer:
        totalSitesAnalyzed > 0
          ? "Analyzed locations"
          : "No sites analyzed",
    },

    {
      title:
        "High Potential Sites",

      value:
        highPotentialSites,

      icon: <Target size={21} />,

      footer:
        highPotentialSites > 0
          ? "Suitability ≥ 65%"
          : "No high-potential sites yet",
    },

    {
      title:
        "Total Capacity Identified",

      value:
        totalCapacity > 0
          ? `${totalCapacity.toFixed(
              2
            )} MW`
          : "--",

      icon: <Zap size={21} />,

      footer:
        totalCapacity > 0
          ? "Estimated capacity"
          : "No capacity identified",
    },
  ];

  // ==========================================================
  // RENDER
  // ==========================================================

  return (
    <div className="dashboard">

      {/* ====================================================
          STAT CARDS
      ==================================================== */}

      <div className="stats-grid">

        {stats.map(
          (stat, index) => (
            <div
              className="stat-card"
              key={index}
            >
              <div
                className="stat-card-header"
              >
                <div className="stat-icon">
                  {stat.icon}
                </div>

                <div>
                  <div className="stat-title">
                    {stat.title}
                  </div>

                  <div className="stat-value">
                    {stat.value}
                  </div>
                </div>
              </div>

              <div className="stat-footer">
                <span className="stat-muted">
                  {stat.footer}
                </span>
              </div>
            </div>
          )
        )}

      </div>

      {/* ====================================================
          MAP + PERFORMANCE
      ==================================================== */}

      <div className="main-visual-grid">

        {/* MAP */}

        <div className="panel map-panel">

          <div className="panel-header">

            <div>
              <div className="panel-title">
                Renewable Resource Map
              </div>

              <div className="panel-subtitle">
                Backend analyzed location
              </div>
            </div>

          </div>

          <MapView
            analysis={analysis}
          />

        </div>

        {/* PERFORMANCE */}

        <div className="panel chart-panel">

          <div className="panel-header">

            <div>
              <div className="panel-title">
                Resource Performance
              </div>

              <div className="panel-subtitle">
                Solar and wind resources
              </div>
            </div>

          </div>

          <div className="chart-container">

            <PerformanceChart
              analysis={analysis}
            />

          </div>

        </div>

      </div>

      {/* ====================================================
          ANALYTICS
      ==================================================== */}

      <div className="analytics-grid">

        {/* SITE SUITABILITY */}

        <div className="analytics-card">

          <div className="analytics-card-header">

            <h3>
              Site Suitability
            </h3>

            <span>
              {
                analysis.suitabilityCategory
              }
            </span>

          </div>

          <SiteSuitability
            score={
              analysis.suitabilityScore ?? 0
            }

            solarScore={
              analysis.solarScore ?? 0
            }

            windScore={
              analysis.windScore ?? 0
            }

            evaluationScores={
              analysis.evaluationScores ?? {}
            }
          />

        </div>

        {/* POTENTIAL DISTRIBUTION */}

        <div className="analytics-card">

          <div className="analytics-card-header">

            <h3>
              Potential Distribution
            </h3>

          </div>

          <PotentialDistribution
            score={
              analysis.suitabilityScore ?? 0
            }
          />

        </div>

        {/* TOP SITES */}

        <div className="analytics-card">

          <div className="analytics-card-header">

            <h3>
              Top Sites
            </h3>

          </div>

          <TopSites
            sites={
              analysisHistory
            }
          />

        </div>

        {/* RECENT ANALYSES */}

        <div className="analytics-card">

          <div className="analytics-card-header">

            <h3>
              Recent Analyses
            </h3>

          </div>

          <RecentProjects
            projects={
              analysisHistory
            }
          />

        </div>

      </div>

      {/* ====================================================
          ANALYZE LOCATION
      ==================================================== */}

      <AnalyzeLocation
        onAnalysisComplete={
          handleAnalysisComplete
        }
      />

      {/* ====================================================
          AI INSIGHTS
      ==================================================== */}

      <AIInsights
        analysis={analysis}
      />

    </div>
  );
}