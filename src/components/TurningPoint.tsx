import { motion } from 'motion/react';
import { MondrianBackground } from './MondrianBackground';

export function TurningPoint() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32 pivotal-moment-section">
      <MondrianBackground />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h4 className="font-bold text-[14px] uppercase tracking-widest text-[#00796B] mb-6">Le jour où tout a basculé</h4>
          <h2 className="font-extrabold text-[40px] md:text-[48px] text-[#161616] mb-6 leading-tight">
            Une perte d'indépendance soudaine
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#4D4D4D] font-medium leading-relaxed">
            Lors d'un récent séjour à Lille, le vélo électrique de Fred lui a été dérobé. Cet événement va bien au-delà d'une simple perte matérielle. Sans son vélo, l'autonomie laisse place à l'isolement potentiel.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          
          {/* Illustration/Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-[24px] overflow-hidden shadow-[0_6px_24px_rgba(0,0,0,0.06)] relative min-h-[400px] border border-[#E6E2DE]"
          >
             <img 
                src="/F4.png" 
                alt="Rue vide, symbolisant l'absence et la perte de mobilité"
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-90"
              />
              <div className="absolute inset-0 bg-[#00564C]/20 mix-blend-multiply"></div>
          </motion.div>

          {/* Timeline Cards */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col justify-center gap-6"
          >
            <div className="bg-[#FFFFFF] p-8 rounded-[24px] border border-[#E6E2DE] shadow-[0_6px_24px_rgba(0,0,0,0.06)] space-y-8">
              
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-[#FBF7F4] p-6 rounded-2xl border-l-4 border-[#1E9E63] flex-1 w-full">
                  <span className="block text-xs uppercase tracking-widest text-[#4D4D4D] mb-3 font-bold">Avant le vol</span>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#1E9E63]"></div>
                      <span className="font-semibold text-[#161616]">Mobilité garantie</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#1E9E63]"></div>
                      <span className="font-semibold text-[#161616]">Liberté d'action</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#1E9E63]"></div>
                      <span className="font-semibold text-[#161616]">Autonomie sociale</span>
                    </div>
                  </div>
                </div>

                <div className="bg-[#F6E8E7] p-6 rounded-2xl border-l-4 border-[#F5D4CE] flex-1 w-full">
                  <span className="block text-xs uppercase tracking-widest text-[#4D4D4D] mb-3 font-bold">Après le vol</span>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#F5D4CE]"></div>
                      <span className="font-semibold text-[#161616]">Déplacements entravés</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#F5D4CE]"></div>
                      <span className="font-semibold text-[#161616]">Stress quotidien</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#F5D4CE]"></div>
                      <span className="font-semibold text-[#161616]">Risque d'isolement</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
