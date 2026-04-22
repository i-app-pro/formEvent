import type { ReactNode } from 'react';

interface NavLinkProps { 
  label: string; 
  href: string; 
  icon?: ReactNode; 
  isActive?: boolean; 
}

export const NavLink = ({ label, href, icon, isActive = false }: NavLinkProps) => { 
  // Pastikan warna active benar-benar mengarah ke Maroon #991b1b
  const activeStyle = "text-[#991b1b] border-[#991b1b]";

  const defaultStyle = "text-gray-500 border-transparent hover:text-[#991b1b] hover:border-[#991b1b]";

  return ( 
    <a 
      href={href} 
      className={`flex items-center gap-2 px-4 py-3 font-semibold transition-all duration-300 ${isActive ? activeStyle : defaultStyle}`}
    > 
      {/* Warna ikon dipaksa mengikuti parent (Maroon saat aktif, Gray saat tidak) */}
      {icon && (
        <span className={`flex items-center transition-colors duration-300 ${isActive ? 'text-[#991b1b]' : 'text-gray-400 group-hover:text-[#991b1b]'}`}>
          {icon}
        </span>
      )} 
      
      <span className="text-sm tracking-wide">{label}</span> 
    </a> 
  ); 
};