
import React from "react";
import { useInView } from "react-intersection-observer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Fungus Whisperer GPT?",
    answer:
      "Fungus Whisperer GPT is an AI assistant specialized in mushroom cultivation, safe foraging, and creative cooking with fungi. It provides scientifically accurate information with engaging storytelling to guide users through their mushroom journey.",
  },
  {
    question: "Is Fungus Whisperer GPT suitable for beginners?",
    answer:
      "Absolutely! Fungus Whisperer GPT tailors its guidance to your experience level, providing step-by-step instructions for beginners while offering advanced techniques for experienced mycologists and foragers.",
  },
  {
    question: "Can Fungus Whisperer GPT identify mushrooms from photos?",
    answer:
      "Fungus Whisperer GPT can analyze photos to help with identification, but always emphasizes that visual identification alone is not sufficient for determining edibility. It will highlight key traits and potential toxic lookalikes, while strongly recommending professional consultation for definitive identification.",
  },
  {
    question: "How does Fungus Whisperer GPT ensure safety when foraging?",
    answer:
      "Safety is the top priority. Fungus Whisperer GPT provides detailed identification guidance based on visible characteristics, warns about toxic lookalikes, and never assumes edibility unless absolutely certain. It always recommends consulting multiple expert sources before consuming any wild mushrooms.",
  },
  {
    question: "What types of recipes and culinary guidance are provided?",
    answer:
      "Fungus Whisperer GPT offers customized recipes based on your dietary needs and cooking skill level. It provides detailed instructions, flavor profiles, cooking techniques, creative plating ideas, and even unconventional recipe suggestions to inspire culinary exploration.",
  },
  {
    question: "Can it help with mushroom cultivation problems?",
    answer:
      "Yes! Fungus Whisperer GPT provides comprehensive troubleshooting guidance for common cultivation issues, covering environmental conditions, substrate preparation, sterilization, inoculation, and harvesting techniques.",
  },
];

const FAQSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      id="faq"
      className="py-24 relative overflow-hidden bg-gradient-to-b from-fungus-dark/90 to-fungus-dark"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div
            className={`transition-all duration-700 ${
              inView ? "opacity-100" : "opacity-0 translate-y-10"
            }`}
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-fungus-pink bg-fungus-pink/10 px-3 py-1 rounded-full mb-3">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-white/70 text-lg">
              Find answers to common questions about Fungus Whisperer GPT and its
              capabilities in mushroom cultivation, foraging, and culinary
              applications.
            </p>
          </div>
        </div>

        <div
          className={`max-w-3xl mx-auto transition-all duration-700 delay-200 ${
            inView ? "opacity-100" : "opacity-0 translate-y-10"
          }`}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card border border-white/10 rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <span className="text-lg font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-white/70">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
