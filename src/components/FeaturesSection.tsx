
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { 
  BookOpen, 
  Sprout, 
  Search, 
  Utensils, 
  FlaskConical,
  Image, 
  BookOpen as BookOpenIcon
} from "lucide-react";

const features = [
  {
    icon: <Sprout className="w-10 h-10 text-fungus-green" />,
    title: "Mushroom Cultivation",
    description: "Step-by-step guides tailored to your experience level, from spore to harvest with precision and clarity."
  },
  {
    icon: <Search className="w-10 h-10 text-fungus-blue" />,
    title: "Safe Foraging Advice",
    description: "Expert identification guidance with safety as the top priority. Detailed analysis of key traits and potential toxic lookalikes."
  },
  {
    icon: <Utensils className="w-10 h-10 text-fungus-yellow" />,
    title: "Culinary Creativity",
    description: "Engaging, sensory-rich mushroom recipes customized to your dietary needs and cooking skills, with creative plating ideas."
  },
  {
    icon: <BookOpenIcon className="w-10 h-10 text-fungus-purple" />,
    title: "Engaging Storytelling",
    description: "Immersive responses enhanced with fungal biology, folklore, history, and scientific discoveries to foster curiosity."
  },
  {
    icon: <Image className="w-10 h-10 text-fungus-cyan" />,
    title: "Image Generation",
    description: "Creates artistic depictions of mushrooms, foraging maps, and culinary plating ideas to enhance visualization."
  },
  {
    icon: <FlaskConical className="w-10 h-10 text-fungus-pink" />,
    title: "Scientific Accuracy",
    description: "All information is scientifically accurate, methodically researched, and follows strict ethical harvesting guidelines."
  }
];

const FeaturesSection = () => {
  const { ref: sectionRef, inView: sectionVisible } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  return (
    <section id="features" ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-fungus-dark via-fungus-dark/95 to-fungus-dark -z-10"></div>
      
      {/* Animated background dots */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-3 h-3 rounded-full bg-fungus-purple animate-pulse"></div>
        <div className="absolute top-40 right-20 w-2 h-2 rounded-full bg-fungus-blue animate-pulse" style={{ animationDelay: "0.5s" }}></div>
        <div className="absolute bottom-20 left-1/4 w-2 h-2 rounded-full bg-fungus-cyan animate-pulse" style={{ animationDelay: "0.7s" }}></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-fungus-pink animate-pulse" style={{ animationDelay: "1.1s" }}></div>
        <div className="absolute bottom-40 right-10 w-3 h-3 rounded-full bg-fungus-green animate-pulse" style={{ animationDelay: "1.3s" }}></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={`transition-all duration-700 ${sectionVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-fungus-purple bg-fungus-purple/10 px-3 py-1 rounded-full mb-3">
              Capabilities
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Explore the Full Potential of <span className="text-gradient">Fungus Whisperer</span>
            </h2>
            <p className="text-white/70 text-lg">
              Comprehensive mushroom expertise powered by advanced AI, providing scientifically accurate 
              guidance for cultivation, identification, and culinary applications.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`glass-card rounded-xl p-6 transition-all duration-700 delay-${index * 100} transform hover:-translate-y-1 hover:shadow-lg ${
                sectionVisible ? 'opacity-100' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="rounded-full w-16 h-16 flex items-center justify-center bg-white/5 mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
