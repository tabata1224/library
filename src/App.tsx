import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomeView from "./page/HomePage/compenents/HomeView";
import ManagementView from "./page/ManagementPage/compenents/ManagementView";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/management" element={<ManagementView />} />
    </Routes>
  );
}

export default App;
