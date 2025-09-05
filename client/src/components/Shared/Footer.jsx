import { useState } from "react";
import axios from "axios";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";
import { API_BASE_URL } from "../../../api";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [formError, setFormError] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    if (!email) return "L’email est requis";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return "Format d’email invalide";
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = validateForm();
    setFormError(error);

    if (error) return;

    setLoading(true);
    try {
      await axios.post(`${API_BASE_URL}/newsletter`, { email });
      setEmail("");
      setSuccess("✅ Abonnement réussi !");
      setError("");
    } catch (err) {
      console.error("Subscribe newsletter error:", err);
      setError(
        err.response?.data?.message ||
          "⚠️ Une erreur est survenue lors de l’abonnement"
      );
      setSuccess("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-gradient-to-b from-black via-blue-950 to-black text-gray-200 pt-16 pb-8 mt-20 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start text-center md:text-left">
          {/* Logo + Info */}
          <div className="flex flex-col items-center md:items-start">
            <img
              src="/logo.png"
              alt="CONNECTIK Logo"
              className="w-24 h-24 object-contain drop-shadow-[0_0_12px_#3b82f6]"
            />
            <h3 className="text-2xl font-bold text-white mt-3">
              CONNECT<span className="text-yellow-400">IK</span>
            </h3>
            <p className="text-sm mt-3 text-gray-400 max-w-xs">
              Solutions digitales boostées par l’IA.  
              Basés à Bruxelles, nous servons des clients partout dans le monde.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-yellow-400 mb-4 drop-shadow-[0_0_6px_#facc15]">
              Liens rapides
            </h4>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-blue-400 transition">Accueil</a></li>
              <li><a href="/about" className="hover:text-blue-400 transition">À propos</a></li>
              <li><a href="/services" className="hover:text-blue-400 transition">Services</a></li>
              <li><a href="/testimonials" className="hover:text-blue-400 transition">Témoignages</a></li>
              <li><a href="/#contact" className="hover:text-blue-400 transition">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter + Contact + Social */}
          <div>
            <h4 className="text-lg font-semibold text-yellow-400 mb-4 drop-shadow-[0_0_6px_#facc15]">
              Newsletter
            </h4>
            <p className="text-sm mb-3">Recevez nos nouveautés et offres exclusives.</p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 mb-6"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre e-mail"
                className={`flex-1 px-4 py-2 rounded-lg bg-gray-900 border ${
                  formError ? "border-red-500" : "border-gray-700"
                } focus:outline-none focus:border-blue-400 text-white text-sm`}
              />
              <button
                type="submit"
                disabled={loading}
                className={`cursor-pointer px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold rounded-lg hover:shadow-[0_0_12px_#3b82f6] transition ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {loading ? "Envoi..." : "S’abonner"}
              </button>
            </form>
            {formError && <p className="text-red-400 text-sm mb-2">{formError}</p>}
            {error && <p className="text-red-400 text-sm mb-2">{error}</p>}
            {success && <p className="text-green-400 text-sm mb-2">{success}</p>}

            {/* Social + Contact */}
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex gap-4 justify-center md:justify-start">
                <a href="https://facebook.com" className="hover:text-blue-400 transition"><FaFacebook size={20} /></a>
                <a href="https://instagram.com" className="hover:text-pink-400 transition"><FaInstagram size={20} /></a>
                <a href="https://linkedin.com" className="hover:text-blue-500 transition"><FaLinkedin size={20} /></a>
                <a href="https://tiktok.com" className="hover:text-white transition"><FaTiktok size={20} /></a>
              </div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <FaEnvelope className="text-yellow-400" /> mesbih_mehdi@hotmail.com
              </div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <FaPhone className="text-yellow-400" /> +32 492 53 91 63
              </div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <FaWhatsapp className="text-yellow-400" />
                <a
                  href="https://wa.me/32492539163"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Discuter sur WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-10 border-t border-gray-700 pt-4 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} CONNECTIK — Tous droits réservés
        </div>
      </div>
    </footer>
  );
}
