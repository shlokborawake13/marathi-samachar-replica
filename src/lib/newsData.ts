// Mock news data
export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  timeAgo: string;
  author: string;
  readTime: number;
  views: number;
  isBreaking?: boolean;
}

export interface NewsCategory {
  id: string;
  name: string;
  englishName: string;
  hasLive?: boolean;
}

export const newsCategories: NewsCategory[] = [
  { id: "main", name: "मुख्य", englishName: "main", hasLive: true },
  { id: "maharashtra", name: "महाराष्ट्र", englishName: "maharashtra" },
  { id: "mumbai", name: "मुंबई", englishName: "mumbai" },
  { id: "crime", name: "क्राइम", englishName: "crime" },
  { id: "politics", name: "राजकारण", englishName: "politics" },
  { id: "economics", name: "आर्थिक", englishName: "economics" },
  { id: "international", name: "आंतरराष्ट्रीय", englishName: "international" },
  { id: "entertainment", name: "मनोरंजन", englishName: "entertainment" },
  { id: "sports", name: "क्रीडा", englishName: "sports" },
  { id: "lifestyle", name: "जीवनशैली", englishName: "lifestyle" },
  { id: "technology", name: "तंत्रज्ञान", englishName: "technology" },
  { id: "viral", name: "Viral", englishName: "viral" }
];

export const mockNewsData: NewsArticle[] = [
  {
    id: "1",
    title: "मुंबई अंधेरीत ६० वर्षीय व्यक्तीवर जीवघेणा हल्ला, तीव्र स्थिती",
    excerpt: "अंधेरी येथे नरेश भगचंदानी यांच्यावर हल्ला झाला असून त्यांची प्रकृती चिंताजनक आहे. पोलिसांनी तपास सुरू केला आहे.",
    content: "मुंबईच्या अंधेरी भागात आज सकाळी ६० वर्षीय नरेश भगचंदानी यांच्यावर अज्ञात व्यक्तींनी जीवघेणा हल्ला केला. हल्ल्यात ते गंभीर जखमी झाले असून त्यांना तातडीने कूपर हॉस्पिटलमध्ये दाखल करण्यात आले आहे. डॉक्टरांनी त्यांची प्रकृती गंभीर असल्याचे सांगितले आहे. अंधेरी पोलिस ठाण्यात या प्रकरणी गुन्हा दाखल करून तपास सुरू केला आहे. CCTV फुटेजच्या आधारे आरोपींना शोधण्यात येत आहे.",
    image: "/api/placeholder/800/600",
    category: "क्राइम",
    timeAgo: "१ तास पूर्वी",
    author: "प्रवीण शर्मा",
    readTime: 3,
    views: 1250,
    isBreaking: true
  },
  {
    id: "2", 
    title: "महाराष्ट्र विधानसभा निवडणुकीची तारीख लवकरच जाहीर",
    excerpt: "निवडणूक आयोगाने महाराष्ट्र विधानसभा निवडणुकीच्या तारखांबाबत महत्वाची घोषणा केली आहे.",
    content: "भारतीय निवडणूक आयोगाने महाराष्ट्र विधानसभा निवडणुकीची तारीख लवकरच जाहीर करण्याची घोषणा केली आहे. आयोगाच्या अधिकाऱ्यांनी सांगितले की, सर्व तयारी पूर्ण झाल्यानंतर निवडणुकीच्या तारखा जाहीर केल्या जातील. राज्यातील सर्व राजकीय पक्षांनी निवडणुकीसाठी तयारी सुरू केली आहे.",
    image: "/api/placeholder/800/600",
    category: "राजकारण", 
    timeAgo: "२ तास पूर्वी",
    author: "अनिता देशमुख",
    readTime: 4,
    views: 890
  },
  {
    id: "3",
    title: "बॉलिवूड स्टारची नवीन चित्रपट प्रकल्पाची घोषणा",
    excerpt: "मराठी चित्रपट इंडस्ट्रीत नवीन भागीदारी आणि प्रकल्पांची घोषणा करण्यात आली आहे.",
    content: "मराठी चित्रपट इंडस्ट्रीमध्ये एक मोठी घोषणा करण्यात आली आहे. प्रसिद्ध निर्माता आणि दिग्दर्शक यांच्यात नवीन भागीदारी झाली असून अनेक नवीन प्रकल्प हाती घेण्यात येत आहेत. या चित्रपटांमध्ये नामवंत कलाकार भूमिका साकारणार आहेत.",
    image: "/api/placeholder/800/600",
    category: "मनोरंजन",
    timeAgo: "३ तास पूर्वी", 
    author: "सुनिता पाटील",
    readTime: 2,
    views: 567
  },
  {
    id: "4",
    title: "IPL 2025: मुंबई इंडियन्सच्या नवीन खेळाडूंची निवड",
    excerpt: "आगामी आयपीएल हंगामासाठी मुंबई इंडियन्स संघाने केलेली तयारी आणि नवीन रणनीती.",
    content: "IPL 2025 साठी मुंबई इंडियन्स संघाने आपली तयारी सुरू केली आहे. संघाने काही नवीन खेळाडूंची निवड केली असून त्यांच्यावर मोठी अपेक्षा आहे. कॅप्टन रोहित शर्माने सांगितले की, या वर्षी संघ चॅम्पियनशिप जिंकण्यासाठी पूर्ण तयारी करत आहे.",
    image: "/api/placeholder/800/600",
    category: "क्रीडा",
    timeAgo: "४ तास पूर्वी",
    author: "राहुल जाधव",
    readTime: 3,
    views: 1100
  },
  {
    id: "5",
    title: "Samsung Galaxy Watch8 मोफत मिळवण्याची संधी",
    excerpt: "सॅमसंग कंपनीकडून ग्राहकांसाठी विशेष ऑफर आणि १५०००चे कूपन्स देण्यात येत आहेत.",
    content: "Samsung ने आपल्या ग्राहकांसाठी एक विशेष ऑफर जाहीर केली आहे. Galaxy Watch8 मोफत मिळवण्यासाठी ग्राहकांना फक्त काही पावले चालावी लागतील. कंपनीने १५००० रुपयांचे कूपन्स देखील देण्याची घोषणा केली आहे.",
    image: "/api/placeholder/800/600", 
    category: "तंत्रज्ञान",
    timeAgo: "५ तास पूर्वी",
    author: "अमित गुप्ता",
    readTime: 2,
    views: 780
  }
];

export const getNewsByCategory = (categoryId: string): NewsArticle[] => {
  if (categoryId === "main") return mockNewsData;
  return mockNewsData.filter(news => {
    const category = newsCategories.find(cat => cat.id === categoryId);
    return category && news.category === category.name;
  });
};

export const getNewsById = (id: string): NewsArticle | undefined => {
  return mockNewsData.find(news => news.id === id);
};