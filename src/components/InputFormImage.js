import React from "react";
import "../index.css";
import ClickMark from "../img/clickmark.png";

const InputFormImage = () => {
  return (
    <div>
      <div style={style.SelectWrapper}>
        <h2 style={style.SelectImageTitle}>あなたの今日の気分は？</h2>
        <div style={style.InputAria}>
          <input
            type="radio"
            name="sizeSelect"
            value="VeryGood"
            id="VeryGood"
          />
          <label style={style.SelectImageLabel} htmlFor="VeryGood">
            大変良い
          </label>
          <input type="radio" name="sizeSelect" value="Good" id="Good" />
          <label style={style.SelectImageLabel} htmlFor="Good">
            良い
          </label>
          <input type="radio" name="sizeSelect" value="Bad" id="Bad" />
          <label style={style.SelectImageLabel} htmlFor="Bad">
            不調
          </label>
          <input type="radio" name="sizeSelect" value="VeryBad" id="VeryBad" />
          <label style={style.SelectImageLabel} htmlFor="VeryBad">
            絶不調
          </label>
        </div>
        <img style={style.ClickMark} src={ClickMark} alt="" />
      </div>
    </div>
  );
};

const style = {
  SelectWrapper: {
    width: "80%",
    margin: "50px auto",
  },
  SelectImageTitle: {
    fontSize: "32px",
    fontWeight: "700",
    textAlign: "center",
    marginBottom: "20px",
  },
  InputAria: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  SelectImageLabel: {
    border: "1px solid #333",
    padding: "5px",
    textAlign: "center",
    fontSize: "18px",
  },
  ClickMark: {
    width: "100px",
    height: "auto",
    float: "right",
  },
};
export default InputFormImage;
