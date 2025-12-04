import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const slides = [
  {
    title: "Building Bold Minds",
    subtitle: "We're your launchpad into building bold minds",
    description: "Empowering absolute beginners to take their first confident steps into STEM education.",
    cta: "Start Your Journey",
    ctaLink: "/register",
    gradient: "from-primary via-secondary to-accent",
  },
  {
    title: "Bold Minds, Global Voices",
    subtitle: "Our signature program designed for you",
    description: "Transform curiosity into knowledge. No experience needed, just the drive to grow.",
    cta: "Learn More",
    ctaLink: "/student-info",
    gradient: "from-secondary via-accent to-primary",
  },
  {
    title: "Discover STEM Excellence",
    subtitle: "New trends and teaching styles like never before",
    description: "Celebrate boldness as a confident and compassionate reflection. Grow into articulate leaders.",
    cta: "Explore Programs",
    ctaLink: "/class-allocation",
    gradient: "from-accent via-primary to-secondary",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-16 md:pt-20">
      {/* Animated Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].gradient} transition-all duration-1000 opacity-90`} />
      
      {/* Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-float" style={{ animationDelay: "4s" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center text-white">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                index === currentSlide 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-8 absolute inset-0 pointer-events-none"
              }`}
            >
              <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                {slide.subtitle}
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
                {slide.description}
              </p>
              <Link to={slide.ctaLink}>
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
                >
                  {slide.cta}
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 text-white hover:bg-white/30 transition-all backdrop-blur-sm"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 text-white hover:bg-white/30 transition-all backdrop-blur-sm"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "w-8 bg-white" : "w-3 bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
