import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import HeaderLogo from "../img/header-logo.png";

const Header = () => {
  return (
    <>
      <header style={style.header}>
        <h1 style={style.headerLogo}>
          <img src={HeaderLogo} alt="" />
        </h1>
      </header>
    </>
  );
};

const style = {
  header: {
    width: "100%",
    maxWidth: "100%",
    borderBottom: "1px solid #333",
    height: "100px",
  },
  headerLogo: {
    textAlign: "center",
    padding: "10px 0 0 0",
  },
};

export default Header;
