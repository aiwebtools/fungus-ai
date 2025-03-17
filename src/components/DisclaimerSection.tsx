
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
      className="py-24 relative overflow-hidden bg-gradient-to-b from-fungus-dark to-fungus-dark/95"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div
            className={`glass-card rounded-xl p-8 transition-all duration-700 ${
              inView ? "opacity-100" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="shrink-0 w-12 h-12 rounded-full bg-fungus-purple/20 flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-fungus-purple" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">Legal Disclaimer</h2>
            </div>

            <div className="space-y-6 text-white/80">
              <p>
                Fungus Whisperer GPT is provided for educational and informational
                purposes only. The information provided should not be considered as
                professional or expert advice. Users must exercise caution and
                their own judgment when applying any information or suggestions
                provided by this AI tool.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">
                  Mushroom Identification Warning
                </h3>
                <p>
                  Never rely solely on AI-based identification for determining
                  whether a mushroom is safe to consume. Misidentification of
                  mushrooms can result in severe illness or death. Always consult
                  multiple expert sources, field guides, and professional
                  mycologists before consuming any wild mushrooms.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">
                  Limitation of Liability
                </h3>
                <p>
                  AI WEB TOOLS LLC, its affiliates, and partners assume no
                  responsibility or liability for any consequences resulting from
                  the use of Fungus Whisperer GPT. Users agree to use this tool at
                  their own risk and accept full responsibility for verifying any
                  information provided.
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

              <div className="rounded-lg bg-fungus-purple/10 border border-fungus-purple/20 p-4">
                <p className="text-sm">
                  By using Fungus Whisperer GPT, you acknowledge that you have read
                  and understood this disclaimer and agree to be bound by its
                  terms. For complete terms and conditions, please refer to our{" "}
                  <a
                    href="https://aiwebtools.ai/terms-of-services"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-fungus-purple hover:underline"
                  >
                    Terms of Service
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
