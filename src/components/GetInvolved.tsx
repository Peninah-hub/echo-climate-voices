import { Button } from "@/components/ui/button";

const GetInvolved = () => {
  const ways = [
    {
      title: "Take the Pledge",
      description: "Sign the Climate Justice Pledge — make a personal or group commitment to take action",
      icon: "📝"
    },
    {
      title: "Attend Events",
      description: "Join our awareness events and campaigns — or help organize one in your community",
      icon: "📅"
    },
    {
      title: "Volunteer",
      description: "Share your ideas, skills, or time to support our work and make a difference",
      icon: "🙋‍♀️"
    },
    {
      title: "Spread the Word",
      description: "Follow and share our posts on social media to amplify our message",
      icon: "📢"
    }
  ];

  const contactInfo = [
    { icon: "📧", text: "voicesforclimatejustice@gmail.com", href: "mailto:voicesforclimatejustice@gmail.com" },
    { icon: "📱", text: "+254791379051", href: "https://wa.me/254791379051" },
    { icon: "📱", text: "@voicesforclimatejustice_ke", href: "#" }
  ];

  return (
    <section className="py-20 bg-background" id="get-involved">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Get Involved
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            There are many ways you can join Voices for Climate Justice and become part of the change:
          </p>
        </div>

        {/* Ways to Get Involved */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {ways.map((way, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-primary/30"
            >
              <div className="text-3xl mb-4">{way.icon}</div>
              <h3 className="text-lg font-semibold mb-3 text-card-foreground">
                {way.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {way.description}
              </p>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="bg-primary/5 rounded-2xl p-8 border border-primary/20">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Let's Connect
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {contactInfo.map((contact, index) => (
              <a 
                key={index}
                href={contact.href}
                className="flex items-center justify-center space-x-3 p-4 bg-card rounded-lg hover:bg-primary/10 transition-colors border border-border/50"
              >
                <span className="text-2xl">{contact.icon}</span>
                <span className="text-foreground font-medium">{contact.text}</span>
              </a>
            ))}
          </div>

          <div className="text-center">
            <Button variant="hero" size="lg">
              Contact Us Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;