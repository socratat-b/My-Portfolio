import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import SideBar from "./components/Sidebar";
import "./index.css";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="flex flex-col lg:flex-row">
      <Header />

      <SideBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<h1>This is the project page</h1>} />
      </Routes>
    </div>
  );
}

export default App;
