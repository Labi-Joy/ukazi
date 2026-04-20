"use client"

import { Container } from "@/components/common/Container"
import { Icon } from "@iconify/react"
import { motion } from "framer-motion"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
    {
        question: "How do I get started with Ukazi?",
        answer: "Getting started is easy! Simply create an account, browse our extensive course catalog, and enroll in your first course."
    },
    {
        question: "Is there a certificate after finishing a course?",
        answer: "Yes, every course on Ukazi comes with a verified certificate of completion that you can share on your LinkedIn profile or resume."
    },
    {
        question: "Can I learn at my own pace?",
        answer: "Absolutely! Our courses are designed to be flexible. Once enrolled, you have lifetime access to the materials."
    },
    {
        question: "Are the courses for beginners or experts?",
        answer: "We offer courses for all skill levels, from complete beginners to advanced professionals looking to sharpen their skills."
    }
]

export function FAQSection() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <Container className="grid lg:grid-cols-2 gap-20 items-center">
                <div className="space-y-12">
                    <div className="space-y-4">
                        <h2 className="text-4xl lg:text-5xl font-extrabold font-raleway text-neutral-900 leading-tight">
                            Questions that might bother <span className="text-brand-primary">your mind</span> to answer them
                        </h2>
                    </div>

                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqs.map((faq, idx) => (
                            <AccordionItem
                                key={idx}
                                value={`item-${idx}`}
                                className="border-none bg-neutral-50 rounded-2xl px-6"
                            >
                                <AccordionTrigger className="text-lg font-bold font-raleway text-neutral-900 hover:no-underline py-6">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-neutral-600 font-raleway text-base pb-6 leading-relaxed">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="relative z-10 rounded-[60px] overflow-hidden border-8 border-brand-primary/5 shadow-2xi h-[600px]">
                        <img
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop"
                            alt="Student collaborating"
                            className="size-full object-cover"
                        />
                    </div>
                    {/* Floating badge */}
                    <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl border border-neutral-100 space-y-4 max-w-[280px]">
                        <div className="size-16 rounded-2xl bg-brand-primary/10 flex items-center justify-center">
                            <Icon icon="solar:chat-round-dots-bold" className="text-brand-primary size-8" />
                        </div>
                        <p className="font-bold font-raleway text-neutral-900 text-lg">Still have more questions?</p>
                        <p className="text-neutral-500 text-sm font-raleway">Contact our support team anytime</p>
                    </div>
                </motion.div>
            </Container>
        </section>
    )
}
