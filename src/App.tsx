import { Navigate, Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "sonner";
import Header from "./components/Header";
import SEOManager from "./components/SEOManager";
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
import GetAQuotePage from "./pages/get-a-quote";
import SolutionsPage from "./pages/solutions";
import SoftwareDevelopmentPage from "./pages/services/software-development";
// import TalkToEngineerPage from "./pages/talk-to-engineer";
import SeeHowWeBuildPage from "./pages/see-how-we-build";
import ManagedITServicesPage from "./pages/services/managed-it-services";
import UIUXDesignPage from "./pages/services/uiux-design";
import SEOOptimizationPage from "./pages/services/seo";
import ConsultationPage from "./pages/services/consulting";
import WatchDemo from "./pages/watchdemo";
import AIWidgetOnly from "./components/AIWidget";
import AdminPage from "./pages/admin";
import AdminLoginPage from "./pages/admin-login";
import AdminDashboardPage from "./pages/admin-dashboard";
import AdminResetPasswordPage from "./pages/admin-reset-password";





function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <div className="bg-white">
      <SEOManager />
      {!isAdminRoute && <Header activeSection="home" />}
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
         <Route path="/get-a-quote" element={<GetAQuotePage />} />
         <Route path="/solutions" element={<SolutionsPage />} />
         <Route path="/services/software-development" element={<SoftwareDevelopmentPage />} />
         <Route path="/see-how-we-build" element={<SeeHowWeBuildPage />} />
         <Route path="/services/managed-it-services" element={<ManagedITServicesPage />} />
         <Route path="/services/uiux-design" element={<UIUXDesignPage />} />
         <Route path="/services/seo" element={<SEOOptimizationPage />} />
         <Route path="/services/consulting" element={<ConsultationPage />} />
         <Route path="/services/cloud-infastructure" element={<Navigate to="/service" replace />} />
         <Route path="/services/automation" element={<Navigate to="/service" replace />} />
         <Route path="/services/data-intelligence" element={<Navigate to="/service" replace />} />
         <Route path="/services/cybersecurity" element={<Navigate to="/service" replace />} />
         <Route path="/watchdemo" element={<WatchDemo />} />
         <Route path="/admin" element={<AdminPage />} />
         <Route path="/admin/login" element={<AdminLoginPage />} />
         <Route path="/admin/reset-password" element={<AdminResetPasswordPage />} />
         <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
      </Routes>
       {/* Keep widget fixed */}
    {!isAdminRoute && <AIWidgetOnly />}
    <Toaster
      position="top-right"
      richColors
      closeButton
      style={{ zIndex: 1000 }}
      toastOptions={{
        duration: 4000,
        classNames: {
          toast:
            "emmatech-toast rounded-xl border border-blue-100 bg-white/95 shadow-2xl backdrop-blur",
          title: "text-gray-950 font-semibold",
          description: "text-gray-600",
          actionButton: "bg-blue-600",
          closeButton: "border-gray-200 bg-white text-gray-500",
        },
      }}
    />
    </div>
  );
}

export default App;
