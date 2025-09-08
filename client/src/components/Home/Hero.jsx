import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

export default function Hero() {
  const headingRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    );
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center text-center text-white overflow-hidden"
      style={{
        backgroundImage: "url('https://res.cloudinary.com/dtwa3lxdk/image/upload/v1757085475/20250905_1616_Futuristic_Digital_Cityscape_simple_compose_01k4d72qj8f0krsh7zkke5qwxb_of0iha.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Improved overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl px-6 py-20">
        <motion.span
          className="inline-block px-4 py-1 mb-6 text-sm font-medium bg-yellow-400/10 text-yellow-400 rounded-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Votre Partenaire Digital
        </motion.span>

        <motion.h1
          ref={headingRef}
          className="text-5xl md:text-7xl font-extrabold leading-tight bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 bg-clip-text text-transparent mb-6"
        >
          Agence Premium d'Intégration Web & IA
        </motion.h1>

        <motion.p
          className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Nous transformons votre présence en ligne avec des sites web haut de
          gamme et des agents IA qui convertissent.
        </motion.p>

        <motion.div
          className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <a
            href="/consultation"
            className="group px-8 py-4 bg-yellow-400 text-[#0a0f1f] hover:bg-yellow-300 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(255,215,0,0.3)]"
          >
            <span className="flex items-center gap-2">
              Diagnostic gratuit
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </a>

          <a
            href="/services"
            className="group px-8 py-4 bg-transparent border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-[#0a0f1f] rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
          >
            <span className="flex items-center gap-2">
              Nos Services
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
