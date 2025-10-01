import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Cta() {
  return (
    <section id="register" className="py-16 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Ready to <span className="text-primary">Build</span>?
        </h2>

        <div className="mt-8 flex flex-col items-center justify-center gap-8 md:flex-row">
          <div className="flex flex-col items-center gap-3">
            <Button
              asChild
              className="bg-accent text-accent-foreground glow-accent hover:brightness-110 text-base px-6 py-6"
            >
              <Link
                href="https://forms.gle/HJV1hNg5epM2rtUA8"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Register Now"
              >
                Register Now
              </Link>
            </Button>
            <div className="text-xs text-muted-foreground">Scan or tap to register</div>
          </div>

          <div className="rounded-lg border border-accent/30 p-3 glass">
            {/* QR image placed next to the register button */}
            <img src="/images/register-qr.jpg" alt="Registration QR code" className="h-40 w-40 object-contain" />
          </div>

          <div className="flex flex-col items-center gap-3">
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground glow-primary text-base px-6 py-6 bg-transparent"
            >
              <Link href="mailto:thehackforge.team@gmail.com" aria-label="Become a Sponsor">
                Become a Sponsor
              </Link>
            </Button>
            <div className="text-xs text-muted-foreground">thehackforge.team@gmail.com</div>
          </div>
        </div>
      </div>
    </section>
  )
}
