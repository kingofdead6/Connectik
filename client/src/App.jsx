import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Shared/Navbar";
import Footer from "./components/Shared/Footer";

export default function App() {

  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />         
        </Routes>
        <Footer />
    </Router>
  );
}