import { LanguageProvider } from "../contexts/LanguageContext";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
      </div>
    </LanguageProvider>
  );
};

export default Index;