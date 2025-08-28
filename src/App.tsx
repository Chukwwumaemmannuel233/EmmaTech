import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
// import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/about";
// import ServicesPage from "./pages/ServicesPage";
// import PortfolioPage from "./pages/PortfolioPage";
import TeamPage from "./pages/team";
import ContactPage from "./pages/contact";
import CareerPage from "./pages/career";
import HelpPage from "./pages/help";
import SupportPage from "./pages/support";
import DocumentationPage from "./pages/documentation";
import APIReferencePage from "./pages/api-reference";
import StatusPage from "./pages/status";
import SecurityPage from "./pages/security";
import PrivacyPolicyPage from "./pages/privacy";
import CaseStudyPage from "./pages/case-studies";
import BlogPage from "./pages/blog";
import TermsOfService from "./pages/terms";
import CookiesPolicy from "./pages/cookies";
import ServicesPage from "./pages/service";
import SoftwareDevelopmentPage from "./pages/services/software-development";
import CloudInfrastructurePage from "./pages/services/cloud-infastructure";
// import TalkToEngineerPage from "./pages/talk-to-engineer";
import SeeHowWeBuildPage from "./pages/see-how-we-build";
import AutomationPage from "./pages/services/automation";
import DataIntelligencePage from "./pages/services/data-intelligence";
import ManagedITServicesPage from "./pages/services/managed-it-services";
import UIUXDesignPage from "./pages/services/uiux-design";
import CybersecurityPage from "./pages/services/cybersecurity";
import SEOOptimizationPage from "./pages/services/seo";
import ConsultationPage from "./pages/services/consulting";
import WatchDemo from "./pages/watchdemo";
import AIWidgetOnly from "./components/AIWidget";





function App() {
  return (
    <div className="bg-white">
      <Header activeSection="home" />
      <Routes>
        {/* Default route (/) should go to HomePage */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        {/* <Route path="/services" element={<ServicesPage />} /> */}
        {/* <Route path="/portfolio" element={<PortfolioPage />} /> */}
        <Route path="/team" element={<TeamPage />} />
        <Route path="/contact" element={<ContactPage />} />
         <Route path="/career" element={<CareerPage />} /> {/* <-- register it */}
         <Route path="/help" element={<HelpPage />} />
         <Route path="/support" element={<SupportPage />} />
         <Route path="/documentation" element={<DocumentationPage />} />
         <Route path="/api-reference" element={<APIReferencePage />} />
         <Route path="/status" element={<StatusPage />} />
         <Route path="/security" element={<SecurityPage />} />
         <Route path="/privacy" element={<PrivacyPolicyPage />} />
         <Route path="/case-studies" element={<CaseStudyPage />} />
         <Route path="/blog" element={<BlogPage />} />
         <Route path="/terms" element={<TermsOfService />} />
         <Route path="/cookies" element={<CookiesPolicy />} />
         <Route path="/service" element={<ServicesPage />} />
         <Route path="/services/software-development" element={<SoftwareDevelopmentPage />} />
         <Route path="/services/cloud-infastructure" element={<CloudInfrastructurePage />} />
         <Route path="/see-how-we-build" element={<SeeHowWeBuildPage />} />
         <Route path="/services/automation" element={<AutomationPage />} />
         <Route path="/services/data-intelligence" element={<DataIntelligencePage />} />
         <Route path="/services/managed-it-services" element={<ManagedITServicesPage />} />
         <Route path="/services/uiux-design" element={<UIUXDesignPage />} />
         <Route path="/services/cybersecurity" element={<CybersecurityPage />} />
         <Route path="/services/seo" element={<SEOOptimizationPage />} />
         <Route path="/services/consulting" element={<ConsultationPage />} />
         <Route path="/watchdemo" element={<WatchDemo />} />
      </Routes>
       {/* Keep widget fixed */}
    <AIWidgetOnly />
    </div>
  );
}

export default App;
