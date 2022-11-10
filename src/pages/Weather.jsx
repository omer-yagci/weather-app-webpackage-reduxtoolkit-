import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Weather = () => {
  const { weatherList, loading } = useSelector((state) => state.weather);
  const navigate = useNavigate();

  const weatherPageMapHandler = () => {
    navigate("/turkeymaps");
  };
  const weatherPageProvinceHandler = () => {
    navigate("/turkeyprovinces");
  };
  return (
    <div className="App">
      <main className="mt-5">
        <button
          className="bg-yellow-300 hover:bg-yellow-100 text-black font-bold py-2 px-4 border-2 border-indigo-700 rounded mr-5"
          type="submit"
          onClick={weatherPageMapHandler}
        >
          Turkey Map
        </button>
        <button
          className="bg-yellow-300 hover:bg-yellow-100 text-black font-bold py-2 px-4 border-2 border-indigo-700 rounded"
          type="submit"
          onClick={weatherPageProvinceHandler}
        >
          List of Cities
        </button>
      </main>
      <h1 className="text-2xl">{`${weatherList.name} weather information`}</h1>

      <section className="mt-[0.5rem]  flex items-center justify-center">
        {loading && (
          <div class="w-72 h-60 border-2 rounded-md mx-auto mt-20">
            <div class="flex animate-pulse flex-row items-center h-full justify-center space-x-5 bg-green-300 ">
              <div class="w-12 bg-yellow-300 h-12 rounded-full "></div>
              <div class="flex flex-col space-y-3">
                <div class="w-36 bg-yellow-300 h-6 rounded-md "></div>
                <div class="w-24 bg-yellow-300 h-6 rounded-md "></div>
                <div class="w-24 bg-yellow-300 h-6 rounded-md "></div>
                <div class="w-24 bg-yellow-300 h-6 rounded-md "></div>
                <div class="w-24 bg-yellow-300 h-6 rounded-md "></div>
              </div>
            </div>
          </div>
        )}

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

export default Weather;
