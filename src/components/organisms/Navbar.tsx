import { useState } from "react";
import { Home, Trophy, BookOpen, Laptop, Mic, User } from "lucide-react"; 
import { NavLink } from "../atoms/NavLink";

export const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState("#home");

  const menuItems = [
    { label: "Beranda", href: "#home", icon: <Home size={18} /> },
    { label: "Competition", href: "#competition", icon: <Trophy size={18} /> },
    { label: "Seminar", href: "#seminar", icon: <BookOpen size={18} /> },
    { label: "Workshop", href: "#workshop", icon: <Laptop size={18} /> },
    { label: "Talkshow", href: "#talkshow", icon: <Mic size={18} /> },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-10 py-3 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
      {/* LOGO */}
      <div className="flex items-center">
        <a href="#home">
          <img 
            src="https://www.invofest-harkatnegeri.com/assets/nav-logo.png" 
            alt="Invofest Logo" 
            className="h-10 w-auto transition-transform hover:scale-105" 
          />
        </a>
      </div>

      {/* MENU NAVIGASI & LOGIN */}
      <div className="flex gap-1 items-center">
        {menuItems.map((item) => (
          <div key={item.label} onClick={() => setActiveMenu(item.href)}>
            <NavLink 
              label={item.label} 
              href={item.href} 
              icon={item.icon} 
              isActive={item.href === activeMenu} 
            />
          </div>
        ))}
        
        {/* ICON LOGIN MINIMALIS */}
        <div className="ml-6 pl-6 border-l border-gray-100">
          <button 
            title="Login"
            className="text-gray-400 hover:text-[#991b1b] transition-colors duration-300 p-2 rounded-full hover:bg-red-50 flex items-center justify-center"
          >
            <User size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};