import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Table from "../components/Table";
import Footer from "../components/Footer";
import MenuBack from "../components/Menu/MenuBack";

const FutureWeather = () => {
  const location = useLocation();
  console.log("futurelocation: ");
  console.log(location.state.weatherResult);
  const ForecastWeather = location.state.weatherResult;

  return (
    <>
      <Header />
      <div>
        <div style={style.FutureWrapper}>
          <MenuBack />
        </div>

        <h1>{ForecastWeather.city.name}</h1>
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
