import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { Header, Footer, RequirementAnalysis } from "./components/index.js";
import "./index.css";
import App from "./App.jsx";
import { ContactUs, OurProcesses } from "./pages/index.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<App />} />
        <Route path="/our_processes" element={<OurProcesses />} >
          <Route path="requirement_analysis" element={<RequirementAnalysis />} />
        </Route>
      
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
