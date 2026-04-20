"use client"

import { Container } from "@/components/common/Container"
import { Icon } from "@iconify/react"
import { motion } from "framer-motion"

const reasons = [
    { title: "Expert Instruction", desc: "Learn from the best in the industry.", icon: "solar:pensiun-bold" },
    { title: "Global Community", desc: "Connect with students worldwide.", icon: "solar:globus-bold" },
    { title: "Course Updates", desc: "Always stay ahead with latest trends.", icon: "solar:refresh-bold" },
    { title: "Flexible Learning", desc: "Your schedule, your pace.", icon: "solar:clock-circle-bold" },
]

export function WhyChoose() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <Container className="grid lg:grid-cols-2 gap-20 items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 lg:grid-cols-2 gap-4"
                >
                    <div className="space-y-4 pt-12">
                        <div className="rounded-[40px] overflow-hidden aspect-square border-4 border-white shadow-xl">
                            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=400&auto=format&fit=crop" className="size-full object-cover" alt="Group study" />
                        </div>
                        <div className="rounded-[40px] overflow-hidden aspect-video border-4 border-white shadow-xl">
                            <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=400&auto=format&fit=crop" className="size-full object-cover" alt="Remote learning" />
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="rounded-[40px] overflow-hidden aspect-video border-4 border-white shadow-xl">
                            <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=400&auto=format&fit=crop" className="size-full object-cover" alt="Collaboration" />
                        </div>
                        <div className="rounded-[40px] overflow-hidden aspect-square border-4 border-white shadow-xl">
                            <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=400&auto=format&fit=crop" className="size-full object-cover" alt="Graduation" />
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="space-y-12"
                >
                    <div className="space-y-4">
                        <h2 className="text-4xl lg:text-5xl font-extrabold font-raleway text-neutral-900 leading-tight">
                            Why choose <span className="text-brand-primary">Ukazi?</span>
                        </h2>
                        <p className="text-neutral-500 font-raleway text-lg leading-relaxed">
                            Join thousands of students who have transformed their lives through Ukazi.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {reasons.map((r, idx) => (
                            <div key={idx} className="flex gap-6 items-center p-6 rounded-3xl bg-neutral-50 border border-neutral-100 group hover:border-brand-primary/20 transition-all">
                                <div className="size-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center shrink-0">
                                    <Icon icon={r.icon} className="size-7 text-brand-primary" />
                                </div>
                                <div className="space-y-1">
                                    <h4 className="font-bold font-raleway text-lg text-neutral-900">{r.title}</h4>
                                    <p className="text-neutral-500 text-sm font-raleway">{r.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="bg-neutral-900 hover:bg-neutral-800 text-white font-bold h-16 px-12 rounded-2xl text-xl transition-all shadow-xl">
                        Explore all
                    </button>
                </motion.div>
            </Container>
        </section>
    )
}
