import React from "react";
import { useNavigate } from "react-router-dom";

const MenuBack = () => {
  const navigate = useNavigate();
  const backButton = () => {
    navigate(-1);
  };
  return (
    <div>
      <button style={style.LightMenu} onClick={() => backButton()}>
        ＜戻る
      </button>
    </div>
  );
};

const style = {
  LightMenu: {
    fontSize: "14px",
    cursor: "pointer",
    color: "#333",
  },
};

export default MenuBack;
