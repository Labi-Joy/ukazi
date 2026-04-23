"use client"

import { Container } from "@/components/common/Container"
import { motion } from "framer-motion"
import Image from "next/image"
import { useOnboarding } from "@/components/providers/OnboardingProvider"

const benefits = [
    "Impactful Teaching and Knowledge Sharing",
    "Recognition and Credibility",
    "Global Impact",
    "Financial Rewards",
    "Flexibility and Independence",
    "Personal Fulfillment",
    "Networking Opportunities",
]

export function InstructorCTA() {
    const { openOnboarding } = useOnboarding()

    return (
        <section id="become-instructor" className="pt-48 pb-24 bg-white overflow-hidden">
            <Container>
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Content Side */}
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <h2 className="text-4xl lg:text-5xl font-extrabold font-raleway text-neutral-900 leading-[1.1]">
                                If you have a teaching experience, <br />
                                <span className="text-brand-primary">Become an Instructor</span>
                            </h2>
                            <p className="text-neutral-600 font-raleway text-lg leading-relaxed max-w-xl">
                                Share your expertise and inspire learners worldwide. If you're a certified teacher, join our platform as an instructor and empower students with knowledge in your field. Earn income, gain recognition, and make a meaningful impact by creating courses that reach a global audience
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold font-raleway">
                                <span className="text-brand-primary">Benefits</span> of Becoming an <span className="text-brand-primary">Instructor</span>
                            </h3>
                            <div className="space-y-3">
                                {benefits.map((b) => (
                                    <div key={b} className="flex items-center gap-4">
                                        <div className="size-2 bg-brand-primary rotate-45 shrink-0" />
                                        <span className="font-raleway text-neutral-800 font-medium">{b}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button
                            onClick={openOnboarding}
                            className="bg-[#333333] hover:bg-neutral-800 text-white font-bold h-16 px-12 rounded-lg text-xl transition-all shadow-xl"
                        >
                            Become Instructor
                        </button>
                    </div>

                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative flex justify-center lg:justify-end lg:-mr-32 lg:-mt-40 pt-10 lg:pt-0"
                    >
                        {/* Instructor Image */}
                        <div className="relative w-full max-w-[850px]">
                            <Image
                                src="/images/instructor.png"
                                alt="Instructor"
                                width={1200}
                                height={1000}
                                className="object-contain scale-110 lg:scale-125 origin-right"
                            />
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    )
}
