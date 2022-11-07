import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const { weatherList, loading } = useSelector((state) => state.weather);

  console.log(weatherList + "HOMEPAGEASDAS");
  const { name } = weatherList;

  return (
    <>
      {loading && <h1>SEASDASd</h1>}
      {!loading && <h1>{name}</h1>}
    </>
  );
};

export default Home;
