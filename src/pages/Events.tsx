import { useLanguage } from "../contexts/LanguageContext";
import Navbar from "../components/Navbar";

const Events = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Events",
      upcoming: "Upcoming Events",
      past: "Past Events",
      registerNow: "Register Now",
      events: [
        {
          title: "Community Health Workshop",
          date: "April 5, 2024",
          location: "Sana'a, Yemen",
          description: "Join us for a comprehensive workshop on community health practices.",
          isUpcoming: true
        },
        {
          title: "Education Forum 2024",
          date: "March 20, 2024",
          location: "Aden, Yemen",
          description: "Annual forum discussing educational challenges and solutions.",
          isUpcoming: false
        }
      ]
    },
    ar: {
      title: "الفعاليات",
      upcoming: "الفعاليات القادمة",
      past: "الفعاليات السابقة",
      registerNow: "سجل الآن",
      events: [
        {
          title: "ورشة عمل الصحة المجتمعية",
          date: "٥ أبريل ٢٠٢٤",
          location: "صنعاء، اليمن",
          description: "انضم إلينا في ورشة عمل شاملة حول ممارسات الصحة المجتمعية.",
          isUpcoming: true
        },
        {
          title: "منتدى التعليم ٢٠٢٤",
          date: "٢٠ مارس ٢٠٢٤",
          location: "عدن، اليمن",
          description: "المنتدى السنوي لمناقشة التحديات والحلول التعليمية.",
          isUpcoming: false
        }
      ]
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-primary mb-12">{t.title}</h1>
        
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-primary mb-6">{t.upcoming}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {t.events
                .filter(event => event.isUpcoming)
                .map((event, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-bold text-primary mb-2">{event.title}</h3>
                    <div className="text-gray-600 space-y-2 mb-4">
                      <p>{event.date}</p>
                      <p>{event.location}</p>
                      <p>{event.description}</p>
                    </div>
                    <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors">
                      {t.registerNow}
                    </button>
                  </div>
                ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-6">{t.past}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {t.events
                .filter(event => !event.isUpcoming)
                .map((event, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-bold text-primary mb-2">{event.title}</h3>
                    <div className="text-gray-600 space-y-2">
                      <p>{event.date}</p>
                      <p>{event.location}</p>
                      <p>{event.description}</p>
                    </div>
                  </div>
                ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Events;