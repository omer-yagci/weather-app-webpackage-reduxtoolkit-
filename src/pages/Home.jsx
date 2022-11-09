import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";

const Home = () => {
  const { weatherList, loading } = useSelector((state) => state.weather);

  const navigate = useNavigate();
  // const dispatch = useDispatch();

  const turkeyMapHandler = () => {
    navigate("turkeymaps");
  };
  const turkeyProvinceHandler = () => {
    navigate("turkeyprovinces");
  };

  console.log(weatherList);

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

      <section className="mt-[0.5rem]  flex items-center justify-center">
        {loading && <h1>SEASDASd</h1>}
        {!loading && (
          <div className="p-6 w-[17rem] bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;">
            <img
              src={`http://openweathermap.org/img/wn/${weatherList.weather[0].icon}@2x.png`}
              alt="icon"
            />

            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {weatherList.name.includes("Province")
                ? weatherList.name.replace("Province", "")
                : weatherList.name}
            </h5>

            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              {`${weatherList.main.temp}°C`}
            </p>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              {weatherList.weather[0].description}
            </p>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              {weatherList.wind.speed}
            </p>
            <p> {weatherList.main.humidity}</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;
