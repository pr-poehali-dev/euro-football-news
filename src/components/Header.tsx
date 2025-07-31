import { Link } from "react-router-dom";

const Header = () => {
  const navItems = [
    { label: "Главная", path: "/" },
    { label: "Новости", path: "/news" },
    { label: "Трансферы", path: "/transfers" },
    { label: "Турнирные таблицы", path: "/tables" }
  ];

  const countryItems = [
    { label: "Англия", path: "/england" },
    { label: "Испания", path: "/spain" },
    { label: "Италия", path: "/italy" },
    { label: "Германия", path: "/germany" },
    { label: "Франция", path: "/france" }
  ];

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Header */}
        <div className="flex justify-between items-center py-6">
          <Link to="/" className="text-4xl font-bold text-black">
            SPORT NEWS
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-lg text-gray-700 hover:text-black transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Country Navigation */}
        <div className="border-t border-gray-200 py-4">
          <nav className="flex space-x-8 overflow-x-auto">
            {countryItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-lg font-medium text-gray-700 hover:text-black transition-colors whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;