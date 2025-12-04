import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Users, BookOpen, Clock } from "lucide-react";
import { Helmet } from "react-helmet-async";

const classes = [
  { level: "Nursery 1", teacher: "Mrs. Akwa", students: 25, schedule: "8:00 AM - 12:00 PM" },
  { level: "Nursery 2", teacher: "Mrs. Bih", students: 28, schedule: "8:00 AM - 12:00 PM" },
  { level: "Class 1", teacher: "Mr. Che", students: 30, schedule: "8:00 AM - 2:00 PM" },
  { level: "Class 2", teacher: "Mrs. Doh", students: 32, schedule: "8:00 AM - 2:00 PM" },
  { level: "Class 3", teacher: "Mr. Eta", students: 28, schedule: "8:00 AM - 2:30 PM" },
  { level: "Class 4", teacher: "Mrs. Fon", students: 30, schedule: "8:00 AM - 2:30 PM" },
  { level: "Class 5", teacher: "Mr. Gwei", students: 26, schedule: "8:00 AM - 3:00 PM" },
  { level: "Class 6", teacher: "Mrs. Hilda", students: 24, schedule: "8:00 AM - 3:00 PM" },
];

const ClassAllocation = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredClasses = classes.filter(c => 
    c.level.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.teacher.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Helmet>
        <title>Class Allocation - King Standard Academy</title>
        <meta name="description" content="View class assignments, teachers, and schedules at KSA." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        
        {/* Hero */}
        <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-green text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-4 backdrop-blur-sm">
                Academic Structure
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Class Allocation</h1>
              <p className="text-lg text-white/90">
                View all classes, assigned teachers, and schedules. Find your class information easily.
              </p>
            </div>
          </div>
        </section>

        {/* Search & Classes */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Search */}
            <div className="glass-card p-6 mb-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    placeholder="Search by class or teacher name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Button className="bg-secondary hover:bg-secondary/90">
                  Search
                </Button>
              </div>
            </div>

            {/* Classes Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredClasses.map((classItem, index) => (
                <Card key={index} className="glass-card p-6 hover:shadow-lg transition-all">
                  <div className="bg-secondary/10 w-full h-2 rounded-full mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-1">{classItem.level}</h3>
                  <p className="text-primary font-medium mb-4">{classItem.teacher}</p>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>{classItem.students} Students</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{classItem.schedule}</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <BookOpen className="w-4 h-4" />
                      <span>STEM Curriculum</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ClassAllocation;
