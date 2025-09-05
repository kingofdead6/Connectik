import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-white">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed" 
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dtwa3lxdk/image/upload/v1757109028/20250905_2247_Futuristic_Digital_Skyline_simple_compose_01k4dxhtc0f3hbr61qmkp5adfh_r9rzzx.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-6xl font-bold text-yellow-400 drop-shadow-lg"
        >
          Qui sommes-nous ?
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed"
        >
          Chez <span className="text-yellow-400 font-semibold">Connectik</span>,
          nous croyons que la technologie est un pont entre les idées et la
          réussite. Notre mission est de créer des solutions numériques modernes,
          élégantes et performantes pour accompagner les entreprises et les
          particuliers vers le succès.
        </motion.p>
      </div>
    </section>
  );
}
