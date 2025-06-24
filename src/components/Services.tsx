import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: "Home",
      title: "Жилищное строительство",
      description:
        "Строительство частных домов, коттеджей и многоквартирных комплексов",
      features: [
        "Индивидуальное проектирование",
        "Энергоэффективные решения",
        "Умный дом",
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: "Building2",
      title: "Коммерческие объекты",
      description:
        "Офисные центры, торговые комплексы, производственные здания",
      features: [
        "BIM-моделирование",
        "Быстровозводимые конструкции",
        "Современная инфраструктура",
      ],
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: "Hammer",
      title: "Реконструкция",
      description: "Модернизация и капитальный ремонт существующих объектов",
      features: [
        "Усиление конструкций",
        "Энергомодернизация",
        "Историческая реставрация",
      ],
      color: "from-green-500 to-green-600",
    },
    {
      icon: "Wrench",
      title: "Инженерные системы",
      description: "Проектирование и монтаж всех видов инженерных коммуникаций",
      features: [
        "Климатические системы",
        "Электроснабжение",
        "Водоснабжение и канализация",
      ],
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: "Trees",
      title: "Ландшафтный дизайн",
      description:
        "Благоустройство территории и создание современных ландшафтов",
      features: ["3D-визуализация", "Системы полива", "Освещение территории"],
      color: "from-teal-500 to-teal-600",
    },
    {
      icon: "Shield",
      title: "Техническое обслуживание",
      description: "Комплексное обслуживание построенных объектов",
      features: [
        "Плановое ТО",
        "Аварийные службы",
        "Гарантийные обязательства",
      ],
      color: "from-red-500 to-red-600",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Наши <span className="text-orange-600">услуги</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Полный спектр строительных услуг — от идеи до ключей в руки. Каждый
            проект выполняем с применением передовых технологий и материалов.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100 overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              ></div>

              <div className="relative z-10">
                <div
                  className={`bg-gradient-to-br ${service.color} w-20 h-20 rounded-3xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon name={service.icon} size={40} className="text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-gray-700"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  variant="outline"
                  className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300"
                >
                  Подробнее
                  <Icon
                    name="ArrowRight"
                    size={16}
                    className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                  />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <Icon name="MessageCircle" size={20} className="mr-2" />
            Получить консультацию
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
