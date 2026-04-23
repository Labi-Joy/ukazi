"use client"

import { Container } from "@/components/common/Container"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"

export function Hero() {
    return (
        <section className="relative pt-0 lg:pt-1 lg:pb-0 overflow-hidden bg-white">
            <Container className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-5 lg: pt-[-20px] gap-5"
                >
                    <div className="space-y-3 lg: pt-[-20px]">
                        <h1 className="text-5xl lg:text-[70px] font-extrabold font-raleway leading-[1]">
                            <span className="text-brand-primary">Master a Unique</span> <br />
                            <span className="text-brand-primary">Creative skill</span> <span className="text-[#333333]">and</span> <br />
                            <span className="text-[#333333]">Launch a New Career.</span>
                        </h1>
                        <p className="text-lg text-neutral-600 font-raleway leading-relaxed max-w-lg">
                            Explore a world of courses designed to help you grow—at your pace, on your schedule, and tailored to your goals. From foundational skills to advanced expertise.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button className="bg-brand-primary hover:bg-brand-primary text-white font-bold h-16 px-12 rounded-none text-xl transition-transform active:scale-95 shadow-xl shadow-brand-primary/20" asChild>
                            <Link href="/register">Get Started</Link>
                        </Button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative flex justify-center lg:justify-end min-h-[500px]"
                >
                    {/* Background Bars */}
                    <div className="absolute inset-0 -z-10 flex justify-center gap-0">
                        <img src="/images/bar-left1.png" alt="" className="absolute left-[-110px] bottom-0 h-[88%] object-contain" />
                        <img src="/images/bar-left2.png" alt="" className="absolute left-[-60px] top-60 h-[95%] object-contain" />
                        <img src="/images/bar-right1.png" alt="" className="absolute right-[-40px] bottom-5 h-[85%] object-contain" />
                        <img src="/images/bar-right2.png" alt="" className="absolute right-[-120px] top-80 h-[70%] object-contain" />
                    </div>

                    {/* Hero Image Container */}
                    <div className="relative z-10 w-full max-w-[550px]">
                        <img
                            src="/images/hero-pic.png"
                            alt="Student with books"
                            className="w-full relative z-20"
                        />

                        {/* Floating Cards */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-[45%] -left-16 lg:-left-28 z-30 bg-white/90 backdrop-opacity-10 p-6 drop-shadow-xl/50 border border-white/90 shadow-[−8px_8px_24px_rgba(0,0,0,0.6)] min-w-[240px]"
                        >
                            <p className="text-base font-bold font-raleway text-brand-primary leading-tight text-center">
                                Professional and <br />
                                confident mentors
                            </p>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-75 -right-4 lg:-right-12 z-30 bg-white/90 backdrop-opacity-10 p-6 drop-shadow-xl/50 border border-white/90 shadow-[−8px_8px_24px_rgba(0,0,0,0.6)] min-w-[240px]"
                        >
                            <p className="text-base font-bold font-raleway text-brand-primary leading-tight text-center">
                                Easy and Fast <br />
                                Learning process
                            </p>
                        </motion.div>
                    </div>

                </motion.div>
            </Container>
        </section>
    )
}
