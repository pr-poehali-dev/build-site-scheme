import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
    setIsSidebarOpen(false);
  };

  return (
    <>
      {/* Header */}
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
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
            >
              <Icon name="Menu" size={24} className="text-gray-600" />
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 lg:hidden animate-fade-in"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-out lg:hidden ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-8 h-8 rounded-lg flex items-center justify-center">
              <Icon name="Building" size={16} className="text-white" />
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              СтройТех
            </span>
          </div>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            <Icon name="X" size={20} className="text-gray-600" />
          </button>
        </div>

        {/* Sidebar Content */}
        <div className="p-6">
          {/* Navigation Links */}
          <div className="space-y-2 mb-8">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.href)}
                className="w-full text-left p-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium transition-all duration-200 flex items-center group"
              >
                <span className="w-1 h-6 bg-transparent group-hover:bg-blue-600 rounded-full mr-3 transition-colors duration-200"></span>
                {item.label}
              </button>
            ))}
          </div>

          {/* Contact Buttons */}
          <div className="space-y-3">
            <Button
              variant="outline"
              className="w-full justify-start hover:bg-blue-50 hover:border-blue-300 transition-all duration-300"
            >
              <Icon name="Phone" size={16} className="mr-3" />
              +7 (495) 123-45-67
            </Button>
            <Button className="w-full justify-start bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
              <Icon name="MessageCircle" size={16} className="mr-3" />
              Получить консультацию
            </Button>
          </div>

          {/* Social Links */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-4">Мы в соцсетях</p>
            <div className="flex space-x-3">
              <button className="p-2 rounded-lg bg-gray-100 hover:bg-blue-100 transition-colors duration-200">
                <Icon
                  name="MessageCircle"
                  size={16}
                  className="text-gray-600"
                />
              </button>
              <button className="p-2 rounded-lg bg-gray-100 hover:bg-blue-100 transition-colors duration-200">
                <Icon name="Mail" size={16} className="text-gray-600" />
              </button>
              <button className="p-2 rounded-lg bg-gray-100 hover:bg-blue-100 transition-colors duration-200">
                <Icon name="MapPin" size={16} className="text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
