// components/sections/coordinators.tsx
import { Card, CardContent } from "@/components/ui/card"
import { Users } from "lucide-react"

const coordinators = [
  { name: "Dr. Poonam Tanwar", designation: "Associate Professor" },
  { name: "Dr. Ramesh Chandra Sahoo", designation: "Associate Professor" },
  { name: "Dr. Ali Abbas", designation: "Assistant Professor" },
];

export default function Coordinators() {
  return (
    <section id="coordinators" className="py-16 md:py-20 border-t border-white/10">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl md:text-3xl font-semibold">
          Faculty <span className="text-primary">Coordinators</span>
        </h2>

        <div className="mx-auto mt-8 grid max-w-4xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coordinators.map((coordinator) => (
            <Card key={coordinator.name} className="glass hover:glow-accent transition-shadow">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <Users className="mb-3 text-accent size-8" aria-hidden />
                <div className="text-xl font-semibold">{coordinator.name}</div>
                <p className="mt-1 text-sm text-muted-foreground">{coordinator.designation}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}