import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

type ModalType = 'confidentialite' | 'conditions' | 'transparence' | null;

export function Footer() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const modalContent = {
    confidentialite: {
      title: "Confidentialité",
      content: "Découvrez comment le site protège votre vie privée et quelles données techniques peuvent être traitées lors de votre visite. Cette rubrique présente également l’utilisation éventuelle de cookies ou d’outils de mesure d’audience, le rôle des services externes comme Leetchi, ainsi que les moyens dont vous disposez pour accéder à vos données, les faire rectifier ou demander leur suppression."
    },
    conditions: {
      title: "Conditions générales d’utilisation",
      content: "Consultez les règles encadrant l’accès au site Aidons Fred, l’utilisation de ses contenus et le fonctionnement de ses liens externes. Cette rubrique précise notamment que le site a une vocation informative, qu’aucun paiement n’y est directement traité et que les contributions sont exclusivement réalisées sur la page officielle de la cagnotte hébergée par Leetchi."
    },
    transparence: {
      title: "Transparence financière",
      content: "Retrouvez les informations essentielles concernant l’objectif de la collecte, sa progression et l’utilisation prévue des sommes réunies. Cette rubrique explique également comment les fonds seront gérés, les éventuels frais appliqués par Leetchi, les dispositions prévues si l’objectif n’est pas atteint ou s’il est dépassé, ainsi que les modalités de publication du bilan final de la campagne."
    }
  };

  return (
    <>
      <footer className="px-6 md:px-10 py-12 bg-[#0F0909] flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] text-[#F7F3F0] font-medium tracking-wide z-10 relative">
        <div className="opacity-80">
          <img src="/F6.png" alt="Conçu par Nicolas & Romain" className="h-32 w-auto object-contain" />
        </div>
        <div className="flex gap-6 opacity-80">
          <button 
            onClick={() => setActiveModal('confidentialite')} 
            className="hover:text-white transition-colors"
          >
            Confidentialité 🙏
          </button>
          <button 
            onClick={() => setActiveModal('conditions')} 
            className="hover:text-white transition-colors"
          >
            Conditions Générales
          </button>
          <button 
            onClick={() => setActiveModal('transparence')} 
            className="hover:text-white transition-colors"
          >
            Transparence Financière
          </button>
        </div>
      </footer>

      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModal(null)}
              className="absolute inset-0 bg-[#0F0909]/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-[#FFFFFF] rounded-[24px] shadow-2xl p-8 md:p-10 border border-[#E6E2DE] z-10 overflow-hidden"
            >
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-6 right-6 text-[#4D4D4D] hover:text-[#161616] transition-colors"
                aria-label="Fermer"
              >
                <X size={24} />
              </button>
              
              <h3 className="font-extrabold text-[24px] md:text-[28px] text-[#161616] mb-6 pr-8">
                {modalContent[activeModal].title}
              </h3>
              <p className="text-[16px] text-[#4D4D4D] font-medium leading-relaxed">
                {modalContent[activeModal].content}
              </p>
              
              <div className="mt-8 flex justify-end">
                <button 
                  onClick={() => setActiveModal(null)}
                  className="bg-[#FBF7F4] hover:bg-[#E6E2DE] text-[#161616] px-6 py-2.5 rounded-[12px] text-[15px] font-bold transition-colors border border-[#E6E2DE]"
                >
                  Fermer
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
