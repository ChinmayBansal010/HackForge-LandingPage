import { Mail, MapPin, Link2, Phone } from "lucide-react"
import Link from "next/link"

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl md:text-3xl font-semibold">
          Contact <span className="text-primary">Us</span>
        </h2>

        <div className="mx-auto mt-8 grid max-w-4xl grid-cols-1 sm:grid-cols-2 gap-4">
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
              <Phone className="text-accent" aria-hidden />
              <div>
                <div className="text-sm text-muted-foreground">Phone</div>
                <div className="flex flex-col text-sm">
                  <Link href="tel:+917428944760" className="hover:underline">+91 7428944760</Link>
                  <Link href="tel:+91971170686" className="hover:underline">+91 971170686</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="glass rounded-lg p-5">
            <div className="flex items-center gap-3">
              <MapPin className="text-accent" aria-hidden />
              <div>
                <div className="text-sm text-muted-foreground">Location</div>
                <Link
                  href="https://www.google.com/maps/place/Manav+Rachna+International+Institute+Of+Research+And+Studies/@28.361533,77.309332,15z/data=!4m6!3m5!1s0x390cdd7753158047:0x4249a263f253a41!8m2!3d28.361533!4d77.309332!16s%2Fg%2F1td_1q1b?hl=en&entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  MRIIRS, Faridabad
                </Link>
              </div>
            </div>
          </div>

          <div className="glass rounded-lg p-5">
            <div className="flex items-start gap-3">
              <Link2 className="mt-0.5 text-accent" aria-hidden />
              <div>
                <div className="text-sm text-muted-foreground">Socials</div>
                <div className="flex gap-3 text-sm">
                  <Link href="https://www.instagram.com/hackforge_mr/" aria-label="Instagram" className="hover:text-accent" target="_blank" rel="noopener noreferrer">
                    Instagram
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