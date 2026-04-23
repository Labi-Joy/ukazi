"use client"

import { Container } from "@/components/common/Container"
import { motion } from "framer-motion"
import Image from "next/image"

const reasons = [
    {
        title: "Training From Experts",
        desc: "Learn directly from industry leaders with practical, in-depth training.",
        icon: "/icons/why-icon1.svg"
    },
    {
        title: "Short Courses",
        desc: "Flexible, focused courses designed to fit your schedule.",
        icon: "/icons/why-icon2.svg"
    },
    {
        title: "Learning Resources",
        desc: "Comprehensive resources to support your learning journey.",
        icon: "/icons/why-icon3.svg"
    },
    {
        title: "24/7 Support",
        desc: "Our dedicated Mentors are available 24/7 to assist you every step of the way",
        icon: "/icons/why-icon4.svg"
    },
]

export function WhyChoose() {
    return (
        <section id="why-choose" className="py-24 bg-white overflow-hidden">
            <Container className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Image Collage Side */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative rounded-[60px] overflow-hidden bg-neutral-100 aspect-square lg:aspect-auto lg:h-[600px] grid grid-cols-2 grid-rows-2 gap-2 p-2"
                >
                    <div className="relative col-span-1 row-span-1 overflow-hidden rounded-tl-[50px] rounded-bl-xl rounded-tr-xl rounded-br-xl">
                        <Image
                            src="/images/why-img1.png"
                            alt="Student studying"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="relative col-span-1 row-span-1 overflow-hidden rounded-tr-[50px] rounded-tl-xl rounded-bl-xl rounded-br-xl">
                        <Image
                            src="/images/why-img2.png"
                            alt="Hands at desk"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="relative col-span-2 row-span-1 overflow-hidden rounded-b-[50px] rounded-t-xl">
                        <Image
                            src="/images/why-img3.png"
                            alt="Group study session"
                            fill
                            className="object-cover"
                        />
                    </div>
                </motion.div>

                {/* Content Side */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="space-y-10"
                >
                    <div className="space-y-4">
                        <h2 className="text-4xl lg:text-5xl font-extrabold font-raleway text-neutral-900 leading-tight">
                            Why choose <span className="text-brand-primary">Ukazi</span>
                        </h2>
                        <p className="text-neutral-600 font-raleway text-lg leading-relaxed max-w-xl">
                            Why should you choose to make use of Ukazi learn outstanding skill and launch, grow your career
                        </p>
                    </div>

                    <div className="space-y-8">
                        {reasons.map((r, idx) => (
                            <div key={idx} className="flex gap-6 items-start group">
                                <div className="size-16 rounded-2xl bg-brand-primary flex items-center justify-center shrink-0 shadow-lg shadow-brand-primary/20">
                                    <Image
                                        src={r.icon}
                                        alt={r.title}
                                        width={32}
                                        height={32}
                                        className="brightness-0 invert"
                                    />
                                </div>
                                <div className="space-y-1 pt-1">
                                    <h4 className="font-bold font-raleway text-xl text-neutral-900">{r.title}</h4>
                                    <p className="text-neutral-500 font-raleway leading-relaxed">{r.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="pt-4">
                        <button className="bg-[#333333] hover:bg-neutral-800 text-white font-bold h-14 px-12 rounded-lg text-lg transition-all shadow-xl">
                            Get Started
                        </button>
                    </div>
                </motion.div>
            </Container>
        </section>
    )
}
