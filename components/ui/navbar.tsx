"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Download, Menu } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#themes", label: "Themes" },
  { href: "/#schedule", label: "Schedule" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      hasScrolled ? "bg-background/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
    )}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="text-2xl font-bold font-heading tracking-wider text-gradient">
          HACKFORGE
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(({ href, label }) => (
            <Link key={label} href={href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              {label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-2">
          <Button asChild variant="outline" size="sm">
            <Link href="/brochure.pdf" download>
              <Download className="mr-2 h-4 w-4" />
              Brochure
            </Link>
          </Button>
          <Button asChild variant="outline" size="sm">
            <Link href="/sponsor">Sponsor</Link>
          </Button>
          <Button asChild className="glow-primary" size="sm">
            <Link href="/#register">Register</Link>
          </Button>
        </div>
        <div className="md:hidden flex items-center gap-2">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-4 w-4" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="p-6">
              <div className="grid gap-4 py-6">
                <Link href="/" className="text-2xl font-bold font-heading text-gradient" onClick={handleLinkClick}>
                  HACKFORGE
                </Link>
                {navLinks.map(({ href, label }) => (
                  <Link
                    key={label}
                    href={href}
                    className="block text-base font-medium hover:text-primary"
                    onClick={handleLinkClick}
                  >
                    {label}
                  </Link>
                ))}
                <div className="flex flex-col gap-4 pt-4">
                  <Button asChild>
                    <Link href="/#register" onClick={handleLinkClick}>Register</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/sponsor" onClick={handleLinkClick}>Sponsor</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/brochure.pdf" download onClick={handleLinkClick}>
                      <Download className="mr-2 h-4 w-4" />
                      Download Brochure
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}