import { UseFormReturn } from "react-hook-form";
import { FormField, FormItem, FormLabel, FormControl, FormMessage, FormDescription } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface AdmissionSectionProps {
  form: UseFormReturn<any>;
}

const AdmissionSection = ({ form }: AdmissionSectionProps) => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-foreground">Admission & Class Information</h3>
      
      <FormField
        control={form.control}
        name="registrationNumber"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Admission/Registration Number</FormLabel>
            <FormControl>
              <Input placeholder="Auto-generated or enter manually" {...field} />
            </FormControl>
            <FormDescription>Leave blank for auto-generation</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="previousSchool"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Previous School Attended</FormLabel>
            <FormControl>
              <Input placeholder="Enter previous school name" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="classApplying"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Class Applying For / Current Class *</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select class" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="nursery">Nursery</SelectItem>
                <SelectItem value="kg1">KG 1</SelectItem>
                <SelectItem value="kg2">KG 2</SelectItem>
                <SelectItem value="primary1">Primary 1</SelectItem>
                <SelectItem value="primary2">Primary 2</SelectItem>
                <SelectItem value="primary3">Primary 3</SelectItem>
                <SelectItem value="primary4">Primary 4</SelectItem>
                <SelectItem value="primary5">Primary 5</SelectItem>
                <SelectItem value="primary6">Primary 6</SelectItem>
                <SelectItem value="jss1">JSS 1</SelectItem>
                <SelectItem value="jss2">JSS 2</SelectItem>
                <SelectItem value="jss3">JSS 3</SelectItem>
                <SelectItem value="sss1">SSS 1</SelectItem>
                <SelectItem value="sss2">SSS 2</SelectItem>
                <SelectItem value="sss3">SSS 3</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="academicSession"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Academic Session *</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select academic session" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="2024/2025">2024/2025</SelectItem>
                <SelectItem value="2025/2026">2025/2026</SelectItem>
                <SelectItem value="2026/2027">2026/2027</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="modeOfAdmission"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Mode of Admission *</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select mode" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="online">Online</SelectItem>
                <SelectItem value="manual">Manual</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default AdmissionSection;
