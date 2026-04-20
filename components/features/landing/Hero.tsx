"use client"

import { Container } from "@/components/common/Container"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Icon } from "@iconify/react"

export function Hero() {
    return (
        <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 overflow-hidden bg-white">
            <Container className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-8"
                >
                    <h1 className="text-5xl lg:text-[64px] font-extrabold font-raleway text-neutral-900 leading-[1.1]">
                        Master a Unique <br />
                        <span className="text-brand-primary">Creative skill</span> and <br />
                        Launch a New Career
                    </h1>
                    <p className="text-lg lg:text-xl text-neutral-600 font-raleway leading-relaxed max-w-xl">
                        Ukazi is an innovative technology platform dedicated to shaping the future of work. Discover a variety of courses across different fields, designed to help you learn and grow in your career.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button className="bg-brand-primary hover:bg-brand-primary/90 text-white font-bold h-16 px-12 rounded-2xl text-xl shadow-lg shadow-brand-primary/20">
                            Get Started
                        </Button>
                    </div>

                    {/* Student Avatars Group */}
                    <div className="bg-brand-primary/5 rounded-full p-2 pr-6 inline-flex items-center gap-4 border border-brand-primary/10">
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="size-10 rounded-full border-2 border-white overflow-hidden shadow-sm">
                                    <img
                                        src={`https://images.unsplash.com/photo-${i === 1 ? '1544005313-94ddf0286df2' : i === 2 ? '1506794778202-cad84cf45f1d' : i === 3 ? '1599566150163-29194dcaad36' : '1580489944761-15a19d654956'}?q=80&w=100&auto=format&fit=crop`}
                                        alt="Student"
                                        className="size-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                        <p className="text-sm font-bold font-raleway text-neutral-900">
                            10,000+ <span className="font-medium text-neutral-500">students already joined</span>
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative"
                >
                    {/* Background Shapes */}
                    <div className="absolute -top-10 -right-10 w-[120%] h-[120%] bg-brand-primary/5 rounded-[100px] rotate-[15deg] -z-10" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-brand-primary/10 rounded-full blur-3xl -z-10" />

                    {/* Primary Image Container */}
                    <div className="relative z-10 w-full aspect-[4/5] rounded-[40px] overflow-hidden border-8 border-white shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop"
                            alt="Master creative skills"
                            className="size-full object-cover"
                        />

                        {/* Floating Badges */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute bottom-10 -left-10 bg-white p-5 rounded-2xl shadow-xl border border-neutral-100 flex items-center gap-4"
                        >
                            <div className="size-12 rounded-xl bg-brand-accent flex items-center justify-center">
                                <Icon icon="solar:star-bold" className="text-neutral-900 size-6" />
                            </div>
                            <div>
                                <p className="text-sm font-extrabold font-raleway text-neutral-900">Industry Leaders</p>
                                <p className="text-xs text-neutral-500">Expert mentors only</p>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute top-10 -right-10 bg-white p-5 rounded-2xl shadow-xl border border-neutral-100 flex items-center gap-4"
                        >
                            <div className="size-12 rounded-xl bg-brand-primary flex items-center justify-center">
                                <Icon icon="solar:medal-star-bold" className="text-white size-6" />
                            </div>
                            <div>
                                <p className="text-sm font-extrabold font-raleway text-neutral-900">Certificate</p>
                                <p className="text-xs text-neutral-500">Upon completion</p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </Container>
        </section>
    )
}
