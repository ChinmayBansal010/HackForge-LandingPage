import { Cpu, Leaf, Landmark, Cloud, Shield, HeartPulse, Building2 } from "lucide-react"

const themes = [
  { icon: Cpu, name: "Artificial Intelligence" },
  { icon: Leaf, name: "Sustainability" },
  { icon: Landmark, name: "Fintech" },
  { icon: Cloud, name: "Cloud Innovation" },
  { icon: Shield, name: "Cyber Security" },
  { icon: HeartPulse, name: "Health Tech" },
  { icon: Building2, name: "Smart Cities" },
]

export default function Themes() {
  return (
    <section id="themes" className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl md:text-3xl font-semibold">
          Hackathon <span className="text-primary">Themes</span>
        </h2>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {themes.map(({ icon: Icon, name }) => (
            <div
              key={name}
              className="relative rounded-lg p-5 border border-accent/30 hover:border-accent transition-colors glow-accent/50"
              style={{ boxShadow: "0 0 20px color-mix(in oklab, var(--color-accent) 25%, transparent)" }}
            >
              <Icon className="text-accent mb-3" aria-hidden />
              <div className="font-medium">{name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
