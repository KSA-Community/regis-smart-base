import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import StudentInfoSection from "./StudentInfoSection";
import AdmissionSection from "./AdmissionSection";
import FinanceSection from "./FinanceSection";
import TransportSection from "./TransportSection";
import AdditionalNotesSection from "./AdditionalNotesSection";
import { registrationSchema } from "./registrationSchema";

type RegistrationFormData = z.infer<typeof registrationSchema>;

interface RegistrationFormProps {
  onCancel: () => void;
}

const RegistrationForm = ({ onCancel }: RegistrationFormProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const totalSteps = 5;

  const form = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      busServiceRequired: "no",
    },
  });

  const onSubmit = (data: RegistrationFormData) => {
    console.log("Form submitted:", data);
    toast.success("Registration submitted successfully!");
    setIsSubmitted(true);
  };

  const nextStep = async () => {
    const fields = getFieldsForStep(currentStep);
    const isValid = await form.trigger(fields as any);
    
    if (isValid) {
      setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const getFieldsForStep = (step: number): string[] => {
    const fieldMap: Record<number, string[]> = {
      1: ["fullName", "dateOfBirth", "gender", "nationality", "homeAddress", "parentName", "parentContact", "parentEmail"],
      2: ["registrationNumber", "previousSchool", "classApplying", "academicSession", "modeOfAdmission"],
      3: ["paymentType", "amountPaid", "dateOfPayment", "paymentMode", "receiptNumber"],
      4: ["busServiceRequired", "pickupPoint", "emergencyContactTransport"],
      5: ["healthConcerns", "otherRemarks"],
    };
    return fieldMap[step] || [];
  };

  if (isSubmitted) {
    return (
      <Card className="p-8 text-center shadow-strong">
        <div className="mb-6 inline-flex items-center justify-center rounded-full bg-success/10 p-6">
          <CheckCircle className="h-16 w-16 text-success" />
        </div>
        <h2 className="mb-4 text-3xl font-bold text-foreground">Registration Successful!</h2>
        <p className="mb-8 text-lg text-muted-foreground">
          Thank you for registering. Your application has been submitted successfully.
        </p>
        <Button onClick={onCancel} className="bg-primary hover:bg-primary/90">
          Return to Home
        </Button>
      </Card>
    );
  }

  return (
    <Card className="p-8 shadow-strong">
      <div className="mb-8">
        <h2 className="mb-2 text-2xl font-bold text-foreground">Student Registration Form</h2>
        <p className="text-muted-foreground">
          Step {currentStep} of {totalSteps}
        </p>
        <Progress value={(currentStep / totalSteps) * 100} className="mt-4" />
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {currentStep === 1 && <StudentInfoSection form={form} />}
        {currentStep === 2 && <AdmissionSection form={form} />}
        {currentStep === 3 && <FinanceSection form={form} />}
        {currentStep === 4 && <TransportSection form={form} />}
        {currentStep === 5 && <AdditionalNotesSection form={form} />}

        <div className="flex justify-between gap-4 pt-6">
          {currentStep > 1 ? (
            <Button type="button" onClick={prevStep} variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous
            </Button>
          ) : (
            <Button type="button" onClick={onCancel} variant="outline">
              Cancel
            </Button>
          )}

          {currentStep < totalSteps ? (
            <Button type="button" onClick={nextStep} className="ml-auto bg-primary hover:bg-primary/90">
              Next
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button type="submit" className="ml-auto bg-accent hover:bg-accent/90">
              Submit Registration
            </Button>
          )}
        </div>
      </form>
    </Card>
  );
};

export default RegistrationForm;
