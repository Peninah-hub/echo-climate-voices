const OurWork = () => {
  const activities = [
    {
      image: "/lovable-uploads/fbbfa113-ba47-4e8d-91c9-ac16fde6d13d.png",
      title: "Climate Justice Rally",
      description: "Leading powerful community gatherings to fight for climate justice and mobilize youth action."
    },
    {
      image: "/lovable-uploads/57100eec-fb80-4f35-863f-bbb768fe4ad6.png",
      title: "Justice for Our Planet",
      description: "Advocating for environmental justice and the rights of future generations through peaceful activism."
    },
    {
      image: "/lovable-uploads/9e061065-5933-4b72-b553-020cadf78450.png",
      title: "Climate Justice Now",
      description: "V4CJ members spreading awareness about the urgent need for climate action and justice."
    },
    {
      image: "/lovable-uploads/ece93f4b-dc67-4927-91ec-383b644905ed.png",
      title: "Youth Climate Movement",
      description: "Students from across Kenya uniting with powerful messages demanding climate action and clean air."
    },
    {
      image: "/lovable-uploads/986ce0c1-9a5a-46b6-b23a-c386f6631da2.png",
      title: "There is No Planet B",
      description: "Spreading the critical message that we have only one planet and must act now to protect it."
    },
    {
      image: "/lovable-uploads/ca883ce2-eaef-4f33-8a1d-b22fa0ef3de6.png",
      title: "Don't Burn Our Future",
      description: "Community leaders and youth joining forces to protect the environment for future generations."
    },
    {
      image: "/lovable-uploads/f1b3e418-8b2d-4bad-8566-9fd813009b30.png",
      title: "Climate Change in Schools",
      description: "V4CJ's work featured on national television as we advocate for climate education in school curricula."
    },
    {
      image: "/lovable-uploads/245fe874-c840-4674-b70c-c77725989cc8.png",
      title: "Climate Innovation Challenge",
      description: "Recognition and awards for outstanding climate action initiatives and youth leadership in environmental protection."
    },
    {
      image: "/lovable-uploads/f12e6142-c2f2-4c89-ad3d-f0473c9fb0b8.png",
      title: "Creative Environmental Action",
      description: "Innovative approaches to environmental conservation, turning everyday items into tools for sustainable gardening."
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
            See how <span className="font-semibold text-primary">Voices for Climate Justice</span> and 
            our dedicated team are making real change happen through grassroots climate activism and youth empowerment.
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
              Join Our Climate Movement
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