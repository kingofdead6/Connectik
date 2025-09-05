import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import axios from "axios";
import { API_BASE_URL } from "../../../api";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Le nom est requis";
    if (!formData.email.trim()) {
      errors.email = "L’email est requis";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Format d’email invalide";
    }
    if (!formData.message.trim()) errors.message = "Le message est requis";
    return errors;
  };
 useEffect(() => {
    if (success || error) {
      const timer = setTimeout(() => {
        setSuccess('');
        setError('');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [success, error]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);
    setError("");
    setSuccess("");

    if (Object.keys(errors).length > 0) return;

    setLoading(true);
    try {
      await axios.post(`${API_BASE_URL}/contact`, formData);
      setFormData({ name: "", email: "", message: "" });
      setSuccess("✅ Message envoyé avec succès !");
    } catch (err) {
      console.error("Contact form submission error:", err);
      setError(
        err.response?.data?.message ||
          "⚠️ Une erreur est survenue lors de l’envoi du message"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
  };

  return (
    <section className="relative px-6 md:px-16 text-white overflow-hidden ">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative text-4xl md:text-5xl font-extrabold mb-16 text-center z-10"
      >
        Contact <span className="text-yellow-400">nous</span>
      </motion.h2>

      {/* Grid Layout */}
      <div className="relative pb-10 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto z-10">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="shadow-amber-300 shadow-md hover:shadow-xl duration-300 transform space-y-8 flex flex-col justify-center bg-black/60 border border-blue-500/40 backdrop-blur-lg p-10 rounded-2xl"
        >
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-yellow-400 text-xl drop-shadow-[0_0_10px_rgba(250,204,21,0.8)]" />
            <p className="text-lg">+32 492 53 91 63</p>
          </div>
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-yellow-400 text-xl drop-shadow-[0_0_10px_rgba(250,204,21,0.8)]" />
            <p className="text-lg">mesbih_mehdi@hotmail.com</p>
          </div>
          <div className="flex items-center gap-4">
            <FaWhatsapp className="text-yellow-400 text-xl drop-shadow-[0_0_10px_rgba(250,204,21,0.8)]" />
            <a
              href="https://wa.me/32492539163"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-blue-400 hover:text-yellow-400 transition duration-200 underline"
              aria-label="Chat with us on WhatsApp"
            >
              Discuter maintenant
            </a>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Nous sommes basés à <span className="text-yellow-400">Bruxelles</span> et nous servons des clients partout dans le monde.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="shadow-amber-300 shadow-md hover:shadow-xl duration-300 transform grid grid-cols-1 gap-6 bg-black/60 border border-blue-500/40 backdrop-blur-lg p-10 rounded-2xl"
        >
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Votre nom"
              className={`w-full px-4 py-3 rounded-xl bg-black/70 border ${
                formErrors.name ? "border-red-500" : "border-blue-500/40"
              } focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white placeholder-gray-400 transition duration-200`}
              aria-label="Your name"
              aria-required="true"
            />
            {formErrors.name && (
              <p className="text-red-400 text-sm mt-1">{formErrors.name}</p>
            )}
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Votre e-mail"
              className={`w-full px-4 py-3 rounded-xl bg-black/70 border ${
                formErrors.email ? "border-red-500" : "border-blue-500/40"
              } focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white placeholder-gray-400 transition duration-200`}
              aria-label="Your email"
              aria-required="true"
            />
            {formErrors.email && (
              <p className="text-red-400 text-sm mt-1">{formErrors.email}</p>
            )}
          </div>
          <div>
            <textarea
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Votre message"
              className={`w-full px-4 py-3 rounded-xl bg-black/70 border ${
                formErrors.message ? "border-red-500" : "border-blue-500/40"
              } focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white placeholder-gray-400 transition duration-200`}
              aria-label="Your message"
              aria-required="true"
            ></textarea>
            {formErrors.message && (
              <p className="text-red-400 text-sm mt-1">{formErrors.message}</p>
            )}
          </div>

          {success && (
            <div className="px-4 py-2 rounded-lg bg-blue-500/20 border border-blue-500 text-blue-400 text-sm">
              {success}
            </div>
          )}
          {error && (
            <div className="px-4 py-2 rounded-lg bg-red-500/20 border border-red-500 text-red-400 text-sm">
              {error}
            </div>
          )}

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 25px rgba(250, 204, 21, 0.7)",
            }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={loading}
            className={`cursor-pointer w-full py-3 rounded-xl font-semibold text-lg bg-gradient-to-r from-yellow-400 to-yellow-300 text-black shadow-[0_0_20px_rgba(250,204,21,0.6)] hover:shadow-[0_0_30px_rgba(250,204,21,0.9)] transition-all duration-300 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            aria-label={loading ? "Submitting" : "Send message"}
          >
            {loading ? "Envoi..." : "Envoyer"}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;