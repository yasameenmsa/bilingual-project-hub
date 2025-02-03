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
      foundation: "Nada Foundation for Human Development"
    },
    ar: {
      home: "الرئيسية",
      about: "عن المؤسسة",
      projects: "المشاريع",
      news: "الأخبار",
      events: "الفعاليات",
      reports: "التقارير",
      contact: "اتصل بنا",
      foundation: "مؤسسة الندى للتنمية الإنسانية"
    },
  };

  const t = translations[language];

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <img src="/lovable-uploads/1f5d36d2-9404-449a-bc19-a7e2e6a265e4.png" alt="NFHD Logo" className="h-12 w-auto" />
            <span className="text-primary font-bold text-lg hidden md:block">{t.foundation}</span>
          </div>

          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            <a href="/" className="text-primary hover:text-secondary transition-colors">
              {t.home}
            </a>
            <a href="/about" className="text-primary hover:text-secondary transition-colors">
              {t.about}
            </a>
            <a href="/projects" className="text-primary hover:text-secondary transition-colors">
              {t.projects}
            </a>
            <a href="/news" className="text-primary hover:text-secondary transition-colors">
              {t.news}
            </a>
            <a href="/events" className="text-primary hover:text-secondary transition-colors">
              {t.events}
            </a>
            <a href="/reports" className="text-primary hover:text-secondary transition-colors">
              {t.reports}
            </a>
            <a href="/contact" className="text-primary hover:text-secondary transition-colors">
              {t.contact}
            </a>
          </div>

          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <button
              onClick={() => setLanguage(language === "en" ? "ar" : "en")}
              className="p-2 hover:bg-gray-100 rounded-full text-primary"
            >
              <Globe className="h-5 w-5" />
            </button>
            <button className="md:hidden p-2 hover:bg-gray-100 rounded-full text-primary">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;