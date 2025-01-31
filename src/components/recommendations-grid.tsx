import { CoffeeRecommendation, CoffeeRecommendationCard } from "./coffee-recommendation-card";
import { Typography } from "@/components/ui/typography";

interface RecommendationsGridProps {
  recommendations: CoffeeRecommendation[];
  onSelect: (coffee: CoffeeRecommendation) => void;
}

export function RecommendationsGrid({
  recommendations,
  onSelect,
}: RecommendationsGridProps) {
  if (!recommendations.length) {
    return (
      <div className="text-center">
        <Typography.H3>No recommendations yet</Typography.H3>
        <Typography.P className="text-muted-foreground">
          Fill out your preferences to get personalized coffee recommendations.
        </Typography.P>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {recommendations.map((coffee) => (
        <CoffeeRecommendationCard
          key={coffee.id}
          coffee={coffee}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}