import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./screens/NotFound";
import Top from "./screens/Top";
import WeatherIndex from "./screens/WeatherIndex";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Top />} />
          <Route path="/weather-index/" element={<WeatherIndex />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
