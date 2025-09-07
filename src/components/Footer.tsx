import logoImage from "@/assets/v4cj-logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img 
                src={logoImage} 
                alt="Voices for Climate Justice" 
                className="h-10 w-auto mb-4 brightness-0 invert opacity-90"
              />
            </div>
            <p className="text-background/80 leading-relaxed">
              A youth-led movement empowering young people to speak out, learn, 
              and act for climate justice.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-background/80 hover:text-primary transition-colors">About</a></li>
              <li><a href="#what-we-do" className="text-background/80 hover:text-primary transition-colors">What We Do</a></li>
              <li><a href="#impact" className="text-background/80 hover:text-primary transition-colors">Impact</a></li>
              <li><a href="#get-involved" className="text-background/80 hover:text-primary transition-colors">Get Involved</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-background/80">
              <p>📧 voicesforclimatejustice@gmail.com</p>
              <p>📱 +254791379051</p>
              <p>🌍 @voicesforclimatejustice_ke</p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/60">
            © 2024 Voices for Climate Justice. Fighting for a just and sustainable future.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;