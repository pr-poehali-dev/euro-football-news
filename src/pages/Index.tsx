import Header from "@/components/Header";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Index = () => {
  const mainNews = {
    title: "Ливерпуль проходит в финал Кубка после победы над Челси",
    subtitle: "Красные одержали уверенную победу на Энфилде",
    image: "/img/c493692f-29a8-41f8-9254-24c24517d251.jpg"
  };

  const latestNews = [
    {
      id: 1,
      title: "Манчестер Сити на пять очков опережает конкурентов",
      subtitle: "Горожане укрепляют лидерство в таблице",
      image: "/img/d5fc85bc-b251-4442-accc-c5ccf746e744.jpg"
    },
    {
      id: 2,
      title: "Барселона терпит шокирующее поражение",
      subtitle: "Каталонцы проигрывают дома с разгромным счетом",
      image: "/img/429b998f-294a-4a5c-8d79-4ff95d2a147a.jpg"
    },
    {
      id: 3,
      title: "Поздний гол приносит Ювентусу победу",
      subtitle: "Старая Синьора вырывает три очка в Турине",
      image: "/img/c493692f-29a8-41f8-9254-24c24517d251.jpg"
    }
  ];

  const countrySections = [
    {
      country: "АНГЛИЯ",
      icon: "⚽",
      title: "Арсенал побеждает Тоттенхэм в дерби северного Лондона",
      subtitle: "Канониры одержали важную победу над принципиальным соперником"
    },
    {
      country: "ИСПАНИЯ", 
      icon: "🇪🇸",
      title: "Реал Мадрид легко обыгрывает Валенсию",
      subtitle: "Королевский клуб продолжает борьбу за чемпионство"
    },
    {
      country: "ИТАЛИЯ",
      icon: "🇮🇹", 
      title: "Наполи побеждает Милан и укрепляет шансы на титул",
      subtitle: "Партенопеи приближаются к завоеванию скудетто"
    },
    {
      country: "ГЕРМАНИЯ",
      icon: "🇩🇪",
      title: "Бавария терпит поражение от Лейпцига",
      subtitle: "Мюнхенцы теряют очки в борьбе за Бундеслигу"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Story */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-gray-900 mb-4">TOP STORY</h2>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img 
                src={mainNews.image} 
                alt="Main news"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {mainNews.title}
                </h1>
                <p className="text-gray-600 text-lg">
                  {mainNews.subtitle}
                </p>
              </div>
            </div>
          </div>

          {/* Latest News Sidebar */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">LATEST NEWS</h2>
            <div className="space-y-4">
              {latestNews.map((news) => (
                <div key={news.id} className="bg-white rounded-lg shadow-sm p-4 flex gap-4">
                  <img 
                    src={news.image} 
                    alt="News"
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm mb-1">
                      {news.title}
                    </h3>
                    <p className="text-gray-600 text-xs">
                      {news.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Country Sections */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {countrySections.map((section, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">{section.icon}</span>
                <h3 className="font-bold text-gray-900">{section.country}</h3>
              </div>
              <h4 className="font-bold text-gray-900 mb-2 text-sm">
                {section.title}
              </h4>
              <p className="text-gray-600 text-xs">
                {section.subtitle}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;