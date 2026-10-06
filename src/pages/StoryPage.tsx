import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { stories } from "@/data/stories";
import Footer from "@/components/Footer";
import logoImage from "@/assets/v4cj-logo.png";

const renderInline = (text: string) =>
  text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i} className="text-foreground font-semibold">{part.slice(2, -2)}</strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );

const StoryPage = () => {
  const { slug } = useParams();
  const index = stories.findIndex((s) => s.slug === slug);
  const story = stories[index];

  useEffect(() => {
    window.scrollTo(0, 0);
    if (story) document.title = `${story.title} | Voices for Climate Justice`;
  }, [story]);

  if (!story) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-muted-foreground">Story not found.</p>
        <Link to="/" className="text-primary underline">Back to home</Link>
      </div>
    );
  }

  const next = stories[(index + 1) % stories.length];
  const prev = stories[(index - 1 + stories.length) % stories.length];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/"><img src={logoImage} alt="Voices for Climate Justice" className="h-12 w-auto" /></Link>
          <Link to="/" className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
            <ArrowLeft className="w-4 h-4" /> Back to home
          </Link>
        </div>
      </header>

      <article className="max-w-3xl mx-auto px-6 py-12">
        <p className="text-sm uppercase tracking-wider text-primary font-semibold mb-3">{story.category}</p>
        <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-8">{story.title}</h1>
        <img src={story.image} alt={story.title} className="w-full rounded-xl shadow-lg mb-10 max-h-[600px] object-cover" />
        <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
          {story.paragraphs.map((p, i) => (
            <p key={i}>{renderInline(p)}</p>
          ))}
        </div>

        <nav className="mt-16 pt-8 border-t border-border grid sm:grid-cols-2 gap-4">
          <Link to={`/stories/${prev.slug}`} className="group p-4 rounded-lg border border-border hover:border-primary transition-colors">
            <span className="text-sm text-muted-foreground inline-flex items-center gap-1"><ArrowLeft className="w-4 h-4" /> Previous story</span>
            <p className="font-semibold text-foreground group-hover:text-primary">{prev.title}</p>
          </Link>
          <Link to={`/stories/${next.slug}`} className="group p-4 rounded-lg border border-border hover:border-primary transition-colors sm:text-right">
            <span className="text-sm text-muted-foreground inline-flex items-center gap-1">Next story <ArrowRight className="w-4 h-4" /></span>
            <p className="font-semibold text-foreground group-hover:text-primary">{next.title}</p>
          </Link>
        </nav>
      </article>
      <Footer />
    </div>
  );
};

export default StoryPage;
