import { useLanguage } from "../contexts/LanguageContext";

const Hero = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Empowering Communities in Yemen",
      subtitle: "Building a better future through sustainable development",
      cta: "Explore Our Projects",
    },
    ar: {
      title: "تمكين المجتمعات في اليمن",
      subtitle: "بناء مستقبل أفضل من خلال التنمية المستدامة",
      cta: "استكشف مشاريعنا",
    },
  };

  const t = content[language];

  return (
    <div className="relative h-[80vh] bg-gradient-to-br from-primary to-secondary overflow-hidden">
      <div className="absolute inset-0 bg-black/20 z-10" />
      <div className="container mx-auto px-4 h-full flex items-center relative z-20">
        <div className="max-w-2xl animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">{t.title}</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">{t.subtitle}</p>
          <a
            href="/projects"
            className="inline-block bg-white hover:bg-white/90 text-primary px-8 py-3 rounded-lg text-lg transition-colors"
          >
            {t.cta}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;