import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  weatherList: [],
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

export const { clearWeatherData, startVal } = WeatherSlice.actions;

export default WeatherSlice.reducer;
