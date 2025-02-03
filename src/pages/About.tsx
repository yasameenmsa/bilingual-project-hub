import { useLanguage } from "../contexts/LanguageContext";
import Navbar from "../components/Navbar";

const About = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "About NFHD",
      mission: "Our Mission",
      missionText: "To empower communities in Yemen through sustainable development initiatives and humanitarian aid.",
      vision: "Our Vision",
      visionText: "A Yemen where every individual has access to education, healthcare, and opportunities for growth.",
      values: "Our Values",
      valuesList: [
        "Community-Driven Development",
        "Transparency & Accountability",
        "Sustainable Impact",
        "Innovation & Excellence"
      ]
    },
    ar: {
      title: "عن المؤسسة",
      mission: "رسالتنا",
      missionText: "تمكين المجتمعات في اليمن من خلال مبادرات التنمية المستدامة والمساعدات الإنسانية.",
      vision: "رؤيتنا",
      visionText: "يمن يتمتع فيه كل فرد بإمكانية الوصول إلى التعليم والرعاية الصحية وفرص النمو.",
      values: "قيمنا",
      valuesList: [
        "التنمية المجتمعية",
        "الشفافية والمساءلة",
        "الأثر المستدام",
        "الابتكار والتميز"
      ]
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-primary mb-12">{t.title}</h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-primary mb-4">{t.mission}</h2>
            <p className="text-gray-700">{t.missionText}</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-primary mb-4">{t.vision}</h2>
            <p className="text-gray-700">{t.visionText}</p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-primary mb-6">{t.values}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {t.valuesList.map((value, index) => (
              <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                <span className="text-primary font-medium">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;