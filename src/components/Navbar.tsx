import { useLanguage } from "../contexts/LanguageContext";
import { Menu, Globe } from "lucide-react";

const Navbar = () => {
  const { language, setLanguage } = useLanguage();

  const translations = {
    en: {
      home: "Home",
      about: "About",
      projects: "Projects",
      news: "News",
      events: "Events",
      reports: "Reports",
      contact: "Contact",
    },
    ar: {
      home: "الرئيسية",
      about: "عن المؤسسة",
      projects: "المشاريع",
      news: "الأخبار",
      events: "الفعاليات",
      reports: "التقارير",
      contact: "اتصل بنا",
    },
  };

  const t = translations[language];

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img src="/placeholder.svg" alt="NFHD Logo" className="h-8 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            <a href="/" className="text-primary hover:text-accent transition-colors">
              {t.home}
            </a>
            <a href="/about" className="text-primary hover:text-accent transition-colors">
              {t.about}
            </a>
            <a href="/projects" className="text-primary hover:text-accent transition-colors">
              {t.projects}
            </a>
            <a href="/news" className="text-primary hover:text-accent transition-colors">
              {t.news}
            </a>
            <a href="/events" className="text-primary hover:text-accent transition-colors">
              {t.events}
            </a>
            <a href="/reports" className="text-primary hover:text-accent transition-colors">
              {t.reports}
            </a>
            <a href="/contact" className="text-primary hover:text-accent transition-colors">
              {t.contact}
            </a>
          </div>

          <div className="flex items-center">
            <button
              onClick={() => setLanguage(language === "en" ? "ar" : "en")}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <Globe className="h-5 w-5" />
            </button>
            <button className="md:hidden p-2 hover:bg-gray-100 rounded-full">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;