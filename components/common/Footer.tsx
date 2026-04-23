"use client"

import Link from "next/link"
import { Container } from "@/components/common/Container"
import { Logo } from "@/components/common/Logo"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/courses", label: "Courses" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
]

const contactInfo = [
    { icon: "/icons/phone.svg", text: "2348156442585", alt: "Phone" },
    { icon: "/icons/mail.svg", text: "ukazilearn@gmail.com", alt: "Mail" },
    { icon: "/icons/ig.svg", text: "@ukazilearn", alt: "Instagram" },
]

export function Footer() {
    return (
        <footer className="relative bg-[#1A1A1A] mt-40">
            <Container className="relative">
                {/* Floating Newsletter Card (Half-in, Half-out) */}
                <div className="absolute right-0 top-0 -translate-y-1/2 w-full lg:w-[45%] px-0 z-20">
                    <div className="bg-white rounded-[24px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] p-10 lg:p-14 text-center space-y-10 border border-neutral-100">
                        <div className="space-y-4">
                            <h3 className="text-2xl lg:text-3xl font-extrabold font-raleway text-neutral-900 leading-tight">
                                Subscribe to our newsletter.
                            </h3>
                            <p className="text-brand-primary text-lg font-bold font-raleway">
                                Stay up to date about UKAZI
                            </p>
                        </div>

                        <div className="space-y-5 max-w-sm mx-auto">
                            <input
                                type="email"
                                placeholder="Enter Your Email"
                                className="w-full bg-white border-2 border-[#F3E8FF] rounded-2xl px-6 py-5 text-base font-raleway text-neutral-600 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-all text-center"
                            />
                            <Button className="w-full bg-brand-primary hover:bg-brand-primary/90 rounded-2xl py-5 h-auto text-lg font-bold font-raleway transition-all shadow-lg shadow-brand-primary/20">
                                Subscribe
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start pt-3 lg:pt-6 pb-20">
                    {/* Left Side: Logo and Company Info (Sits well in black bg) */}
                    <div className="space-y-10">
                        <Logo variant="light" />
                        <p className="text-neutral-400 font-raleway text-lg leading-relaxed max-w-sm">
                            Ukazi is an innovative technology platform dedicated to shaping the future of work by equipping global talent with essential skills, resources, and mobility options for success in a dynamic job market.
                        </p>

                        {/* Navigation Links */}
                        <nav className="flex flex-wrap gap-x-10 gap-y-4">
                            {quickLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="text-white hover:text-brand-primary transition-colors font-bold font-raleway text-lg underline underline-offset-8 decoration-white/20"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
            </Container>

            {/* Horizontal Line - Full Width */}
            <div className="w-full h-px bg-white/10" />

            <Container className="py-12">
                {/* Bottom Bar */}
                <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
                    <p className="text-neutral-400 font-medium font-raleway text-lg">
                        Copyright 2024
                    </p>

                    <div className="flex flex-col sm:flex-row gap-x-12 gap-y-6">
                        {contactInfo.map((info, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                                <div className="size-5 flex items-center justify-center opacity-80">
                                    <Image
                                        src={info.icon}
                                        alt={info.alt}
                                        width={20}
                                        height={20}
                                        className="w-full h-auto"
                                    />
                                </div>
                                <span className="text-neutral-400 font-medium font-raleway text-lg tracking-tight">
                                    {info.text}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </footer>
    )
}
