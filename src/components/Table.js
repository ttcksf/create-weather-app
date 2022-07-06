import React from "react";
import Bad from "./HumanIcons/Bad";
import Good from "./HumanIcons/Good";
import VeryBad from "./HumanIcons/VeryBad";
import VeryGood from "./HumanIcons/VeryGood";

const Table = ({ weatherResult, index }) => {
  const TodayWeatherDate = () => {
    let times = [];
    let j = index;
    for (let i = j; i < index + 8; i++) {
      console.log(j);
      times.push(
        <th style={style.th} key={i}>
          {weatherResult.list[i].dt_txt.substring(11, 16)}
        </th>
      );
    }
    return times;
  };

  const TodayWeatherForecast = () => {
    let todayForecast = [];
    for (let i = 0; i < 8; i++) {
      todayForecast.push(
        <td style={style.tdFirst} key={i}>
          <p>
            <img
              src={
                "http://openweathermap.org/img/wn/" +
                weatherResult.list[i].weather[0].icon +
                ".png"
              }
              alt=""
            />
          </p>
          <p>
            <span className="cRed">
              {Math.floor(weatherResult.list[i].main.temp_max)}
            </span>
            <span className="cBlue">
              {Math.floor(weatherResult.list[i].main.temp_min)}
            </span>
          </p>
          <p>{weatherResult.list[i].pop * 100 + "%"}</p>
        </td>
      );
    }
    return todayForecast;
  };

  const HumanIconsPattern = (i) => {
    if (weatherResult.list[i].main.grnd_level >= 1012) {
      return <VeryGood />;
    } else if (
      weatherResult.list[i].main.grnd_level >= 1009 &&
      weatherResult.list[i].main.grnd_level < 1012
    ) {
      return <Good />;
    } else if (
      weatherResult.list[i].main.grnd_level >= 1003 &&
      weatherResult.list[i].main.grnd_level < 1009
    ) {
      return <Bad />;
    } else if (weatherResult.list[i].main.grnd_level < 1003) {
      return <VeryBad />;
    } else {
      return <Good />;
    }
  };
  return (
    <div style={style.tableWrap}>
      <table style={style.table}>
        <tbody>
          <tr>
            <th style={style.th}>日付</th>
            {TodayWeatherDate()}
          </tr>
          <tr>
            <td style={style.tdFirst}>天気</td>
            {TodayWeatherForecast()}
          </tr>
          <tr>
            <td style={style.tdSecond}>気圧</td>
            <td style={style.tdSecond}>{HumanIconsPattern(0)}</td>
            <td style={style.tdSecond}>{HumanIconsPattern(1)}</td>
            <td style={style.tdSecond}>{HumanIconsPattern(2)}</td>
            <td style={style.tdSecond}>{HumanIconsPattern(3)}</td>
            <td style={style.tdSecond}>{HumanIconsPattern(4)}</td>
            <td style={style.tdSecond}>{HumanIconsPattern(5)}</td>
            <td style={style.tdSecond}>{HumanIconsPattern(6)}</td>
            <td style={style.tdSecond}>{HumanIconsPattern(7)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const style = {
  tableWrap: {
    overflowX: "scroll",
  },
  table: {
    borderCollapse: "collapse",
    color: "#333",
    background: "#fff",
    width: "100%",
    maxWidth: "100%",
    textAlign: "center",
    whiteSpace: "nowrap",
  },
  th: {
    padding: "5px 15px",
    border: "1px solid #333",
    background: "rgba(196,196,196,0.5)",
  },
  tdFirst: {
    padding: "5px 15px",
    border: "1px solid #333",
  },
  tdSecond: {
    padding: "5px 15px",
    border: "1px solid #333",
    background: "rgba(196,196,196,0.5)",
  },
};
export default Table;
