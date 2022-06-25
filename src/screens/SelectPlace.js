import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Prefectures from "../data/PrefecturesData";

const SelectPlace = () => {
  const [prefecture, setPrefecture] = useState("");
  const changePrefecture = (e) => {
    setPrefecture(e.target.value);
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
            <Link className="btn" to={`/today-weather`} state={prefecture}>
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
