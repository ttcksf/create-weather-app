import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SelectPlace from "./screens/SelectPlace";
import FutureWeather from "./screens/FutureWeather";
import TodayWeather from "./screens/TodayWeather";

const App = () => {
  return (
    <div className="body">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SelectPlace />} />
          <Route path="/today-weather" element={<TodayWeather />} />
          <Route path="/future-weather/" element={<FutureWeather />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
