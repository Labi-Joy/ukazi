"use client"

import { Container } from "@/components/common/Container"
import { Icon } from "@iconify/react"
import { motion } from "framer-motion"

const categories = [
    { title: "UI/UX Design", icon: "solar:palet-linear" },
    { title: "Backend Development", icon: "solar:server-linear" },
    { title: "Frontend Development", icon: "solar:mask-h-linear" },
    { title: "Cloud Computing", icon: "solar:cloud-linear" },
    { title: "Mobile Development", icon: "solar:smartphone-linear" },
    { title: "Game Development", icon: "solar:gamepad-linear" },
    { title: "Data Science", icon: "solar:graph-up-linear" },
    { title: "Cyber Security", icon: "solar:shield-check-linear" },
]

export function CategoryGrid() {
    return (
        <section className="py-24 bg-neutral-900 text-white overflow-hidden">
            <Container className="space-y-16">
                <div className="text-center space-y-4 max-w-2xl mx-auto">
                    <h2 className="text-4xl lg:text-5xl font-extrabold font-raleway">
                        Explain Our <span className="text-brand-secondary">Best Categories</span>
                    </h2>
                    <p className="text-neutral-400 font-raleway text-lg">
                        Explore our top-rated categories and find the one that fits your career goals perfectly.
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((cat, idx) => (
                        <motion.div
                            key={cat.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-neutral-800 p-8 rounded-[32px] text-center space-y-6 hover:bg-brand-primary transition-all duration-300 group cursor-pointer border border-neutral-700/50"
                        >
                            <div className="size-16 rounded-2xl bg-neutral-700 flex items-center justify-center mx-auto group-hover:bg-white/20 transition-colors">
                                <Icon icon={cat.icon} className="text-brand-primary size-10 group-hover:text-white transition-colors" />
                            </div>
                            <h4 className="font-bold font-raleway text-lg leading-tight">
                                {cat.title}
                            </h4>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center">
                    <button className="bg-brand-primary hover:bg-brand-primary/90 text-white font-bold h-14 px-10 rounded-2xl text-lg transition-all shadow-xl shadow-brand-primary/20">
                        View all
                    </button>
                </div>
            </Container>
        </section>
    )
}
