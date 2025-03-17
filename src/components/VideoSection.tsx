
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Play } from "lucide-react";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const handlePlayClick = () => {
    window.open("https://ideogram.ai/assets/image/lossless/response/b_WjdmTfSfiuXjKBU7Iq-Q", "_blank");
  };

  return (
    <section
      ref={ref}
      className="py-24 relative bg-gradient-to-b from-fungus-dark/80 to-fungus-dark overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <div
            className={`transition-all duration-700 ${
              inView ? "opacity-100" : "opacity-0 translate-y-10"
            }`}
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-fungus-cyan bg-fungus-cyan/10 px-3 py-1 rounded-full mb-3">
              Explore
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              See <span className="text-gradient">Fungus Whisperer</span> in Action
            </h2>
            <p className="text-white/70 text-lg max-w-3xl mx-auto">
              Watch how our AI guide provides expert mushroom knowledge, foraging
              tips, and culinary inspiration in real-time.
            </p>
          </div>
        </div>

        <div
          className={`transition-all duration-700 delay-200 ${
            inView ? "opacity-100" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* First Image - No Play Button */}
            <div className="relative rounded-2xl overflow-hidden group">
              <div className="aspect-video bg-black relative">
                {/* Image */}
                <img
                  src="https://ideogram.ai/assets/image/lossless/response/b_WjdmTfSfiuXjKBU7Iq-Q"
                  alt="Fungus Whisperer GPT Demo"
                  className="w-full h-full object-cover"
                />

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-black/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              {/* Gradient Border Effect */}
              <div className="absolute inset-0 rounded-2xl p-[1px] pointer-events-none">
                <div className="w-full h-full rounded-2xl bg-gradient-to-r from-fungus-purple/30 via-fungus-blue/30 to-fungus-purple/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>

            {/* Second Image */}
            <div className="relative rounded-2xl overflow-hidden group">
              <div className="aspect-video bg-black relative">
                {/* New Image */}
                <img
                  src="https://ideogram.ai/assets/image/lossless/response/9DLLjKWGSeSlKMxHMhuHoA"
                  alt="Fungus Whisperer GPT Visual"
                  className="w-full h-full object-cover"
                />

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-black/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              {/* Gradient Border Effect */}
              <div className="absolute inset-0 rounded-2xl p-[1px] pointer-events-none">
                <div className="w-full h-full rounded-2xl bg-gradient-to-r from-fungus-green/30 via-fungus-blue/30 to-fungus-green/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
          </div>

          <div className="text-center mt-6">
            <p className="text-sm text-white/60 italic">
              Experience the visual world of Fungus Whisperer GPT
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
