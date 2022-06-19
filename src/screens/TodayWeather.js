import React from "react";
import { Link } from "react-router-dom";

import Header from "../components/Header";
import Table from "../components/Table";
import InputFormImage from "../components/InputFormImage";
import InputFormText from "../components/InputFormText";
import Footer from "../components/Footer";

const TodayWeather = () => {
  return (
    <div className="container">
      <Header />
      <Link to={`/`}>＜戻る</Link>
      <h1>
        <span>6月10日</span> <span>京都府</span>の天気予報
      </h1>
      <Link to={`/future-weather`}>明日以降の天気</Link>

      <Table />
      <InputFormImage />
      <InputFormText />
      <Table />
      <Footer />
    </div>
  );
};

export default TodayWeather;
