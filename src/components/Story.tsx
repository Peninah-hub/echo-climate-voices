const Story = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Story
            </h2>
            <h3 className="text-xl md:text-2xl text-primary font-semibold mb-8">
              How Voices for Climate Justice Began
            </h3>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-6">
              <span className="font-semibold text-primary">Voices for Climate Justice</span> was founded by{" "}
              <span className="font-semibold">Peninah Esther</span>, a young climate activist from Kenya who saw 
              the urgent need for youth voices to be heard in the global fight against climate change. 
              Growing up in a region severely impacted by the climate crisis — with frequent droughts, 
              water scarcity, and crop failure — Peninah witnessed how environmental injustice was 
              silently shaping the lives of those around her.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              She felt the emotional and mental toll of watching her community suffer while having 
              few resources or platforms to speak out, especially for young people. Despite her age, 
              Peninah knew that silence was not an option. She believed that youth — especially those 
              in the Global South — have lived experience, innovation, and courage that are too often 
              ignored in climate conversations.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Yet, what they lacked were platforms, tools, and recognition. Fueled by that passion, 
              she created <span className="font-semibold text-primary">Voices for Climate Justice (V4CJ)</span> — 
              a youth-led, action-driven movement aimed at empowering young people, particularly in Africa, 
              to raise their voices, access opportunities, and lead climate action in their own communities.
            </p>

            <div className="bg-primary/10 rounded-xl p-6 my-8 border-l-4 border-primary">
              <p className="text-foreground font-medium italic">
                "What began as one voice soon became many. Under Peninah's leadership, V4CJ has grown 
                into a collaborative space where young changemakers come together to advocate, learn, 
                volunteer, and take real action — using media, innovation, storytelling, and community 
                engagement as tools for transformation."
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              She did not wait for permission to lead. She built the platform herself — and opened 
              it to others. Today, <span className="font-semibold text-primary">Voices for Climate Justice</span> is 
              more than a movement. It is a growing force of young people rewriting the narrative of 
              climate action — not just demanding change, but becoming the change.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;