import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  weatherList: [
    // {
    //   coord: { lon: 33.6667, lat: 41.5 },
    //   weather: [
    //     { id: 803, main: "Clouds", description: "broken clouds", icon: "04n" },
    //   ],
    //   base: "stations",
    //   main: {
    //     temp: 8.13,
    //     feels_like: 7.52,
    //     temp_min: 8.13,
    //     temp_max: 8.13,
    //     pressure: 1017,
    //     humidity: 87,
    //     sea_level: 1017,
    //     grnd_level: 912,
    //   },
    //   visibility: 10000,
    //   wind: { speed: 1.5, deg: 323, gust: 1.87 },
    //   clouds: { all: 64 },
    //   dt: 1667851501,
    //   sys: { country: "TR", sunrise: 1667795036, sunset: 1667831644 },
    //   timezone: 10800,
    //   id: 743881,
    //   name: "Kastamonu Province",
    //   cod: 200,
    // },
  ],
  loading: true,
};

export const getWeather = createAsyncThunk(
  "weather/getWeather",
  async (ınputValue) => {
    try {
      const apiKey = "07ccc6c8229f822f8f5f8dbbc0bfbc92";
      const URL = `https://api.openweathermap.org/data/2.5/weather?q=${ınputValue}&units=metric&APPID=${apiKey}`;

      const { data } = await axios.get(URL);
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const WeatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    clearWeatherData: (state) => {
      state.weatherList = [];
    },
  },
  extraReducers: {
    [getWeather.pending]: (state, action) => {
      state.loading = true;
    },
    [getWeather.fulfilled]: (state, action) => {
      state.weatherList = action?.payload;
      state.loading = false;
    },
    [getWeather.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export const { clearWeatherData } = WeatherSlice.actions;

export default WeatherSlice.reducer;
