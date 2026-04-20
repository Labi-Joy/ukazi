"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/common/Logo"
import { Container } from "@/components/common/Container"
import { cn } from "@/lib/utils"

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/courses", label: "Courses" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
]

export function Navbar() {
    const pathname = usePathname()

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <Container className="flex h-20 items-center justify-between">
                <Logo />

                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "text-base font-medium transition-colors hover:text-brand-primary font-raleway",
                                pathname === link.href ? "text-brand-primary" : "text-neutral-900"
                            )}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <Button variant="ghost" asChild className="hidden sm:flex font-semibold">
                        <Link href="/login">Sign In</Link>
                    </Button>
                    <Button className="bg-brand-primary hover:bg-brand-primary/90 text-white font-bold rounded-xl px-6" asChild>
                        <Link href="/register">Join Ukazi</Link>
                    </Button>
                </div>
            </Container>
        </header>
    )
}
