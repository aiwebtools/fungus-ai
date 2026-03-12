
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16 sm:pt-20 pb-16 sm:pb-0">
      {/* Divine Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-fungus-dark via-pink-900/20 to-blue-900/30 -z-10"></div>
      
      {/* Multiple divine glow effects */}
      <div className="absolute top-1/4 left-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-gradient-to-r from-purple-500/40 via-pink-500/30 to-blue-500/40 rounded-full filter blur-[80px] sm:blur-[120px] animate-pulse-glow -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-gradient-to-r from-blue-500/30 via-cyan-500/40 to-purple-500/30 rounded-full filter blur-[80px] sm:blur-[120px] animate-pulse-glow -z-10" style={{ animationDelay: "1s" }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] bg-gradient-to-r from-yellow-400/10 via-pink-400/15 to-purple-400/10 rounded-full filter blur-[120px] sm:blur-[200px] animate-rotate-slow -z-10"></div>
      
      {/* Floating divine particles - hidden on very small screens */}
      <div className="absolute inset-0 opacity-40 -z-10 hidden sm:block">
        <div className="absolute top-20 left-20 w-3 h-3 bg-purple-400 rounded-full animate-float"></div>
        <div className="absolute top-40 right-32 w-2 h-2 bg-pink-400 rounded-full animate-float" style={{ animationDelay: "0.5s" }}></div>
        <div className="absolute bottom-40 left-1/3 w-2 h-2 bg-blue-400 rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-cyan-400 rounded-full animate-float" style={{ animationDelay: "1.5s" }}></div>
        <div className="absolute bottom-32 right-20 w-2 h-2 bg-yellow-400 rounded-full animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 z-10">
        <div className={`max-w-2xl w-full transition-all duration-1000 ${isLoaded ? 'opacity-100 animate-scale-up' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block rounded-full bg-gradient-to-r from-white/20 via-purple-500/20 to-pink-500/20 backdrop-blur-md border border-purple-400/30 px-3 sm:px-4 py-1 sm:py-1.5 mb-4 sm:mb-6 animate-shimmer">
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-cyan-400 animate-pulse mr-2"></div>
              <span className="text-xs sm:text-sm font-medium bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">Free AI Tool by AIWEBTOOLS.AI</span>
            </div>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-300 via-pink-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent animate-shimmer">Fungus Whisperer GPT</span>
            <br />
            <span className="bg-gradient-to-r from-white via-purple-100 to-pink-100 bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl lg:text-5xl">AI Mushroom Identification Tool</span>
          </h1>
          
          <p className="text-base sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-xl leading-relaxed">
            Advanced AI-powered mushroom cultivation guide, safe foraging advisor, and 
            culinary companion. Free educational tool for mycology research and learning.
          </p>

          {/* SEO-optimized feature highlights */}
          <div className="mb-6 sm:mb-8">
            <ul className="space-y-2 text-white/80 text-sm sm:text-base">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-fungus-green rounded-full mr-3 shrink-0"></span>
                <span>Free AI mushroom identification and cultivation guidance</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-fungus-blue rounded-full mr-3 shrink-0"></span>
                <span>Educational foraging safety and research tool</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-fungus-purple rounded-full mr-3 shrink-0"></span>
                <span>Powered by AIWEBTOOLS.AI - Leading AI web tools provider</span>
              </li>
            </ul>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 mb-8 sm:mb-12">
            <a
              href="https://chatgpt.com/g/g-67d872788c488191aab35cf0b0ee7152-fungus-whisperer-gpt"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Try Fungus Whisperer GPT - Free AI Mushroom Tool"
              className="w-full sm:w-auto"
            >
              <Button className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-500 hover:via-pink-500 hover:to-blue-500 text-white px-6 sm:px-8 py-5 sm:py-6 rounded-lg transition-all duration-300 transform hover:scale-105 text-base sm:text-lg h-auto shadow-2xl hover:shadow-purple-500/25 w-full sm:w-auto">
                Try Free AI Tool <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <Button 
              variant="outline" 
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-purple-400/40 text-white hover:bg-purple-500/20 px-6 sm:px-8 py-5 sm:py-6 rounded-lg h-auto text-base sm:text-lg backdrop-blur-sm transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
              aria-label="Learn more about AI web tools features"
            >
              Explore Features <Sparkles className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* YouTube Video Embed with divine styling */}
          <div className="w-full max-w-2xl">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border-2 border-purple-400/30" style={{ paddingBottom: '56.25%' }}>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 rounded-2xl"></div>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-2xl z-10"
                src="https://www.youtube.com/embed/qzndRzBtrEU?autoplay=1&mute=0&quality=hd1080&rel=0&showinfo=0"
                title="Fungus Whisperer GPT Demo - Free AI Mushroom Identification Tool by AIWEBTOOLS.AI"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        
        <div className={`relative transition-all duration-1000 delay-300 hidden lg:block ${isLoaded ? 'opacity-100 animate-scale-up' : 'opacity-0 translate-y-10'}`}>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/40 via-pink-500/30 to-blue-500/40 rounded-full filter blur-[40px] animate-pulse-glow"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-blue-400/30 to-purple-400/20 rounded-full filter blur-[60px] animate-pulse-glow" style={{ animationDelay: "1s" }}></div>
            <div className="relative z-10 w-72 h-72 xl:w-96 xl:h-96 rounded-full overflow-hidden">
              <div className="w-full h-full flex items-center justify-center animate-float bg-gradient-to-br from-black/30 via-purple-900/20 to-pink-900/30 backdrop-blur-md rounded-full border-2 border-purple-400/40 shadow-2xl">
                <span className="text-8xl xl:text-9xl animate-pulse-glow" role="img" aria-label="Mushroom">🍄</span>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-gradient-to-r from-white/20 via-purple-500/20 to-pink-500/20 backdrop-blur-md px-5 py-2 rounded-full text-sm border border-purple-400/30 shadow-xl whitespace-nowrap">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-cyan-400 animate-pulse"></div>
              <span className="bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent font-medium">AI-Powered Technology</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center hidden sm:flex">
        <span className="text-white/60 text-sm mb-2 bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">Explore AI Tools</span>
        <div className="scroll-indicator"></div>
      </div>
    </section>
  );
};

export default HeroSection;
