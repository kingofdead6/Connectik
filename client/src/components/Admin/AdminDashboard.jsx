import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { jwtDecode } from "jwt-decode";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [userType, setUserType] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUserType(decoded.usertype);
      } catch (error) {
        setUserType(null);
        navigate("/login");
      }
    } else {
      setUserType(null);
      navigate("/login");
    }
  }, [navigate]);

  const adminSections = [
    {
      path: "/admin/services",
      title: "Services",
      description: "Créer, modifier et supprimer des services",
    },
    {
      path: "/admin/contact",
      title: "Messages",
      description: "Consulter les messages envoyés par les clients",
    },
    {
      path: "/admin/newsletter",
      title: "Newsletter",
      description: "Voir et gérer les abonnés à la newsletter",
    },
    {
      path: "/admin/consultation",
      title: "Consultations",
      description: "Consulter les demandes de travaille envoyés par les clients",
    }
  ];

  const sections = adminSections;

  return (
    <div className="min-h-screen text-white py-12 px-4 pt-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-white text-center mb-12">
          Tableau de bord administrateur
        </h1>
        <div className="grid md:grid-cols-2 gap-6">
          {sections.map((section, index) => (
            <Link
              key={index}
              to={section.path}
              className="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition text-center shadow-lg hover:shadow-2xl shadow-cyan-400"
            >
              <h2 className="text-2xl font-semibold text-yellow-400">{section.title}</h2>
              <p className="mt-2 text-gray-300">{section.description}</p>
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
