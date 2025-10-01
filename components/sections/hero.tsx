"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_20%,_var(--primary)_0%,_transparent_40%)] opacity-20"
      />
      <div className="container mx-auto px-4 text-center">
        <div className="mx-auto mb-8 w-full max-w-[150px] sm:max-w-[200px] animate-in fade-in slide-in-from-top-4 duration-1000">
          <img
            src="/images/hackforge-logo.jpeg"
            alt="HackForge Logo"
            className="mx-auto w-full h-auto drop-shadow-[0_10px_20px_rgba(var(--primary-rgb),0.25)]"
            loading="eager"
          />
        </div>

        <h1 className="font-heading text-balance mx-auto max-w-4xl text-4xl md:text-6xl font-bold tracking-tight animate-in fade-in slide-in-from-bottom-2 duration-1000">
          Hack the Future, <span className="text-gradient">Forge Your Path.</span>
        </h1>

        <p className="text-pretty mx-auto mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground animate-in fade-in duration-1000 delay-200">
          A premier student-led hackathon at MRIIRS, Faridabad. Build with peers, learn from mentors, and ship something extraordinary.
        </p>

        <div className="mt-12 font-heading text-sm uppercase tracking-widest text-muted-foreground animate-in fade-in duration-1000 delay-400">
          15–16 Oct 2025 • MRIIRS, Faridabad • ₹25,000 Prize Pool
        </div>
      </div>
    </section>
  )
}