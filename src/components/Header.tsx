import { Search, Bell, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="bg-background border-b sticky top-0 z-50">
      {/* Top Header with Languages and Social */}
      <div className="bg-muted/50 py-2">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <span className="text-muted-foreground">EDITION IND</span>
            <div className="flex space-x-2">
              <span className="text-primary font-medium cursor-pointer">हिंदी</span>
              <span className="text-muted-foreground cursor-pointer">English</span>
              <span className="text-primary font-medium">मराठी</span>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Bell className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">लॉगिन करे</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Button variant="ghost" size="sm" className="mr-4 md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
            <div className="text-center">
              <h1 className="text-4xl font-bold text-primary marathi-text">महाराष्ट्र टाइम्स</h1>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">BY THE TIMES OF INDIA</p>
            </div>
          </div>

          {/* Search */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input 
                placeholder="शोधा..." 
                className="pl-10 w-80 marathi-text"
              />
            </div>
            <Button size="sm" className="bg-primary hover:bg-primary-light">
              शहर
            </Button>
            <Search className="h-5 w-5 text-muted-foreground md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;