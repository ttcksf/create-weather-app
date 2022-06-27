import React from "react";
import VerySun from "../img/very-sun.png";
import SunCloudHalf from "../img/sun-cloud-half.png";
import CloudLittleSun from "../img/cloud-littlesun.png";
import Rain from "../img/rain.png";
import VeryGood from "../img/very-good.png";
import Good from "../img/good.png";
import Bad from "../img/bad.png";
import VeryBad from "../img/very-bad.png";

const Table = ({ weatherResult }) => {
  // console.log(weatherResult.list.dt_txt.substring(11, 16));
  return (
    <div style={style.tableWrap}>
      <table style={style.table}>
        <tbody>
          <tr>
            <th style={style.th}>日付</th>
            <th style={style.th}>
              {weatherResult.list[0].dt_txt.substring(11, 16)}
            </th>
            <th style={style.th}>
              {weatherResult.list[1].dt_txt.substring(11, 16)}
            </th>
            <th style={style.th}>
              {weatherResult.list[2].dt_txt.substring(11, 16)}
            </th>
            <th style={style.th}>
              {weatherResult.list[3].dt_txt.substring(11, 16)}
            </th>
            <th style={style.th}>
              {weatherResult.list[4].dt_txt.substring(11, 16)}
            </th>
            <th style={style.th}>
              {weatherResult.list[5].dt_txt.substring(11, 16)}
            </th>
            <th style={style.th}>
              {weatherResult.list[6].dt_txt.substring(11, 16)}
            </th>
            <th style={style.th}>
              {weatherResult.list[7].dt_txt.substring(11, 16)}
            </th>
            <th style={style.th}>
              {weatherResult.list[8].dt_txt.substring(11, 16)}
            </th>
          </tr>
          <tr>
            <td style={style.tdFirst}>天気</td>
            <td style={style.tdFirst}>
              <p>
                <img src={VerySun} alt="" />
              </p>
              <p>
                <span className="cRed">
                  {Math.floor(weatherResult.list[0].main.temp_max)}
                </span>
                <span className="cBlue">
                  {Math.floor(weatherResult.list[0].main.temp_min)}
                </span>
              </p>
              <p>{weatherResult.list[0].pop * 100 + "%"}</p>
            </td>
            <td style={style.tdFirst}>
              <p>
                <img
                  src={
                    "http://openweathermap.org/img/wn/" +
                    weatherResult.list[0].weather[0].icon +
                    ".png"
                  }
                  alt=""
                />
              </p>
              <p>
                <span className="cRed">
                  {Math.floor(weatherResult.list[1].main.temp_max)}
                </span>
                <span className="cBlue">
                  {Math.floor(weatherResult.list[0].main.temp_min)}
                </span>
              </p>
              <p>{weatherResult.list[0].pop * 100 + "%"}</p>
            </td>
            <td style={style.tdFirst}>
              <p>
                <img src={SunCloudHalf} alt="" />
              </p>
              <p>
                <span className="cRed">
                  {Math.floor(weatherResult.list[2].main.temp_max)}
                </span>
                <span className="cBlue">
                  {Math.floor(weatherResult.list[0].main.temp_min)}
                </span>
              </p>
              <p>{weatherResult.list[0].pop * 100 + "%"}</p>
            </td>
            <td style={style.tdFirst}>
              <p>
                <img src={CloudLittleSun} alt="" />
              </p>
              <p>
                <span className="cRed">
                  {Math.floor(weatherResult.list[3].main.temp_max)}
                </span>
                <span className="cBlue">
                  {Math.floor(weatherResult.list[0].main.temp_min)}
                </span>
              </p>
              <p>{weatherResult.list[0].pop * 100 + "%"}</p>
            </td>
            <td style={style.tdFirst}>
              <p>
                <img src={Rain} alt="" />
              </p>
              <p>
                <span className="cRed">
                  {Math.floor(weatherResult.list[4].main.temp_max)}
                </span>
                <span className="cBlue">
                  {Math.floor(weatherResult.list[0].main.temp_min)}
                </span>
              </p>
              <p>{weatherResult.list[0].pop * 100 + "%"}</p>
            </td>
            <td style={style.tdFirst}>
              <p>
                <img src={CloudLittleSun} alt="" />
              </p>
              <p>
                <span className="cRed">
                  {Math.floor(weatherResult.list[5].main.temp_max)}
                </span>
                <span className="cBlue">
                  {Math.floor(weatherResult.list[0].main.temp_min)}
                </span>
              </p>
              <p>{weatherResult.list[0].pop * 100 + "%"}</p>
            </td>
            <td style={style.tdFirst}>
              <p>
                <img src={CloudLittleSun} alt="" />
              </p>
              <p>
                <span className="cRed">
                  {Math.floor(weatherResult.list[6].main.temp_max)}
                </span>
                <span className="cBlue">
                  {Math.floor(weatherResult.list[0].main.temp_min)}
                </span>
              </p>
              <p>{weatherResult.list[0].pop * 100 + "%"}</p>
            </td>
            <td style={style.tdFirst}>
              <p>
                <img src={SunCloudHalf} alt="" />
              </p>
              <p>
                <span className="cRed">
                  {Math.floor(weatherResult.list[7].main.temp_max)}
                </span>
                <span className="cBlue">
                  {Math.floor(weatherResult.list[0].main.temp_min)}
                </span>
              </p>
              <p>{weatherResult.list[0].pop * 100 + "%"}</p>
            </td>
          </tr>
          <tr>
            <td>気圧</td>
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
