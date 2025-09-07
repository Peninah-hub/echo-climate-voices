import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-landscape.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Welcome to{" "}
          <span className="text-primary">
            Voices for Climate Justice
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
          A youth-led, action-driven movement giving young people a platform to speak out, 
          learn, and act for climate justice
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="lg" className="min-w-48">
            Join Our Movement
          </Button>
          <Button variant="hero-outline" size="lg" className="min-w-48 group">
            Read Our Stories
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;