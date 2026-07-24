import { motion } from 'motion/react';

const testimonials = [
  {
    quote: "Fred est l'âme de notre rue. L'aider à retrouver son indépendance est une évidence pour nous tous. C'est notre tour de le soutenir.",
    author: "Marie L.",
    role: "Voisine"
  },
  {
    quote: "Un homme d'une bonté rare. Chaque geste compte pour lui rendre son sourire. Il a pris le temps de venir prendre de mes nouvelles.",
    author: "Thomas K.",
    role: "Ami & Commerçant"
  },
  {
    quote: "On ne réalise pas à quel point un moyen de transport est vital pour lui. C'est sa connexion avec le monde qui lui a été enlevée.",
    author: "Sophie",
    role: "Amie proche"
  }
];

export function Testimonials() {
  return (
    <section id="temoignages" className="py-20 md:py-32 bg-[#FFFFFF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h4 className="font-bold text-[14px] uppercase tracking-widest text-[#00796B] mb-6">Témoignages</h4>
          <h2 className="font-extrabold text-[40px] md:text-[48px] text-[#161616] mb-6">
            Le quartier se mobilise
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-[#FFFFFF] border border-[#E6E2DE] shadow-[0_6px_24px_rgba(0,0,0,0.06)] rounded-[24px] p-8 md:p-10 flex flex-col gap-8 justify-between relative overflow-hidden"
            >
              <svg className="absolute top-6 right-6 w-12 h-12 text-[#FBF7F4] -z-10" fill="currentColor" viewBox="0 0 32 32">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              
              <p className="text-[16px] text-[#161616] leading-relaxed font-medium z-10">
                "{testimonial.quote}"
              </p>
              <div className="flex gap-4 items-center z-10 border-t border-[#E6E2DE] pt-6 mt-2">
                <div className="w-10 h-10 rounded-full bg-[#FBF7F4] shrink-0 border border-[#E6E2DE]"></div>
                <div>
                  <p className="text-[13px] font-bold tracking-widest uppercase text-[#161616]">{testimonial.author}</p>
                  <p className="text-[12px] text-[#4D4D4D] uppercase tracking-widest font-medium mt-1">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
