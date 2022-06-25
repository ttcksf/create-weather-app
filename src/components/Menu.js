import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div style={style.MenuLists}>
      <div>
        <Link style={style.LightMenu} to={`/`}>
          ＜戻る
        </Link>
      </div>
      <div>
        <h1 style={style.CenterMenu}>
          <span>6月10日</span> <span>京都府</span>の天気予報
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
