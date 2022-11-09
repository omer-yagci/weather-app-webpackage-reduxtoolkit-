// import Tooltip from "antd/es/tooltip";
import { useState } from "react";
import TurkeyMap from "turkey-map-react";
import { useDispatch } from "react-redux";
import { getWeather } from "../features/WeatherSlice";
import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";

const TurkeyMaps = () => {
  const [cityName, setCityName] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const ClickHandler = () => {
    dispatch(getWeather(cityName));
    navigate(`/weather${cityName}`);
  };

  // const renderCity = (cityComponent, cityData) => (
  //   <Tooltip title={cityData.name} key={cityData.id}>
  //     {cityComponent}
  //   </Tooltip>
  // );

  return (
    <>
      <h5>{cityName}</h5>
      <div>
        <TurkeyMap
          // cityWrapper={renderCity}
          onClick={ClickHandler}
          onHover={({ name }) => setCityName(`${name}`)}
        />
      </div>
    </>
  );
};

export default TurkeyMaps;
