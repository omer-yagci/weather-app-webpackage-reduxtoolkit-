import React from "react";
import useTurkeyCities from "use-turkey-cities";
import { Select, Option } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getWeather } from "../features/WeatherSlice";

const TurkeyProvinces = () => {
  const { cities, city, setCity } = useTurkeyCities();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectChangeHandler = (event) => {
    setCity(event.target.value);
  };
  return (
    <div className="App m-5">
      <form
        className="flex  justify-center items-center flex-col "
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(getWeather(city));
          navigate(`/weather${city}`);
          console.log(city);
        }}
      >
        <select
          className="bg-blue-500 bg-opacity-50 w-72 p-2 "
          label="Select Version"
          onChange={selectChangeHandler}
          value={city}
        >
          {cities?.map((city) => (
            <option key={`city-${city}`} value={city}>
              {city}
            </option>
          ))}
        </select>
        <button
          className="inline-block px-6 py-2.5 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out mt-5"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default TurkeyProvinces;
