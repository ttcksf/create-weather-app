import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Table from "../components/Table";
import Footer from "../components/Footer";
import MenuBack from "../components/Menu/MenuBack";
import MenuPrefecture from "../components/Menu/MenuPrefecture";

const FutureWeather = () => {
  const location = useLocation();
  console.log("futurelocation: ");
  console.log(location.state.weatherResult);
  const ForecastWeatherResult = location.state.weatherResult;

  const FutureDate = (i) => {
    let dt_txt = ForecastWeatherResult.list[i].dt_txt;
    dt_txt =
      Number(dt_txt.slice(5, 7)) + "月" + Number(dt_txt.slice(8, 10)) + "日";

    return dt_txt;
  };
  return (
    <>
      <Header />
      <div>
        <div style={style.FutureWrapper}>
          <div style={style.MenuLists}>
            <MenuBack />
          </div>
          {ForecastWeatherResult.list && (
            <div>
              <p style={style.FutureWeatherTitle}>
                <span>{FutureDate(9)}</span>{" "}
                <span>{ForecastWeatherResult.city.name}</span>の天気予報
              </p>
              <Table weatherResult={ForecastWeatherResult} />
              <p style={style.FutureWeatherTitle}>
                <span>{FutureDate(16)}</span>{" "}
                <span>{ForecastWeatherResult.city.name}</span>の天気予報
              </p>
              <Table weatherResult={ForecastWeatherResult} />
            </div>
          )}
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
  MenuLists: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "15px 0",
  },
  FutureWeatherTitle: {
    margin: "10px 0",
  },
};
export default FutureWeather;
