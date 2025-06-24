import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "Все проекты" },
    { id: "residential", name: "Жилые" },
    { id: "commercial", name: "Коммерческие" },
    { id: "industrial", name: "Промышленные" },
  ];

  const projects = [
    {
      id: 1,
      title: "Жилой комплекс 'Технопарк'",
      category: "residential",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop",
      area: "45,000 м²",
      year: "2023",
      description:
        "Современный жилой комплекс с инновационными энергосберегающими технологиями",
    },
    {
      id: 2,
      title: "Бизнес-центр 'Горизонт'",
      category: "commercial",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
      area: "25,000 м²",
      year: "2023",
      description:
        "Многофункциональный офисный комплекс класса A с современной инфраструктурой",
    },
    {
      id: 3,
      title: "Производственный комплекс",
      category: "industrial",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop",
      area: "80,000 м²",
      year: "2022",
      description:
        "Высокотехнологичное производственное предприятие с автоматизированными системами",
    },
    {
      id: 4,
      title: "Частная резиденция",
      category: "residential",
      image:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=400&fit=crop",
      area: "800 м²",
      year: "2023",
      description:
        "Элитный загородный дом с применением технологий 'умный дом'",
    },
    {
      id: 5,
      title: "Торговый центр 'Метрополис'",
      category: "commercial",
      image:
        "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&h=400&fit=crop",
      area: "60,000 м²",
      year: "2022",
      description:
        "Крупный торгово-развлекательный комплекс с многоуровневой парковкой",
    },
    {
      id: 6,
      title: "Логистический центр",
      category: "industrial",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
      area: "120,000 м²",
      year: "2023",
      description:
        "Современный складской комплекс с автоматизированными системами управления",
    },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Наши <span className="text-blue-600">проекты</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Портфолио реализованных проектов — от жилых комплексов до крупных
            промышленных объектов. Каждый проект — это воплощение передовых
            технологий и безупречного качества.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "hover:bg-blue-50 hover:border-blue-300"
              }`}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-700">
                  {project.year}
                </div>
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Button
                    size="sm"
                    className="w-full bg-white/20 text-white backdrop-blur-sm hover:bg-white/30 border border-white/30"
                  >
                    <Icon name="Eye" size={16} className="mr-2" />
                    Посмотреть проект
                  </Button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <Icon name="Square" size={16} className="mr-1" />
                    {project.area}
                  </div>
                  <div className="flex items-center">
                    <Icon name="Calendar" size={16} className="mr-1" />
                    {project.year}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            size="lg"
            variant="outline"
            className="px-12 py-4 text-lg font-semibold hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300"
          >
            <Icon name="FolderOpen" size={20} className="mr-2" />
            Смотреть все проекты
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
