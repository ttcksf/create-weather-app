import React from "react";

const Menu = ({ TodayWeatherResult }) => {
  return (
    <div style={style.MenuLists}>
      <div>
        <h1 style={style.CenterMenu}>
          <span>6月10日</span>
          {TodayWeatherResult.city && (
            <span>{TodayWeatherResult.city.name}</span>
          )}
          の天気予報
        </h1>
      </div>
    </div>
  );
};

const style = {
  CenterMenu: {
    fontSize: "16px",
    fontWeight: "400",
  },
};

export default Menu;
