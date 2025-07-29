import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface NewsCardProps {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  timeAgo: string;
  isLarge?: boolean;
}

const NewsCard = ({ title, excerpt, image, category, timeAgo, isLarge = false }: NewsCardProps) => {
  return (
    <Card className={`news-card cursor-pointer group overflow-hidden ${isLarge ? 'col-span-2 row-span-2' : ''}`}>
      <div className={`relative ${isLarge ? 'h-80' : 'h-48'}`}>
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Badge className="absolute top-3 left-3 bg-category-bg text-category-text">
          {category}
        </Badge>
      </div>
      <CardContent className="p-4">
        <h3 className={`marathi-text font-semibold text-foreground group-hover:text-primary transition-colors ${
          isLarge ? 'text-xl mb-3' : 'text-base mb-2'
        }`}>
          {title}
        </h3>
        <p className={`text-muted-foreground marathi-text ${isLarge ? 'text-base mb-3' : 'text-sm mb-2'}`}>
          {excerpt}
        </p>
        <span className="text-xs text-muted-foreground">{timeAgo}</span>
      </CardContent>
    </Card>
  );
};

export default NewsCard;