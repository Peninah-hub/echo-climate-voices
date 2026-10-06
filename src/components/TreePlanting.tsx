import { Link } from "react-router-dom";
import { slugify } from "@/data/stories";
const TreePlanting = () => {
  const photos = [
    {
      image: "/lovable-uploads/tree-planting-1.png",
      title: "Planting the First Sapling",
      description: "Students and guests gather to plant the first tree at Mpesa Foundation Academy, marking the start of a greener future."
    },
    {
      image: "/lovable-uploads/tree-planting-2.png",
      title: "Hands-On Climate Action",
      description: "Our founder Peninah Esther joins students in nurturing a young sapling, showing that climate action starts with our own hands."
    },
    {
      image: "/lovable-uploads/tree-planting-3.webp",
      title: "Getting Our Hands in the Soil",
      description: "Students actively planting saplings into the earth, learning practical skills in environmental conservation."
    },
    {
      image: "/lovable-uploads/tree-planting-4.webp",
      title: "Watering the Future",
      description: "Guests and students water the newly planted trees, a symbolic act of nurturing the planet for generations to come."
    },
    {
      image: "/lovable-uploads/tree-planting-5.webp",
      title: "Group Photo at the Planting Site",
      description: "The Guest of Honour and students celebrate together after planting saplings at Mpesa Foundation Academy."
    },
    {
      image: "/lovable-uploads/tree-planting-6.webp",
      title: "United for Climate Justice",
      description: "Students, staff, and dignitaries unite in a shared mission to green the campus and combat climate change."
    },
    {
      image: "/lovable-uploads/tree-planting-7.webp",
      title: "Standing Tall Together",
      description: "A proud moment as students and the Guest of Honour pose with the young trees they planted together."
    },
    {
      image: "/lovable-uploads/tree-planting-8.webp",
      title: "Community in Action",
      description: "The tree-planting team gathers around a newly planted sapling, building community through climate action."
    },
    {
      image: "/lovable-uploads/tree-planting-9.webp",
      title: "A Greener Tomorrow",
      description: "Rows of newly planted saplings stretch across the field, a living testament to V4CJ's commitment to reforestation."
    }
  ];

  return (
    <section className="py-20 bg-background" id="tree-planting">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Tree Planting at Mpesa Foundation Academy
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            <span className="font-semibold text-primary">Voices for Climate Justice</span> joined students and 
            staff at Mpesa Foundation Academy for a hands-on tree-planting initiative — turning climate awareness 
            into real, rooted action. Together we planted saplings, nurtured young trees, and inspired a new 
            generation of environmental stewards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo, index) => (
            <Link 
              key={index}
              to={`/stories/${slugify(photo.title)}`}
              className="block group cursor-pointer bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={photo.image} 
                  alt={photo.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                  {photo.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {photo.description}
                </p>
                <span className="inline-block mt-4 text-primary font-medium group-hover:underline">Read the story →</span>
              </div>
            </Link>
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

export default TreePlanting;
