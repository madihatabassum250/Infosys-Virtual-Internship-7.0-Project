import { useState } from "react";
import { MapPin, Search, Loader2 } from "lucide-react";
import { analyzeLocation } from "../services/api";

function AnalyzeLocation() {
  return (
    <section className="analyze-location">

      <div className="analyze-title">
        <h2>Analyze New Location</h2>
        <p>
          Enter location details to get comprehensive renewable energy analysis
        </p>
      </div>

      <div className="form-group">
        <label>Village / City</label>
        <input placeholder="Enter village or city" />
      </div>

      <div className="form-group">
        <label>District</label>
        <input placeholder="Enter district" />
      </div>

      <div className="form-group">
        <label>State</label>
        <select>
          <option>Select state</option>
        </select>
      </div>

      <div className="form-group">
        <label>Country</label>
        <select>
          <option>Select country</option>
        </select>
      </div>

      <div className="form-group">
        <label>Date</label>
        <input type="date" />
      </div>

      <button className="analyze-button">
        Analyze Site →
      </button>

    </section>
  );
}

export default AnalyzeLocation;