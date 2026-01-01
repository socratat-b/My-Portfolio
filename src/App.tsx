import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import SideBar from "./components/Sidebar";
import "./index.css";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";

function App() {
  return (
    <div className="flex flex-col lg:flex-row">
      <Header />

      <SideBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </div>
  );
}

export default App;
