import React from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Table from "../components/Table";
import Footer from "../components/Footer";

const FutureWeather = ({ weatherResult }) => {
  return (
    <>
      <Header />
      <div>
        <div style={style.FutureWrapper}>
          <Menu TodayWeatherResult={weatherResult} />
          <Table TodayWeatherResult={weatherResult} />
          <Table TodayWeatherResult={weatherResult} />
        </div>
      </div>
      <Footer />
    </>
  );
};
const style = {
  FutureWrapper: {
    width: "80%",
    margin: "0 auto",
  },
};
export default FutureWeather;
