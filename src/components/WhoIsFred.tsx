import { motion } from 'motion/react';

export function WhoIsFred() {
  return (
    <section id="histoire" className="py-20 md:py-32 bg-[#F2F1DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        
        <div className="grid md:grid-cols-2 gap-16 items-center bg-[#FFFFFF] border border-[#E6E2DE] rounded-[24px] p-8 md:p-12 shadow-[0_6px_24px_rgba(0,0,0,0.06)] max-w-5xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <h4 className="font-bold text-[14px] uppercase tracking-widest text-[#00796B] mb-6">SON HISTOIRE</h4>
            <h2 className="font-extrabold text-[32px] md:text-[40px] text-[#161616] mb-8 leading-tight">
              Qui est Fred ?
            </h2>
            <div className="space-y-6 text-[16px] md:text-[18px] text-[#4D4D4D] font-medium leading-relaxed">
              <p>
                Dans notre quartier, Fred est un visage familier et rassurant. Il est connu pour sa générosité naturelle et sa volonté de toujours tendre la main aux autres, même lorsque son propre chemin n'est pas facile.
              </p>
              <p>
                Respecté par ses voisins, il donne de son temps sans jamais compter. Qu'il s'agisse d'un petit service ou simplement d'une présence bienveillante, Fred fait partie de ces personnes qui tissent le lien social d'une communauté.
              </p>
              <p>
                Malgré les défis personnels auxquels il a pu faire face, il a toujours su garder un optimisme contagieux et une profonde dignité.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 md:order-2"
          >
            <div className="rounded-[24px] overflow-hidden aspect-[4/5] shadow-lg relative border border-[#E6E2DE]">
              <img 
                src="/F2.png" 
                alt="Fred souriant dans le quartier"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
