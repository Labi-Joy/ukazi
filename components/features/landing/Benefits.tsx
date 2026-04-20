"use client"

import { Container } from "@/components/common/Container"
import { Icon } from "@iconify/react"
import { motion } from "framer-motion"

const benefits = [
    {
        title: "Reach more students",
        description: "Ukazi provides a wide range of professional tools to help you reach students globally.",
        icon: "solar:users-group-rounded-bold",
    },
    {
        title: "Flexible scheduling",
        description: "Create and manage your own teaching schedule with our integrated calendar system.",
        icon: "solar:calendar-date-bold",
    },
    {
        title: "Detailed analytics",
        description: "Track your earnings and student progress with comprehensive dashboard insights.",
        icon: "solar:chart-2-bold",
    },
    {
        title: "Secure payments",
        description: "Get paid on time every time with our highly secure payment processing system.",
        icon: "solar:wallet-money-bold",
    },
]

export function Benefits() {
    return (
        <section className="py-24 bg-white">
            <Container className="grid lg:grid-cols-2 gap-20 items-center">
                <div className="relative aspect-square bg-[#9530E4]/5 rounded-3xl overflow-hidden flex items-center justify-center border border-[#9530E4]/10">
                    <Icon icon="solar:laptop-minimalistic-bold" className="size-32 text-brand-primary opacity-20" />
                    {/* Add actual illustration if available */}
                </div>

                <div className="space-y-12">
                    <div className="space-y-4">
                        <h2 className="text-4xl font-extrabold font-raleway text-neutral-900 leading-tight">
                            Benefits of Becoming an <span className="text-brand-primary">Instructor</span> on Ukazi
                        </h2>
                        <p className="text-neutral-600 font-raleway text-lg">
                            Join thousands of mentors shaping the future of education while growing their personal brand.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-8">
                        {benefits.map((benefit, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ x: 5 }}
                                className="space-y-3"
                            >
                                <div className="size-12 rounded-xl bg-brand-primary/10 flex items-center justify-center">
                                    <Icon icon={benefit.icon} className="size-6 text-brand-primary" />
                                </div>
                                <h4 className="text-lg font-bold font-raleway text-neutral-900">{benefit.title}</h4>
                                <p className="text-sm text-neutral-500 font-raleway leading-relaxed">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    )
}
