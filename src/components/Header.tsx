
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-navbar py-3" : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a
            href="https://chatgpt.com/g/g-67d872788c488191aab35cf0b0ee7152-fungus-whisperer-gpt"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <div className="mr-3 w-10 h-10 rounded-full bg-fungus-purple/30 flex items-center justify-center overflow-hidden">
              <span className="text-2xl">🍄</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gradient">
                Fungus Whisperer GPT
              </h1>
              <p className="text-xs text-white/60">
                Presented by{" "}
                <a
                  href="https://www.aiwebtools.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-fungus-cyan transition-colors"
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
            href="https://www.aiwebtools.ai"
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
          className="md:hidden"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden glass-effect absolute top-full left-0 right-0 animate-slide-down">
          <div className="flex flex-col py-4 px-6 space-y-3">
            <Button
              variant="ghost"
              className="text-white justify-start bg-fungus-dark/80 hover:text-white hover:bg-fungus-dark"
              onClick={() => scrollToSection("faq")}
            >
              FAQ
            </Button>
            <Button
              variant="ghost"
              className="text-white justify-start bg-fungus-dark/80 hover:text-white hover:bg-fungus-dark"
              onClick={() => scrollToSection("disclaimer")}
            >
              Disclaimer
            </Button>
            <a
              href="https://www.aiwebtools.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button
                variant="ghost"
                className="text-white justify-start bg-fungus-dark/80 hover:text-white hover:bg-fungus-dark w-full"
              >
                More AI Tools
              </Button>
            </a>
            <a
              href="https://chatgpt.com/g/g-67d872788c488191aab35cf0b0ee7152-fungus-whisperer-gpt"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button className="bg-gradient-to-r from-fungus-purple to-fungus-blue hover:opacity-90 transition-opacity w-full">
                Try Now
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

