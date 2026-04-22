import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface CollapseProps {
  question: string;
  answer: string;
}

export const Collapse = ({ question, answer }: CollapseProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-300">
      {/* Mengubah hover:bg-blue-50 menjadi hover:bg-red-50 */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-red-50/50 transition-colors"
      >
        {/* Mengubah teks biru saat aktif menjadi Maroon #991b1b */}
        <span className={`font-semibold transition-colors ${isOpen ? 'text-[#991b1b]' : 'text-gray-800'}`}>
          {question}
        </span>
        
        {/* Mengubah warna ikon panah saat aktif menjadi Maroon */}
        <ChevronDown 
          size={20} 
          className={`text-gray-400 transition-all duration-300 ${isOpen ? 'rotate-180 text-[#991b1b]' : ''}`} 
        />
      </button>

      <div className={`px-6 overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}>
        {/* Border atas jawaban menggunakan red-50 agar lebih senada */}
        <p className="text-gray-600 leading-relaxed border-t border-red-50 pt-4 text-sm md:text-base">
          {answer}
        </p>
      </div>
    </div>
  );
};