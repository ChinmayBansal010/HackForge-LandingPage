// components/sections/partners.tsx

export default function Partners() {
  return (
    <section id="partners" className="py-16 md:py-20 border-t border-b border-white/10">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl md:text-3xl font-semibold">
          Our Valued Partners
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Hosted By */}
          <div className="glass rounded-xl p-6 flex flex-col items-center text-center hover:glow-accent transition-shadow">
            <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
              Hosted By
            </h3>
            <div className="h-24 flex items-center justify-center">
              <img
                src="/images/manav-rachna-logo.png"
                alt="Manav Rachna University"
                className="max-h-full max-w-full w-auto p-2 bg-white rounded-md"
              />
            </div>
          </div>

          {/* Sponsored By */}
          <div className="glass rounded-xl p-6 flex flex-col items-center text-center hover:glow-accent transition-shadow">
            <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
              Sponsored By
            </h3>
            <div className="h-24 flex items-center justify-center">
              <img
                src="/images/oracle-logo.png"
                alt="Oracle"
                className="max-h-16 max-w-full w-auto p-2 bg-white rounded-md"
              />
            </div>
          </div>

          {/* Managed By */}
          <div className="glass rounded-xl p-6 flex flex-col items-center text-center hover:glow-accent transition-shadow">
            <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
              Managed By
            </h3>
            <div className="h-24 flex items-center justify-center">
              <img
                src="/images/mrac-logo.png"
                alt="MRAC Club"
                className="max-h-full max-w-full w-auto p-2 bg-white rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}