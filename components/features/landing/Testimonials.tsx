"use client"

import { Container } from "@/components/common/Container"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { Icon } from "@iconify/react"

const testimonials = [
    {
        name: "Sarah T.",
        role: "Digital Marketing Specialist",
        avatar: "/images/test-img1.png",
        text: "I was hesitant at first, but the course structure and support exceeded my expectations. The hands-on projects helped me apply new skills immediately. I feel more confident in my career, and I've already landed two freelance projects thanks to what I learned!"
    },
    {
        name: "Mark R.",
        role: "Graphic Designer",
        avatar: "/images/test-img2.png",
        title: "Practical and Engaging",
        text: "The instructors made complex topics easy to understand, and the resources were excellent. I loved the interactive elements, and the lessons were broken down into manageable steps. I finished the course with a portfolio I'm proud of"
    },
    {
        name: "Jen A.",
        role: "Aspiring Entrepreneur",
        avatar: "/images/test-img3.png",
        title: "Flexible and Effective Learning",
        text: "As a full-time parent, finding time to study has always been a challenge. But the flexibility of this program allowed me to learn at my own pace. The community and support were fantastic, and I now have the skills to start my own business!"
    },
    {
        name: "Alex M.",
        role: "Junior Web Developer",
        avatar: "/images/test-img4.png",
        title: "A Career Game-Changer!",
        text: "I started with no coding background, and now I'm building my own websites. The courses were comprehensive, and the projects made it so much easier to learn. This program truly helped me switch careers and become a web developer!"
    },
    // More testimonials for pagination
    {
        name: "David K.",
        role: "Data Analyst",
        avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop",
        title: "Incredible Insights",
        text: "The data science track provided me with the tools I needed to excel. The real-world datasets were challenging but rewarding. Highly recommend to anyone looking to level up their data skills."
    },
    {
        name: "Elena G.",
        role: "UX Researcher",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
        text: "The psychology of design was covered so well. I now approach problems with a research-first mindset that my clients really appreciate."
    },
    {
        name: "Ryan B.",
        role: "Mobile Developer",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop",
        text: "Building apps that someone can actually use is a great feeling. This course gave me the foundations to build my first React Native app."
    },
    {
        name: "Sophia L.",
        role: "Content Creator",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
        text: "I've learned how to tell stories that resonate. My engagement rates have doubled since I started implementing the strategies I learned here."
    }
]

export function Testimonials() {
    const [page, setPage] = useState(0)
    const itemsPerPage = 4
    const totalPages = Math.ceil(testimonials.length / itemsPerPage)

    const visibleTestimonials = testimonials.slice(page * itemsPerPage, (page + 1) * itemsPerPage)

    const nextPage = () => setPage((prev) => (prev + 1) % totalPages)
    const prevPage = () => setPage((prev) => (prev - 1 + totalPages) % totalPages)

    return (
        <section id="testimonials" className="py-24 bg-white overflow-hidden">
            <Container className="space-y-24">
                <div className="text-center space-y-6 max-w-3xl mx-auto">
                    <h2 className="text-4xl lg:text-5xl font-extrabold font-raleway text-brand-primary leading-tight">
                        See what some students are saying
                    </h2>
                    <p className="text-brand-primary font-raleway text-lg leading-relaxed opacity-80">
                        See what some of our students are saying about their learning journey. From mastering new skills to advancing their careers, our students share how our courses have made an impact. Join a community where education leads to real success, and let their stories inspire your own path forward
                    </p>
                </div>

                <div className="relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={page}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.5 }}
                            className="grid md:grid-cols-2 gap-x-12 gap-y-24"
                        >
                            {visibleTestimonials.map((t, idx) => (
                                <div
                                    key={t.name}
                                    className="bg-brand-primary p-10 pt-16 rounded-tl-[80px] rounded-br-[80px] rounded-tr-2xl rounded-bl-2xl text-white text-center space-y-6 relative shadow-xl shadow-brand-primary/10"
                                >
                                    {/* Profile Image Overlay */}
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 size-24 lg:size-28 rounded-full overflow-hidden border-4 border-[#FFCE31] shadow-lg">
                                        <Image
                                            src={t.avatar}
                                            alt={t.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    {t.title && (
                                        <h4 className="font-bold font-raleway text-xl">{t.title}</h4>
                                    )}

                                    <p className="text-white/90 font-raleway text-base lg:text-lg leading-relaxed">
                                        "{t.text}"
                                    </p>

                                    <div className="pt-4 space-y-3">
                                        <p className="font-bold font-raleway text-lg">
                                            {t.name}, {t.role}
                                        </p>
                                        <div className="flex justify-center gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Icon key={i} icon="solar:star-bold" className="size-5 text-[#FFCE31]" />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Pagination Controls */}
                <div className="flex justify-center items-center gap-6 pt-12">
                    <button
                        onClick={prevPage}
                        className="size-14 rounded-full border-2 border-brand-primary flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-white transition-all transform active:scale-95"
                    >
                        <Icon icon="solar:alt-arrow-left-linear" className="size-8" />
                    </button>
                    <button
                        onClick={nextPage}
                        className="size-14 rounded-full border-2 border-brand-primary flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-white transition-all transform active:scale-95"
                    >
                        <Icon icon="solar:alt-arrow-right-linear" className="size-8" />
                    </button>
                </div>
            </Container>
        </section>
    )
}
