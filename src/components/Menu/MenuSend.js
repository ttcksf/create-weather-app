import React from "react";
import { Link } from "react-router-dom";

const MenuSend = () => {
  return (
    <div style={style.RightMenu}>
      <Link to={`/future-weather`}>明日以降の天気</Link>
    </div>
  );
};

const style = {
  RightMenu: {
    fontSize: "14px",
    cursor: "pointer",
    color: "#333",
  },
};

export default MenuSend;
