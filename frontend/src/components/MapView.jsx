import {
  MapContainer,
  TileLayer,
  Marker,
  Popup
} from "react-leaflet";

import "leaflet/dist/leaflet.css";
import L from "leaflet";

import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const locations = [
  {
    name: "Kutch, Gujarat",
    position: [23.7337, 69.8597],
    solar: "5.8 kWh/m²/day",
    wind: "7.2 m/s",
    potential: "Excellent"
  },
  {
    name: "Jaisalmer, Rajasthan",
    position: [26.9157, 70.9083],
    solar: "5.6 kWh/m²/day",
    wind: "6.8 m/s",
    potential: "Excellent"
  },
  {
    name: "Anantapur, Andhra Pradesh",
    position: [14.6819, 77.6006],
    solar: "5.4 kWh/m²/day",
    wind: "6.5 m/s",
    potential: "Very Good"
  }
];

function MapView() {
  return (
    <div className="map-panel">

      <div className="panel-header">
        <div>
          <div className="panel-title">
            Renewable Energy Potential Map
          </div>

          <div className="panel-subtitle">
            Global Solar & Wind Analysis
          </div>
        </div>

        <button className="map-expand">
          ⛶
        </button>
      </div>

      <div className="map-container">

        <MapContainer
          center={[20, 0]}
          zoom={2}
          minZoom={2}
          maxZoom={18}
          worldCopyJump={true}
          scrollWheelZoom={true}
          style={{
            width: "100%",
            height: "100%"
          }}
        >

          <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {locations.map((location, index) => (
            <Marker
              key={index}
              position={location.position}
            >
              <Popup>
                <strong>{location.name}</strong>

                <br />

                Potential: {location.potential}

                <br />

                Solar: {location.solar}

                <br />

                Wind: {location.wind}
              </Popup>
            </Marker>
          ))}

        </MapContainer>

        {/* LEGEND */}
        <div className="map-legend">

          <div className="legend-title">
            Potential Score
          </div>

          <div className="legend-item">
            <span className="legend-dot excellent"></span>
            Excellent
          </div>

          <div className="legend-item">
            <span className="legend-dot very-good"></span>
            Very Good
          </div>

          <div className="legend-item">
            <span className="legend-dot good"></span>
            Good
          </div>

          <div className="legend-item">
            <span className="legend-dot moderate"></span>
            Moderate
          </div>

          <div className="legend-item">
            <span className="legend-dot low"></span>
            Low
          </div>

        </div>

      </div>

    </div>
  );
}

export default MapView;