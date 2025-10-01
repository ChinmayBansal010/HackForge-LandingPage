// components/sections/cta.tsx

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

export default function Cta() {
  return (
    <section id="register" className="py-16 md:py-20 border-t border-white/10">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Ready to Forge the Future?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Secure your spot at HackForge 2025. Register your team or reach out to us for sponsorship opportunities.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-8 md:flex-row">
          {/* Registration CTA */}
          <div className="flex flex-col items-center gap-4 rounded-xl border border-primary/50 bg-white/5 p-8 shadow-lg shadow-primary/10">
            <h3 className="text-xl font-semibold">Join as a Participant</h3>
            <p className="text-sm text-muted-foreground">Click the button or scan the code</p>
            <div className="flex items-center gap-4">
              <Button asChild size="lg" className="glow-primary">
                <Link href="https://forms.gle/HJV1hNg5epM2rtUA8" target="_blank" rel="noopener noreferrer">
                  Register Now
                </Link>
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <div className="cursor-pointer rounded-lg bg-white p-1.5 transition-transform hover:scale-105">
                    <img src="/images/register-qr.jpg" alt="Registration QR code" className="h-12 w-12" />
                  </div>
                </DialogTrigger>
                <DialogContent className="w-auto max-w-xs p-4 sm:max-w-md">
                  <img src="/images/register-qr.jpg" alt="Registration QR code" className="h-auto w-full rounded-lg" />
                  <p className="mt-2 text-center text-sm text-muted-foreground">Scan to Register for HackForge 2025</p>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {/* Sponsorship CTA */}
          <div className="flex flex-col items-center gap-4">
            <h3 className="text-xl font-semibold">Become a Sponsor</h3>
            <Button asChild variant="outline" size="lg">
              <Link href="mailto:thehackforge.team@gmail.com">Contact Us</Link>
            </Button>
            <p className="text-xs text-muted-foreground">thehackforge.team@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  )
}