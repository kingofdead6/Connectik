import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="relative  px-6 md:px-16 text-white overflow-hidden">
  
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative text-4xl md:text-5xl font-extrabold mb-16 text-center z-10"
      >
        Parlons de <span className="text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.7)]">votre projet</span>
      </motion.h2>

      {/* Grid Layout */}
      <div className="relative pb-10  grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto z-10">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="shadow-amber-300 shadow-md hover:shadow-xl duration-300 transform space-y-8 flex flex-col justify-center bg-black/60 border border-blue-500/40 backdrop-blur-lg p-10 rounded-2xl "
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
          className="shadow-amber-300 shadow-md hover:shadow-xl duration-300 transform grid grid-cols-1 gap-6 bg-black/60 border border-blue-500/40 backdrop-blur-lg p-10 rounded-2xl"
        >
          <input
            type="text"
            placeholder="Votre nom"
            className="w-full px-4 py-3 rounded-xl bg-black/70 border border-blue-500/40 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white placeholder-gray-400 transition duration-200"
          />
          <input
            type="email"
            placeholder="Votre e-mail"
            className="w-full px-4 py-3 rounded-xl bg-black/70 border border-blue-500/40 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white placeholder-gray-400 transition duration-200"
          />
          <textarea
            rows="4"
            placeholder="Votre message"
            className="w-full px-4 py-3 rounded-xl bg-black/70 border border-blue-500/40 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white placeholder-gray-400 transition duration-200"
          ></textarea>

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 25px rgba(250, 204, 21, 0.7)",
            }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer w-full py-3 rounded-xl font-semibold text-lg bg-gradient-to-r from-yellow-400 to-yellow-300 text-black shadow-[0_0_20px_rgba(250,204,21,0.6)] hover:shadow-[0_0_30px_rgba(250,204,21,0.9)] transition"
          >
            Envoyer
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
