import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Здесь будет логика отправки формы
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: "MapPin",
      title: "Адрес",
      details: [
        "г. Москва, ул. Технологическая, 15",
        "БЦ 'Инновации', офис 301",
      ],
    },
    {
      icon: "Phone",
      title: "Телефон",
      details: ["+7 (495) 123-45-67", "+7 (800) 555-66-77"],
    },
    {
      icon: "Mail",
      title: "Email",
      details: ["info@stroytech.ru", "projects@stroytech.ru"],
    },
    {
      icon: "Clock",
      title: "Время работы",
      details: ["Пн-Пт: 9:00 - 18:00", "Сб: 10:00 - 16:00"],
    },
  ];

  const projectTypes = [
    "Жилое строительство",
    "Коммерческие объекты",
    "Промышленные здания",
    "Реконструкция",
    "Инженерные системы",
    "Другое",
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Связаться с <span className="text-blue-600">нами</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Готовы обсудить ваш проект? Свяжитесь с нами любым удобным способом.
            Наши специалисты проконсультируют вас и предложат оптимальные
            решения.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Контактная информация
            </h3>

            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="flex items-start space-x-6 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Icon name={info.icon} size={32} className="text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {info.title}
                  </h4>
                  {info.details.map((detail, detailIndex) => (
                    <p
                      key={detailIndex}
                      className="text-gray-600 leading-relaxed"
                    >
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-2xl text-white">
              <h4 className="text-2xl font-bold mb-4">Мы в социальных сетях</h4>
              <div className="flex space-x-4">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/20 text-white border-white/30 hover:bg-white/30 rounded-full p-4"
                >
                  <Icon name="MessageCircle" size={24} />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/20 text-white border-white/30 hover:bg-white/30 rounded-full p-4"
                >
                  <Icon name="Phone" size={24} />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/20 text-white border-white/30 hover:bg-white/30 rounded-full p-4"
                >
                  <Icon name="Mail" size={24} />
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Заявка на консультацию
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ваше имя *
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Введите ваше имя"
                    className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Телефон *
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+7 (999) 123-45-67"
                    className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Тип проекта
                  </label>
                  <select
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white"
                  >
                    <option value="">Выберите тип проекта</option>
                    {projectTypes.map((type, index) => (
                      <option key={index} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Сообщение
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Расскажите подробнее о вашем проекте..."
                  rows={5}
                  className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Icon name="Send" size={20} className="mr-2" />
                Отправить заявку
              </Button>

              <p className="text-sm text-gray-500 text-center">
                * Обязательные поля для заполнения
              </p>
            </form>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl text-white">
          <h3 className="text-3xl font-bold mb-4">
            Готовы начать свой проект?
          </h3>
          <p className="text-xl text-blue-100 mb-8">
            Получите бесплатную консультацию и предварительную смету прямо
            сейчас
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="bg-white/20 text-white border-white/30 hover:bg-white/30 px-8 py-4 text-lg font-semibold"
            >
              <Icon name="Phone" size={20} className="mr-2" />
              Позвонить сейчас
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/20 text-white border-white/30 hover:bg-white/30 px-8 py-4 text-lg font-semibold"
            >
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Написать в WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
