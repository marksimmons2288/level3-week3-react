import { useState } from "react";

import SearchBar from "../components/layout/weather/SearchBar";
import UnitsToggle from "../components/layout/weather/UnitsToggle";


/**
 * Initial Today page.
 * Static content just to validate layout, JSX and styling.
 */

function TodayPage() {
  const [city, setCiity] = useState("London");
  const [units, setUnits] = useState("metric");

  const handleSearch = (newCity) => {
    setCiity(newCity);
    // Day 3: trigger API request here
  };

  const handleUnitsChange = (newUnits) => {
    setUnits(newUnits);
    // Day 3: re-fetch or convert data here
  };
  return (
    <section className="card">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
        <SearchBar onSearch={handleSearch}/>
        <UnitsToggle units={units} onChange={handleUnitsChange}/> 
      </div>
      
      <div style={{marginTop: "1rem"}}>
         <h2>Today&apos;s weather for <span>{city} </span>
         </h2>
         
         <p>
       Units: <strong>{units === "metric" ? "Metric (°C, km/h)" : "Imperial (°F, mph)"}</strong>
      </p>
       
      <p>
        For now this is just mock text controlled by state. Tomrrow we will connect it to the Open_Meteo API.
      </p>
      </div>
    </section>
  );
}

export default TodayPage;