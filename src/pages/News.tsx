import { useLanguage } from "../contexts/LanguageContext";
import Navbar from "../components/Navbar";

const News = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Latest News",
      readMore: "Read More",
      news: [
        {
          title: "New Healthcare Initiative Launched",
          date: "March 15, 2024",
          summary: "NFHD launches a new healthcare initiative targeting remote communities.",
          category: "Healthcare"
        },
        {
          title: "Educational Program Success",
          date: "March 10, 2024",
          summary: "Our educational program reaches milestone of supporting 1000 students.",
          category: "Education"
        }
      ]
    },
    ar: {
      title: "آخر الأخبار",
      readMore: "اقرأ المزيد",
      news: [
        {
          title: "إطلاق مبادرة رعاية صحية جديدة",
          date: "١٥ مارس ٢٠٢٤",
          summary: "أطلقت NFHD مبادرة رعاية صحية جديدة تستهدف المجتمعات النائية.",
          category: "الصحة"
        },
        {
          title: "نجاح البرنامج التعليمي",
          date: "١٠ مارس ٢٠٢٤",
          summary: "وصل برنامجنا التعليمي إلى معلم بارز في دعم ١٠٠٠ طالب.",
          category: "التعليم"
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
          {t.news.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-video bg-gray-100"></div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-secondary">{item.category}</span>
                  <span className="text-sm text-gray-500">{item.date}</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.summary}</p>
                <button className="text-primary hover:text-secondary transition-colors">
                  {t.readMore}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;