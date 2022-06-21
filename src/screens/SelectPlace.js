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
      <main>
        <div style={style.SelectContainer}>
          <div style={style.SelectWrapper}>
            <h1 style={style.SelectTitle}>あなたの場所は？</h1>
            <div style={style.SelecAria}>
              <select style={style.SelectPullDown}>
                {Prefectures.map((prefecture, id) => {
                  return (
                    <option value={prefecture.value}>{prefecture.name}</option>
                  );
                })}
              </select>
              <Link className="btn" to={`/today-weather`}>
                送信
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

const style = {
  SelectContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
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
