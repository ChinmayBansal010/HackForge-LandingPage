import { Mail, MapPin, Link2 } from "lucide-react"
import Link from "next/link"

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl md:text-3xl font-semibold">
          Contact <span className="text-primary">Us</span>
        </h2>

        <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="glass rounded-lg p-5">
            <div className="flex items-center gap-3">
              <Mail className="text-accent" aria-hidden />
              <div>
                <div className="text-sm text-muted-foreground">Email</div>
                <Link href="mailto:thehackforge.team@gmail.com" className="hover:underline">
                  thehackforge.team@gmail.com
                </Link>
              </div>
            </div>
          </div>

          <div className="glass rounded-lg p-5">
            <div className="flex items-center gap-3">
              <MapPin className="text-accent" aria-hidden />
              <div>
                <div className="text-sm text-muted-foreground">Location</div>
                <div className="">MRIIRS, Faridabad</div>
              </div>
            </div>
          </div>

          <div className="glass rounded-lg p-5">
            <div className="flex items-start gap-3">
              <Link2 className="mt-0.5 text-accent" aria-hidden />
              <div>
                <div className="text-sm text-muted-foreground">Socials</div>
                <div className="flex gap-3 text-sm">
                  <Link href="#" aria-label="LinkedIn" className="hover:text-accent">
                    LinkedIn
                  </Link>
                  <Link href="#" aria-label="Instagram" className="hover:text-accent">
                    Instagram
                  </Link>
                  <Link href="#" aria-label="Twitter" className="hover:text-accent">
                    Twitter
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          For queries, partnerships, or support, feel free to reach out.
        </p>
      </div>
    </section>
  )
}
