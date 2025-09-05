import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  }),
  hover: {
    scale: 1.05,
    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
  },
};

const steps = [
  {
    title: "Le Début",
    description:
      "Notre aventure a commencé avec une idée simple : transformer une passion en un projet qui crée de la valeur.",
    icon: "🌱",
  },
  {
    title: "Les Défis",
    description:
      "Nous avons affronté de nombreux obstacles, mais chaque étape a été une leçon qui nous a rendus plus forts.",
    icon: "⚡",
  },
  {
    title: "Les Réussites",
    description:
      "Grâce au travail d’équipe et à la persévérance, nous avons accompli des succès dont nous sommes fiers.",
    icon: "🏆",
  },
  {
    title: "L’Avenir",
    description:
      "Ce n’est que le début. Nos ambitions dépassent le présent et nos rêves vont au-delà des limites du possible.",
    icon: "🚀",
  },
];

export default function AboutTimeline() {
  return (
    <section className="relative min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-5xl font-extrabold text-center text-white mb-16"
        >
          Notre <span className="text-yellow-400">Parcours</span>
        </motion.h2>

        <div className="relative">
          {/* Ligne verticale */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-yellow-500 to-yellow-700 opacity-60"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              whileHover="hover"
              className={`relative flex items-center mb-16 process-step ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              {/* Carte */}
              <div
                className={`w-full lg:w-5/12 bg-gray-800/70 backdrop-blur-md p-8 shadow-2xl shadow-cyan-300 rounded-xl border border-yellow-500/30 transition-all duration-500 ${
                  index % 2 === 0 ? "lg:mr-auto" : "lg:ml-auto"
                }`}
              >
                <div className="flex items-center mb-4">
                  <span className="text-4xl ml-3">{step.icon}</span>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-300 text-base sm:text-lg">
                  {step.description}
                </p>
              </div>

              {/* Point de la timeline */}
              <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-amber-500 shadow-2xl shadow-red-500 rounded-full border-2 border-yellow-700"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
