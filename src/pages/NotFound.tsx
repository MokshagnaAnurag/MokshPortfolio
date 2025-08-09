import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Glitchy404 } from "@/components/ui/glitchy-404-1";
import { useTheme } from "@/components/ThemeProvider";

const NotFound = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="text-center space-y-6 p-6">
        <div className="mb-8">
          <Glitchy404 
            width={600} 
            height={150} 
            color={theme === "dark" ? "#fff" : "#000"} 
          />
        </div>
        <h1 className="text-2xl md:text-3xl font-bold">Page Not Found</h1>
        <p className="text-muted-foreground max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved to another URL.
        </p>
        <div className="pt-4">
          <Button onClick={() => navigate("/")} className="inline-flex items-center">
            <ArrowLeft size={16} className="mr-2" /> Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
