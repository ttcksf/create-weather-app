import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Prefectures from "../data/PrefecturesData";

const SelectPlace = () => {
  // const [prefectureData, setPrefecture] = useState([]);
  const changePrefecture = (e) => {
    const API_KEY = "6df4e5005ffa1b5e6fbed71113e646a7";
    const PrefectureValue = e.target.value;
    const EndPointUrl =
      "https://api.openweathermap.org/data/2.5/forecast?" +
      `q=${PrefectureValue}&appid=${API_KEY}`;

    fetch(EndPointUrl)
      .then((res) => {
        return res.json();
      })
      .then((result) => console.log(result));
  };
  return (
    <>
      <Header />
      <div className="container">
        <div style={style.SelectWrapper}>
          <h1 style={style.SelectTitle}>あなたの場所は？</h1>
          <div style={style.SelecAria}>
            <form>
              <select
                style={style.SelectPullDown}
                defaultValue={Prefectures.currentValue}
                onChange={(e) => changePrefecture(e)}
              >
                {Prefectures.list.map((prefecture, id) => {
                  return (
                    <option value={prefecture.value} key={id}>
                      {prefecture.name}
                    </option>
                  );
                })}
              </select>
            </form>
            <Link className="btn" to={`/today-weather`}>
              送信
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

const style = {
  SelectWrapper: {
    width: "80%",
  },
  SelectTitle: {
    fontSize: "20px",
    fontWeight: "400",
    textAlign: "center",
    marginBottom: "20px",
  },
  SelecAria: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  SelectPullDown: {
    width: "300px",
    height: "30px",
    marginRight: "30px",
  },
};

export default SelectPlace;
