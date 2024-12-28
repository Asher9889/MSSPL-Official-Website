import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { Header, Footer, RequirementAnalysis, ProjectProposal, ProjectDesign, ProjectDevelopment, Installation, LibraryAutomationSystem, CampsysErpManagement, FileTrackingSystem, AndroidApps, ESecure, BeOurPartner, CompanyProfile, Objectives, ManagementStaff, ITService, Career, HeaderTopLinks, ContactUs  } from "./components/index.js";
import "./index.css";
import App from "./App.jsx";
import { AboutUs, OurProcesses, Products, TechStack } from "./pages/index.js";
import AcceptanceTesting from "./components/acceptance-testing/AcceptanceTesting.jsx";
import ECommerceDevelopment from "./components/e-commerce-development/ECommerceDevelopment.jsx";
import OurClients from "./pages/our-clients/OurClients.jsx";
import { ContactFormProvider } from './utils/context/context.jsx'


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
   
    <ContactFormProvider>


      <HeaderTopLinks />
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
      
        <Route path="/products" element={<Products />} >
          <Route  path="library_automation_system" element={<LibraryAutomationSystem />}/>
          <Route  path="campsys_erp_management" element={<CampsysErpManagement />}/>
          <Route  path="file_tracking_system" element={<FileTrackingSystem />}/>
          <Route  path="android_apps" element={<AndroidApps />}/>
          <Route  path="e-commerce_development" element={<ECommerceDevelopment />}/>
          <Route  path="e-secure" element={<ESecure />}/>
        </Route>

        <Route path="/our_clients" element={<OurClients />}>
          <Route path="be_our_partner" element={<BeOurPartner />} />
        </Route>

        <Route path="/our_technology" element={<TechStack />} />

        <Route path="/about_us" element={<AboutUs />} >
            <Route path="company_profile" element={<CompanyProfile />}/>
            <Route path="objectives" element={<Objectives />}/>
            <Route path="management_&_staff" element={<ManagementStaff />}/>
            <Route path="it_service" element={<ITService />}/>
        </Route>

        <Route path="/career" element={<Career />}/>

        <Route path="contact_us" element={<ContactUs />}/>

      </Routes>
      <Footer  />

   
     
    </ContactFormProvider>
    </BrowserRouter>
  </StrictMode>
);
