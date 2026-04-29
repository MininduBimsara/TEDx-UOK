import Loading from "../../components/ui/Loading";
import { supabase } from "../../lib/supabase";
import { useEvents } from "../../hooks/useEvents";
import { useSpeakers } from "../../hooks/useSpeakers";
import { formatTedxText } from "../../utils/textFormatting";
import SEO from "../../components/common/SEO";

const SPEAKER_BUCKET = import.meta.env.VITE_SUPABASE_BUCKET_SPEAKER_PHOTOS;

const getImageUrl = (path: string | null, bucketName: string) => {
  if (!path)
    return "https://ui-avatars.com/api/?name=TEDx&background=EB0028&color=fff&size=400";
  if (path.startsWith("http")) return path;
  const { data } = supabase.storage.from(bucketName).getPublicUrl(path);
  return data.publicUrl;
};

const subPillars = [
  {
    title: "Innovation",
    description:
      "Pushing boundaries and challenging conventional thinking to create meaningful change.",
  },
  {
    title: "Resilience",
    description:
      "Building strength through transformation and finding the courage to grow from every challenge.",
  },
  {
    title: "Connection",
    description:
      "Building bridges between different people and ideas to find new, undiscovered links.",
  },
];

const Theme = () => {
  const { event, loading: eventLoading } = useEvents();
  const { speakers, loading: speakersLoading } = useSpeakers();

  if (eventLoading || speakersLoading) {
    return <Loading />;
  }

  const realSpeakers = speakers.map((s) => ({
    id: s.speaker_id,
    name: s.full_name,
    topic: s.talk_title || "Topic To Be Announced",
    alignment: s.bio_short || s.title,
    image: getImageUrl(s.photo_url, SPEAKER_BUCKET),
  }));

  const themeName = event?.theme || "UNCHARTED";

  return (
    <main className="min-h-screen bg-background relative top-[-50px]">
      <SEO 
        title="TEDxUOK 2026 Theme | Ideas That Shape the Future" 
        description="Explore the inspiring theme of TEDxUOK 2026. Dive into the ideas, questions, and perspectives that define this year's event at the University of Kelaniya." 
        url="https://tedxuok.org/theme" 
      />
      {/* Hero Section - Theme Title */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-6">
        <div className="container mx-auto">
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4 opacity-0 animate-fade-in-up">
            {formatTedxText("TEDx UoK 2026 Theme", true)}
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[0.95] mb-8 opacity-0 animate-fade-in-up animation-delay-100">
            <span className="text-foreground">{themeName}</span>
            <br />
            <span className="text-primary text-3xl sm:text-4xl md:text-5xl mt-4 block">{formatTedxText("Ideas Worth Spreading")}</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl opacity-0 animate-fade-in-up animation-delay-200">
            {formatTedxText(event?.description ||
              "Exploring the edges of possibility and the courage to venture beyond.")}
          </p>
        </div>
      </section>

      {/* Theme Story */}
      <section className="py-16 md:py-24 px-6 border-t border-border">
        <div className="container mx-auto">
          <h2 className="text-sm font-medium text-primary tracking-widest uppercase mb-8">
            The Story
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              TEDxUoK is a stage where curiosity meets action. We bring together diverse voices from across our community to challenge limits, spark change, and share the ideas that will define our future.
            </p>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-16 md:py-24 px-6 bg-card border-t border-border">
        <div className="container mx-auto">
          <h2 className="text-sm font-medium text-primary tracking-widest uppercase mb-8">
            Why It Matters
          </h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-16">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                The Urgency of Now
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We are at a turning point. With so much change in technology and the world, we need the courage to think differently. The limits we once accepted are shifting, and staying still is no longer an option.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                The Opportunity Ahead
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Every time we break a boundary, we see a new horizon. When we challenge the old way of doing things, we don’t just solve problems. We discover new ideas that will shape our future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Relevance */}
      <section className="py-16 md:py-24 px-6 border-t border-border">
        <div className="container mx-auto">
          <h2 className="text-sm font-medium text-primary tracking-widest uppercase mb-12">
            Relevance
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="border-l-2 border-primary pl-8">
              <h3 className="text-xl font-bold text-foreground mb-3">
                For Students
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                The world is changing fast. We encourage students to look beyond traditional paths and develop the mindset needed for a world that is still evolving.
              </p>
            </div>
            <div className="border-l-2 border-primary pl-8">
              <h3 className="text-xl font-bold text-foreground mb-3">
                For Our Community
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Our community is made of diverse backgrounds and perspectives. It is here that we find the strength to move past boundaries and create a stronger future together.
              </p>
            </div>
            <div className="border-l-2 border-primary pl-8">
              <h3 className="text-xl font-bold text-foreground mb-3">
                For The World
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Modern global issues can’t be solved with old solutions. We believe that learning to rethink traditional boundaries is an essential skill for everyone today.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-Pillars */}
      <section className="py-16 md:py-24 px-6 bg-card border-t border-border">
        <div className="container mx-auto">
          <h2 className="text-sm font-medium text-primary tracking-widest uppercase mb-12">
            Sub-Pillars
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {subPillars.map((pillar, index) => (
              <div
                key={pillar.title}
                className="p-6 border border-border rounded-xl bg-background"
              >
                <span className="text-4xl font-bold text-primary/20 block mb-4">
                  0{index + 1}
                </span>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Speakers Align */}
      <section className="py-16 md:py-24 px-6 border-t border-border">
        <div className="container mx-auto">
          <h2 className="text-sm font-medium text-primary tracking-widest uppercase mb-4">
            Speaker Alignment
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl">
            See how our speakers interpret the theme "{formatTedxText(themeName)}".
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {realSpeakers.map((speaker) => (
              <div
                key={speaker.id}
                className="group border border-border rounded-xl bg-card overflow-hidden hover:border-primary/50 transition-colors"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-foreground">{speaker.name}</h3>
                  <p className="text-sm text-primary mb-2">{speaker.topic}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {/* Using Bio as fallback for Alignment text */}
                    {formatTedxText(speaker.alignment)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Theme;
