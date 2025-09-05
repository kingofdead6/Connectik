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
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = validateForm();
    setFormError(error);
    setError("");
    setSuccess("");

    if (error) return;

    setLoading(true);
    try {
      await axios.post(`${API_BASE_URL}/newsletters`, { email });
      setEmail("");
      setSuccess("✅ Abonnement réussi !");
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "⚠️ Une erreur est survenue lors de l’abonnement"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-gradient-to-b from-black via-blue-950 to-black text-gray-300 pt-16 pb-8 mt-20 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Logo + Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
  <img
    src="https://res.cloudinary.com/dtwa3lxdk/image/upload/v1757088952/20250905_1458_White_Text_Logo_remix_01k4d2m58pe94rwwsbnh4ew9we_gcpaqu.png"
    alt="CONNECTIK Logo"
    className="w-48 h-48 -my-20 object-contain drop-shadow-[0_0_12px_rgba(250,204,21,0.6)]"
  />

  <p className="text-sm mt-4 ml-6 text-gray-400 max-w-xs">
    Solutions digitales boostées par l’IA. Basés à Bruxelles, nous
    servons des clients dans le monde entier.
  </p>

  <p className="text-xs mt-3 ml-6 text-gray-500">
    Créé par :{" "}
    <a
      href="https://www.softwebelevation.com"
      target="_blank"
      rel="noopener noreferrer"
      className="text-yellow-400 hover:underline"
    >
      SoftwebElevation
    </a>
  </p>
</div>


          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-yellow-400 mb-4">
              Liens rapides
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Accueil", href: "/" },
                { label: "À propos", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Consultation", href: "/consultation" },
              ].map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="hover:text-yellow-400 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-yellow-400 mb-4">
              Newsletter
            </h4>
            <p className="text-sm mb-3">
              Recevez nos nouveautés et offres exclusives.
            </p>
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
                } focus:outline-none focus:border-yellow-400 text-white text-sm`}
              />
              <button
                type="submit"
                disabled={loading}
                className={`cursor-pointer px-5 py-2 bg-yellow-400 text-black font-bold rounded-lg shadow-md hover:shadow-yellow-500/40 transition ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {loading ? "Envoi..." : "S’abonner"}
              </button>
            </form>
            {formError && <p className="text-red-400 text-sm">{formError}</p>}
            {error && <p className="text-red-400 text-sm">{error}</p>}
            {success && <p className="text-green-400 text-sm">{success}</p>}

            {/* Social + Contact */}
            <div className="mt-6 flex flex-col gap-3 text-sm">
           

              {/* Contact */}
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <FaEnvelope className="text-yellow-400" />
                <span>mesbih_mehdi@hotmail.com</span>
              </div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <FaPhone className="text-yellow-400" />
                <span>+32 492 53 91 63</span>
              </div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <FaWhatsapp className="text-green-500" />
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

        {/* Bottom */}
        <div className="mt-10 border-t border-gray-700 pt-4 text-center text-xs text-gray-500 hover:text-yellow-300">
          © {new Date().getFullYear()} CONNECTIK — Tous droits réservés
        </div>
      </div>
    </footer>
  );
}
