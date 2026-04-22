import type { ReactNode } from 'react';

interface InfoCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export const InfoCard = ({ icon, title, description, className = "" }: InfoCardProps) => {
  return (
    <div className={`bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group ${className}`}>
      
      {/* Container Ikon - Menggunakan Red-50 dan Maroon #991b1b */}
      <div className="w-14 h-14 bg-red-50 text-[#991b1b] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#991b1b] group-hover:text-white transition-colors duration-300">
        <div className="scale-110">
          {icon}
        </div>
      </div>

      {/* Konten Teks */}
      <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-[#991b1b] transition-colors">
        {title}
      </h3>
      <p className="text-gray-500 leading-relaxed text-sm">
        {description}
      </p>
      
      {/* Dekorasi kecil (SELENGKAPNYA) - Menggunakan Maroon */}
      <div className="mt-6 flex items-center text-[#991b1b] text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">
        SELENGKAPNYA →
      </div>
    </div>
  );
};