"use client"

import Link from "next/link"
import { Container } from "@/components/common/Container"
import { Logo } from "@/components/common/Logo"
import { Button } from "@/components/ui/button"
import { Icon } from "@iconify/react"

const socialLinks = [
    { icon: "mdi:instagram", href: "https://instagram.com/ukazilearn", label: "Instagram" },
    { icon: "mdi:facebook", href: "#", label: "Facebook" },
    { icon: "mdi:linkedin", href: "#", label: "LinkedIn" },
    { icon: "mdi:twitter", href: "#", label: "Twitter" },
]

const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/courses", label: "Courses" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
]

export function Footer() {
    return (
        <footer className="bg-neutral-900 py-16 text-white">
            <Container>
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 md:grid-cols-2">
                    {/* Logo and Info */}
                    <div className="space-y-6">
                        <Logo variant="light" />
                        <p className="text-neutral-300 font-raleway text-sm leading-relaxed max-w-xs">
                            Ukazi is an innovative technology platform dedicated to shaping the future of work.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <Link
                                    key={social.label}
                                    href={social.href}
                                    className="size-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-brand-primary transition-colors"
                                >
                                    <Icon icon={social.icon} className="size-5" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6 lg:pl-12">
                        <h4 className="text-lg font-bold font-raleway">Links</h4>
                        <nav className="flex flex-col gap-4">
                            {quickLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-neutral-400 hover:text-white transition-colors font-raleway text-sm"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Newsletter */}
                    <div className="lg:col-span-2 space-y-6">
                        <h4 className="text-lg font-bold font-raleway">Subscribe to our newsletter.</h4>
                        <p className="text-neutral-400 font-raleway text-sm">Stay up to date about UKAZI</p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 bg-neutral-800 border-none rounded-xl px-6 py-3 text-sm focus:ring-2 focus:ring-brand-primary outline-none"
                            />
                            <Button className="bg-brand-primary hover:bg-brand-primary/90 rounded-xl px-8 py-3 h-auto font-bold">
                                Subscribe
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-neutral-800 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-neutral-500 text-xs font-raleway">
                        Copyright © 2024 Ukazi. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link href="/terms" className="text-neutral-500 hover:text-white text-xs font-raleway transition-colors">
                            Terms & Conditions
                        </Link>
                        <Link href="/privacy" className="text-neutral-500 hover:text-white text-xs font-raleway transition-colors">
                            Privacy Policy
                        </Link>
                    </div>
                </div>
            </Container>
        </footer>
    )
}
