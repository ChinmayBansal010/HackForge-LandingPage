import { Card, CardContent } from "@/components/ui/card"
import { CalendarDays, MapPin, IndianRupee } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-balance text-center text-2xl md:text-3xl font-semibold">
          About <span className="text-primary">HackForge</span>
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-muted-foreground">
          HackForge is a premier student-led hackathon at MRIIRS, Faridabad, bringing together 250+ innovators to code,
          collaborate, and solve real-world challenges. Organized by the Department of Computer Science & Engineering,
          HackForge offers an exciting platform for innovation, mentorship, and networking. Participants will compete
          for a ₹25,000 prize pool, certificates, swags, and career opportunities.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Card className="glass glow-primary">
            <CardContent className="flex items-center gap-3 p-5">
              <CalendarDays className="text-accent" aria-hidden />
              <div>
                <div className="text-sm text-muted-foreground">Date</div>
                <div className="font-medium">15th & 16th October 2025</div>
              </div>
            </CardContent>
          </Card>
          <Card className="glass glow-primary">
            <CardContent className="flex items-center gap-3 p-5">
              <MapPin className="text-accent" aria-hidden />
              <div>
                <div className="text-sm text-muted-foreground">Venue</div>
                <div className="font-medium">MRIIRS, Faridabad</div>
              </div>
            </CardContent>
          </Card>
          <Card className="glass glow-primary">
            <CardContent className="flex items-center gap-3 p-5">
              <IndianRupee className="text-accent" aria-hidden />
              <div>
                <div className="text-sm text-muted-foreground">Registration Fee</div>
                <div className="font-medium">₹250 per team</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
