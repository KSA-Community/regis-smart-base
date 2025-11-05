import { useState } from "react";
import { Button } from "@/components/ui/button";
import { GraduationCap, Users, FileText, CheckCircle } from "lucide-react";
import RegistrationForm from "@/components/registration/RegistrationForm";
import { Card } from "@/components/ui/card";

const Index = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center text-white">
            <div className="mb-6 inline-flex items-center justify-center rounded-full bg-white/20 p-4 backdrop-blur-sm">
              <GraduationCap className="h-12 w-12" />
            </div>
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">
              KSA School Admission Portal
            </h1>
            <p className="mb-8 text-xl md:text-2xl opacity-95">
              Streamlined Registration & Class Allocation System
            </p>
            <Button
              size="lg"
              onClick={() => setShowForm(true)}
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-strong transition-all hover:scale-105"
            >
              Start Registration
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      {!showForm && (
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="mb-12 text-center text-3xl font-bold text-foreground">
              Digital Registration Made Easy
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="p-6 shadow-medium transition-all hover:shadow-strong">
                <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-primary/10 p-3">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Student Information</h3>
                <p className="text-muted-foreground">
                  Complete student details with automated registration number generation
                </p>
              </Card>

              <Card className="p-6 shadow-medium transition-all hover:shadow-strong">
                <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-secondary/10 p-3">
                  <FileText className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Class Allocation</h3>
                <p className="text-muted-foreground">
                  Seamless class registration and academic session tracking
                </p>
              </Card>

              <Card className="p-6 shadow-medium transition-all hover:shadow-strong">
                <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-success/10 p-3">
                  <CheckCircle className="h-6 w-6 text-success" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Payment Tracking</h3>
                <p className="text-muted-foreground">
                  Comprehensive finance management with receipt validation
                </p>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Registration Form Section */}
      {showForm && (
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <RegistrationForm onCancel={() => setShowForm(false)} />
          </div>
        </section>
      )}
    </div>
  );
};

export default Index;
