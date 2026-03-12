
import React, { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const AIWEBTOOLS_URL = "https://aiwebtools.lovable.app/?via=aiwebtools";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => setIsMenuOpen(prev => !prev), []);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-navbar py-2 sm:py-3" : "py-3 sm:py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-3 sm:px-4 flex justify-between items-center">
        <div className="flex items-center min-w-0">
          <a
            href="https://chatgpt.com/g/g-67d872788c488191aab35cf0b0ee7152-fungus-whisperer-gpt"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center min-w-0"
          >
            <div className="mr-2 sm:mr-3 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-fungus-purple/30 flex items-center justify-center overflow-hidden shrink-0">
              <span className="text-xl sm:text-2xl">🍄</span>
            </div>
            <div className="min-w-0">
              <h1 className="text-base sm:text-xl font-bold text-gradient truncate">
                Fungus Whisperer GPT
              </h1>
              <p className="text-[10px] sm:text-xs text-white/60 truncate">
                Presented by{" "}
                <a
                  href={AIWEBTOOLS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-fungus-cyan transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  AiWebTools.Ai
                </a>
              </p>
            </div>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <Button
            variant="ghost"
            className="text-white/80 hover:text-white hover:bg-white/10"
            onClick={() => scrollToSection("faq")}
          >
            FAQ
          </Button>
          <Button
            variant="ghost"
            className="text-white/80 hover:text-white hover:bg-white/10"
            onClick={() => scrollToSection("disclaimer")}
          >
            Disclaimer
          </Button>
          <a
            href={AIWEBTOOLS_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="ghost"
              className="text-white/80 hover:text-white hover:bg-white/10"
            >
              More AI Tools
            </Button>
          </a>
          <a
            href="https://chatgpt.com/g/g-67d872788c488191aab35cf0b0ee7152-fungus-whisperer-gpt"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-gradient-to-r from-fungus-purple to-fungus-blue hover:opacity-90 transition-opacity ml-2">
              Try Now
            </Button>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden shrink-0 touch-manipulation"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Navigation - always rendered, toggled with classes for instant response */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 transition-all duration-200 ease-out overflow-hidden ${
          isMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="glass-effect py-4 px-4 sm:px-6 space-y-2">
          <Button
            variant="ghost"
            className="text-white justify-start bg-fungus-dark/80 hover:text-white hover:bg-fungus-dark w-full touch-manipulation"
            onClick={() => scrollToSection("faq")}
          >
            FAQ
          </Button>
          <Button
            variant="ghost"
            className="text-white justify-start bg-fungus-dark/80 hover:text-white hover:bg-fungus-dark w-full touch-manipulation"
            onClick={() => scrollToSection("disclaimer")}
          >
            Disclaimer
          </Button>
          <a
            href={AIWEBTOOLS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full"
          >
            <Button
              variant="ghost"
              className="text-white justify-start bg-fungus-dark/80 hover:text-white hover:bg-fungus-dark w-full touch-manipulation"
            >
              More AI Tools
            </Button>
          </a>
          <a
            href="https://chatgpt.com/g/g-67d872788c488191aab35cf0b0ee7152-fungus-whisperer-gpt"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full"
          >
            <Button className="bg-gradient-to-r from-fungus-purple to-fungus-blue hover:opacity-90 transition-opacity w-full touch-manipulation">
              Try Now
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
