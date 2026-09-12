import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Story from "@/components/Story";
import WhatWeDo from "@/components/WhatWeDo";
import OurWork from "@/components/OurWork";
import Impact from "@/components/Impact";
import GetInvolved from "@/components/GetInvolved";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      
      {/* Peninah Esther Biography */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="/lovable-uploads/peninah-rally-clean.jpg"
                alt="Peninah Esther at Climate Justice Rally"
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Biography */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Meet Peninah Esther
                </h2>
                <p className="text-lg text-primary font-semibold">
                  Founder & Climate Justice Advocate
                </p>
              </div>
              
              <div className="prose prose-lg text-muted-foreground space-y-4">
                <p>
                  Peninah Esther is a young climate change advocate and social justice activist from Kenya. Growing up in a region heavily affected by droughts and water scarcity, she became aware at an early age of the profound impacts that climate change has on people&apos;s daily lives, health, and mental well-being.
                </p>
                
                <p>
                  In 2024–2025, Peninah founded Voices for Climate Justice (V4CJ), a youth-led movement dedicated to raising awareness, amplifying young voices, and driving local action on climate change. Through creative approaches such as educational videos, school outreach programs, storytelling, and spoken word performances, she empowers young people to understand climate issues and take action in their own communities.
                </p>
                
                <p>
                  Her leadership has been recognized through awards such as the Climate Innovation Challenge 2024/2025, and she has spoken at her school and in local communities to highlight the urgent need for climate action. Beyond awareness, Peninah is committed to connecting climate change with issues of gender justice, mental health, and education, ensuring that no one is left behind in the fight for a sustainable future.
                </p>
                
                <p>
                  Passionate, innovative, and determined, Peninah Esther represents a new generation of leaders who believe in turning knowledge into action. Her vision is to build a movement where young people, especially in the Global South, become key drivers of solutions for climate resilience, justice, and sustainability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Mission />
      <Story />
      <WhatWeDo />
      <OurWork />
      <Impact />
      <GetInvolved />
      <Footer />
    </div>
  );
};

export default Index;
