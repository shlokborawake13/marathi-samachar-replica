import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import BreakingNews from "@/components/BreakingNews";
import NewsCard from "@/components/NewsCard";
import WeatherWidget from "@/components/WeatherWidget";
import TrendingSection from "@/components/TrendingSection";

// Import generated news images
import heroImage from "@/assets/news-hero.jpg";
import mumbaiNews from "@/assets/mumbai-news.jpg";
import politicalNews from "@/assets/political-news.jpg";
import entertainmentNews from "@/assets/entertainment-news.jpg";
import sportsNews from "@/assets/sports-news.jpg";

const Index = () => {
  const mainNews = [
    {
      title: "मुंबई अंधेरीत ६० वर्षीय व्यक्तीवर जीवघेणा हल्ला, तीव्र स्थिती",
      excerpt: "अंधेरी येथे नरेश भगचंदानी यांच्यावर हल्ला झाला असून त्यांची प्रकृती चिंताजनक आहे.",
      image: mumbaiNews,
      category: "मुंबई",
      timeAgo: "१ तास पूर्वी",
      isLarge: true
    },
    {
      title: "महाराष्ट्र विधानसभा निवडणुकीची तारीख लवकरच जाहीर",
      excerpt: "निवडणूक आयोगाने महाराष्ट्र विधानसभा निवडणुकीच्या तारखांबाबत महत्वाची घोषणा केली.",
      image: politicalNews,
      category: "राजकारण",
      timeAgo: "२ तास पूर्वी"
    },
    {
      title: "बॉलिवूड स्टारची नवीन चित्रपट प्रकल्पाची घोषणा",
      excerpt: "मराठी चित्रपट इंडस्ट्रीत नवीन भागीदारी आणि प्रकल्पांची घोषणा.",
      image: entertainmentNews,
      category: "मनोरंजन",
      timeAgo: "३ तास पूर्वी"
    },
    {
      title: "IPL 2025: मुंबई इंडियन्सच्या नवीन खेळाडूंची निवड",
      excerpt: "आगामी आयपीएल हंगामासाठी मुंबई इंडियन्स संघाने केलेली तयारी.",
      image: sportsNews,
      category: "क्रीडा",
      timeAgo: "४ तास पूर्वी"
    },
    {
      title: "Samsung Galaxy Watch8 मोफत मिळवण्याची संधी",
      excerpt: "सॅमसंग कंपनीकडून ग्राहकांसाठी विशेष ऑफर आणि १५०००चे कूपन्स.",
      image: mumbaiNews,
      category: "तंत्रज्ञान",
      timeAgo: "५ तास पूर्वी"
    },
    {
      title: "पावसाळी हंगामात लोणचेमध्ये बुरशी टाळण्याचे उपाय",
      excerpt: "आरोग्य तज्ञांनी दिलेले पावसाळ्यातील खाद्यपदार्थांची काळजी घेण्याचे सूत्र.",
      image: heroImage,
      category: "जीवनशैली",
      timeAgo: "६ तास पूर्वी"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      <BreakingNews />
      
      <main className="container mx-auto py-6 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured News Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {mainNews.map((news, index) => (
                <NewsCard
                  key={index}
                  title={news.title}
                  excerpt={news.excerpt}
                  image={news.image}
                  category={news.category}
                  timeAgo={news.timeAgo}
                  isLarge={index === 0}
                />
              ))}
            </div>

            {/* Latest News Section */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold marathi-text text-foreground mb-6 pb-2 border-b-2 border-primary">
                ताजी बातमी
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {mainNews.slice(0, 4).map((news, index) => (
                  <NewsCard
                    key={`latest-${index}`}
                    title={news.title}
                    excerpt={news.excerpt}
                    image={news.image}
                    category={news.category}
                    timeAgo={news.timeAgo}
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
            <div className="bg-muted rounded-lg p-6 text-center">
              <p className="text-muted-foreground marathi-text">जाहिरात</p>
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
                <li className="marathi-text hover:text-primary cursor-pointer">मुख्य बातमी</li>
                <li className="marathi-text hover:text-primary cursor-pointer">महाराष्ट्र</li>
                <li className="marathi-text hover:text-primary cursor-pointer">मुंबई</li>
                <li className="marathi-text hover:text-primary cursor-pointer">राजकारण</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold marathi-text mb-3">संपर्क</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-primary cursor-pointer">आमच्याबद्दल</li>
                <li className="hover:text-primary cursor-pointer">संपर्क करा</li>
                <li className="hover:text-primary cursor-pointer">गोपनीयता धोरण</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold marathi-text mb-3">फॉलो करा</h4>
              <div className="flex space-x-3">
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white text-xs cursor-pointer">
                  f
                </div>
                <div className="w-8 h-8 bg-blue-400 rounded flex items-center justify-center text-white text-xs cursor-pointer">
                  t
                </div>
                <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center text-white text-xs cursor-pointer">
                  y
                </div>
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