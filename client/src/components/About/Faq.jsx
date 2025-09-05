import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Combien de temps faut-il pour créer mon site IA ?",
    answer:
      "Nos packs démarrent à 72 heures pour une page unique. Pour les sites complets et packs ultimes, comptez 1 à 2 semaines selon votre contenu.",
  },
  {
    question: "Puis-je modifier le contenu moi-même ?",
    answer:
      "Bien sûr ! Nous vous donnons accès à un espace d’édition simple. Et notre équipe reste disponible pour vous accompagner.",
  },
  {
    question: "L’agent IA fonctionne-t-il 24/7 ?",
    answer:
      "Oui. Votre agent IA gère les leads jour et nuit, sur vos canaux préférés (web, WhatsApp, e-mail).",
  },
  {
    question: "Quelles sont vos conditions de paiement ?",
    answer:
      "Pour les packs one-shot, 50 % à la commande et 50 % à la livraison. Les abonnements mensuels sont prélevés automatiquement chaque mois.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className=" text-white  px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl font-extrabold text-center mb-12"
        >
           Foire Aux <span className="text-yellow-400">Questions</span> 
        </motion.h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-800/70 backdrop-blur-md rounded-xl shadow-md border border-yellow-500/20 shadow-cyan-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full px-6 py-4 text-left text-lg font-medium text-yellow-400 focus:outline-none cursor-pointer "
              >
                {faq.question}
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-6 h-6 text-yellow-400" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-gray-300 text-base sm:text-lg">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
