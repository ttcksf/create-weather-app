import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import Table from "../components/Table";
import InputFormImage from "../components/InputFormImage";
import InputFormText from "../components/InputFormText";
import Footer from "../components/Footer";
import Menu from "../components/Menu";

const TodayWeather = () => {
  const location = useLocation();
  const prefectureValue = location.state;
  const API_KEY = process.env.React_APP_OPENWEATHERMAP_API_KEY;
  const MAIN_URL = process.env.React_APP_API_URL;
  const requestURL = `${MAIN_URL}/data/2.5/forecast?q=${prefectureValue}&appid=${API_KEY}`;

  const [weatherResult, setWeatherResult] = useState([]);

  //第一引数にコールバック関数、第二引数にタイミング（空配列はロード時）
  const fetchData = () => {
    axios
      .get(requestURL)
      .then((response) => setWeatherResult(response.data))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    fetchData();
  }, []);

  console.log("都道府県: " + prefectureValue);
  console.log("URL: " + requestURL);
  console.log("結果: ");
  console.log(weatherResult);
  return (
    <>
      <Header />
      <div>
        <div style={style.TodayWrapper}>
          <Menu />

          <Table weatherResult={weatherResult} />
          <InputFormImage />
          <InputFormText />
          {/* <Table /> */}
        </div>
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
