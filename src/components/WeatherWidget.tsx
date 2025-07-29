import { Card, CardContent } from "@/components/ui/card";
import { Cloud, Sun } from "lucide-react";

const WeatherWidget = () => {
  return (
    <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <Sun className="h-8 w-8" />
              <span className="text-3xl font-bold">28°C</span>
            </div>
            <p className="text-sm opacity-90 marathi-text">मुंबई</p>
            <p className="text-xs opacity-75">आंशिक ढगाळ</p>
          </div>
          <div className="text-right">
            <p className="text-xs opacity-75">आजचे तापमान</p>
            <p className="text-sm">H 29° L 27°</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherWidget;