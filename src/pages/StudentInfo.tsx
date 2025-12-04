import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { 
  BookOpen, 
  Users, 
  Award, 
  Calendar,
  FileText,
  Download
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";

const resources = [
  {
    title: "Student Handbook",
    description: "Complete guide to school policies, rules, and expectations",
    icon: BookOpen,
    action: "Download PDF",
  },
  {
    title: "Academic Calendar",
    description: "Important dates, holidays, and examination schedules",
    icon: Calendar,
    action: "View Calendar",
  },
  {
    title: "Curriculum Guide",
    description: "Detailed overview of our STEM-focused curriculum",
    icon: FileText,
    action: "Learn More",
  },
  {
    title: "Extracurricular Activities",
    description: "Clubs, sports, and enrichment programs available",
    icon: Award,
    action: "Explore",
  },
];

const StudentInfo = () => {
  return (
    <>
      <Helmet>
        <title>Student Information - King Standard Academy</title>
        <meta name="description" content="Access student resources, handbook, calendar, and curriculum information at KSA." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        
        {/* Hero */}
        <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-blue text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-4 backdrop-blur-sm">
                Student Resources
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Student Information</h1>
              <p className="text-lg text-white/90">
                Everything you need to succeed at King Standard Academy. Access resources, guides, and important information.
              </p>
            </div>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {resources.map((resource, index) => (
                <Card key={index} className="glass-card p-6 hover:shadow-lg transition-all group">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <resource.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2">{resource.title}</h3>
                      <p className="text-muted-foreground mb-4">{resource.description}</p>
                      <Button variant="outline" size="sm" className="gap-2">
                        <Download className="w-4 h-4" />
                        {resource.action}
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Bold Minds Program */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="glass-card p-8 md:p-12 bg-gradient-to-br from-primary via-secondary to-accent text-white">
              <div className="max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Bold Minds, Global Voices</h2>
                <p className="text-lg text-white/90 mb-6">
                  Our signature program is designed to help you understand STEM, whether it's your first time 
                  or you're simply curious about how it works. KSA is your space to start — no experience 
                  needed, just curiosity and the drive to grow.
                </p>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                    <Users className="w-8 h-8 mx-auto mb-2" />
                    <div className="font-semibold">Collaborative Learning</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                    <Award className="w-8 h-8 mx-auto mb-2" />
                    <div className="font-semibold">Excellence Focus</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                    <BookOpen className="w-8 h-8 mx-auto mb-2" />
                    <div className="font-semibold">STEM Curriculum</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default StudentInfo;
