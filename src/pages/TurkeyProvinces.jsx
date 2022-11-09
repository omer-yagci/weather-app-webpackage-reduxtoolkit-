import React from "react";
import useTurkeyCities from "use-turkey-cities";

const TurkeyProvinces = () => {
  const { cities, city, setCity, districts } = useTurkeyCities();
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(city, districts);
        }}
      >
        <select
          onChange={(e) => {
            setCity(e.target.value);
          }}
          value={city}
        >
          {cities.map((city) => (
            <option key={`city-${city}`} value={city}>
              {city}
            </option>
          ))}
        </select>
        <br />

        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TurkeyProvinces;
