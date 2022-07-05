import React from "react";
import { Link } from "react-router-dom";

const MenuSend = ({ onClick }) => {
  return (
    <div style={style.RightMenu}>
      <button onClick={onClick}>明日以降の天気</button>
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
