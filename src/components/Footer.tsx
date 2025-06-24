import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const footerLinks = {
    services: [
      "Жилищное строительство",
      "Коммерческие объекты",
      "Промышленные здания",
      "Реконструкция",
      "Инженерные системы",
    ],
    company: ["О компании", "Наши проекты", "Лицензии", "Вакансии", "Новости"],
    support: ["Контакты", "Техподдержка", "Гарантия", "Документы", "FAQ"],
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-12 h-12 rounded-xl flex items-center justify-center">
                <Icon name="Building" size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                СтройТех
              </h3>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Инновационные решения в строительстве. Мы создаем будущее,
              используя передовые технологии и многолетний опыт в реализации
              проектов любой сложности.
            </p>

            <div className="flex space-x-4">
              <Button
                size="sm"
                variant="outline"
                className="bg-white/10 text-white border-white/20 hover:bg-white/20 rounded-full p-3"
              >
                <Icon name="MessageCircle" size={18} />
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="bg-white/10 text-white border-white/20 hover:bg-white/20 rounded-full p-3"
              >
                <Icon name="Phone" size={18} />
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="bg-white/10 text-white border-white/20 hover:bg-white/20 rounded-full p-3"
              >
                <Icon name="Mail" size={18} />
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="bg-white/10 text-white border-white/20 hover:bg-white/20 rounded-full p-3"
              >
                <Icon name="MapPin" size={18} />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-blue-400">Услуги</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-orange-400">Компания</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-green-400">Поддержка</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-600/20 p-3 rounded-xl">
                <Icon name="MapPin" size={20} className="text-blue-400" />
              </div>
              <div>
                <div className="font-semibold">Адрес</div>
                <div className="text-gray-300 text-sm">
                  г. Москва, ул. Технологическая, 15
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-orange-600/20 p-3 rounded-xl">
                <Icon name="Phone" size={20} className="text-orange-400" />
              </div>
              <div>
                <div className="font-semibold">Телефон</div>
                <div className="text-gray-300 text-sm">+7 (495) 123-45-67</div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-green-600/20 p-3 rounded-xl">
                <Icon name="Mail" size={20} className="text-green-400" />
              </div>
              <div>
                <div className="font-semibold">Email</div>
                <div className="text-gray-300 text-sm">info@stroytech.ru</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 СтройТех. Все права защищены.
          </div>

          <div className="flex space-x-6 text-sm text-gray-400">
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Политика конфиденциальности
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Условия использования
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Карта сайта
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
