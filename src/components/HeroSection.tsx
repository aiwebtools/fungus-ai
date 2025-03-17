
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 bg-gradient-mushroom -z-10"></div>
      <div 
        className="absolute top-1/4 left-1/4 w-80 h-80 bg-fungus-purple/30 rounded-full filter blur-[100px] animate-pulse-glow -z-10"
        style={{ "--glow-color": "rgba(139, 92, 246, 0.3)" } as React.CSSProperties}
      ></div>
      <div 
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-fungus-blue/20 rounded-full filter blur-[100px] animate-pulse-glow animation-delay-1000 -z-10"
        style={{ "--glow-color": "rgba(59, 130, 246, 0.2)" } as React.CSSProperties}
      ></div>

      <div className="container mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12 z-10">
        <div className={`max-w-2xl transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 mb-6">
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-fungus-green animate-pulse mr-2"></div>
              <span className="text-sm font-medium">Now Available on ChatGPT</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-gradient">Fungus Whisperer GPT</span>
            <br />
            <span>Your Expert Mushroom Guide</span>
          </h1>
          
          <p className="text-xl text-white/80 mb-8 max-w-xl">
            Master the art of mushroom cultivation, learn safe foraging practices, and discover 
            creative culinary applications with scientifically accurate guidance.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a
              href="https://chatgpt.com/g/g-67d872788c488191aab35cf0b0ee7152-fungus-whisperer-gpt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-gradient-to-r from-fungus-purple to-fungus-blue text-white px-8 py-6 rounded-lg hover:opacity-90 transition-opacity text-lg h-auto">
                Try for Free <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <Button 
              variant="outline" 
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-white/20 text-white hover:bg-white/10 px-8 py-6 rounded-lg h-auto text-lg"
            >
              Learn More <Sparkles className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
        
        <div className={`relative transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-radial from-fungus-purple/30 to-transparent rounded-full filter blur-[30px] animate-pulse-glow"></div>
            <div className="relative z-10 w-72 h-72 sm:w-96 sm:h-96 rounded-full overflow-hidden">
              <div className="w-full h-full flex items-center justify-center animate-float bg-black/20 backdrop-blur-sm rounded-full border border-white/10">
                <span className="text-9xl">🍄</span>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass-effect px-5 py-2 rounded-full text-sm backdrop-blur-md">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-fungus-green"></div>
              <span>Powered by AI</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-white/50 text-sm mb-2">Scroll to explore</span>
        <div className="scroll-indicator"></div>
      </div>
    </section>
  );
};

export default HeroSection;
