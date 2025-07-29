import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Clock, Eye, Share2, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { getNewsById } from "@/lib/newsData";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";

const ArticlePage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const article = id ? getNewsById(id) : null;

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto py-12 px-4 text-center">
          <h1 className="text-2xl font-bold marathi-text mb-4">लेख सापडला नाही</h1>
          <Button onClick={() => navigate("/")} className="marathi-text">
            मुख्य पानावर परत जा
          </Button>
        </div>
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.excerpt,
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

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation 
        activeCategory="main" 
        onCategoryChange={(categoryId) => navigate(`/category/${categoryId}`)}
      />
      
      <main className="container mx-auto py-6 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Button 
            variant="ghost" 
            onClick={handleBack}
            className="mb-6 marathi-text"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            परत जा
          </Button>

          {/* Article Header */}
          <div className="mb-6">
            <Badge className="mb-4 bg-category-bg text-category-text">
              {article.category}
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold marathi-text text-foreground mb-4 leading-tight">
              {article.title}
            </h1>
            <p className="text-xl text-muted-foreground marathi-text mb-6 leading-relaxed">
              {article.excerpt}
            </p>
            
            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground border-b pb-4">
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>{article.timeAgo}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{article.readTime} मिनिट वाचन</span>
              </div>
              <div className="flex items-center space-x-1">
                <Eye className="w-4 h-4" />
                <span>{article.views} वाचले</span>
              </div>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={handleShare}
                className="ml-auto"
              >
                <Share2 className="w-4 h-4 mr-1" />
                शेअर करा
              </Button>
            </div>
          </div>

          {/* Article Image */}
          <div className="mb-8">
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Article Content */}
          <Card>
            <CardContent className="p-6 md:p-8">
              <div className="prose prose-lg max-w-none marathi-text text-foreground">
                <p className="text-lg leading-relaxed mb-6">
                  {article.content}
                </p>
                
                {/* Additional content paragraphs */}
                <p className="text-lg leading-relaxed mb-6">
                  या प्रकरणातील आणखी तपशीलांबाबत पोलिस तपास सुरू आहे. स्थानिक लोकांमध्ये या घटनेमुळे संताप व्यक्त केला जात आहे. पीडितांच्या कुटुंबीयांना न्याय मिळावा यासाठी त्वरित कारवाई करण्याची मागणी करण्यात येत आहे.
                </p>
                
                <p className="text-lg leading-relaxed mb-6">
                  या संदर्भात अधिक अपडेट्स मिळताच आम्ही तुम्हाला कळवू. महाराष्ट्र टाइम्स सर्व ताज्या बातम्यांसाठी आमच्यासोबत राहा.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Author Info */}
          <Card className="mt-6">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  {article.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold marathi-text">{article.author}</h4>
                  <p className="text-sm text-muted-foreground">वृत्तसंपादक</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Related Articles */}
          <Card className="mt-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold marathi-text mb-4">संबंधित बातमी</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {/* Mock related articles */}
                <div className="flex space-x-3 cursor-pointer hover:bg-muted/50 p-3 rounded-lg transition-colors">
                  <img 
                    src="/api/placeholder/100/100" 
                    alt="Related news"
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <h4 className="font-medium marathi-text text-sm line-clamp-2">
                      संबंधित बातमी शीर्षक येथे येईल
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1">२ तास पूर्वी</p>
                  </div>
                </div>
                <div className="flex space-x-3 cursor-pointer hover:bg-muted/50 p-3 rounded-lg transition-colors">
                  <img 
                    src="/api/placeholder/100/100" 
                    alt="Related news"
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <h4 className="font-medium marathi-text text-sm line-clamp-2">
                      आणखी एक संबंधित बातमी
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1">५ तास पूर्वी</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default ArticlePage;