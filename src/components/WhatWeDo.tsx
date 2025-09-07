const WhatWeDo = () => {
  const activities = [
    {
      title: "Climate Change Awareness Talks",
      description: "I organize sessions in schools, community groups, and local forums to explain what climate change is, why it matters, and how it connects to justice. These talks use simple language, real-life examples, and space for open discussion.",
      icon: "🎤"
    },
    {
      title: "The Climate Justice Pledge",
      description: "I invite individuals and groups to take a personal or collective pledge — a promise to take at least one action that helps fight climate change fairly. Actions include conserving water, reducing plastic use, planting trees, or helping spread awareness.",
      icon: "✋"
    },
    {
      title: "Creative Campaigns",
      description: "From posters and flyers to social media posts and videos, I use creative communication to make the message accessible and inspiring.",
      icon: "🎨"
    },
    {
      title: "Collaboration & Partnerships",
      description: "I welcome partnerships with schools, community organizations, other climate activists, and environmental groups who share the goal of making climate action just and effective.",
      icon: "🤝"
    }
  ];

  return (
    <section className="py-20 bg-background" id="what-we-do">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            What We Do
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Voices for Climate Justice focuses on creating understanding first, 
            so that action comes from an informed and united community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {activities.map((activity, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50"
            >
              <div className="flex items-start space-x-4">
                <div className="text-3xl flex-shrink-0 mt-1">{activity.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-card-foreground">
                    {activity.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {activity.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;