import { useLanguage } from "../contexts/LanguageContext";
import Navbar from "../components/Navbar";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Contact Us",
      subtitle: "Get in touch with us",
      form: {
        name: "Full Name",
        email: "Email Address",
        subject: "Subject",
        message: "Message",
        send: "Send Message"
      },
      contact: {
        title: "Contact Information",
        address: "Sana'a, Yemen",
        email: "info@nfhd.org",
        phone: "+967 1 234 5678"
      }
    },
    ar: {
      title: "اتصل بنا",
      subtitle: "تواصل معنا",
      form: {
        name: "الاسم الكامل",
        email: "البريد الإلكتروني",
        subject: "الموضوع",
        message: "الرسالة",
        send: "إرسال الرسالة"
      },
      contact: {
        title: "معلومات الاتصال",
        address: "صنعاء، اليمن",
        email: "info@nfhd.org",
        phone: "٥٦٧٨ ٢٣٤ ١ ٩٦٧+"
      }
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-2">{t.title}</h1>
          <p className="text-xl text-gray-600 mb-8">{t.subtitle}</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 bg-white rounded-lg shadow-md p-6">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t.form.name}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t.form.email}
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t.form.subject}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t.form.message}
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition-colors"
                >
                  {t.form.send}
                </button>
              </form>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-primary mb-6">{t.contact.title}</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-gray-600">{t.contact.address}</span>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="text-gray-600">{t.contact.email}</span>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-gray-600">{t.contact.phone}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;