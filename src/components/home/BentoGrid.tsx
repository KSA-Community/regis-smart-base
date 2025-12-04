import { Link } from "react-router-dom";
import { 
  GraduationCap, 
  Users, 
  CreditCard, 
  Bus, 
  BookOpen, 
  Globe, 
  Lightbulb,
  Award
} from "lucide-react";

const bentoItems = [
  {
    title: "Student Registration",
    description: "Complete your enrollment with our digital registration system",
    icon: GraduationCap,
    link: "/register",
    span: "bento-span-2",
    gradient: "bg-gradient-blue",
  },
  {
    title: "Class Allocation",
    description: "View and manage class assignments",
    icon: Users,
    link: "/class-allocation",
    gradient: "bg-gradient-green",
  },
  {
    title: "Payment Tracking",
    description: "Monitor tuition and fees",
    icon: CreditCard,
    link: "/payment-tracking",
    gradient: "bg-gradient-gold",
  },
  {
    title: "STEM Excellence",
    description: "Discover new trends in Science, Technology, Engineering, and Mathematics education",
    icon: Lightbulb,
    link: "/student-info",
    span: "bento-span-2 bento-row-2",
    featured: true,
  },
  {
    title: "Transport Service",
    description: "Bus routes and pickup points",
    icon: Bus,
    link: "/register",
    gradient: "bg-gradient-blue",
  },
  {
    title: "Student Guide",
    description: "Resources and handbook",
    icon: BookOpen,
    link: "/student-info",
    gradient: "bg-gradient-green",
  },
  {
    title: "Global Voices",
    description: "Join our community of bold minds becoming global voices",
    icon: Globe,
    link: "/student-info",
    span: "bento-span-2",
    gradient: "bg-gradient-gold",
  },
  {
    title: "Achievements",
    description: "Celebrating excellence and growth",
    icon: Award,
    link: "/student-info",
    gradient: "bg-gradient-blue",
  },
];

const BentoGrid = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything You Need
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Access all school services in one place. From registration to payment tracking.
          </p>
        </div>

        <div className="bento-grid">
          {bentoItems.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className={`bento-item group ${item.span || ""} ${
                item.featured 
                  ? "bg-gradient-to-br from-primary via-secondary to-accent text-white" 
                  : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {!item.featured && item.gradient && (
                <div className={`w-14 h-14 ${item.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-7 h-7 text-white" />
                </div>
              )}
              
              {item.featured && (
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <item.icon className="w-16 h-16 mb-6 opacity-90" />
                    <h3 className="text-2xl md:text-3xl font-bold mb-3">{item.title}</h3>
                    <p className="text-white/80 text-lg">{item.description}</p>
                  </div>
                  <div className="mt-6">
                    <span className="inline-flex items-center gap-2 text-sm font-medium bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
                      Learn More →
                    </span>
                  </div>
                </div>
              )}
              
              {!item.featured && (
                <>
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
