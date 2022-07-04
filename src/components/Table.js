import React from "react";
import Bad from "./HumanIcons/Bad";
import Good from "./HumanIcons/Good";
import VeryBad from "./HumanIcons/VeryBad";
import VeryGood from "./HumanIcons/VeryGood";

const Table = ({ TodayWeatherResult }) => {
  const HumanIconsPattern = (i) => {
    if (TodayWeatherResult.list[i].main.grnd_level >= 1012) {
      return <VeryGood />;
    } else if (
      TodayWeatherResult.list[i].main.grnd_level >= 1009 &&
      TodayWeatherResult.list[i].main.grnd_level < 1012
    ) {
      return <Good />;
    } else if (
      TodayWeatherResult.list[i].main.grnd_level >= 1003 &&
      TodayWeatherResult.list[i].main.grnd_level < 1009
    ) {
      return <Bad />;
    } else if (TodayWeatherResult.list[i].main.grnd_level < 1003) {
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
            <th style={style.th}>
              {TodayWeatherResult.list[0].dt_txt.substring(11, 16)}
            </th>
            <th style={style.th}>
              {TodayWeatherResult.list[1].dt_txt.substring(11, 16)}
            </th>
            <th style={style.th}>
              {TodayWeatherResult.list[2].dt_txt.substring(11, 16)}
            </th>
            <th style={style.th}>
              {TodayWeatherResult.list[3].dt_txt.substring(11, 16)}
            </th>
            <th style={style.th}>
              {TodayWeatherResult.list[4].dt_txt.substring(11, 16)}
            </th>
            <th style={style.th}>
              {TodayWeatherResult.list[5].dt_txt.substring(11, 16)}
            </th>
            <th style={style.th}>
              {TodayWeatherResult.list[6].dt_txt.substring(11, 16)}
            </th>
            <th style={style.th}>
              {TodayWeatherResult.list[7].dt_txt.substring(11, 16)}
            </th>
          </tr>
          <tr>
            <td style={style.tdFirst}>天気</td>
            <td style={style.tdFirst}>
              <p>
                <img
                  src={
                    "http://openweathermap.org/img/wn/" +
                    TodayWeatherResult.list[0].weather[0].icon +
                    ".png"
                  }
                  alt=""
                />
              </p>
              <p>
                <span className="cRed">
                  {Math.floor(TodayWeatherResult.list[0].main.temp_max)}
                </span>
                <span className="cBlue">
                  {Math.floor(TodayWeatherResult.list[0].main.temp_min)}
                </span>
              </p>
              <p>{TodayWeatherResult.list[0].pop * 100 + "%"}</p>
            </td>
            <td style={style.tdFirst}>
              <p>
                <img
                  src={
                    "http://openweathermap.org/img/wn/" +
                    TodayWeatherResult.list[1].weather[0].icon +
                    ".png"
                  }
                  alt=""
                />
              </p>
              <p>
                <span className="cRed">
                  {Math.floor(TodayWeatherResult.list[1].main.temp_max)}
                </span>
                <span className="cBlue">
                  {Math.floor(TodayWeatherResult.list[1].main.temp_min)}
                </span>
              </p>
              <p>{TodayWeatherResult.list[1].pop * 100 + "%"}</p>
            </td>
            <td style={style.tdFirst}>
              <p>
                <img
                  src={
                    "http://openweathermap.org/img/wn/" +
                    TodayWeatherResult.list[2].weather[0].icon +
                    ".png"
                  }
                  alt=""
                />
              </p>
              <p>
                <span className="cRed">
                  {Math.floor(TodayWeatherResult.list[2].main.temp_max)}
                </span>
                <span className="cBlue">
                  {Math.floor(TodayWeatherResult.list[2].main.temp_min)}
                </span>
              </p>
              <p>{TodayWeatherResult.list[2].pop * 100 + "%"}</p>
            </td>
            <td style={style.tdFirst}>
              <p>
                <img
                  src={
                    "http://openweathermap.org/img/wn/" +
                    TodayWeatherResult.list[3].weather[0].icon +
                    ".png"
                  }
                  alt=""
                />
              </p>
              <p>
                <span className="cRed">
                  {Math.floor(TodayWeatherResult.list[3].main.temp_max)}
                </span>
                <span className="cBlue">
                  {Math.floor(TodayWeatherResult.list[3].main.temp_min)}
                </span>
              </p>
              <p>{TodayWeatherResult.list[3].pop * 100 + "%"}</p>
            </td>
            <td style={style.tdFirst}>
              <p>
                <img
                  src={
                    "http://openweathermap.org/img/wn/" +
                    TodayWeatherResult.list[4].weather[0].icon +
                    ".png"
                  }
                  alt=""
                />
              </p>
              <p>
                <span className="cRed">
                  {Math.floor(TodayWeatherResult.list[4].main.temp_max)}
                </span>
                <span className="cBlue">
                  {Math.floor(TodayWeatherResult.list[4].main.temp_min)}
                </span>
              </p>
              <p>{TodayWeatherResult.list[4].pop * 100 + "%"}</p>
            </td>
            <td style={style.tdFirst}>
              <p>
                <img
                  src={
                    "http://openweathermap.org/img/wn/" +
                    TodayWeatherResult.list[5].weather[0].icon +
                    ".png"
                  }
                  alt=""
                />
              </p>
              <p>
                <span className="cRed">
                  {Math.floor(TodayWeatherResult.list[5].main.temp_max)}
                </span>
                <span className="cBlue">
                  {Math.floor(TodayWeatherResult.list[5].main.temp_min)}
                </span>
              </p>
              <p>{TodayWeatherResult.list[5].pop * 100 + "%"}</p>
            </td>

            <td style={style.tdFirst}>
              <p>
                <img
                  src={
                    "http://openweathermap.org/img/wn/" +
                    TodayWeatherResult.list[6].weather[0].icon +
                    ".png"
                  }
                  alt=""
                />
              </p>
              <p>
                <span className="cRed">
                  {Math.floor(TodayWeatherResult.list[6].main.temp_max)}
                </span>
                <span className="cBlue">
                  {Math.floor(TodayWeatherResult.list[6].main.temp_min)}
                </span>
              </p>
              <p>{TodayWeatherResult.list[6].pop * 100 + "%"}</p>
            </td>
            <td style={style.tdFirst}>
              <p>
                <img
                  src={
                    "http://openweathermap.org/img/wn/" +
                    TodayWeatherResult.list[7].weather[0].icon +
                    ".png"
                  }
                  alt=""
                />
              </p>
              <p>
                <span className="cRed">
                  {Math.floor(TodayWeatherResult.list[7].main.temp_max)}
                </span>
                <span className="cBlue">
                  {Math.floor(TodayWeatherResult.list[7].main.temp_min)}
                </span>
              </p>
              <p>{TodayWeatherResult.list[7].pop * 100 + "%"}</p>
            </td>
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
