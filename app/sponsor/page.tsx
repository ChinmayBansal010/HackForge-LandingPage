import Navbar from "@/components/ui/navbar"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function SponsorPage() {
  return (
    <main className="min-h-dvh bg-forge">
      <Navbar />
      <div className="container mx-auto px-4 pt-32 pb-20 text-center">
        <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tight">
          Partner with <span className="text-gradient">HackForge 2025</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground">
          HackForge offers a unique opportunity to connect with over 250 of the brightest student innovators, developers, and designers. By sponsoring our event, you can enhance your brand visibility, recruit top talent, and support the next generation of tech leaders.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="glow-primary">
            <Link href="/#contact">Contact Us for Sponsorship</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
      <footer className="py-8 mt-16 text-center text-sm text-muted-foreground border-t border-white/10">
        © {new Date().getFullYear()} HackForge — All rights reserved.
      </footer>
    </main>
  )
}