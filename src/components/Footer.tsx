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
    <footer className="bg-black/40 border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div className="space-y-4">
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
                <h3 className="text-xl font-bold text-gradient">
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
                <Button className="bg-gradient-to-r from-fungus-purple to-fungus-blue hover:opacity-90 transition-opacity">
                  Try Now
                </Button>
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
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
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://aiwebtools.lovable.app/disclaimers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
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
                <Button className="rounded-full bg-gradient-to-r from-fungus-cyan to-fungus-blue hover:opacity-90 transition-opacity">
                  More AI Tools
                </Button>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center">
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
              className="text-xs text-white/60 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="https://aiwebtools.lovable.app/disclaimers"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/60 hover:text-white transition-colors"
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
