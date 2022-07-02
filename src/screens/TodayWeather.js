import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import Table from "../components/Table";
import InputFormImage from "../components/InputFormImage";
import InputFormText from "../components/InputFormText";
import Footer from "../components/Footer";
import Menu from "../components/Menu";

const TodayWeather = ({ prefecture }) => {
  const API_KEY = process.env.React_APP_OPENWEATHERMAP_API_KEY;
  const MAIN_URL = process.env.React_APP_API_URL;
  const requestURL = `${MAIN_URL}/data/2.5/forecast?q=${prefecture}&appid=${API_KEY}&lang=ja&units=metric`;
  // console.log("prefecture: ");
  // console.log(prefecture);
  // console.log("requestURL: ");
  // console.log(requestURL);

  const [weatherResult, setWeatherResult] = useState({});

  // 第一引数にコールバック関数、第二引数にタイミング（空配列はロード時）
  const fetchData = () => {
    axios
      .get(requestURL)
      .then((response) => {
        setWeatherResult(response.data);
        console.log(requestURL);
      })
      .catch(() => {
        console.log("connect error: " + requestURL);
      });
  };

  useEffect(() => {
    fetchData();
  }, [setWeatherResult]);

  console.log("weatherResult: ");
  console.log(weatherResult);

  return (
    <>
      <Header />
      <div>
        {weatherResult.list && (
          <div style={style.TodayWrapper}>
            <Menu TodayWeatherResult={weatherResult} />
            <Table TodayWeatherResult={weatherResult} />
            <InputFormImage />
            <InputFormText />
            <Table TodayWeatherResult={weatherResult} />
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

const style = {
  TodayWrapper: {
    width: "80%",
    margin: "0 auto",
  },
};

export default TodayWeather;
