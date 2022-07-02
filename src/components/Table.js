import React from "react";

const Table = ({ TodayWeatherResult }) => {
  // console.log(weatherResult.list.dt_txt.substring(11, 16));
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
            <td style={style.tdSecond}>
              {TodayWeatherResult.list[0].wind.speed} km/h
            </td>
            <td style={style.tdSecond}>
              {TodayWeatherResult.list[1].wind.speed} km/h
            </td>
            <td style={style.tdSecond}>
              {TodayWeatherResult.list[2].wind.speed} km/h
            </td>
            <td style={style.tdSecond}>
              {TodayWeatherResult.list[3].wind.speed} km/h
            </td>
            <td style={style.tdSecond}>
              {TodayWeatherResult.list[4].wind.speed} km/h
            </td>
            <td style={style.tdSecond}>
              {TodayWeatherResult.list[5].wind.speed} km/h
            </td>
            <td style={style.tdSecond}>
              {TodayWeatherResult.list[6].wind.speed} km/h
            </td>
            <td style={style.tdSecond}>
              {TodayWeatherResult.list[7].wind.speed} km/h
            </td>
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
