import { Brain, Activity, Globe, Settings, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const SystemHeader = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-primary animate-pulse-slow" />
              <div>
                <h1 className="text-xl font-bold gradient-text">CogniMesh AI</h1>
                <p className="text-xs text-muted-foreground">Real-Time Multimodal Inference</p>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-sm">
              <Activity className="h-4 w-4 text-success" />
              <span className="text-success">System Online</span>
            </div>
            <div className="text-sm text-muted-foreground">
              {currentTime.toLocaleTimeString()}
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="h-4 w-4 text-neon-blue" />
              <span className="text-sm">Global Edge Network</span>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm">
              <Settings className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SystemHeader;