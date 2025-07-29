import { useState } from "react";
import { Search, Bell, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

interface HeaderProps {
  onSearch?: (query: string) => void;
  onMenuToggle?: (isOpen: boolean) => void;
}

const Header = ({ onSearch, onMenuToggle }: HeaderProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { toast } = useToast();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch?.(searchQuery);
      toast({
        title: "शोध सुरू केला",
        description: `"${searchQuery}" साठी परिणाम शोधत आहे...`,
      });
    }
  };

  const handleLanguageChange = (lang: string) => {
    toast({
      title: "भाषा बदलली",
      description: `${lang} भाषेत बदलत आहे...`,
    });
  };

  const handleLogin = () => {
    toast({
      title: "लॉगिन",
      description: "लॉगिन पेज उघडत आहे...",
    });
  };

  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);
    onMenuToggle?.(newState);
  };

  return (
    <header className="bg-background border-b sticky top-0 z-50 shadow-sm">
      {/* Top Header with Languages and Social */}
      <div className="bg-muted/50 py-2">
        <div className="container mx-auto flex justify-between items-center text-sm px-4">
          <div className="flex items-center space-x-4">
            <span className="text-muted-foreground">EDITION IND</span>
            <div className="flex space-x-2">
              <button 
                onClick={() => handleLanguageChange("हिंदी")}
                className="text-primary font-medium cursor-pointer hover:text-primary/80 transition-colors"
              >
                हिंदी
              </button>
              <button 
                onClick={() => handleLanguageChange("English")}
                className="text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
              >
                English
              </button>
              <span className="text-primary font-medium">मराठी</span>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <button className="hover:text-primary transition-colors">
              <Bell className="h-4 w-4 text-muted-foreground" />
            </button>
            <button 
              onClick={handleLogin}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              लॉगिन करे
            </button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto py-4 px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Button 
              variant="ghost" 
              size="sm" 
              className="mr-4 md:hidden"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
            <div className="text-center">
              <h1 className="text-4xl font-bold text-primary marathi-text cursor-pointer hover:text-primary/80 transition-colors">
                महाराष्ट्र टाइम्स
              </h1>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">BY THE TIMES OF INDIA</p>
            </div>
          </div>

          {/* Search */}
          <div className="hidden md:flex items-center space-x-4">
            <form onSubmit={handleSearch} className="relative">
              <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input 
                placeholder="शोधा..." 
                className="pl-10 w-80 marathi-text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
            <Button 
              size="sm" 
              className="bg-primary hover:bg-primary-light transition-colors"
              onClick={() => toast({ title: "शहर निवडा", description: "शहर निवड मेनू उघडत आहे..." })}
            >
              शहर
            </Button>
          </div>
          
          <Button 
            variant="ghost" 
            size="sm" 
            className="md:hidden"
            onClick={() => toast({ title: "शोध", description: "मोबाइल शोध उघडत आहे..." })}
          >
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;