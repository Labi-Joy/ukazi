"use client"

import { Container } from "@/components/common/Container"
import { motion } from "framer-motion"
import Image from "next/image"

export function AboutSection() {
    return (
        <section id="about" className="py-24 bg-white overflow-hidden">
            <Container className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Content Side */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <div className="space-y-6">
                        <h2 className="text-4xl lg:text-5xl font-extrabold font-raleway text-neutral-900 leading-tight">
                            About <span className="text-brand-primary">Ukazi</span>
                        </h2>
                        <p className="text-neutral-700 font-raleway text-lg leading-relaxed">
                            Ukazi is an innovative technology platform dedicated to shaping the future of work by equipping global talent with essential skills, resources, and mobility options for success in a dynamic job market. With tools and programs that bridge the gap between talent and opportunities, Ukazi helps individuals at every career stage—from skill-building to global employment—become job-ready professionals.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="space-y-3">
                            <h3 className="text-xl font-bold font-raleway text-brand-primary">Mission</h3>
                            <p className="text-neutral-700 font-raleway leading-relaxed">
                                Ukazi's mission is to empower individuals to reach their full potential, foster continuous career growth, and enable seamless global mobility through advanced technology and partnerships.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <h3 className="text-xl font-bold font-raleway text-neutral-800">Impact</h3>
                            <ul className="space-y-3 text-neutral-700 font-raleway list-none">
                                <li className="flex items-start gap-2">
                                    <span className="shrink-0 mt-1.5 size-1.5 rounded-full bg-neutral-900" />
                                    <span>
                                        <span className="font-bold">Enhancing Employability:</span> Providing skills to increase job readiness.
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="shrink-0 mt-1.5 size-1.5 rounded-full bg-neutral-900" />
                                    <span>
                                        <span className="font-bold">Supporting Talent Development:</span> Personalized learning, mentorship, and industry exposure.
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="shrink-0 mt-1.5 size-1.5 rounded-full bg-neutral-900" />
                                    <span>
                                        <span className="font-bold">Facilitating Global Mobility:</span> Connecting talent with employers worldwide.
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <p className="text-neutral-700 font-raleway leading-relaxed">
                        <span className="font-bold">Join Us:</span> Be part of Ukazi's mission to connect talent and opportunity, support professional growth, and reshape the global job market.
                    </p>
                </motion.div>

                {/* Visual Side */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative flex justify-center lg:justify-end"
                >
                    <div className="relative w-full max-w-[500px] aspect-square lg:aspect-auto lg:h-[600px]">
                        {/* Main Image with rounded corners */}
                        <div className="relative h-full w-full rounded-[40px] overflow-hidden">
                            <Image
                                src="/images/about-img.jpg"
                                alt="About Ukazi"
                                fill
                                className="object-cover"
                            />
                            {/* Purple Overlay Shape */}
                            <div className="absolute inset-x-0 bottom-0">
                                <Image
                                    src="/images/over-about-img.png"
                                    alt="overlay"
                                    width={1000}
                                    height={400}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>

                        {/* Floating Circular Video/Image Element */}
                        <div className="absolute -bottom-8 -left-8 lg:-left-20 w-48 h-48 lg:w-64 lg:h-64 z-20">
                            <div className="relative w-full h-full">

                                {/* White Outer Circle Ring (Now In Front of Dashed) */}
                                <div className="absolute inset-0 z-10 flex items-center justify-center">
                                    <Image
                                        src="/images/about-white-circle.png"
                                        alt="white circle"
                                        width={240}
                                        height={240}
                                        className="w-[92%] h-[92%] object-contain"
                                    />
                                </div>

                                {/* Dashed Decorative Rotating Circle (Now Behind) */}
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 z-0"
                                >
                                    <Image
                                        src="/images/about-dashed-circle.png"
                                        alt="dashed circle"
                                        fill
                                        className="object-contain scale-100"
                                    />
                                </motion.div>

                                {/* Actual Circular Image (On Top) */}
                                <div className="absolute inset-0 z-20 flex items-center justify-center">
                                    <div className="w-[85%] h-[85%] rounded-full overflow-hidden relative border-4 border-white shadow-lg">
                                        <Image
                                            src="/images/about-vid-play.png"
                                            alt="Video preview"
                                            fill
                                            className="object-cover"
                                        />
                                        {/* Play Button Overlay */}
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors hover:bg-black/20 cursor-pointer group">
                                            <div className="size-10 lg:size-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 transform group-hover:scale-110 transition-transform">
                                                <Image
                                                    src="/icons/about-vid-play-icon.svg"
                                                    alt="Play"
                                                    width={32}
                                                    height={32}
                                                    className="w-6 h-6 lg:w-8 lg:h-8 translate-x-0.5"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </Container>
        </section>
    )
}
