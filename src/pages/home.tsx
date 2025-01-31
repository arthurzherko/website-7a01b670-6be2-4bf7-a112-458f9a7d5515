import { useState } from "react";
import { Coffee, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { ModeToggle } from "@/components/mode-toggle";
import { Typography } from "@/components/ui/typography";
import { CoffeePreferenceForm } from "@/components/coffee-preference-form";
import { RecommendationsGrid } from "@/components/recommendations-grid";
import type { CoffeeRecommendation } from "@/components/coffee-recommendation-card";
import { toast } from "@/components/ui/use-toast";

// Simulated recommendations based on preferences
const getRecommendations = (preferences: any): CoffeeRecommendation[] => {
  // This would typically be an API call to your AI service
  const recommendations: CoffeeRecommendation[] = [
    {
      id: "1",
      name: "Ethiopian Yirgacheffe",
      roastLevel: "light",
      origin: "Ethiopia",
      flavorNotes: ["Floral", "Citrus", "Bergamot"],
      description:
        "A bright and complex coffee with delicate floral notes and a citrusy finish. Perfect for those who appreciate nuanced flavors.",
      rating: 4.8,
      price: 18.99,
    },
    {
      id: "2",
      name: "Colombian Supremo",
      roastLevel: "medium",
      origin: "Colombia",
      flavorNotes: ["Caramel", "Nuts", "Chocolate"],
      description:
        "Well-balanced with a smooth body and sweet caramel notes. A classic choice for any time of day.",
      rating: 4.6,
      price: 16.99,
    },
    {
      id: "3",
      name: "Sumatra Mandheling",
      roastLevel: "dark",
      origin: "Indonesia",
      flavorNotes: ["Earthy", "Spicy", "Dark Chocolate"],
      description:
        "Full-bodied with a rich, earthy character and complex spice notes. Perfect for those who love bold flavors.",
      rating: 4.7,
      price: 17.99,
    },
  ];

  return recommendations;
};

export function Home() {
  const [recommendations, setRecommendations] = useState<CoffeeRecommendation[]>(
    []
  );

  const handlePreferenceSubmit = (values: any) => {
    const newRecommendations = getRecommendations(values);
    setRecommendations(newRecommendations);
    toast({
      title: "Preferences Updated",
      description: "We've found some perfect matches for you!",
    });
  };

  const handleCoffeeSelect = (coffee: CoffeeRecommendation) => {
    toast({
      title: "Great Choice!",
      description: `${coffee.name} has been added to your selection.`,
    });
  };

  return (
    <div className="min-h-screen bg-background pb-8">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Coffee className="size-6 text-primary" />
            <Typography.H3>AI Coffee Recommender</Typography.H3>
          </div>
          <ModeToggle />
        </div>
      </header>

      {/* Hero Section */}
      <section className="container py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-2">
            <Sparkles className="size-8 text-primary" />
            <Typography.H1>Discover Your Perfect Brew</Typography.H1>
          </div>
          <Typography.Lead>
            Let our AI-powered system find the perfect coffee match for your unique
            taste preferences. Simply tell us what you like, and we'll do the rest.
          </Typography.Lead>
        </motion.div>
      </section>

      {/* Main Content */}
      <main className="container grid gap-12 md:grid-cols-[400px_1fr]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <CoffeePreferenceForm onSubmit={handlePreferenceSubmit} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="space-y-8">
            <div className="space-y-2">
              <Typography.H2>Your Recommendations</Typography.H2>
              <Typography.P className="text-muted-foreground">
                Based on your preferences, here are some coffees we think you'll
                love.
              </Typography.P>
            </div>
            <RecommendationsGrid
              recommendations={recommendations}
              onSelect={handleCoffeeSelect}
            />
          </div>
        </motion.div>
      </main>
    </div>
  );
}