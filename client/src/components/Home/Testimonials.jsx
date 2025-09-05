import { motion } from "framer-motion";

const testimonials = [
  {
    text: "Grâce à CONNECTIT, notre site a multiplié les demandes de contact. Nous avons signé 4 nouveaux clients en 2 semaines.",
    author: "Cabinet de conseil, Paris",
  },
  {
    text: "L’agent IA gère mes leads sans que j’aie à lever le petit doigt. Mes ventes mensuelles ont augmenté de 40 %.",
    author: "Coach business, Bruxelles",
  },
  {
    text: "Le pack ultime est un game-changer : site, IA, marketing… tout est automatisé et j’ai repris du temps pour mon business.",
    author: "Agence immobilière, Monaco",
  },
];

export default function Testimonials() {
  return (
    <section className="relative  py-24 px-6 md:px-16 text-white overflow-hidden">
      {/* Background gradient */}

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative max-w-7xl mx-auto text-center"
      >
        {/* Title */}
        <h2 className="text-4xl md:text-6xl font-extrabold mb-16 ">
          Témoignages
        </h2>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="p-8 rounded-3xl bg-black/50 border border-blue-500/30 backdrop-blur-md shadow-[0_0_25px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(96,165,250,0.6)] transition"
            >
              <p className="text-lg md:text-xl text-gray-200 italic leading-relaxed mb-6">
                “{t.text}”
              </p>
              <span className="block text-yellow-400 font-semibold text-right">
                — {t.author}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
