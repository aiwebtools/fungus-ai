
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const ConsentPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted
    const hasAccepted = localStorage.getItem("funguswhisperer-consent");
    
    if (!hasAccepted) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("funguswhisperer-consent", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="glass-effect max-w-md mx-4 p-6 rounded-xl animate-scale-up">
        <h3 className="text-xl font-semibold mb-2">Important Disclaimer</h3>
        <p className="text-sm text-white/90 mb-4">
          Fungus Whisperer GPT provides information for educational purposes only. 
          Never consume wild mushrooms based solely on AI identification. 
          Always consult multiple expert sources and field guides before foraging.
          By continuing, you acknowledge and accept these risks.
        </p>
        <div className="flex justify-center">
          <Button 
            onClick={handleAccept}
            className="bg-gradient-to-r from-fungus-purple to-fungus-blue hover:opacity-90 transition-opacity"
          >
            I Understand and Agree
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConsentPopup;
