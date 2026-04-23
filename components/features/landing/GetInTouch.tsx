"use client"

import { Container } from "@/components/common/Container"
import { motion } from "framer-motion"
import Image from "next/image"

const contacts = [
    {
        value: "2348156442585",
        icon: "/icons/git1.svg"
    },
    {
        value: "ukazilearn@gmail.com",
        icon: "/icons/git2.svg"
    },
    {
        value: "@ukazilearn",
        icon: "/icons/git3.svg"
    },
]

export function GetInTouch() {
    return (
        <section id="contact" className="py-32 bg-gradient-to-b from-brand-primary to-white overflow-hidden">
            <Container className="space-y-20">
                <div className="text-center space-y-4 max-w-2xl mx-auto">
                    <h2 className="text-4xl lg:text-6xl font-extrabold font-raleway text-white">
                        Get in Touch
                    </h2>
                    <p className="text-white/90 font-raleway text-lg max-w-lg mx-auto">
                        Feel free to reach out to us. We are available to attend to your requests 24/7
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {contacts.map((c, idx) => (
                        <motion.div
                            key={c.value}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-10 rounded-xl text-center space-y-6 shadow-2xl shadow-black/5 hover:shadow-black/10 transition-all border border-neutral-100"
                        >
                            <div className="flex items-center justify-center mx-auto">
                                <Image
                                    src={c.icon}
                                    alt="contact icon"
                                    width={80}
                                    height={80}
                                    className="object-contain"
                                />
                            </div>
                            <p className="font-bold font-raleway text-lg lg:text-xl text-neutral-900">{c.value}</p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
