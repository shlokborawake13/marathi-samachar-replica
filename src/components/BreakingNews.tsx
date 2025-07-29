import { Badge } from "@/components/ui/badge";

const BreakingNews = () => {
  const breakingNews = [
    "मुंबई: अंधेरीत ६० वर्षीय व्यक्तीवर जीवघेणा हल्ला",
    "महाराष्ट्र विधानसभा निवडणुकीची तारीख जाहीर",
    "राज्यात पावसामुळे शेतकऱ्यांची नुकसान"
  ];

  return (
    <div className="bg-breaking-bg text-breaking-text py-2 breaking-news">
      <div className="container mx-auto">
        <div className="flex items-center space-x-4">
          <Badge className="bg-white text-breaking-bg font-bold px-3 py-1">
            ब्रेकिंग न्यूज
          </Badge>
          <div className="flex-1 overflow-hidden">
            <div className="animate-pulse">
              <span className="marathi-text font-medium">
                {breakingNews[0]}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreakingNews;