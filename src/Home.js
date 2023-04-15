import { useState } from "react";
import airlinesData from "./data/airlines.json";
import AirlineModal from "./components/modal";
import "./Home.css";
import Header from "./components/header";

export default function Home() {
  const [selectedAirline, setSelectedAirline] = useState(null);

  const handleAirlineClick = (airline) => {
    setSelectedAirline(airline);
  };

  const handleModalClose = () => {
    setSelectedAirline(null);
  };

  return (
    <div>
      <Header />
      <div className="container">
        <div className="card-container">
          {airlinesData.airlines.map((airline) => (
            <div
              className="card"
              key={airline.id}
              onClick={() => handleAirlineClick(airline)}
            >
              <div className="card-info">
                <p className="card-name">{airline.name}</p>
                <p className="card-details">
                  <span className="card-label">Country:</span>{" "}
                  {airline.country}
                </p>
                <p className="card-details">
                  <span className="card-label">Headquarters:</span>{" "}
                  {airline.head_quaters}
                </p>
              </div>
            </div>
          ))}
        </div>
        {selectedAirline && (
          <AirlineModal airline={selectedAirline} onClose={handleModalClose} />
        )}
      </div>
    </div>
  );
}
