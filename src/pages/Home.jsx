import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getWeather } from "../features/WeatherSlice";

const Home = () => {
  const { weatherList, loading } = useSelector((state) => state.weather);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const turkeyMapHandler = () => {
    navigate("turkeymaps");
  };
  const turkeyProvinceHandler = () => {
    navigate("turkeyprovinces");
  };

  const {
    name,
    weather: {
      0: { description, icon },
    },
    main: { temp, humidity },
    wind: { speed },
  } = weatherList;
  const iconURL = `http://openweathermap.org/img/wn/${icon ? icon : ""}@2x.png`;

  useEffect(() => {
    dispatch(getWeather("Ankara"));
  }, []);

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
          <div class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <img src={iconURL} alt="icon" />

            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {name?.includes("Province")
                ? name.replace("Province", " ")
                : name}
            </h5>

            <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
              {temp ? `${temp}°C` : ""}
            </p>
            <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
              {description ? description : ""}
            </p>
            <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
              {speed ? speed : ""}
            </p>
            <p> {humidity ? `${humidity}%` : ""}</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;
