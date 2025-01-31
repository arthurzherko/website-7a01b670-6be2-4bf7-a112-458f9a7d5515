import { Coffee, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface CoffeeRecommendation {
  id: string;
  name: string;
  roastLevel: string;
  origin: string;
  flavorNotes: string[];
  description: string;
  rating: number;
  price: number;
}

interface CoffeeRecommendationCardProps {
  coffee: CoffeeRecommendation;
  onSelect: (coffee: CoffeeRecommendation) => void;
}

export function CoffeeRecommendationCard({
  coffee,
  onSelect,
}: CoffeeRecommendationCardProps) {
  return (
    <Card className="group flex h-full flex-col transition-all hover:shadow-md">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            <CardTitle className="flex items-center gap-2 text-foreground">
              <Coffee className="size-5" />
              {coffee.name}
            </CardTitle>
            <CardDescription className="text-muted-foreground">{coffee.origin}</CardDescription>
          </div>
          <div className="flex items-center gap-1">
            <Star className="size-4 fill-primary text-primary" />
            <span className="text-sm font-medium text-foreground">{coffee.rating.toFixed(1)}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="mb-4 flex flex-wrap gap-2">
          {coffee.flavorNotes.map((note) => (
            <Badge key={note} variant="secondary">
              {note}
            </Badge>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">{coffee.description}</p>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <span className="text-lg font-semibold text-foreground">${coffee.price.toFixed(2)}</span>
        <Button onClick={() => onSelect(coffee)}>Select This Coffee</Button>
      </CardFooter>
    </Card>
  );
}