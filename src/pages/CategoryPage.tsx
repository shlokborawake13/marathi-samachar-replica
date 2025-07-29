import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import NewsCard from "@/components/NewsCard";
import { getNewsByCategory, newsCategories } from "@/lib/newsData";
import type { NewsArticle } from "@/lib/newsData";

const CategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const navigate = useNavigate();
  const [news, setNews] = useState<NewsArticle[]>([]);
  
  const category = newsCategories.find(cat => cat.id === categoryId);

  useEffect(() => {
    if (categoryId) {
      const categoryNews = getNewsByCategory(categoryId);
      setNews(categoryNews);
    }
  }, [categoryId]);

  const handleNewsClick = (id: string) => {
    navigate(`/article/${id}`);
  };

  const handleCategoryChange = (newCategoryId: string) => {
    navigate(`/category/${newCategoryId}`);
  };

  if (!category) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto py-12 px-4 text-center">
          <h1 className="text-2xl font-bold marathi-text mb-4">श्रेणी सापडली नाही</h1>
          <button 
            onClick={() => navigate("/")}
            className="text-primary hover:underline marathi-text"
          >
            मुख्य पानावर परत जा
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation 
        activeCategory={categoryId || "main"} 
        onCategoryChange={handleCategoryChange}
      />
      
      <main className="container mx-auto py-6 px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold marathi-text text-foreground mb-2">
            {category.name}
          </h1>
          <p className="text-muted-foreground marathi-text">
            {category.name} विभागातील सर्व ताज्या बातमी
          </p>
        </div>

        {news.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((article) => (
              <NewsCard
                key={article.id}
                id={article.id}
                title={article.title}
                excerpt={article.excerpt}
                image={article.image}
                category={article.category}
                timeAgo={article.timeAgo}
                readTime={article.readTime}
                views={article.views}
                onClick={handleNewsClick}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-xl marathi-text text-muted-foreground mb-4">
              या श्रेणीत सध्या कोणतीही बातमी नाही
            </h2>
            <button 
              onClick={() => navigate("/")}
              className="text-primary hover:underline marathi-text"
            >
              मुख्य पानावर परत जा
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default CategoryPage;