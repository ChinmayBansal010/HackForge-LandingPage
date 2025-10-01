import { Card, CardContent } from "@/components/ui/card"
import { Award, Shirt, Users } from "lucide-react"

const items = [
  { icon: Award, title: "Certificates", text: "Certificates for all participants" },
  { icon: Shirt, title: "Swags & T‑shirts", text: "Exclusive goodies for participants" },
  { icon: Users, title: "Networking", text: "Meet mentors, industry leaders, and peers" },
  { icon: Users, title: "Hands-on Experience", text: "Solve real-world problem statements" },
]

export default function Benefits() {
  return (
    <section id="why" className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl md:text-3xl font-semibold">
          Why <span className="text-primary">Join</span> HackForge?
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map(({ icon: Icon, title, text }) => (
            <Card key={title} className="glass hover:glow-accent transition-shadow">
              <CardContent className="p-5">
                <Icon className="mb-3 text-accent" aria-hidden />
                <div className="font-medium">{title}</div>
                <p className="mt-1 text-sm text-muted-foreground">{text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
