import peninahClimateJustice from "@/assets/peninah-climate-justice-now.jpg";
import peninahTreePlanting from "@/assets/peninah-tree-planting.jpg";
import peninahSpeaking from "@/assets/peninah-speaking-rally.jpg";
import peninahJusticePlanet from "@/assets/peninah-justice-planet.jpg";
import studentsAction from "@/assets/students-climate-action.jpg";
import peninahNoPlanetB from "@/assets/peninah-no-planet-b.jpg";

const OurWork = () => {
  const activities = [
    {
      image: peninahSpeaking,
      title: "Community Rallies & Awareness",
      description: "Leading powerful community gatherings to raise awareness about climate justice and mobilize youth action."
    },
    {
      image: peninahTreePlanting,
      title: "Environmental Action",
      description: "Taking direct action through tree planting, conservation efforts, and sustainable farming practices."
    },
    {
      image: studentsAction,
      title: "Youth Mobilization",
      description: "Empowering students and young people to become climate advocates in their schools and communities."
    },
    {
      image: peninahClimateJustice,
      title: "Climate Justice Advocacy",
      description: "Advocating for fair and equitable climate solutions that protect vulnerable communities."
    },
    {
      image: peninahJusticePlanet,
      title: "Justice for Our Planet",
      description: "Fighting for environmental justice and the rights of future generations."
    },
    {
      image: peninahNoPlanetB,
      title: "Urgent Climate Action",
      description: "Spreading the critical message that there is no Planet B - we must act now."
    }
  ];

  return (
    <section className="py-20 bg-muted/30" id="our-work">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Our Work in Action
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            See how our founder <span className="font-semibold text-primary">Peninah Esther</span> and 
            the V4CJ team are making real change happen on the ground through grassroots climate action.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={activity.image} 
                  alt={activity.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                  {activity.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {activity.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-primary/5 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Join Peninah's Mission
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              These are real actions creating real change. Be part of the movement that's 
              empowering youth voices and fighting for climate justice across Africa and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-primary-foreground hover:bg-primary-glow px-6 py-3 rounded-lg font-medium transition-colors">
                Take Action Now
              </button>
              <button className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 py-3 rounded-lg font-medium transition-colors">
                Learn More About V4CJ
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWork;