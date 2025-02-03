import { useLanguage } from "../contexts/LanguageContext";
import Navbar from "../components/Navbar";
import { Download } from "lucide-react";

const Reports = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Reports & Publications",
      download: "Download",
      categories: {
        annual: "Annual Reports",
        impact: "Impact Studies",
        research: "Research Papers"
      },
      reports: [
        {
          title: "Annual Report 2023",
          category: "annual",
          date: "January 2024",
          size: "2.5 MB",
          description: "Comprehensive overview of NFHD's activities and impact in 2023."
        },
        {
          title: "Healthcare Impact Study",
          category: "impact",
          date: "December 2023",
          size: "1.8 MB",
          description: "Analysis of our healthcare initiatives' impact in rural communities."
        }
      ]
    },
    ar: {
      title: "التقارير والمنشورات",
      download: "تحميل",
      categories: {
        annual: "التقارير السنوية",
        impact: "دراسات الأثر",
        research: "الأوراق البحثية"
      },
      reports: [
        {
          title: "التقرير السنوي ٢٠٢٣",
          category: "annual",
          date: "يناير ٢٠٢٤",
          size: "٢.٥ ميجابايت",
          description: "نظرة شاملة على أنشطة وتأثير NFHD في عام ٢٠٢٣."
        },
        {
          title: "دراسة تأثير الرعاية الصحية",
          category: "impact",
          date: "ديسمبر ٢٠٢٣",
          size: "١.٨ ميجابايت",
          description: "تحليل تأثير مبادراتنا الصحية في المجتمعات الريفية."
        }
      ]
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-primary mb-8">{t.title}</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.reports.map((report, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-primary">{report.title}</h3>
                <button className="text-primary hover:text-secondary transition-colors">
                  <Download className="h-5 w-5" />
                </button>
              </div>
              <div className="space-y-2 mb-4">
                <p className="text-sm text-secondary">{t.categories[report.category]}</p>
                <p className="text-gray-600">{report.description}</p>
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                <span>{report.date}</span>
                <span>{report.size}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reports;