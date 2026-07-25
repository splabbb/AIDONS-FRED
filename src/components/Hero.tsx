import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, Mail } from 'lucide-react';
import { MondrianBackground } from './MondrianBackground';

const Facebook = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const Twitter = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4l11.733 16h4.267l-11.733 -16z"/>
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/>
  </svg>
);

export function Hero() {
  const [isShareOpen, setIsShareOpen] = useState(false);

  return (
    <section className="relative overflow-hidden min-h-[80vh] hero-section bg-[#fcfcfd]">
      <MondrianBackground />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 order-2 lg:order-1 relative z-10"
          >
            <h1 className="text-[56px] md:text-[64px] lg:text-[72px] font-extrabold leading-[1.05] tracking-tight text-[#161616] mb-8">
              Redonnons à Fred <br className="hidden md:block"/><span className="text-[#DA291C] font-['Space_Grotesk'] font-bold inline-block -rotate-3">sa liberté</span>
            </h1>
            
            <p className="text-[16px] md:text-[18px] text-[#4D4D4D] leading-relaxed max-w-2xl mb-12 font-bold">
              Privé du vélo électrique dont il dépendait chaque jour, Fred a perdu une part essentielle de sa mobilité. <br /><br /> Ensemble, aidons-le à retrouver son autonomie.
            </p>

            <div className="bg-[#FFFFFF] p-8 md:p-10 rounded-[24px] text-[#161616] shadow-[0_6px_24px_rgba(0,0,0,0.06)] border border-[#E6E2DE] flex flex-col gap-8 max-w-xl">
              <div className="space-y-4">
                <p className="text-[16px] md:text-[18px] font-bold text-[#00796B] leading-relaxed">
                  Pour le moment, la cagnotte attend encore son premier don. Ensemble, faisons avancer le compteur et aidons Fred à retrouver sa mobilité.
                </p>
              </div>

              <div className="w-full bg-[#E7E4E1] h-4 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '0%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="h-full bg-[#00796B] rounded-full"
                />
              </div>

              <div className="flex justify-between items-center text-[14px] md:text-[15px] font-semibold text-[#4D4D4D]">
                <span>0 contributeurs</span>
                <span className="bg-[#DCEEE8] text-[#00796B] px-4 py-1.5 rounded-full font-bold">0% de l'objectif</span>
              </div>

              <div className="relative">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a
                    href="https://www.leetchi.com/fr/c/urgent-aidez-fred-a-remplacer-son-velo-vole-et-a-surmonter-ses-difficultes-6874108?u=aaa031c0-7fa3-4271-94cf-019f7e8e74e7&utm_source=copylink&utm_medium=social_sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center bg-[#00796B] text-white py-4 px-6 rounded-[14px] font-bold text-[16px] hover:bg-[#00695C] transition-colors text-center"
                  >
                    Je fais un don
                  </a>
                  <button 
                    onClick={() => setIsShareOpen(!isShareOpen)}
                    className="bg-[#FFFFFF] text-[#00796B] border-2 border-[#00796B] py-4 px-6 rounded-[14px] font-bold text-[16px] hover:bg-gray-50 transition-colors"
                  >
                    Je partage la cagnotte
                  </button>
                </div>
                
                <AnimatePresence>
                  {isShareOpen && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full left-0 right-0 mt-4 bg-white border border-[#E6E2DE] shadow-[0_6px_24px_rgba(0,0,0,0.12)] rounded-[16px] p-4 z-10 grid grid-cols-4 gap-2"
                    >
                      <a 
                        href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.leetchi.com%2Ffr%2Fc%2Furgent-aidez-fred-a-remplacer-son-velo-vole-et-a-surmonter-ses-difficultes-6874108" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex flex-col items-center justify-center p-3 rounded-[12px] hover:bg-[#FBF7F4] transition-colors group"
                      >
                        <div className="w-10 h-10 rounded-full bg-[#1877F2]/10 flex items-center justify-center text-[#1877F2] mb-2 group-hover:scale-110 transition-transform">
                          <Facebook size={20} />
                        </div>
                        <span className="text-[11px] font-bold text-[#4D4D4D]">Facebook</span>
                      </a>
                      <a 
                        href="https://api.whatsapp.com/send?text=Aidez%20Fred%20%C3%A0%20remplacer%20son%20v%C3%A9lo%20vol%C3%A9%20et%20%C3%A0%20surmonter%20ses%20difficult%C3%A9s%20https%3A%2F%2Fwww.leetchi.com%2Ffr%2Fc%2Furgent-aidez-fred-a-remplacer-son-velo-vole-et-a-surmonter-ses-difficultes-6874108" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex flex-col items-center justify-center p-3 rounded-[12px] hover:bg-[#FBF7F4] transition-colors group"
                      >
                        <div className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366] mb-2 group-hover:scale-110 transition-transform">
                          <MessageCircle size={20} />
                        </div>
                        <span className="text-[11px] font-bold text-[#4D4D4D]">WhatsApp</span>
                      </a>
                      <a 
                        href="https://twitter.com/intent/tweet?text=Aidez%20Fred%20%C3%A0%20remplacer%20son%20v%C3%A9lo%20vol%C3%A9%20et%20%C3%A0%20surmonter%20ses%20difficult%C3%A9s&url=https%3A%2F%2Fwww.leetchi.com%2Ffr%2Fc%2Furgent-aidez-fred-a-remplacer-son-velo-vole-et-a-surmonter-ses-difficultes-6874108" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex flex-col items-center justify-center p-3 rounded-[12px] hover:bg-[#FBF7F4] transition-colors group"
                      >
                        <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center text-black mb-2 group-hover:scale-110 transition-transform">
                          <Twitter size={20} />
                        </div>
                        <span className="text-[11px] font-bold text-[#4D4D4D]">X</span>
                      </a>
                      <a 
                        href="mailto:?subject=Aidez%20Fred%20%C3%A0%20remplacer%20son%20v%C3%A9lo%20vol%C3%A9%20et%20%C3%A0%20surmonter%20ses%20difficult%C3%A9s&body=https%3A%2F%2Fwww.leetchi.com%2Ffr%2Fc%2Furgent-aidez-fred-a-remplacer-son-velo-vole-et-a-surmonter-ses-difficultes-6874108" 
                        className="flex flex-col items-center justify-center p-3 rounded-[12px] hover:bg-[#FBF7F4] transition-colors group"
                      >
                        <div className="w-10 h-10 rounded-full bg-[#00796B]/10 flex items-center justify-center text-[#00796B] mb-2 group-hover:scale-110 transition-transform">
                          <Mail size={20} />
                        </div>
                        <span className="text-[11px] font-bold text-[#4D4D4D]">Email</span>
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="flex items-center justify-center gap-2 text-center text-[13px] text-[#00796B] font-semibold opacity-90">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                Transactions 100% sécurisées
              </div>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 order-1 lg:order-2 h-full relative"
          >
            <img
              src="/Gemini_Generated_Image_51e08d51e08d51e0.png"
              alt=""
              className="absolute -top-24 -left-96 w-[130%] max-w-none h-auto z-0 pointer-events-none object-contain opacity-[0.70]"
            />
            <div className="relative z-10 h-full min-h-[400px] lg:min-h-[600px] bg-[#FBF7F4] rounded-[24px] overflow-hidden group shadow-[0_6px_24px_rgba(0,0,0,0.06)] border border-[#E6E2DE]">
              <img 
                src="/F12.png" 
                alt="Portrait de Fred"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
