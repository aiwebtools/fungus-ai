import React from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-black/40 via-purple-900/20 to-black/60 border-t border-gradient-to-r from-purple-400/20 via-pink-400/20 to-blue-400/20 pt-16 pb-8 relative overflow-hidden">
      {/* Divine background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-full filter blur-[80px] animate-pulse-glow"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 rounded-full filter blur-[80px] animate-pulse-glow" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div className="space-y-4">
            <a
              href="https://chatgpt.com/g/g-67d872788c488191aab35cf0b0ee7152-fungus-whisperer-gpt"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center group"
            >
              <div className="mr-3 w-10 h-10 rounded-full bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-blue-500/30 flex items-center justify-center overflow-hidden animate-pulse-glow group-hover:scale-110 transition-transform">
                <span className="text-2xl">🍄</span>
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent">
                  Fungus Whisperer GPT
                </h3>
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
            <p className="text-sm text-white/70">
              Expert guidance in mushroom cultivation, safe foraging, and creative
              fungi cuisine with scientific accuracy and engaging storytelling.
            </p>
            <div className="flex space-x-2 pt-2">
              <a
                href="https://chatgpt.com/g/g-67d872788c488191aab35cf0b0ee7152-fungus-whisperer-gpt"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-500 hover:via-pink-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
                  Try Now
                </Button>
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("disclaimer")}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Disclaimer
                </button>
              </li>
              <li>
                <a
                  href="https://www.aiwebtools.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  More AI Tools
                </a>
              </li>
              <li>
                <a
                  href="https://openai.com/policies/privacy-policy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-purple-300 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://aiwebtools.lovable.app/disclaimers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-purple-300 transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+14758008096"
                  className="flex items-center text-white/70 hover:text-white transition-colors"
                >
                  <Phone size={18} className="mr-2" />
                  (475) 800-8096
                </a>
              </li>
              <li>
                <a
                  href="mailto:Contact@ai-webtools.com"
                  className="flex items-center text-white/70 hover:text-white transition-colors"
                >
                  <Mail size={18} className="mr-2" />
                  Contact@ai-webtools.com
                </a>
              </li>
            </ul>
            <div className="pt-4">
              <a
                href="https://www.aiwebtools.ai"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="rounded-full bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 hover:from-cyan-500 hover:via-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                  More AI Tools
                </Button>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gradient-to-r from-purple-400/20 via-pink-400/20 to-blue-400/20 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white/60 text-center md:text-left">
            <a
              href="https://www.aiwebtools.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              © {currentYear} AI WEB TOOLS LLC. All rights reserved.
            </a>
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://openai.com/policies/privacy-policy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/60 hover:text-purple-300 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="https://aiwebtools.lovable.app/disclaimers"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/60 hover:text-purple-300 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
