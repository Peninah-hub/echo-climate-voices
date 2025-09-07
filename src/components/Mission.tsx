const Mission = () => {
  const missionItems = [
    {
      title: "Raise Awareness",
      description: "Making climate science understandable for everyone",
      icon: "🌍"
    },
    {
      title: "Inspire Action", 
      description: "Empowering communities to take meaningful steps",
      icon: "⚡"
    },
    {
      title: "Fight for Fairness",
      description: "Ensuring climate justice for all communities",
      icon: "⚖️"
    }
  ];

  return (
    <section className="py-20 bg-background" id="about">
      <div className="max-w-7xl mx-auto px-6">
        {/* Mission Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Our Mission
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Our mission is simple but powerful: to{" "}
            <span className="font-semibold text-primary">raise awareness</span> about climate change,{" "}
            <span className="font-semibold text-primary">inspire action</span>, and fight for{" "}
            <span className="font-semibold text-primary">fairness</span> in how its impacts are addressed.
          </p>
          <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
            We believe that before we design solutions, we must first help our communities 
            understand the problem — because knowledge is the first step toward change.
          </p>
        </div>

        {/* Mission Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {missionItems.map((item, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;