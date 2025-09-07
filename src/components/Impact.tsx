import { Button } from "@/components/ui/button";

const Impact = () => {
  const impacts = [
    {
      title: "Community Reach",
      description: "I have reached students and community members through awareness talks",
      icon: "👥"
    },
    {
      title: "Conversations Started", 
      description: "I have encouraged conversations about climate justice — why fairness matters in the climate fight",
      icon: "💬"
    },
    {
      title: "Network Building",
      description: "I have begun building a network of people ready to learn, act, and spread the message",
      icon: "🌐"
    }
  ];

  return (
    <section className="py-20 bg-muted/30" id="impact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Our Impact
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Although Voices for Climate Justice is a young movement, our journey has already begun:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {impacts.map((impact, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50"
            >
              <div className="text-4xl mb-4">{impact.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">
                {impact.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {impact.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Read Our Stories & See Our Journey
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Impact;