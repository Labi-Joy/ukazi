"use client"

import { Container } from "@/components/common/Container"
import { Button } from "@/components/ui/button"
import { Icon } from "@iconify/react"
import { motion } from "framer-motion"

const benefits = [
    "Expert instruction",
    "Global community",
    "Course Updates",
    "Flexible Learning",
]

export function InstructorCTA() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <Container>
                <div className="bg-neutral-50 rounded-[60px] p-8 lg:p-20 relative overflow-hidden border border-neutral-100 shadow-xl">
                    {/* Background abstract shape */}
                    <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/2 h-full bg-brand-primary/5 rounded-l-[100px] -z-0" />

                    <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
                        <div className="space-y-10">
                            <div className="space-y-6">
                                <h2 className="text-4xl lg:text-6xl font-extrabold font-raleway text-neutral-900 leading-tight">
                                    If you have teaching experience, <span className="text-brand-primary">Become an Instructor</span>
                                </h2>
                                <p className="text-neutral-600 font-raleway text-xl">
                                    Join thousands of mentors shaping the future of education while growing their personal brand and income.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                {benefits.map((b) => (
                                    <div key={b} className="flex items-center gap-3">
                                        <div className="size-6 rounded-full bg-brand-primary flex items-center justify-center">
                                            <Icon icon="solar:check-read-bold" className="text-white size-3.5" />
                                        </div>
                                        <span className="font-bold font-raleway text-neutral-700">{b}</span>
                                    </div>
                                ))}
                            </div>

                            <Button className="bg-brand-primary hover:bg-brand-primary/90 text-white font-bold h-16 px-12 rounded-2xl text-xl shadow-lg shadow-brand-primary/20">
                                Join now
                            </Button>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl border-4 border-white">
                                <img
                                    src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=1000&auto=format&fit=crop"
                                    alt="Expert instructor"
                                    className="size-full object-cover"
                                />
                            </div>
                            {/* Floating badge */}
                            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-neutral-100 flex items-center gap-4">
                                <div className="size-12 rounded-xl bg-brand-accent flex items-center justify-center">
                                    <Icon icon="solar:users-group-rounded-bold" className="text-neutral-900 size-6" />
                                </div>
                                <div>
                                    <p className="text-sm font-extrabold font-raleway text-neutral-900">2,000+</p>
                                    <p className="text-xs text-neutral-500">Active Instructors</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
