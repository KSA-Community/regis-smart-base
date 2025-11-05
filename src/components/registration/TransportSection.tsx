import { UseFormReturn } from "react-hook-form";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface TransportSectionProps {
  form: UseFormReturn<any>;
}

const TransportSection = ({ form }: TransportSectionProps) => {
  const busServiceRequired = form.watch("busServiceRequired");

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-foreground">Transport (Optional)</h3>
      
      <FormField
        control={form.control}
        name="busServiceRequired"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Bus Service Required?</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select option" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="yes">Yes</SelectItem>
                <SelectItem value="no">No</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      {busServiceRequired === "yes" && (
        <>
          <FormField
            control={form.control}
            name="pickupPoint"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pickup Point / Route *</FormLabel>
                <FormControl>
                  <Input placeholder="Enter pickup point or route" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="emergencyContactTransport"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Emergency Contact for Transport</FormLabel>
                <FormControl>
                  <Input placeholder="Enter emergency contact number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </>
      )}
    </div>
  );
};

export default TransportSection;
