import Tooltip from "antd/es/tooltip";
import { useState } from "react";
import TurkeyMap from "turkey-map-react";
import { useDispatch, useSelector } from "react-redux";
import { getWeather } from "../features/WeatherSlice";

const TurkeyMaps = () => {
  const [cityName, setCityName] = useState("");
  const dispatch = useDispatch();
  const { weatherList } = useSelector((state) => state.weather);
  console.log(weatherList);

  const ClickHandler = (city) => {
    dispatch(getWeather(cityName));
  };

  // const renderCity = (cityComponent, cityData) => (
  //   <Tooltip title={cityData.name} key={cityData.id}>
  //     {cityComponent}
  //   </Tooltip>
  // );
  console.log(cityName);
  return (
    <>
      <h1>{cityName}</h1>
      <div>
        <TurkeyMap
          onClick={ClickHandler}
          // cityWrapper={renderCity}
          onHover={({ plateNumber, name }) => setCityName(`${name}`)}
        />
      </div>
    </>
  );
};

export default TurkeyMaps;
