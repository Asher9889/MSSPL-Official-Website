import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { Header, Footer, RequirementAnalysis, ProjectProposal, ProjectDesign, ProjectDevelopment, Installation  } from "./components/index.js";
import "./index.css";
import App from "./App.jsx";
import { ContactUs, OurProcesses } from "./pages/index.js";
import AcceptanceTesting from "./components/acceptance-testing/AcceptanceTesting.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<App />} />
        <Route path="/our_processes" element={<OurProcesses />} >
          <Route path="requirement_analysis" element={<RequirementAnalysis />} />
          <Route path="acceptance_testing" element={<AcceptanceTesting />} />
          <Route path="project_proposal" element={<ProjectProposal />} />
          <Route path="project_design" element={<ProjectDesign />} />
          <Route path="project_development" element={<ProjectDevelopment />} />
          <Route path="installation" element={<Installation />} />
        </Route>
      
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
