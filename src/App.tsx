import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NotFountPage from "./pages/NotFoundPage";
import ProjectsPage from "./pages/ProjectsPage";
import Layout from "./components/layout/Layout";
import ContactPage from "./pages/ContactPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFountPage />} />
        <Route path="/projects/:slug" element={<ProjectDetailsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
