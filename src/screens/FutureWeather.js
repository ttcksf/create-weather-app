import React from "react";
import { Link } from "react-router-dom";

const FutureWeather = () => {
  return (
    <div>
      <Link to={`/today-weather`}>＜戻る</Link>
    </div>
  );
};

export default FutureWeather;
