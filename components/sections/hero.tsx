"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background vignette and particles handled by .bg-forge on main */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(70%_60%_at_50%_20%,black,transparent)]"
      />
      <div className="container mx-auto px-4 pt-16 pb-12 text-center">
        <div className="mx-auto mb-6 w-full max-w-[320px] animate-in fade-in slide-in-from-top-4 duration-700">
          {/* Logo */}
          <img
            src="/images/hackforge-logo.jpeg"
            alt="HackForge Logo"
            className="mx-auto w-full h-auto drop-shadow-xl"
            loading="eager"
          />
        </div>

        <h1 className="text-balance mx-auto max-w-3xl text-3xl md:text-5xl font-semibold tracking-tight animate-in fade-in slide-in-from-bottom-2 duration-700">
          Hack the Future, <span className="text-primary">Forge Your Path.</span>
        </h1>

        <p className="text-pretty mx-auto mt-4 max-w-2xl text-base md:text-lg text-muted-foreground animate-in fade-in duration-700 delay-150">
          A premier student-led hackathon at MRIIRS, Faridabad. Build with peers, learn from mentors, and ship something
          extraordinary.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-2 duration-700 delay-200">
          <Button asChild className="bg-accent text-accent-foreground glow-accent hover:brightness-110">
            <Link href="https://forms.gle/HJV1hNg5epM2rtUA8" target="_blank" rel="noopener noreferrer">
              Register Now
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground glow-primary bg-transparent"
          >
            <Link href="mailto:thehackforge.team@gmail.com">Become a Sponsor</Link>
          </Button>
        </div>

        <div className="mt-10 text-xs uppercase tracking-wider text-muted-foreground">
          15–16 Oct 2025 • MRIIRS, Faridabad • ₹25,000 Prize Pool
        </div>
      </div>
    </section>
  )
}
