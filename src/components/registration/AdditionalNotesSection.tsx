import { UseFormReturn } from "react-hook-form";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

interface AdditionalNotesSectionProps {
  form: UseFormReturn<any>;
}

const AdditionalNotesSection = ({ form }: AdditionalNotesSectionProps) => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-foreground">Additional Notes</h3>
      
      <FormField
        control={form.control}
        name="healthConcerns"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Health Concerns / Allergies</FormLabel>
            <FormControl>
              <Textarea 
                placeholder="Enter any health concerns, allergies, or medical conditions" 
                className="min-h-[100px]"
                {...field} 
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="otherRemarks"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Other Remarks</FormLabel>
            <FormControl>
              <Textarea 
                placeholder="Any additional information or special requests" 
                className="min-h-[100px]"
                {...field} 
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default AdditionalNotesSection;
