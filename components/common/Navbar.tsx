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
        <header className="sticky top-0 z-50 w-full bg-white py-2">
            <Container className="flex h-20 items-center justify-between">
                <Logo />

                <nav className="hidden md:flex justify-between gap-20">
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
                    <Button variant="ghost" className="font-bold font-raleway text-neutral-900 hover:text-brand-primary" asChild>
                        <Link href="/login">Log in</Link>
                    </Button>
                    <Button className="bg-brand-primary hover:bg-brand-primary text-white font-bold rounded-none px-9 py-6" asChild>
                        <Link href="/register">Sign up</Link>
                    </Button>
                </div>
            </Container>
        </header>
    )
}
