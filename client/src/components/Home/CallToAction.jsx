import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const CallToAction = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-24 px-6 md:px-16 text-center text-white">
      {/* Background glow effect */}
         <motion.h2
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5}}
          className="text-3xl md:text-5xl font-extrabold mb-10 md:mb-20 text-white"
        >
          Prêt à passer au{" "}
          <span className="text-yellow-400 ">
            niveau supérieur
          </span>{" "}
          ?
        </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="shadow-blue-300 shadow-md hover:shadow-xl duration-300 transform  relative max-w-3xl mx-auto p-10 rounded-3xl bg-black/40 border border-blue-600/40 backdrop-blur-md "
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg text-gray-300 mb-12 leading-relaxed"
        >
          Nous ne travaillons qu’avec{" "}
          <span className="text-yellow-400 font-semibold">
            5 projets par mois
          </span>{" "}
          pour garantir un service exceptionnel. Réservez votre diagnostic
          gratuit dès maintenant.
        </motion.p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <motion.button
            whileHover={{
              scale: 1.08,
              boxShadow: "0 0 25px rgba(250, 204, 21, 0.9)",
            }}
            onClick={() => navigate("/consultation")}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer px-10 py-4 bg-yellow-400 text-black font-bold rounded-xl shadow-lg transition duration-200"
          >
            Réserver mon appel maintenant
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.08,
              boxShadow: "0 0 25px rgba(96,165,250,0.9)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/services")}
            className="cursor-pointer px-10 py-4 bg-blue-500/90 hover:bg-blue-500 text-white font-bold rounded-xl shadow-lg transition duration-200"
          >
            Voir les offres
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default CallToAction;
