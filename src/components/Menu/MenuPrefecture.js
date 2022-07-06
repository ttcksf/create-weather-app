import React from "react";

const Menu = ({ weatherResult }) => {
  const MenuDate = () => {
    let dt_txt = weatherResult.list[0].dt_txt;
    dt_txt =
      Number(dt_txt.slice(5, 7)) + "月" + Number(dt_txt.slice(8, 10)) + "日";

    return dt_txt;
  };
  return (
    <div style={style.MenuLists}>
      <div>
        <h1 style={style.CenterMenu}>
          <span>{MenuDate()}</span>
          {weatherResult.city && <span>{weatherResult.city.name}</span>}
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
