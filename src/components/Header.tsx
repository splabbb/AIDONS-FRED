import { motion } from 'motion/react';

export function Header() {
  return (
    <header className="sticky top-0 flex justify-between items-center px-6 md:px-10 py-4 border-b border-[#E6E2DE] bg-[#FBF7F4]/90 backdrop-blur-md shadow-sm z-50">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 flex items-center justify-center">
          <img src="/wsd.png" alt="Logo" className="w-full h-full object-contain" />
        </div>
        <span className="font-extrabold tracking-tight text-lg leading-tight text-[#161616]">
          SOLIDARITÉ <br />
          POUR FRED
        </span>
      </div>
      <nav className="hidden md:flex gap-8 text-[15px] font-bold text-[#4D4D4D]">
        <a href="#histoire" className="hover:text-[#00796B] transition-colors">SON HISTOIRE</a>
        <a href="#impact" className="hover:text-[#00796B] transition-colors">IMPACT</a>
        <a href="#temoignages" className="hover:text-[#00796B] transition-colors">TÉMOIGNAGES</a>
      </nav>
      <a 
        href="https://www.leetchi.com/fr/c/urgent-aidez-fred-a-remplacer-son-velo-vole-et-a-surmonter-ses-difficultes-6874108?u=aaa031c0-7fa3-4271-94cf-019f7e8e74e7&utm_source=copylink&utm_medium=social_sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#00796B] text-white px-6 py-2.5 rounded-[14px] text-[15px] font-bold hover:bg-[#00695C] shadow-sm transition-all"
      >
        Je fais un don
      </a>
    </header>
  );
}
