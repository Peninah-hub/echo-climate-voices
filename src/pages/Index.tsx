import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Story from "@/components/Story";
import WhatWeDo from "@/components/WhatWeDo";
import Impact from "@/components/Impact";
import GetInvolved from "@/components/GetInvolved";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Mission />
      <Story />
      <WhatWeDo />
      <Impact />
      <GetInvolved />
      <Footer />
    </div>
  );
};

export default Index;
