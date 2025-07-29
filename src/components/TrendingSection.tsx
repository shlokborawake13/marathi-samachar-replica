import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

const TrendingSection = () => {
  const trendingNews = [
    "राजगिरीरावडाच्या अजिंदारान समिमानी, आता कोठाईचा डिप्लोमेट न बनवणार?",
    "Amit Shah On Pehalgam Terror Attack | Andhari Shocking Accident | Nag Panchami",
    "2025 Wishes | TMKOC Actress Jenifer",
    "मराठी अभिनेता वदलेल्या नाही, अजूनह जवानदिर असा कोण स्पेशियल?",
    "Galaxy Watch8 फ्रि मिळणार आहे, सांग जा..."
  ];

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center space-x-2 text-lg">
          <TrendingUp className="h-5 w-5 text-primary" />
          <span className="marathi-text">राजकारण</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {trendingNews.map((news, index) => (
          <div key={index} className="flex items-start space-x-3 group cursor-pointer">
            <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-sm font-medium text-muted-foreground">{index + 1}</span>
            </div>
            <p className="text-sm marathi-text text-foreground group-hover:text-primary transition-colors">
              {news}
            </p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default TrendingSection;