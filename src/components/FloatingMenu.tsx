import { useState } from "react";
import {
  Mail,
  ExternalLink,
  Menu,
  X,
  Terminal,
  Code,
  Database,
} from "lucide-react";

type MenuItem = {name: string; id: string; icon: React.ElementType};

const menuItems: MenuItem[] = [
  { name: "Hero", id: "hero", icon: Terminal },
  { name: "About", id: "about", icon: Code },
  { name: "Systems", id: "work", icon: Database },
  { name: "Articles", id: "articles", icon: ExternalLink },
  { name: "Contact", id: "contact", icon: Mail },
];

const FloatingMenu = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <div>
      <div className="fixed top-8 right-8 z-50">
        <button
          onClick={() => {
            setIsMenuOpen((isMenuOpen) => !isMenuOpen);
          }}
          className="w-12 h-12 bg-secondary backdrop-blur-md text-white rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-xl"
        >
          {isMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>

        {/* Menu Items */}
        <div
          className={`mt-4 space-y-2 transition-all duration-500 ${
            isMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id);
                  setActiveSection(item.id);
                  setIsMenuOpen(false);
                }}
                className={`w-12 h-12 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group ${
                  activeSection === item.id
                    ? "bg-secondary text-white shadow-xl"
                    : "bg-white text-primary hover:bg-primary-2 hover:text-white"
                }`}
                style={{
                  transitionDelay: isMenuOpen ? `${index * 50}ms` : "0ms",
                }}
              >
                <Icon className="w-4 h-4" />
                <span className="absolute right-14 bg-stone-900/90 text-white px-3 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FloatingMenu;
