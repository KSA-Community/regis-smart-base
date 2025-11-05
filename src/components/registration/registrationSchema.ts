import * as z from "zod";

export const registrationSchema = z.object({
  // Student Information
  fullName: z.string().trim().min(1, "Full name is required").max(100),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  gender: z.enum(["male", "female", "other"], {
    required_error: "Please select a gender",
  }),
  nationality: z.string().trim().min(1, "Nationality is required").max(50),
  homeAddress: z.string().trim().min(1, "Home address is required").max(500),
  parentName: z.string().trim().min(1, "Parent/Guardian name is required").max(100),
  parentContact: z.string().trim().min(1, "Parent contact is required").max(50),
  parentEmail: z.string().trim().email("Invalid email address").max(255),

  // Admission & Class Info
  registrationNumber: z.string().trim().max(50).optional(),
  previousSchool: z.string().trim().max(100).optional(),
  classApplying: z.string().min(1, "Please select a class"),
  academicSession: z.string().min(1, "Please select academic session"),
  modeOfAdmission: z.enum(["online", "manual"], {
    required_error: "Please select mode of admission",
  }),

  // Finance & Payment
  paymentType: z.enum(["tuition", "bus", "extras"], {
    required_error: "Please select payment type",
  }),
  amountPaid: z.string().min(1, "Amount is required"),
  dateOfPayment: z.string().min(1, "Payment date is required"),
  paymentMode: z.enum(["cash", "bank_transfer", "online_payment"], {
    required_error: "Please select payment mode",
  }),
  receiptNumber: z.string().trim().min(1, "Receipt number is required").max(50),

  // Transport
  busServiceRequired: z.enum(["yes", "no"]),
  pickupPoint: z.string().trim().max(200).optional(),
  emergencyContactTransport: z.string().trim().max(50).optional(),

  // Additional Notes
  healthConcerns: z.string().trim().max(1000).optional(),
  otherRemarks: z.string().trim().max(1000).optional(),
}).refine(
  (data) => {
    if (data.busServiceRequired === "yes") {
      return !!data.pickupPoint && data.pickupPoint.length > 0;
    }
    return true;
  },
  {
    message: "Pickup point is required when bus service is selected",
    path: ["pickupPoint"],
  }
);
