import { useLanguage } from "../contexts/LanguageContext";
import Navbar from "../components/Navbar";

const Projects = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Our Projects",
      categories: ["All", "Education", "Healthcare", "Infrastructure", "Community"],
      projects: [
        {
          title: "Education Access Initiative",
          category: "Education",
          description: "Providing educational resources and support to remote communities.",
          status: "Ongoing"
        },
        {
          title: "Healthcare Outreach",
          category: "Healthcare",
          description: "Mobile medical clinics serving rural areas.",
          status: "Completed"
        }
      ]
    },
    ar: {
      title: "مشاريعنا",
      categories: ["الكل", "التعليم", "الصحة", "البنية التحتية", "المجتمع"],
      projects: [
        {
          title: "مبادرة الوصول إلى التعليم",
          category: "التعليم",
          description: "توفير الموارد التعليمية والدعم للمجتمعات النائية.",
          status: "جاري"
        },
        {
          title: "التوعية الصحية",
          category: "الصحة",
          description: "عيادات طبية متنقلة تخدم المناطق الريفية.",
          status: "مكتمل"
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
        
        <div className="flex flex-wrap gap-4 mb-8">
          {t.categories.map((category, index) => (
            <button
              key={index}
              className="px-4 py-2 rounded-full bg-white border border-primary text-primary hover:bg-primary hover:text-white transition-colors"
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-video bg-gray-100"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-secondary">{project.category}</span>
                  <span className="text-sm text-primary">{project.status}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;