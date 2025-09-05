import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Shared/Navbar";
import Footer from "./components/Shared/Footer";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Admin/AdminDashboard";
import AdminServicesPage from "./components/Admin/AdminServices";
import ServicesPage from "./pages/ServicesPage";
import AdminNewsletterPage from "./components/Admin/AdminNewsLetter";
import AdminContactPage from "./components/Admin/AdminContactPage";
import AdminConsultationPage from "./components/Admin/AdminConsultation";
import ConsultationsPage from "./components/Services/ConsultationsPage";
import AboutPage from "./pages/AboutPage";
import NotFound from "./components/Shared/NotFound";
import ScrollToTop from "./components/Shared/ScrollTop";

export default function App() {

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />   
          <Route path="/about" element={<AboutPage /> } />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/consultation" element={<ConsultationsPage /> } />
          <Route path="/login" element={<Login /> } />     
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/services" element={<AdminServicesPage />} />
          <Route path="/admin/newsletter" element={<AdminNewsletterPage />} />
          <Route path="/admin/contact" element={<AdminContactPage />} />
          <Route path="/admin/consultation" element={<AdminConsultationPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
    </Router>
  );
}