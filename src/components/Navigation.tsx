import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Navigation = () => {
  const [activeCategory, setActiveCategory] = useState("मुख्य");

  const categories = [
    { name: "मुख्य", hasLive: true },
    { name: "महाराष्ट्र", hasLive: false },
    { name: "मुंबई", hasLive: false },
    { name: "क्राइम", hasLive: false },
    { name: "आर्थ", hasLive: false },
    { name: "विदेश", hasLive: false },
    { name: "लाइफस्टाइल", hasLive: false },
    { name: "ऑटो", hasLive: false },
    { name: "टेक", hasLive: false },
    { name: "गॅजेट", hasLive: false },
    { name: "करिअर", hasLive: false },
    { name: "Viral", hasLive: false },
    { name: "More", hasLive: false }
  ];

  return (
    <nav className="bg-nav-bg border-b shadow-sm sticky top-[120px] z-40">
      <div className="container mx-auto">
        <div className="flex items-center space-x-6 py-3 overflow-x-auto scrollbar-hide">
          {categories.map((category) => (
            <Button
              key={category.name}
              variant="ghost"
              className={`text-nav-text hover:bg-nav-hover whitespace-nowrap flex items-center space-x-2 marathi-text font-medium ${
                activeCategory === category.name ? "bg-nav-hover" : ""
              }`}
              onClick={() => setActiveCategory(category.name)}
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