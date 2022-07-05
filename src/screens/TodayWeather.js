import React, { useState, useEffect, useMemo } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import Table from "../components/Table";
import InputFormImage from "../components/InputFormImage";
import InputFormText from "../components/InputFormText";
import Footer from "../components/Footer";
import MenuPrefecture from "../components/Menu/MenuPrefecture";
import MenuBack from "../components/Menu/MenuBack";
import MenuSend from "../components/Menu/MenuSend";

const TodayWeather = () => {
  const location = useLocation();

  const [weatherResult, setWeatherResult] = useState({});

  // 第一引数にコールバック関数、第二引数にタイミング（空配列はロード時）
  const fetchData = () => {
    console.log("location: ");
    console.log(location.state.prefecture);
    const PREFECTURE_KEY = location.state.prefecture;
    const API_KEY = process.env.React_APP_OPENWEATHERMAP_API_KEY;
    const MAIN_URL = process.env.React_APP_API_URL;
    const requestURL = `${MAIN_URL}/data/2.5/forecast?q=${PREFECTURE_KEY}&appid=${API_KEY}&lang=ja&units=metric`;

    console.log("requestURL: ");
    console.log(requestURL);
    axios
      .get(requestURL)
      .then((response) => {
        setWeatherResult(response.data);
      })
      .catch(() => {
        console.log("connect error: " + requestURL);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const navigate = useNavigate();

  const sendButton = () => {
    navigate("/future-weather", {
      state: {
        weatherResult: weatherResult,
      },
    });
  };

  return (
    <>
      <Header />
      <div>
        {weatherResult.list && (
          <div style={style.TodayWrapper}>
            <div style={style.MenuLists}>
              <MenuBack />
              <MenuPrefecture TodayWeatherResult={weatherResult} />
              <MenuSend onClick={sendButton} />
            </div>
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
  MenuLists: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "15px 0",
  },
};

export default TodayWeather;
