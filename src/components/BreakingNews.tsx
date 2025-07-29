import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { mockNewsData } from "@/lib/newsData";

const BreakingNews = () => {
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  
  const breakingNews = mockNewsData
    .filter(news => news.isBreaking || news.category === "क्राइम")
    .map(news => news.title);

  // Auto-rotate breaking news
  useEffect(() => {
    if (breakingNews.length > 1) {
      const interval = setInterval(() => {
        setCurrentNewsIndex(prev => (prev + 1) % breakingNews.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [breakingNews.length]);

  if (breakingNews.length === 0) return null;

  return (
    <div className="bg-breaking-bg text-breaking-text py-2 breaking-news">
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-4">
          <Badge className="bg-white text-breaking-bg font-bold px-3 py-1 flex-shrink-0">
            ब्रेकिंग न्यूज
          </Badge>
          <div className="flex-1 overflow-hidden">
            <div 
              className="transition-all duration-500 ease-in-out cursor-pointer hover:text-white/80"
              onClick={() => setCurrentNewsIndex(prev => (prev + 1) % breakingNews.length)}
            >
              <span className="marathi-text font-medium">
                {breakingNews[currentNewsIndex]}
              </span>
            </div>
          </div>
          <div className="flex space-x-1">
            {breakingNews.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentNewsIndex ? 'bg-white' : 'bg-white/50'
                }`}
                onClick={() => setCurrentNewsIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreakingNews;