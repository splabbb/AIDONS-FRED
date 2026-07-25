import { motion } from 'motion/react';

const impacts = [
  { title: "Dignité", description: "Lui redonner le pouvoir d'organiser ses journées et de retrouver sa fierté." },
  { title: "Mobilité", description: "Permettre à Fred de se déplacer librement dans son quartier et au-delà." },
  { title: "Stabilité", description: "Rétablir l'équilibre de son quotidien et sa sérénité d'esprit." },
  { title: "Soutien", description: "Alléger le fardeau d'un remplacement coûteux qu'il ne peut assumer seul." }
];

export function Impact() {
  return (
    <section id="impact" className="py-20 md:py-32 bg-[#FBF7F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h4 className="font-bold text-[14px] uppercase tracking-widest text-[#00796B] mb-6">IMPACT</h4>
          <h2 className="font-extrabold text-[40px] md:text-[48px] text-[#161616] mb-6 leading-tight">
            Votre soutien change concrètement les choses
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#4D4D4D] font-medium leading-relaxed mb-8">
            Chaque don, quelle que soit sa taille, répond directement à la question : "Quelle différence fait mon aide aujourd'hui ?"
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {impacts.map((impact, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#FFFFFF] rounded-[24px] border border-[#E6E2DE] p-8 shadow-[0_6px_24px_rgba(0,0,0,0.06)] hover:translate-y-[-4px] transition-transform duration-250 flex flex-col gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-[#DCEEE8] flex items-center justify-center text-[#00796B]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <h3 className="text-[15px] font-bold uppercase tracking-widest text-[#161616]">
                  {impact.title}
                </h3>
                <p className="text-[#4D4D4D] text-[15px] font-medium leading-relaxed">
                  {impact.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
