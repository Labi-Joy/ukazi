"use client"

import { Container } from "@/components/common/Container"
import { motion } from "framer-motion"
import Image from "next/image"

const categories = [
    { title: "3D Modelling and Animation design", icon: "/icons/3d-icon1.svg" },
    { title: "Graphic Design and Branding", icon: "/icons/graphic-icon2.svg" },
    { title: "Web Development and Design", icon: "/icons/web-icon3.svg" },
    { title: "UI/UX Design", icon: "/icons/uiux-icon4.svg" },
    { title: "Data Analysis", icon: "/icons/data-icon5.svg" },
    { title: "Email Marketing", icon: "/icons/email-icon6.svg" },
    { title: "Video Editing", icon: "/icons/vid-icon7.svg" },
    { title: "Hand Made Skills", icon: "/icons/hand-icon8.svg" },
]

export function CategoryGrid() {
    return (
        <section className="py-24 bg-[#2B2B2B] text-white overflow-hidden">
            <Container className="space-y-16">
                <div className="text-center space-y-4 max-w-2xl mx-auto">
                    <h2 className="text-4xl lg:text-5xl font-extrabold font-raleway">
                        Explore Over 100 courses
                    </h2>
                    <p className="text-neutral-300 font-raleway text-lg">
                        Discover a variety of courses across different fields, designed to help you learn and grow.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((cat, idx) => (
                        <motion.div
                            key={cat.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className={`bg-white p-10 flex flex-col items-center justify-center text-center space-y-6 transition-all duration-300 group cursor-pointer shadow-lg
                                ${idx === 0 ? "rounded-[80px] rounded-tr-2xl rounded-br-2xl rounded-bl-2xl" : ""}
                                ${idx === categories.length - 1 ? "rounded-2xl rounded-br-[80px]" : ""}
                                ${idx !== 0 && idx !== categories.length - 1 ? "rounded-2xl" : ""}
                                hover:shadow-2xl hover:-translate-y-1`}
                        >
                            <div className="relative size-20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                                <Image
                                    src={cat.icon}
                                    alt={cat.title}
                                    width={80}
                                    height={80}
                                    className="object-contain"
                                />
                            </div>
                            <h4 className="font-bold font-raleway text-lg leading-tight text-neutral-900 group-hover:text-brand-primary transition-colors">
                                {cat.title}
                            </h4>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center">
                    <button
                        onClick={() => window.location.href = '/register'}
                        className="bg-brand-primary hover:bg-brand-primary/90 text-white font-bold h-14 px-12 rounded-lg text-lg transition-all shadow-xl shadow-brand-primary/20"
                    >
                        Get Started
                    </button>
                </div>
            </Container>
        </section>
    )
}
