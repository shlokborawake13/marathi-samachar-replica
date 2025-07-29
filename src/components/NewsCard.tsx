import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Eye } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface NewsCardProps {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  timeAgo: string;
  readTime?: number;
  views?: number;
  isLarge?: boolean;
  onClick?: (id: string) => void;
}

const NewsCard = ({ 
  id, 
  title, 
  excerpt, 
  image, 
  category, 
  timeAgo, 
  readTime, 
  views, 
  isLarge = false, 
  onClick 
}: NewsCardProps) => {
  const { toast } = useToast();

  const handleClick = () => {
    if (onClick) {
      onClick(id);
    } else {
      toast({
        title: "लेख उघडत आहे",
        description: title,
      });
    }
  };

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({
        title: title,
        text: excerpt,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "लिंक कॉपी केली",
        description: "लेखाची लिंक क्लिपबोर्डमध्ये कॉपी केली आहे",
      });
    }
  };

  return (
    <Card 
      className={`news-card cursor-pointer group overflow-hidden hover:shadow-lg transition-all duration-300 ${
        isLarge ? 'col-span-2 row-span-2' : ''
      }`}
      onClick={handleClick}
    >
      <div className={`relative ${isLarge ? 'h-80' : 'h-48'}`}>
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <Badge className="absolute top-3 left-3 bg-category-bg text-category-text hover:bg-category-bg/90 transition-colors">
          {category}
        </Badge>
        <button
          onClick={handleShare}
          className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"/>
          </svg>
        </button>
      </div>
      <CardContent className="p-4">
        <h3 className={`marathi-text font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 ${
          isLarge ? 'text-xl mb-3' : 'text-base mb-2'
        }`}>
          {title}
        </h3>
        <p className={`text-muted-foreground marathi-text line-clamp-2 ${
          isLarge ? 'text-base mb-3' : 'text-sm mb-2'
        }`}>
          {excerpt}
        </p>
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>{timeAgo}</span>
          <div className="flex items-center space-x-3">
            {readTime && (
              <div className="flex items-center space-x-1">
                <Clock className="w-3 h-3" />
                <span>{readTime} मिनिट</span>
              </div>
            )}
            {views && (
              <div className="flex items-center space-x-1">
                <Eye className="w-3 h-3" />
                <span>{views}</span>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NewsCard;