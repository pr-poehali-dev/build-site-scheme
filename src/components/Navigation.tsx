import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Главная", href: "#hero" },
    { label: "О компании", href: "#about" },
    { label: "Услуги", href: "#services" },
    { label: "Проекты", href: "#projects" },
    { label: "Отзывы", href: "#testimonials" },
    { label: "Контакты", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-10 h-10 rounded-xl flex items-center justify-center">
              <Icon name="Building" size={20} className="text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              СтройТех
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              className="hover:bg-blue-50 hover:border-blue-300 transition-all duration-300"
            >
              <Icon name="Phone" size={16} className="mr-2" />
              +7 (495) 123-45-67
            </Button>
            <Button
              size="sm"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Icon name="MessageCircle" size={16} className="mr-2" />
              Консультация
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
          >
            <Icon
              name={isMenuOpen ? "X" : "Menu"}
              size={24}
              className="text-gray-600"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-gray-600 hover:text-blue-600 font-medium py-2 transition-colors duration-300"
                >
                  {item.label}
                </button>
              ))}

              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
                <Button
                  variant="outline"
                  size="sm"
                  className="justify-start hover:bg-blue-50 hover:border-blue-300"
                >
                  <Icon name="Phone" size={16} className="mr-2" />
                  +7 (495) 123-45-67
                </Button>
                <Button
                  size="sm"
                  className="justify-start bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                >
                  <Icon name="MessageCircle" size={16} className="mr-2" />
                  Получить консультацию
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
