import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Михаил Петров",
      position: "Генеральный директор ООО 'Альфа-Строй'",
      company: "Альфа-Строй",
      rating: 5,
      text: "СтройТех — это команда настоящих профессионалов. Они построили для нас производственный комплекс площадью 50 000 м² точно в срок и с безупречным качеством. Особенно впечатлили инновационные технологические решения.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      project: "Производственный комплекс",
    },
    {
      id: 2,
      name: "Елена Сидорова",
      position: "Владелец частной резиденции",
      company: "Частный клиент",
      rating: 5,
      text: "Наш загородный дом превзошел все ожидания! СтройТех реализовал все наши пожелания и даже больше. Система 'умный дом', энергоэффективные решения — все на высшем уровне. Рекомендуем всем знакомым!",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616c9fda9cb?w=150&h=150&fit=crop&crop=face",
      project: "Загородная резиденция",
    },
    {
      id: 3,
      name: "Андрей Козлов",
      position: "Коммерческий директор 'Ритейл Групп'",
      company: "Ритейл Групп",
      rating: 5,
      text: "Торговый центр, построенный СтройТех, стал настоящим украшением нашего города. Современная архитектура, продуманная планировка, качественные материалы — все на высшем уровне. Сотрудничество было комфортным.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      project: "ТРЦ 'Метрополис'",
    },
    {
      id: 4,
      name: "Ольга Васильева",
      position: "Управляющий партнер 'Девелопмент Плюс'",
      company: "Девелопмент Плюс",
      rating: 5,
      text: "Жилой комплекс 'Технопарк' — это образец современного строительства. СтройТех показал высочайший профессионализм на всех этапах: от проектирования до сдачи объекта. Качество превосходное!",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
      project: "ЖК 'Технопарк'",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const current = testimonials[currentTestimonial];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Отзывы <span className="text-blue-600">клиентов</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мнения наших клиентов — лучшая оценка нашей работы. Мы гордимся
            доверием, которое нам оказывают партнеры и заказчики.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main Testimonial */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-8 transform transition-all duration-500">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
              <div className="flex-shrink-0">
                <img
                  src={current.image}
                  alt={current.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-blue-100"
                />
              </div>

              <div className="flex-grow text-center lg:text-left">
                <div className="flex justify-center lg:justify-start mb-4">
                  {[...Array(current.rating)].map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      size={24}
                      className="text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <blockquote className="text-xl md:text-2xl text-gray-700 mb-6 leading-relaxed italic">
                  "{current.text}"
                </blockquote>

                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-gray-900">
                    {current.name}
                  </h4>
                  <p className="text-blue-600 font-semibold">
                    {current.position}
                  </p>
                  <p className="text-gray-500">{current.company}</p>
                  <div className="bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-lg inline-block">
                    <span className="text-sm font-medium text-gray-700">
                      Проект: {current.project}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <Button
              variant="outline"
              size="lg"
              onClick={prevTestimonial}
              className="rounded-full p-4 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300"
            >
              <Icon name="ChevronLeft" size={24} />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="lg"
              onClick={nextTestimonial}
              className="rounded-full p-4 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300"
            >
              <Icon name="ChevronRight" size={24} />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl text-white transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-blue-100">Довольных клиентов</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl text-white transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-bold mb-2">4.9</div>
              <div className="text-orange-100">Средняя оценка</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl text-white transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-bold mb-2">85%</div>
              <div className="text-green-100">Повторных обращений</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
