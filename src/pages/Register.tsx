import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import RegistrationForm from "@/components/registration/RegistrationForm";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, FileText, Users, CreditCard } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const [showForm, setShowForm] = useState(false);

  const steps = [
    { icon: FileText, title: "Fill Form", description: "Complete the registration form with accurate details" },
    { icon: Users, title: "Class Assignment", description: "Get assigned to the appropriate class" },
    { icon: CreditCard, title: "Make Payment", description: "Complete tuition and fee payments" },
    { icon: CheckCircle, title: "Confirmation", description: "Receive registration confirmation" },
  ];

  return (
    <>
      <Helmet>
        <title>Register - King Standard Academy</title>
        <meta name="description" content="Register your child at King Standard Academy. Complete our digital enrollment process." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        
        {/* Hero */}
        <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-hero text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-4 backdrop-blur-sm">
                Join KSA Family
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Student Registration</h1>
              <p className="text-lg text-white/90">
                Begin your journey at King Standard Academy. Complete the registration form below to enroll.
              </p>
            </div>
          </div>
        </section>

        {/* Registration Steps */}
        {!showForm && (
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">Registration Process</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Follow these simple steps to complete your child's enrollment at KSA
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {steps.map((step, index) => (
                  <Card key={index} className="glass-card p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="w-8 h-8 mx-auto mb-3 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </Card>
                ))}
              </div>

              <div className="text-center">
                <Button 
                  size="lg" 
                  onClick={() => setShowForm(true)}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full"
                >
                  Start Registration
                </Button>
              </div>
            </div>
          </section>
        )}

        {/* Registration Form */}
        {showForm && (
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <RegistrationForm onCancel={() => setShowForm(false)} />
            </div>
          </section>
        )}

        <Footer />
      </div>
    </>
  );
};

export default Register;
