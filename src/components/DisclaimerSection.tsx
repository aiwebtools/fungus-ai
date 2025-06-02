import React from "react";
import { useInView } from "react-intersection-observer";
import { AlertTriangle } from "lucide-react";

const DisclaimerSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      id="disclaimer"
      className="py-24 relative overflow-hidden bg-gradient-to-b from-fungus-dark via-purple-900/20 to-fungus-dark/95"
    >
      {/* Divine animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-full filter blur-[40px] animate-pulse-glow"></div>
        <div className="absolute top-1/3 right-20 w-24 h-24 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 rounded-full filter blur-[30px] animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 rounded-full filter blur-[50px] animate-pulse-glow" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-10 right-10 w-28 h-28 bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 rounded-full filter blur-[35px] animate-float" style={{ animationDelay: "3s" }}></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div
            className={`glass-card rounded-xl p-8 transition-all duration-700 border-2 border-gradient-to-r from-purple-400/30 via-pink-400/30 to-blue-400/30 bg-gradient-to-br from-white/10 via-purple-500/5 to-blue-500/10 backdrop-blur-lg shadow-2xl ${
              inView ? "opacity-100 animate-scale-up" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-blue-500/30 flex items-center justify-center animate-pulse-glow">
                <AlertTriangle className="w-6 h-6 text-purple-300" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent">Legal Disclaimer</h2>
            </div>

            {/* Educational Disclaimer */}
            <div className="mb-6 p-4 rounded-lg bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-blue-900/20 border border-purple-400/20">
              <p className="text-purple-200 font-medium text-center">
                This website is provided for informational, educational, and research purposes only.
              </p>
            </div>

            <div className="space-y-6 text-white/80">
              <p>
                Fungus Whisperer GPT is an experimental AI tool provided for educational and informational
                purposes only. The information provided should not be considered as
                professional or expert advice. Users must exercise extreme caution and
                their own judgment when applying any information or suggestions
                provided by this AI tool.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">
                  ⚠️ CRITICAL MUSHROOM IDENTIFICATION WARNING ⚠️
                </h3>
                <div className="bg-red-900/30 border border-red-500/50 rounded-lg p-4">
                  <p className="font-semibold text-red-200">
                    NEVER eat any mushroom based solely on AI identification. This AI tool can be wrong
                    and misidentification of mushrooms can result in severe illness or death.
                  </p>
                  <ul className="mt-3 space-y-2 text-red-100">
                    <li>• Do NOT rely solely on this AI for mushroom identification</li>
                    <li>• Do NOT consume any wild mushrooms based on AI recommendations</li>
                    <li>• Always consult multiple expert sources and field guides</li>
                    <li>• Always verify with professional mycologists before consumption</li>
                    <li>• This is an experimental tool and may provide incorrect information</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">
                  Limitation of Liability
                </h3>
                <p>
                  AI WEB TOOLS LLC, its affiliates, and partners assume no
                  responsibility or liability for any consequences resulting from
                  the use of Fungus Whisperer GPT. Users agree to use this experimental tool at
                  their own risk and accept full responsibility for verifying any
                  information provided through multiple independent sources.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">
                  Medical Disclaimer
                </h3>
                <p>
                  Information provided by Fungus Whisperer GPT is not medical
                  advice and should not be used to diagnose, treat, cure, or
                  prevent any medical condition. Consult qualified healthcare
                  professionals for medical advice.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">
                  Foraging and Cultivation Compliance
                </h3>
                <p>
                  Users must comply with all local laws, regulations, and
                  guidelines regarding mushroom foraging and cultivation. Obtain
                  necessary permits and permissions before engaging in any foraging
                  or cultivation activities.
                </p>
              </div>

              <div className="rounded-lg bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 border border-purple-400/20 p-4">
                <p className="text-sm">
                  By using Fungus Whisperer GPT, you acknowledge that you have read
                  and understood this disclaimer and agree to be bound by its
                  terms. For complete terms and conditions, please refer to our{" "}
                  <a
                    href="https://aiwebtools.lovable.app/disclaimers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-300 hover:text-pink-300 hover:underline transition-colors"
                  >
                    Terms of Service & Disclaimers
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisclaimerSection;
