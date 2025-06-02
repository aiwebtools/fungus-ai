
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
        <h3 className="text-xl font-semibold mb-2">🍄 Critical Safety Warning</h3>
        <p className="text-sm text-white/90 mb-4">
          Fungus Whisperer GPT is an experimental AI tool for educational purposes only. 
          <strong className="text-red-300"> NEVER consume wild mushrooms based solely on AI identification.</strong>
          {" "}This tool can be wrong and misidentification can cause severe illness or death.
          Always consult multiple expert sources, field guides, and professional mycologists before foraging.
          By continuing, you acknowledge these risks and agree this is experimental technology.
        </p>
        <div className="flex justify-center">
          <Button 
            onClick={handleAccept}
            className="bg-gradient-to-r from-fungus-purple to-fungus-blue hover:opacity-90 transition-opacity"
          >
            I Understand the Risks and Agree
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConsentPopup;
