import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { newsCategories } from "@/lib/newsData";
import { useToast } from "@/hooks/use-toast";

interface NavigationProps {
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

const Navigation = ({ activeCategory, onCategoryChange }: NavigationProps) => {
  const { toast } = useToast();

  const handleCategoryClick = (category: typeof newsCategories[0]) => {
    onCategoryChange(category.id);
    toast({
      title: "श्रेणी बदलली",
      description: `${category.name} वर जात आहे...`,
    });
  };

  return (
    <nav className="bg-nav-bg border-b shadow-sm sticky top-[120px] z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-6 py-3 overflow-x-auto scrollbar-hide">
          {newsCategories.map((category) => (
            <Button
              key={category.id}
              variant="ghost"
              className={`text-nav-text hover:bg-nav-hover whitespace-nowrap flex items-center space-x-2 marathi-text font-medium transition-colors ${
                activeCategory === category.id ? "bg-nav-hover" : ""
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              <span>{category.name}</span>
              {category.hasLive && (
                <Badge className="bg-news-red text-news-red-foreground text-xs px-1.5 py-0.5 breaking-news">
                  LIVE
                </Badge>
              )}
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;