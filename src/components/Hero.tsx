import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20 flex items-center min-h-screen">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
                СтройТех
              </span>
              <br />
              <span className="text-4xl md:text-5xl">
                Будущее строительства
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Современные технологии, инновационные решения и безупречное
              качество. Мы строим не просто здания — мы создаем будущее.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Icon name="Rocket" size={20} className="mr-2" />
                Начать проект
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300"
              >
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть видео
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-blue-400 mb-2">
                  250+
                </div>
                <div className="text-gray-300">Завершенных проектов</div>
              </div>
              <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-orange-400 mb-2">
                  15
                </div>
                <div className="text-gray-300">Лет опыта</div>
              </div>
              <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-green-400 mb-2">
                  100%
                </div>
                <div className="text-gray-300">Довольных клиентов</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <Icon name="ChevronDown" size={32} />
      </div>
    </section>
  );
};

export default Hero;
