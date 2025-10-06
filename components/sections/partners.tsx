// components/sections/partners.tsx

export default function Partners() {
  return (
    <section
      id="partners"
      className="py-16 md:py-20 border-t border-b border-white/10"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl md:text-3xl font-semibold">
          Our Valued Partners
        </h2>

        {/* 1-row flex layout instead of grid */}
        <div className="mt-12 flex flex-col md:flex-row items-stretch justify-center gap-6 max-w-5xl mx-auto">
          
          {/* Hosted By */}
          <div className="flex-1 glass rounded-xl p-6 flex flex-col items-center text-center hover:glow-accent transition-shadow">
            <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
              Hosted By
            </h3>
            <div className="h-24 flex items-center justify-center flex-grow">
              <img
                src="/images/manav-rachna-logo.png"
                alt="Manav Rachna University"
                className="max-h-20 w-auto p-2 bg-white rounded-md"
              />
            </div>
          </div>

          {/* Sponsored By (wider card) */}
          <div className="flex-[1.5] glass rounded-xl p-6 flex flex-col items-center text-center hover:glow-accent transition-shadow">
            <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
              Sponsored By
            </h3>
            <div className="h-24 flex items-center justify-center flex-grow">
              <div className="flex justify-center gap-8">
                <div className="flex items-center justify-center">
                  <img
                    src="/images/oracle-logo.png"
                    alt="Oracle"
                    className="max-h-16 w-auto p-2 bg-white rounded-md"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <img
                    src="/images/unsaid-talks-logo.png"
                    alt="Unsaid Talks"
                    className="max-h-16 w-auto p-2 bg-white rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Managed By */}
          <div className="flex-1 glass rounded-xl p-6 flex flex-col items-center text-center hover:glow-accent transition-shadow">
            <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
              Managed By
            </h3>
            <div className="h-24 flex items-center justify-center flex-grow">
              <img
                src="/images/mrac-logo.png"
                alt="MRAC Club"
                className="max-h-20 w-auto p-2 bg-white rounded-md"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
