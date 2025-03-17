
import React from "react";
import { useInView } from "react-intersection-observer";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Alex Thompson",
    role: "Amateur Mycologist",
    avatar: "AT",
    content: "Fungus Whisperer GPT has transformed my mushroom cultivation journey. The step-by-step guidance helped me successfully grow my first oyster mushrooms with zero prior experience.",
    rating: 5
  },
  {
    name: "Sophia Chen",
    role: "Foraging Enthusiast",
    avatar: "SC",
    content: "I appreciate how Fungus Whisperer always prioritizes safety in identification. The detailed explanations of lookalikes and poisonous varieties has made me a more confident forager.",
    rating: 5
  },
  {
    name: "Marcus Rivera",
    role: "Professional Chef",
    avatar: "MR",
    content: "The culinary suggestions are outstanding! I've discovered amazing flavor combinations and techniques that have elevated my restaurant's mushroom dishes to new heights.",
    rating: 5
  },
  {
    name: "Emma Woodson",
    role: "Biology Teacher",
    avatar: "EW",
    content: "A fantastic educational resource. I use this with my students to explore fungal biology and ecology. The scientific accuracy combined with engaging storytelling keeps my class fascinated.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-fungus-dark to-fungus-dark/90 -z-10"></div>
      
      {/* Subtle animated background elements */}
      <div className="absolute top-20 left-10 w-60 h-60 bg-fungus-purple/10 rounded-full filter blur-[60px] animate-pulse-glow opacity-60"></div>
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-fungus-blue/10 rounded-full filter blur-[60px] animate-pulse-glow opacity-60" style={{ animationDelay: "2s" }}></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={`transition-all duration-700 ${inView ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-fungus-yellow bg-fungus-yellow/10 px-3 py-1 rounded-full mb-3">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Hear From Our <span className="text-gradient">Users</span>
            </h2>
            <p className="text-white/70 text-lg">
              Discover how Fungus Whisperer GPT is helping mushroom enthusiasts, foragers, and culinary 
              creators expand their knowledge and skills.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`glass-card rounded-xl p-6 transition-all duration-700 ${
                inView ? 'opacity-100' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-fungus-purple to-fungus-blue flex items-center justify-center text-white font-medium">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="flex items-center mb-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-fungus-yellow fill-fungus-yellow" />
                    ))}
                  </div>
                  <p className="text-white/90 italic mb-4">"{testimonial.content}"</p>
                  <div>
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <p className="text-sm text-white/60">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
