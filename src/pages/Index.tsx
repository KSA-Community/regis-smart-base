import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSlider from "@/components/home/HeroSlider";
import BentoGrid from "@/components/home/BentoGrid";
import AboutSection from "@/components/home/AboutSection";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>King Standard Academy - Building Bold Minds</title>
        <meta name="description" content="KSA: Where bold minds become global voices. Empowering students through STEM education and innovative learning." />
      </Helmet>
      
      <div className="min-h-screen">
        <Navbar />
        <HeroSlider />
        <AboutSection />
        <BentoGrid />
        <Footer />
      </div>
    </>
  );
};

export default Index;
