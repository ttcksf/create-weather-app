import React from "react";
import Header from "../components/Header";
import Table from "../components/Table";
import InputFormImage from "../components/InputFormImage";
import InputFormText from "../components/InputFormText";
import Footer from "../components/Footer";

const Top = () => {
  return (
    <div>
      <Header />
      <Table />
      <InputFormImage />
      <InputFormText />
      <Table />
      <Footer />
    </div>
  );
};

export default Top;
