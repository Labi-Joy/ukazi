"use client"

import { Container } from "@/components/common/Container"
import { motion } from "framer-motion"

const testimonials = [
    {
        name: "Labi Joy",
        role: "UI/UX Designer",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
        text: "Ukraine is one of the world's most popular learning platforms, and it's easy to see why. The platform offers a diverse range of courses across various subjects."
    },
    {
        name: "John Doe",
        role: "Web Developer",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop",
        text: "I was able to transition from a non-tech background to a junior developer role in 6 months thanks to the structured path provided by Ukazi."
    },
    {
        name: "Kingsley Liam",
        role: "Product Manager",
        avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop",
        text: "The quality of instructors here is top-notch. They don't just teach theory; they show you how things work in the industry."
    },
    {
        name: "Sarah Johnson",
        role: "Digital Marketer",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
        text: "Ukazi changed my perspective on online learning. The community aspect and teacher support are what make it special."
    }
]

export function Testimonials() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <Container className="space-y-16">
                <div className="text-center space-y-4 max-w-2xl mx-auto">
                    <h2 className="text-4xl lg:text-5xl font-extrabold font-raleway text-neutral-900">
                        See what some <span className="text-brand-primary">students are saying</span>
                    </h2>
                    <p className="text-neutral-500 font-raleway text-lg">
                        Teaching and learning have become easy with Ukazi, learn at your convenience and improve your skill set.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {testimonials.map((t, idx) => (
                        <motion.div
                            key={t.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-brand-primary p-10 rounded-[40px] text-white space-y-8 relative overflow-hidden group shadow-xl shadow-brand-primary/10"
                        >
                            <div className="flex items-center gap-4">
                                <div className="size-16 rounded-full overflow-hidden border-2 border-white/50">
                                    <img src={t.avatar} alt={t.name} className="size-full object-cover" />
                                </div>
                                <div>
                                    <h4 className="font-bold font-raleway text-xl">{t.name}</h4>
                                    <p className="text-white/70 font-raleway text-sm">{t.role}</p>
                                </div>
                            </div>
                            <p className="text-white/90 font-raleway text-lg leading-relaxed italic">
                                "{t.text}"
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="flex justify-center gap-2">
                    <div className="size-4 rounded-full bg-brand-primary" />
                    <div className="size-4 rounded-full bg-brand-primary/20" />
                    <div className="size-4 rounded-full bg-brand-primary/20" />
                </div>
            </Container>
        </section>
    )
}
