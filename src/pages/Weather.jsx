import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Weather = () => {
  const { weatherList, loading } = useSelector((state) => state.weather);
  const navigate = useNavigate();

  // const {
  //   name,
  //   // weather: {
  //   //   0: { description, icon },
  //   // },
  //   main: { temp, humidity },
  //   wind: { speed },
  // } = weatherList;
  // const { description, icon } = weatherList.weather[0];

  // const iconURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  const turkeyMapHandler = () => {
    navigate("/");
  };
  const turkeyProvinceHandler = () => {
    navigate("/");
  };
  return (
    <div>
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
          <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <img src={weatherList.weather[0].icon} alt="icon" />

            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {weatherList.name}
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

export default Weather;
