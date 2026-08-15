import React from "react";

const sites = [
  ["Kutch, Gujarat", "5.8", "7.2", "92%"],
  ["Jaisalmer, Rajasthan", "5.6", "6.8", "89%"],
  ["Anantapur, Andhra Pradesh", "5.4", "6.5", "86%"],
  ["Barmer, Rajasthan", "5.2", "6.3", "82%"],
  ["Bikaner, Rajasthan", "5.1", "6.1", "80%"]
];

export default function TopSites() {

  return (
    <section className="panel top-sites">

      <div className="panel-header">

        <h3>Top Performing Sites</h3>

        <button>View All</button>

      </div>

      {sites.map(
        ([location, solar, wind, score], index) => (

          <div className="site-row" key={location}>

            <div className="rank">
              {index + 1}
            </div>

            <div className="site-info">

              <strong>{location}</strong>

              <small>
                Solar: {solar} kWh/m²/day |
                Wind: {wind} m/s
              </small>

            </div>

            <em>{score}</em>

          </div>

        )
      )}

    </section>
  );
}