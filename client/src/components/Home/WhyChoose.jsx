import { motion } from "framer-motion";

const WhyChoose = () => {
  const features = [
    {
      title: "Conversion Maximale",
      description:
        "Chaque élément est conçu pour transformer vos visiteurs en clients. Nos designs et IA inspirent l’action.",
      colorClass: "text-yellow-400",
      shadow: "rgba(250, 204, 21, 0.7)",
    },
    {
      title: "Intelligence Artificielle Personnalisée",
      description:
        "Des agents IA qui gèrent vos prospects 24/7, planifient des rendez-vous et boostent vos ventes.",
      colorClass: "text-blue-400",
      shadow: "rgba(96, 165, 250, 0.7)",
    },
    {
      title: "Service Premium",
      description:
        "Support complet, design exclusif et expérience fluide. Nous acceptons un nombre limité de projets par mois.",
      colorClass: "text-purple-400",
      shadow: "rgba(192, 132, 252, 0.7)",
    },
    {
      title: "Innovation Continue",
      description:
        "Nous innovons constamment pour offrir des solutions modernes, efficaces et adaptées à vos besoins.",
      colorClass: "text-emerald-400",
      shadow: "rgba(52, 211, 153, 0.7)",
    },
  ];

  return (
    <section className="pt-20 px-6 md:px-16 text-center text-white">
      <motion.h2
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-4xl md:text-5xl font-bold mb-16"
      >
       Pourquoi choisir 
       <span className="text-yellow-400">CONNECTIK</span> ?
      </motion.h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.45,
              ease: "easeOut",
            }}
            whileHover={{
              scale: 1.08,
              boxShadow: `0px 0px 30px ${feature.shadow}`,
            }}
            className="p-8 rounded-2xl bg-black/40 border border-blue-600/50 backdrop-blur-md cursor-pointer transform transition-transform duration-200 ease-out"
          >
            <h3 className={`text-2xl font-semibold mb-4 ${feature.colorClass}`}>
              {feature.title}
            </h3>
            <p className="text-gray-300">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChoose;
