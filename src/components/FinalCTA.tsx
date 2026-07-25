import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, Mail } from 'lucide-react';

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

export function FinalCTA() {
  const [isShareOpen, setIsShareOpen] = useState(false);

  return (
    <section className="py-20 md:py-32 bg-[#FFFFFF]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#00796B] rounded-[24px] p-10 md:p-16 text-center shadow-[0_6px_24px_rgba(0,0,0,0.06)] relative overflow-hidden"
        >
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#F5D4CE]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#DCEEE8]/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h4 className="font-bold text-[18px] md:text-[24px] tracking-[0.2em] mb-6">
              <span className="text-[#0055A4]">ENS</span>
              <span className="text-white">EM</span>
              <span className="text-[#EF4135]">BLE</span>
            </h4>
            <h2 className="font-extrabold text-[40px] md:text-[56px] text-white mb-8 leading-tight tracking-tight">
              Changeons la suite de son histoire
            </h2>
            
            <p className="text-[16px] md:text-[18px] text-[#FBF7F4]/90 leading-relaxed mb-12 max-w-2xl mx-auto font-medium">
              Aucun geste n'est trop petit. Votre contribution aidera Fred à retrouver sa mobilité, son autonomie et la stabilité dont il a besoin.
            </p>

            <div className="flex flex-col items-center justify-center relative">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
                <a
                  href="https://www.leetchi.com/fr/c/urgent-aidez-fred-a-remplacer-son-velo-vole-et-a-surmonter-ses-difficultes-6874108?u=aaa031c0-7fa3-4271-94cf-019f7e8e74e7&utm_source=copylink&utm_medium=social_sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-[#1E9E63] text-white py-4 px-8 rounded-[14px] font-bold text-[16px] hover:bg-[#157F4D] transition-colors shadow-sm text-center"
                >
                  Je fais un don
                </a>
                <button 
                  onClick={() => setIsShareOpen(!isShareOpen)}
                  className="w-full sm:w-auto bg-transparent text-white border-2 border-[#DCEEE8] py-4 px-8 rounded-[14px] font-bold text-[16px] hover:bg-white/10 transition-colors"
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
                    className="absolute top-full mt-4 bg-white border border-[#E6E2DE] shadow-[0_6px_24px_rgba(0,0,0,0.12)] rounded-[16px] p-4 z-20 grid grid-cols-4 gap-2 text-center"
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
            
            <div className="mt-8 flex items-center justify-center gap-2 text-[13px] text-[#DCEEE8] font-semibold opacity-90">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              Transactions 100% sécurisées
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
