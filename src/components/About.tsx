import Icon from "@/components/ui/icon";

const About = () => {
  const features = [
    {
      icon: "Zap",
      title: "Современные технологии",
      description:
        "Используем передовые строительные технологии и материалы нового поколения",
    },
    {
      icon: "Shield",
      title: "Гарантия качества",
      description:
        "Предоставляем расширенную гарантию на все виды выполняемых работ",
    },
    {
      icon: "Clock",
      title: "Точные сроки",
      description:
        "Соблюдаем все договорные сроки благодаря четкому планированию",
    },
    {
      icon: "Users",
      title: "Профессиональная команда",
      description:
        "Опытные специалисты с многолетним стажем в строительной отрасли",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            О компании <span className="text-blue-600">СтройТех</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы — команда профессионалов, которая воплощает самые смелые
            архитектурные идеи в жизнь, используя инновационные технологии и
            современные материалы.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Инновации в каждом проекте
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              С 2009 года мы успешно реализуем проекты любой сложности — от
              частных домов до крупных коммерческих объектов. Наша философия —
              сочетание традиционного мастерства с передовыми технологиями.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Мы не просто строим — мы создаем пространства, где люди живут,
              работают и мечтают. Каждый наш проект — это уникальное решение,
              адаптированное под потребности клиента.
            </p>
            <div className="flex items-center space-x-4 pt-4">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-semibold">
                ISO 9001:2015
              </div>
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold">
                Лицензия СРО
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-8 rounded-2xl text-white transform hover:scale-105 transition-all duration-300">
                <Icon name="Building" size={48} className="mb-4" />
                <div className="text-2xl font-bold mb-2">500+</div>
                <div className="text-blue-100">Объектов построено</div>
              </div>
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-8 rounded-2xl text-white transform hover:scale-105 transition-all duration-300 mt-8">
                <Icon name="Award" size={48} className="mb-4" />
                <div className="text-2xl font-bold mb-2">25</div>
                <div className="text-orange-100">Наград получено</div>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-green-600 p-8 rounded-2xl text-white transform hover:scale-105 transition-all duration-300 -mt-4">
                <Icon name="Users" size={48} className="mb-4" />
                <div className="text-2xl font-bold mb-2">50+</div>
                <div className="text-green-100">Специалистов</div>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-8 rounded-2xl text-white transform hover:scale-105 transition-all duration-300 mt-4">
                <Icon name="MapPin" size={48} className="mb-4" />
                <div className="text-2xl font-bold mb-2">15</div>
                <div className="text-purple-100">Регионов</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Icon name={feature.icon} size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
