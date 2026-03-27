import Section from "../../components/ui/Section";

const themePageContent = {
  sectionTitle: "TEDx UoK Theme",
  title: "UNCHARTED - Ideas Worth Spreading",
  paragraphs: [
    "For centuries, progress has begun at the edges of what is known. Every shift in thought and meaningful change has emerged when individuals and communities question existing boundaries and venture beyond familiar frameworks. These moments, often uncertain and uncomfortable, are where transformation begins.",
    "UNCHARTED represents these spaces of possibility. It represents the courage to explore without a complete map, to move forward when outcomes are not yet defined, and to challenge assumptions that quietly limit how we think, create, and live. In a world shaped by rapid change and complexity, remaining within well-worn paths is no longer sufficient.",
    "At TEDx UoK 2026, UNCHARTED becomes a lens through which ideas are examined and shared. It invites conversations that cross disciplines, disrupt conventions, and reimagine the boundaries between knowledge, identity, and innovation. From scientific inquiry to personal storytelling, the ideas explored under this theme reflect a willingness to question, adapt, and evolve. They highlight the power of exploration across disciplines.",
    "This theme is not about abandoning direction, but about recognising that some of the most valuable discoveries occur when we allow curiosity to lead. UNCHARTED acknowledges uncertainty as a space for learning where new perspectives emerge and unexplored connections are formed.",
    "TEDx UoK 2026 invites speakers and audiences alike to engage with ideas that challenge the familiar and expand the possible. By stepping beyond established limits, UNCHARTED encourages us to reconsider where we are, where we are going, and what becomes possible when we act with intention.",
  ],
};

const ThemePage = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-32">
      {/* Replaced PageHero with this simple header */}
      <div className="px-6 mb-12 max-w-7xl mx-auto">
        <p className="text-sm font-medium text-[#EB0028] uppercase tracking-widest mb-4">
          {themePageContent.sectionTitle}
        </p>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
          {themePageContent.title}
        </h1>
      </div>

      <Section className="prose prose-invert max-w-4xl mx-auto px-6">
        {themePageContent.paragraphs.map((para, index) => (
          <p
            key={index}
            className={index === 0 ? "text-xl text-gray-300 leading-relaxed mb-8" : "text-gray-400 mb-6 leading-relaxed"}
          >
            {para}
          </p>
        ))}
      </Section>
    </div>
  );
};

export default ThemePage;
