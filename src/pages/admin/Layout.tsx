import { useLanguage } from "../../contexts/LanguageContext";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Database, FileText, Calendar, List } from "lucide-react";

const AdminLayout = () => {
  const { language } = useLanguage();
  const location = useLocation();

  const content = {
    en: {
      title: "Admin Dashboard",
      projects: "Projects",
      news: "News",
      events: "Events",
      reports: "Reports",
    },
    ar: {
      title: "لوحة التحكم",
      projects: "المشاريع",
      news: "الأخبار",
      events: "الفعاليات",
      reports: "التقارير",
    },
  };

  const t = content[language];

  const navigation = [
    { name: t.projects, href: "/admin/projects", icon: Database },
    { name: t.news, href: "/admin/news", icon: FileText },
    { name: t.events, href: "/admin/events", icon: Calendar },
    { name: t.reports, href: "/admin/reports", icon: List },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-md min-h-screen">
          <div className="p-4">
            <h1 className="text-xl font-bold text-primary">{t.title}</h1>
          </div>
          <nav className="mt-4">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`flex items-center gap-2 px-4 py-2 mx-2 rounded-md ${
                    isActive
                      ? "bg-primary text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Main content */}
        <div className="flex-1 p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;