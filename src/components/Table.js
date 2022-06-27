import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import VerySun from "../img/very-sun.png";
import SunCloudHalf from "../img/sun-cloud-half.png";
import CloudLittleSun from "../img/cloud-littlesun.png";
import Rain from "../img/rain.png";
import VeryGood from "../img/very-good.png";
import Good from "../img/good.png";
import Bad from "../img/bad.png";
import VeryBad from "../img/very-bad.png";
import Aomori from "../data/TestAomori.json";

const Table = ({ weatherResult }) => {
  console.log(weatherResult.list.dt_txt);
  return (
    <div style={style.tableWrap}>
      {weatherResult.city && <div>{weatherResult.city.name}</div>}

      <table style={style.table}>
        <tbody>
          <tr>
            <th style={style.th}>日付</th>
            <th style={style.th}>6:00</th>
            <th style={style.th}>9:00</th>
            <th style={style.th}>12:00</th>
            <th style={style.th}>15:00</th>
            <th style={style.th}>18:00</th>
            <th style={style.th}>21:00</th>
            <th style={style.th}>0:00</th>
            <th style={style.th}>3:00</th>
          </tr>
          <tr>
            <td style={style.tdFirst}>天気</td>
            <td style={style.tdFirst}>
              <p>
                <img src={VerySun} alt="" />
              </p>
              <p>
                <span className="cRed">30</span> /{" "}
                <span className="cBlue">20</span>
              </p>
              <p>0%</p>
            </td>
            <td style={style.tdFirst}>
              <p>
                <img src={SunCloudHalf} alt="" />
              </p>
              <p>
                <span className="cRed">27</span> /{" "}
                <span className="cBlue">21</span>
              </p>
              <p>10%</p>
            </td>
            <td style={style.tdFirst}>
              <p>
                <img src={SunCloudHalf} alt="" />
              </p>
              <p>
                <span className="cRed">28</span> /{" "}
                <span className="cBlue">22</span>
              </p>
              <p>10%</p>
            </td>
            <td style={style.tdFirst}>
              <p>
                <img src={CloudLittleSun} alt="" />
              </p>
              <p>
                <span className="cRed">26</span> /{" "}
                <span className="cBlue">19</span>
              </p>
              <p>30%</p>
            </td>
            <td style={style.tdFirst}>
              <p>
                <img src={Rain} alt="" />
              </p>
              <p>
                <span className="cRed">26</span> /{" "}
                <span className="cBlue">18</span>
              </p>
              <p>100%</p>
            </td>
            <td style={style.tdFirst}>
              <p>
                <img src={CloudLittleSun} alt="" />
              </p>
              <p>
                <span className="cRed">28</span> /{" "}
                <span className="cBlue">20</span>
              </p>
              <p>20%</p>
            </td>
            <td style={style.tdFirst}>
              <p>
                <img src={CloudLittleSun} alt="" />
              </p>
              <p>
                <span className="cRed">28</span> /{" "}
                <span className="cBlue">20</span>
              </p>
              <p>10%</p>
            </td>
            <td style={style.tdFirst}>
              <p>
                <img src={SunCloudHalf} alt="" />
              </p>
              <p>
                <span className="cRed">28</span> /{" "}
                <span className="cBlue">18</span>
              </p>
              <p>30%</p>
            </td>
          </tr>
          <tr>
            <td style={style.tdSecond}>気圧</td>
            <td style={style.tdSecond}>
              <p>
                <img src={VeryGood} alt="" />
              </p>
              <p>大変良い</p>
            </td>
            <td style={style.tdSecond}>
              <p>
                <img src={VeryGood} alt="" />
              </p>
              <p>大変良い</p>
            </td>
            <td style={style.tdSecond}>
              <p>
                <img src={Good} alt="" />
              </p>
              <p>良い</p>
            </td>
            <td style={style.tdSecond}>
              <p>
                <img src={Bad} alt="" />
              </p>
              <p>不調</p>
            </td>
            <td style={style.tdSecond}>
              <p>
                <img src={VeryBad} alt="" />
              </p>
              <p>絶不調</p>
            </td>
            <td style={style.tdSecond}>
              <p>
                <img src={Good} alt="" />
              </p>
              <p>良い</p>
            </td>
            <td style={style.tdSecond}>
              <p>
                <img src={Good} alt="" />
              </p>
              <p>良い</p>
            </td>
            <td style={style.tdSecond}>
              <p>
                <img src={Good} alt="" />
              </p>
              <p>良い</p>
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
