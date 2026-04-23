"use client"

import { Container } from "@/components/common/Container"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { motion } from "framer-motion"
import Image from "next/image"

const faqs = [
    {
        question: "What type of Courses are available?",
        answer: "Ukazi offers wide range of professional courses in creative fields which include Graphic Design, UI/UX Design, Businesses, Web Development and Design and Handmake skill",
    },
    {
        question: "Can I get a refund if I am not satisfied?",
        answer: "Yes, we strive for 100% student satisfaction. If you find that a course doesn't meet your needs, we offer a refund policy within a specific timeframe as long as progress remains below 20%.",
    },
    {
        question: "Is help available anytime?",
        answer: "Yes, our support system and community are available to assist you whenever you encounter challenges or have questions about the material.",
    },
    {
        question: "Does the courses offers degree certificate",
        answer: "Yes, upon successful completion, you will receive a professional certificate recognized in the industry to help boost your career prospects.",
    },
    {
        question: "Are the courses Accredited?",
        answer: "Our courses are designed by industry professionals to meet professional standards and provide practical skills that are highly valued by employers.",
    },
    {
        question: "Will I get a refund if I wish to quit?",
        answer: "Our refund policy is designed to be fair. You can request a refund within the first 7 days if the course hasn't been significantly consumed.",
    },
]

export function FAQ() {
    return (
        <section id="faq" className="py-24 bg-white overflow-hidden">
            <Container>
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* FAQ Content */}
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <h2 className="text-4xl lg:text-5xl font-extrabold font-raleway leading-[1.2]">
                                <span className="text-brand-primary">Questions that might bother your mind</span>
                                <span className="text-neutral-900"> - Let’s answer them</span>
                            </h2>
                        </div>

                        <Accordion type="single" collapsible className="w-full space-y-5">
                            {faqs.map((faq, idx) => (
                                <AccordionItem
                                    key={idx}
                                    value={`item-${idx}`}
                                    className="bg-white border border-neutral-100 rounded-[50px] px-10 shadow-sm overflow-hidden"
                                >
                                    <AccordionTrigger className="text-left font-bold text-lg font-raleway hover:no-underline text-neutral-800 py-6 pr-4">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-neutral-500 font-raleway text-base leading-relaxed pb-6">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>

                    {/* Image Collage */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative pt-10"
                    >
                        {/* Decorative Purple Shapes (Matched to image) */}
                        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-4/5 h-4/5 bg-brand-primary/40 rounded-full blur-3xl z-0" />
                        <div className="absolute bottom-1/4 right-0 w-3/4 h-1/2 bg-brand-primary/20 rounded-full blur-2xl z-0" />

                        {/* Main Image Container */}
                        <div className="relative z-10 rounded-[80px] overflow-hidden border-[16px] border-white/50 shadow-2xl backdrop-blur-sm">
                            <Image
                                src="/images/faq-img.png"
                                alt="Student learning"
                                width={600}
                                height={700}
                                className="object-cover w-full h-[650px]"
                            />
                        </div>

                        {/* Overlapping Inset Image */}
                        <div className="absolute -bottom-12 right-12 z-20 w-[240px] h-[240px] rounded-[60px] overflow-hidden border-[10px] border-white shadow-2xl shadow-black/20">
                            <Image
                                src="/images/faq-img.png"
                                alt="Student at desk"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    )
}
