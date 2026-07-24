import { motion } from 'motion/react';

export function Urgency() {
  return (
    <section className="py-16 md:py-24 bg-[#FBF7F4]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#FFFFFF] border-2 border-[#E6E2DE] rounded-[24px] p-8 md:p-12 text-center shadow-[0_6px_24px_rgba(0,0,0,0.06)]"
        >
          <div className="w-16 h-16 bg-[#F6E8E7] rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-2xl">🚨</span>
          </div>
          <h2 className="font-extrabold text-[24px] md:text-[32px] text-[#00796B] mb-4">
            Chaque jour compte
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#4D4D4D] max-w-2xl mx-auto font-medium leading-relaxed">
            Chaque jour sans mobilité est un jour d'isolement. Plus vite nous atteindrons notre objectif, plus vite Fred pourra retrouver l'indépendance qu'il a perdue. 
          </p>
        </motion.div>

      </div>
    </section>
  );
}
