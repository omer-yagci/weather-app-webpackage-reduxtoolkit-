import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { weatherList, loading } = useSelector((state) => state.weather);

  const navigate = useNavigate();

  const turkeyMapHandler = () => {
    navigate("turkeymaps");
  };
  const turkeyProvinceHandler = () => {
    navigate("turkeyprovinces");
  };

  console.log(weatherList + "HOMEPAGEASDAS");
  const { name } = weatherList;

  return (
    <div className="App">
      <header>
        <h1 className="mt-[1rem] text-5xl">WELCOME</h1>
        <h5 className="mt-[0.5rem] text-2xl">
          Please Click To Other Provinces Weather Condition
        </h5>
      </header>
      <main className="mt-5">
        <button
          className="bg-yellow-300 hover:bg-yellow-100 text-black font-bold py-2 px-4 border-2 border-indigo-700 rounded mr-5"
          type="submit"
          onClick={turkeyMapHandler}
        >
          Turkey Map
        </button>
        <button
          className="bg-yellow-300 hover:bg-yellow-100 text-black font-bold py-2 px-4 border-2 border-indigo-700 rounded"
          type="submit"
          onClick={turkeyProvinceHandler}
        >
          List of Cities
        </button>
      </main>

      <section className="mt-[1rem]">
        {loading && <h1>SEASDASd</h1>}
        {!loading && (
          <h1>
            {name.includes("Province") ? name.replace("Province", " ") : name}
          </h1>
        )}
      </section>
    </div>
  );
};

export default Home;
