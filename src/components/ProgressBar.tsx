import { motion } from 'motion/react';

interface ProgressBarProps {
  goal: number;
  raised: number;
  donors?: number;
}

export function ProgressBar({ goal, raised, donors }: ProgressBarProps) {
  const percentage = Math.min(Math.round((raised / goal) * 100), 100);

  return (
    <div className="w-full">
      <div className="flex justify-between text-sm font-medium mb-2">
        <span className="text-[#0F4C81]">{raised.toLocaleString('fr-FR')} € collectés</span>
        <span className="text-[#6B7280]">Objectif : {goal.toLocaleString('fr-FR')} €</span>
      </div>
      
      <div className="h-3 w-full bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="h-full bg-[#2BA84A] rounded-full"
        />
      </div>
      
      {donors !== undefined && (
        <p className="mt-3 text-sm text-[#6B7280]">
          Soutenu par <span className="font-medium text-[#212121]">{donors} donateurs</span>
        </p>
      )}
    </div>
  );
}
