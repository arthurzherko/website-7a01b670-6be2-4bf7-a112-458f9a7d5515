import { zodResolver } from "@hookform/resolvers/zod";
import { Coffee, Heart } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Typography } from "@/components/ui/typography";

const formSchema = z.object({
  roastLevel: z.string({
    required_error: "Please select your preferred roast level.",
  }),
  brewMethod: z.string({
    required_error: "Please select your preferred brewing method.",
  }),
  flavorProfile: z.string({
    required_error: "Please select your preferred flavor profile.",
  }),
});

export function CoffeePreferenceForm({
  onSubmit,
}: {
  onSubmit: (values: z.infer<typeof formSchema>) => void;
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 rounded-lg border bg-card p-6 shadow-sm"
      >
        <div className="space-y-2">
          <Typography.H2 className="flex items-center gap-2">
            <Coffee className="size-6" />
            Coffee Preferences
          </Typography.H2>
          <Typography.P className="text-muted-foreground">
            Tell us about your coffee preferences to get personalized
            recommendations.
          </Typography.P>
        </div>

        <FormField
          control={form.control}
          name="roastLevel"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Roast Level</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your preferred roast" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="light">Light Roast</SelectItem>
                  <SelectItem value="medium">Medium Roast</SelectItem>
                  <SelectItem value="dark">Dark Roast</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                This helps us understand your taste intensity preference.
              </FormDescription>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="brewMethod"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Brewing Method</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your brewing method" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="drip">Drip Coffee</SelectItem>
                  <SelectItem value="espresso">Espresso</SelectItem>
                  <SelectItem value="french">French Press</SelectItem>
                  <SelectItem value="pour">Pour Over</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                Different brewing methods bring out different flavors.
              </FormDescription>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="flavorProfile"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Flavor Profile</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select preferred flavor profile" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="fruity">Fruity & Bright</SelectItem>
                  <SelectItem value="nutty">Nutty & Chocolate</SelectItem>
                  <SelectItem value="caramel">Caramel & Sweet</SelectItem>
                  <SelectItem value="earthy">Earthy & Bold</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                This helps us match you with coffees you'll love.
              </FormDescription>
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          <Heart className="mr-2" /> Get Recommendations
        </Button>
      </form>
    </Form>
  );
}