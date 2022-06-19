import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ClickMark from "../img/clickmark.png";
import Prefectures from "../data/PrefecturesData";

const SelectPlace = () => {
  console.log(Prefectures);
  return (
    <>
      <Header />
      <h1>あなたの場所は？</h1>
      <div>
        <select>
          {Prefectures.map((prefecture, id) => {
            return <option value={prefecture.value}>{prefecture.name}</option>;
          })}
        </select>
      </div>
      <Link to={`/today-weather`}>送信</Link>
      <p>
        <img src={ClickMark} alt="" />
      </p>
      <Footer />
    </>
  );
};

export default SelectPlace;
