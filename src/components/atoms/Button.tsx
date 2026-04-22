// import type { ReactNode } from 'react';

// interface ButtonProps { 
//   label: string; 
//   variant?: 'primary' | 'outline'; 
//   className?: string; 
//   onClick?: () => void;
//   type?: 'button' | 'submit' | 'reset';
//   icon?: ReactNode;
// } 

// export const Button = ({ 
//   label, 
//   variant = 'primary', 
//   className = '',
//   onClick,
//   type = 'button',
//   icon
// }: ButtonProps) => { 

//   const base = "px-6 py-2.5 rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"; 
//   const variants = { 
//     primary: "bg-[#991b1b] text-white hover:bg-[#7f1616] shadow-md hover:shadow-lg shadow-red-100", 
//     outline: "border-2 border-[#991b1b] text-[#991b1b] hover:bg-red-50" 
//   }; 

//   return ( 
//     <button type={type} onClick={onClick} className={`${base} ${variants[variant]} ${className}`}> 
//       {icon && <span>{icon}</span>}
//       {label} 
//     </button> 
//   ); 
// };

interface ButtonProps { 
  label: string; 
  type?: "button" | "submit"; 
  variant?: "primary" | "outline"; 
  isLoading?: boolean; 
} 
 
export const Button: React.FC<ButtonProps> = ({ 
  label, 
  type = "button", 
  variant = "primary", 
  isLoading = false 
}) => { 
  const base = "px-4 py-2 rounded font-medium"; 
 
  const styles = { 
    primary: "bg-[#991b1b] text-white hover:bg-[#7f1616] shadow-md hover:shadow-lg shadow-red-100", 
    outline: "border-2 border-[#991b1b] text-[#991b1b] hover:bg-red-50" 
  }; 
 
  return ( 
    <button 
      type={type} 
      disabled={isLoading} 
      className={`${base} ${styles[variant]}`} 
    > 
      {isLoading ? "Loading..." : label} 
    </button> 
  ); 
};