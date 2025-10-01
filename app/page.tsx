import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Benefits from "@/components/sections/benefits"
import Themes from "@/components/sections/themes"
import Timeline from "@/components/sections/timeline"
import Cta from "@/components/sections/cta"
import Contact from "@/components/sections/contact"

export default function Page() {
  return (
    <main className="min-h-dvh bg-forge">
      <Hero />
      <About />
      <Benefits />
      <Themes />
      <Timeline />
      <Cta />
      <Contact />
      <footer className="py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} HackForge — All rights reserved.
      </footer>
    </main>
  )
}
