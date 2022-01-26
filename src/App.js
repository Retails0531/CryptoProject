import logo from "./logo.svg";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import MainPage from "./MainPage";
import ProjectPage from "./project";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/home" element={<MainPage />} />
        <Route path="/project/:id" element={<ProjectPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
