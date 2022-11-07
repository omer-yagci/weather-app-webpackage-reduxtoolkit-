import Tooltip from "antd/es/tooltip";
import { useState } from "react";
import TurkeyMap from "turkey-map-react";
import { useDispatch, useSelector } from "react-redux";
import { getWeather } from "../features/WeatherSlice";
import { useNavigate } from "react-router-dom";

const TurkeyMaps = () => {
  const [cityName, setCityName] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { weatherList } = useSelector((state) => state.weather);

  const ClickHandler = () => {
    dispatch(getWeather(cityName));
    navigate("/");
  };

  const renderCity = (cityComponent, cityData) => (
    <Tooltip title={cityData.name} key={cityData.id}>
      {cityComponent}
    </Tooltip>
  );
  return (
    <>
      <h1>{cityName}</h1>
      <div>
        <TurkeyMap
          onClick={ClickHandler}
          cityWrapper={renderCity}
          onHover={({ name }) => setCityName(`${name}`)}
        />
      </div>
    </>
  );
};

export default TurkeyMaps;
