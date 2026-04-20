"use client"

import { Container } from "@/components/common/Container"
import { Icon } from "@iconify/react"
import { motion } from "framer-motion"

const contacts = [
    { label: "Phone Number", value: "+234 812 345 6789", icon: "solar:phone-bold", color: "bg-brand-primary" },
    { label: "Email Address", value: "hello@ukazi.com", icon: "solar:letter-bold", color: "bg-brand-accent" },
    { label: "Our Location", value: "Lagos, Nigeria", icon: "solar:map-point-bold", color: "bg-neutral-900" },
]

export function GetInTouch() {
    return (
        <section className="py-24 bg-brand-primary/5 overflow-hidden">
            <Container className="space-y-16">
                <div className="text-center space-y-4 max-w-2xl mx-auto">
                    <h2 className="text-4xl lg:text-5xl font-extrabold font-raleway text-neutral-900">
                        Get In <span className="text-brand-primary">Touch</span>
                    </h2>
                    <p className="text-neutral-500 font-raleway text-lg">
                        We're here to help. Reach out to us through any of these channels.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {contacts.map((c, idx) => (
                        <motion.div
                            key={c.label}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-10 rounded-[40px] text-center space-y-6 shadow-xl shadow-brand-primary/5 hover:shadow-brand-primary/10 transition-all border border-neutral-100"
                        >
                            <div className={`size-20 rounded-3xl ${c.color} flex items-center justify-center mx-auto text-white shadow-lg`}>
                                <Icon icon={c.icon} className="size-10" />
                            </div>
                            <div className="space-y-2">
                                <h4 className="font-extrabold font-raleway text-neutral-400 text-sm uppercase tracking-widest">{c.label}</h4>
                                <p className="font-bold font-raleway text-xl text-neutral-900">{c.value}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
