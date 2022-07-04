import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodayWeather from "./screens/TodayWeather";
import FutureWeather from "./screens/TodayWeather";
import SelectPlace from "./screens/SelectPlace";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SelectPlace />} />
          <Route path="/today-weather" element={<TodayWeather />} />
          <Route path="/future-weather/" element={<FutureWeather />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
