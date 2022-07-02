import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Menu = ({ TodayWeatherResult }) => {
  const navigate = useNavigate();
  const backButton = () => {
    navigate("/");
  };
  return (
    <div style={style.MenuLists}>
      <div>
        <button style={style.LightMenu} onClick={() => backButton()}>
          ＜戻る
        </button>
      </div>
      <div>
        <h1 style={style.CenterMenu}>
          <span>6月10日</span>
          {TodayWeatherResult.city && (
            <span>{TodayWeatherResult.city.name}</span>
          )}
          の天気予報
        </h1>
      </div>
      <div>
        <Link style={style.RightMenu} to={`/future-weather`}>
          明日以降の天気
        </Link>
      </div>
    </div>
  );
};

const style = {
  MenuLists: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "15px 0",
  },
  LightMenu: {
    fontSize: "14px",
    cursor: "pointer",
    color: "#333",
  },
  CenterMenu: {
    fontSize: "16px",
    fontWeight: "400",
  },
  RightMenu: {
    fontSize: "14px",
    cursor: "pointer",
    color: "#333",
  },
};

export default Menu;
