import Header from "@/components/Header";

const England = () => {
  const news = [
    {
      id: 1,
      title: "Арсенал побеждает Тоттенхэм в дерби северного Лондона",
      subtitle: "Канониры одержали важную победу над принципиальным соперником со счетом 2-1",
      image: "/img/c493692f-29a8-41f8-9254-24c24517d251.jpg",
      time: "2 часа назад"
    },
    {
      id: 2,
      title: "Манчестер Юнайтед готовит крупную трансферную сделку",
      subtitle: "Красные дьяволы нацелились на звезду европейского футбола",
      image: "/img/d5fc85bc-b251-4442-accc-c5ccf746e744.jpg",
      time: "4 часа назад"
    },
    {
      id: 3,
      title: "Челси меняет тактическую схему перед важным матчем",
      subtitle: "Главный тренер синих экспериментирует с составом",
      image: "/img/429b998f-294a-4a5c-8d79-4ff95d2a147a.jpg",
      time: "6 часов назад"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-3xl">⚽</span>
          <h1 className="text-4xl font-bold text-gray-900">АНГЛИЯ</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {news.map((article) => (
            <article key={article.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img 
                src={article.image} 
                alt="News"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">{article.time}</div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  {article.title}
                </h2>
                <p className="text-gray-600">
                  {article.subtitle}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Premier League Table Preview */}
        <div className="mt-12 bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Турнирная таблица Премьер-лиги</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-2 font-semibold text-gray-700">Место</th>
                  <th className="text-left py-3 px-2 font-semibold text-gray-700">Команда</th>
                  <th className="text-center py-3 px-2 font-semibold text-gray-700">И</th>
                  <th className="text-center py-3 px-2 font-semibold text-gray-700">О</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-2 font-bold">1</td>
                  <td className="py-3 px-2 font-semibold">Манчестер Сити</td>
                  <td className="py-3 px-2 text-center">25</td>
                  <td className="py-3 px-2 text-center font-bold">65</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-2 font-bold">2</td>
                  <td className="py-3 px-2 font-semibold">Арсенал</td>
                  <td className="py-3 px-2 text-center">25</td>
                  <td className="py-3 px-2 text-center font-bold">60</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-2 font-bold">3</td>
                  <td className="py-3 px-2 font-semibold">Ливерпуль</td>
                  <td className="py-3 px-2 text-center">24</td>
                  <td className="py-3 px-2 text-center font-bold">58</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default England;