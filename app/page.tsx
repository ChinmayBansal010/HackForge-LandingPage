import Navbar from "@/components/ui/navbar"
import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Cta from "@/components/sections/cta"
import Partners from "@/components/sections/partners"
import Benefits from "@/components/sections/benefits"
import Themes from "@/components/sections/themes"
import Timeline from "@/components/sections/timeline"
import Faq from "@/components/sections/faq"
import Contact from "@/components/sections/contact"

export default function Page() {
  return (
    <main className="min-h-dvh bg-forge">
      <Navbar />
      <Hero />
      <div className="space-y-16 md:space-y-24">
        <About />
        <Cta />
        <Partners />
        <Benefits />
        <Themes />
        <Timeline />
        <Faq />
        <Contact />
      </div>
      <footer className="py-8 mt-16 text-center text-sm text-muted-foreground border-t border-white/10">
        © {new Date().getFullYear()} HackForge — All rights reserved.
      </footer>
    </main>
  )
}