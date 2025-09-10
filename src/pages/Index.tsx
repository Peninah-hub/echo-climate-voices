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
      
      {/* Featured Climate Action Image */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-xl overflow-hidden shadow-2xl">
            <img 
              src="/lovable-uploads/fbbfa113-ba47-4e8d-91c9-ac16fde6d13d.png"
              alt="Climate Justice Rally - Fight for Climate Justice Now"
              className="w-full h-auto"
            />
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
