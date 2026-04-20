"use client"

import { Container } from "@/components/common/Container"
import { Icon } from "@iconify/react"
import { motion } from "framer-motion"

const features = [
    { title: "Flexible and convenient", icon: "solar:clock-circle-linear", desc: "Learn at your own pace from anywhere." },
    { title: "Industry-leading instructors", icon: "solar:users-group-rounded-linear", desc: "Learn from the best professionals in the game." },
    { title: "Career support", icon: "solar:hand-stars-linear", desc: "We help you launch and grow your career." },
]

export function AboutSection() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <Container className="grid lg:grid-cols-2 gap-20 items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative order-2 lg:order-1"
                >
                    <div className="relative z-10 rounded-[60px] overflow-hidden border-8 border-brand-primary/5 shadow-2xl skew-y-2">
                        <img
                            src="https://images.unsplash.com/photo-1544256718-3bcf237f3974?q=80&w=1000&auto=format&fit=crop"
                            alt="Building creative skills"
                            className="size-full object-cover"
                        />
                    </div>
                    {/* Decorative element */}
                    <div className="absolute -bottom-10 -left-10 size-40 bg-brand-accent rounded-full -z-10 blur-2xl opacity-50" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="space-y-10 order-1 lg:order-2"
                >
                    <div className="space-y-4">
                        <span className="text-brand-primary font-bold tracking-widest uppercase text-sm">About Ukazi</span>
                        <h2 className="text-4xl lg:text-5xl font-extrabold font-raleway text-neutral-900 leading-tight">
                            Build Your Creative Skills with our Industry-Leading Instructors
                        </h2>
                        <p className="text-neutral-600 font-raleway text-lg leading-relaxed">
                            Ukazi is more than just a learning platform. We are a community dedicated to empowering the next generation of creative professionals.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {features.map((feature, idx) => (
                            <div key={idx} className="flex gap-6 items-start group">
                                <div className="size-14 rounded-2xl bg-brand-primary/5 flex items-center justify-center shrink-0 group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                                    <Icon icon={feature.icon} className="size-7 text-brand-primary group-hover:text-white transition-colors" />
                                </div>
                                <div className="space-y-1 pt-1">
                                    <h4 className="font-bold font-raleway text-xl text-neutral-900">{feature.title}</h4>
                                    <p className="text-neutral-500 font-raleway">{feature.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </Container>
        </section>
    )
}
