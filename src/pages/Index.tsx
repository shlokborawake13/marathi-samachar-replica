import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import BreakingNews from "@/components/BreakingNews";
import NewsCard from "@/components/NewsCard";
import WeatherWidget from "@/components/WeatherWidget";
import TrendingSection from "@/components/TrendingSection";
import { mockNewsData } from "@/lib/newsData";
import { useToast } from "@/hooks/use-toast";

// Import generated news images
import heroImage from "@/assets/news-hero.jpg";
import mumbaiNews from "@/assets/mumbai-news.jpg";
import politicalNews from "@/assets/political-news.jpg";
import entertainmentNews from "@/assets/entertainment-news.jpg";
import sportsNews from "@/assets/sports-news.jpg";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("main");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const newsWithImages = mockNewsData.map((news, index) => ({
    ...news,
    image: [mumbaiNews, politicalNews, entertainmentNews, sportsNews, heroImage][index % 5]
  }));

  const handleNewsClick = (id: string) => {
    navigate(`/article/${id}`);
  };

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    if (categoryId !== "main") {
      navigate(`/category/${categoryId}`);
    }
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    toast({
      title: "शोध परिणाम",
      description: `"${query}" साठी ${newsWithImages.length} परिणाम सापडले`,
    });
  };

  const filteredNews = searchQuery 
    ? newsWithImages.filter(news => 
        news.title.includes(searchQuery) || 
        news.excerpt.includes(searchQuery)
      )
    : newsWithImages;

  return (
    <div className="min-h-screen bg-background">
      <Header onSearch={handleSearch} />
      <Navigation 
        activeCategory={activeCategory} 
        onCategoryChange={handleCategoryChange}
      />
      <BreakingNews />
      
      <main className="container mx-auto py-6 px-4">
        {searchQuery && (
          <div className="mb-6">
            <h2 className="text-2xl font-bold marathi-text text-foreground mb-2">
              शोध परिणाम: "{searchQuery}"
            </h2>
            <p className="text-muted-foreground marathi-text">
              {filteredNews.length} परिणाम सापडले
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured News Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {filteredNews.slice(0, 6).map((news, index) => (
                <NewsCard
                  key={news.id}
                  id={news.id}
                  title={news.title}
                  excerpt={news.excerpt}
                  image={news.image}
                  category={news.category}
                  timeAgo={news.timeAgo}
                  readTime={news.readTime}
                  views={news.views}
                  isLarge={index === 0}
                  onClick={handleNewsClick}
                />
              ))}
            </div>

            {/* Latest News Section */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold marathi-text text-foreground mb-6 pb-2 border-b-2 border-primary">
                ताजी बातमी
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredNews.slice(6, 10).map((news) => (
                  <NewsCard
                    key={`latest-${news.id}`}
                    id={news.id}
                    title={news.title}
                    excerpt={news.excerpt}
                    image={news.image}
                    category={news.category}
                    timeAgo={news.timeAgo}
                    readTime={news.readTime}
                    views={news.views}
                    onClick={handleNewsClick}
                  />
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <WeatherWidget />
            <TrendingSection />
            
            {/* Advertisement Placeholder */}
            <div className="bg-muted rounded-lg p-6 text-center cursor-pointer hover:bg-muted/80 transition-colors">
              <p className="text-muted-foreground marathi-text">जाहिरात</p>
              <p className="text-xs text-muted-foreground mt-2">येथे जाहिरात दाखवली जाईल</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-muted border-t mt-12">
        <div className="container mx-auto py-8 px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <h3 className="font-bold text-lg marathi-text mb-4">महाराष्ट्र टाइम्स</h3>
              <p className="text-sm text-muted-foreground marathi-text">
                महाराष्ट्राची सर्वात विश्वासू बातमी संकेतस्थळ
              </p>
            </div>
            <div>
              <h4 className="font-semibold marathi-text mb-3">श्रेणी</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li 
                  className="marathi-text hover:text-primary cursor-pointer transition-colors"
                  onClick={() => handleCategoryChange("main")}
                >
                  मुख्य बातमी
                </li>
                <li 
                  className="marathi-text hover:text-primary cursor-pointer transition-colors"
                  onClick={() => handleCategoryChange("maharashtra")}
                >
                  महाराष्ट्र
                </li>
                <li 
                  className="marathi-text hover:text-primary cursor-pointer transition-colors"
                  onClick={() => handleCategoryChange("mumbai")}
                >
                  मुंबई
                </li>
                <li 
                  className="marathi-text hover:text-primary cursor-pointer transition-colors"
                  onClick={() => handleCategoryChange("politics")}
                >
                  राजकारण
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold marathi-text mb-3">संपर्क</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li 
                  className="hover:text-primary cursor-pointer transition-colors"
                  onClick={() => toast({ title: "पेज", description: "आमच्याबद्दल पेज उघडत आहे..." })}
                >
                  आमच्याबद्दल
                </li>
                <li 
                  className="hover:text-primary cursor-pointer transition-colors"
                  onClick={() => toast({ title: "संपर्क", description: "संपर्क फॉर्म उघडत आहे..." })}
                >
                  संपर्क करा
                </li>
                <li 
                  className="hover:text-primary cursor-pointer transition-colors"
                  onClick={() => toast({ title: "धोरण", description: "गोपनीयता धोरण पेज उघडत आहे..." })}
                >
                  गोपनीयता धोरण
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold marathi-text mb-3">फॉलो करा</h4>
              <div className="flex space-x-3">
                <button 
                  className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white text-xs cursor-pointer hover:bg-blue-700 transition-colors"
                  onClick={() => toast({ title: "Facebook", description: "Facebook पेज उघडत आहे..." })}
                >
                  f
                </button>
                <button 
                  className="w-8 h-8 bg-blue-400 rounded flex items-center justify-center text-white text-xs cursor-pointer hover:bg-blue-500 transition-colors"
                  onClick={() => toast({ title: "Twitter", description: "Twitter पेज उघडत आहे..." })}
                >
                  t
                </button>
                <button 
                  className="w-8 h-8 bg-red-600 rounded flex items-center justify-center text-white text-xs cursor-pointer hover:bg-red-700 transition-colors"
                  onClick={() => toast({ title: "YouTube", description: "YouTube चॅनेल उघडत आहे..." })}
                >
                  y
                </button>
              </div>
            </div>
          </div>
          <div className="border-t mt-6 pt-6 text-center text-sm text-muted-foreground">
            <p>© 2025 महाराष्ट्र टाइम्स. सर्व हक्क राखीव.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;