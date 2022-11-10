import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BsWind } from "react-icons/bs";
import { WiHumidity } from "react-icons/wi";

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
          <div className="p-6 w-[20rem] h-[22rem] flex justify-center items-center flex-col gap-4 rounded-2xl bg-blue-100 mt-5">
            <img
              src={`http://openweathermap.org/img/wn/${weatherList.weather[0].icon}@2x.png`}
              alt="icon"
              className="relative top-[7rem] left-[0.2rem] w-[9.5rem]"
            />

            <h5 className="w-[20rem] h-20 px-4 rounded-t-2xl text-white  text-2xl font-semibold flex justify-between items-center bg-orange-200 relative top-[-9.5rem] right-[0rem]">
              {weatherList.name}
            </h5>

            <p className="mb-3  text-white relative top-[-10rem] right-[-7rem] text-l font-semibold">
              {`${weatherList.main.temp}°C`}
            </p>
            <p className="mb-3  text-white relative top-[-11rem] right-[-6rem] text-l font-semibold">
              {weatherList.weather[0].description}
            </p>
            <p className="mb-3  text-white text-l font-semibold relative top-[1rem] left-[-7rem] flex">
              <BsWind className="font-semibold text-xl mr-1" />
              {weatherList.wind.speed}
            </p>
            <p className="mb-3  text-white text-l font-semibold relative bottom-[2rem] right-[-7rem] flex">
              <WiHumidity className="font-semibold text-2xl" />
              {weatherList.main.humidity}
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Weather;
