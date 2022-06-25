import React from "react";

const Footer = () => {
  return (
    <footer style={style.footer}>
      <p>copyright @weather-api-app</p>
    </footer>
  );
};

const style = {
  footer: {
    background: "#c4c4c4",
    textAlign: "center",
    padding: "5px 0",
    fontSize: "10px",
    height: "20px",
    marginTop: "30px",
  },
};

export default Footer;
