"use client"

import { Container } from "@/components/common/Container"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
    {
        question: "What type of Courses are available?",
        answer: "Ukazi offers wide range of professional courses in creative fields which include Graphic Design, UI/UX Design, Businesses, Web Development and Design and Handmake skill"
    },
    {
        question: "Can I get a refund if I am not satisfied?",
        answer: "Our priority is your satisfaction. If our courses do not meet your expectations, we offer a straightforward refund policy within the first 14 days of enrollment."
    },
    {
        question: "Is help available anytime?",
        answer: "Yes! Our support team and mentors are available 24/7 to help you with any questions or technical issues you might encounter during your learning journey."
    },
    {
        question: "Does the courses offers degree certificate",
        answer: "Upon successful completion of any course, you will receive a verified professional certificate that is recognized by industry partners globally."
    },
    {
        question: "Are the courses Accredited?",
        answer: "Yes, our curriculum is developed in partnership with leading industry experts and educational bodies to ensure all our courses meet international accreditation standards."
    },
    {
        question: "Will I get a refund if I wish to quit?",
        answer: "We understand that circumstances change. You can request a full refund if you decide to quit within our standard grace period, no questions asked."
    }
]

export function FAQSection() {
    return (
        <section className="py-24 lg:py-32 bg-white overflow-hidden">
            <Container className="grid lg:grid-cols-2 gap-20 items-start">

                {/* Left Column: Title & Accordion */}
                <div className="space-y-12">
                    <h2 className="text-4xl lg:text-5xl font-extrabold font-raleway leading-tight tracking-tight">
                        <span className="text-[#9530E4]">Questions that might bother</span>
                        <br />
                        <span className="text-[#1A1A1A]">your mind-Let’s answer them</span>
                    </h2>

                    <Accordion type="single" collapsible className="w-full space-y-5">
                        {faqs.map((faq, idx) => (
                            <AccordionItem
                                key={idx}
                                value={`item-${idx}`}
                                className="border border-[#F3E8FF] bg-white rounded-[40px] px-2 shadow-sm transition-all duration-300 overflow-hidden"
                            >
                                <AccordionTrigger
                                    className="text-lg lg:text-xl font-bold font-raleway text-neutral-900 hover:no-underline py-7 px-10 flex justify-between group"
                                    hideDefaultIcon
                                >
                                    {(props: any) => (
                                        <>
                                            <span className="text-left leading-tight group-hover:text-brand-primary transition-colors">
                                                {faq.question}
                                            </span>
                                            <div className={`relative size-6 shrink-0 transition-transform duration-300 ${props.isOpen ? 'rotate-90' : ''}`}>
                                                <ChevronRight className="size-6 text-neutral-900" />
                                            </div>
                                        </>
                                    )}
                                </AccordionTrigger>
                                <AccordionContent className="text-neutral-500 font-raleway text-base leading-relaxed max-w-[95%]">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>

                {/* Right Column: Image Collage */}
                <div className="relative w-full aspect-square max-w-[600px] ml-auto">
                    {/* Main Image Base Layer */}
                    <div className="relative w-full h-full rounded-[60px] overflow-hidden z-10 shadow-2xl">
                        <Image
                            src="/images/real-faq-img.jpg"
                            alt="Student biting pencil"
                            fill
                            className="object-cover"
                            priority
                        />

                        {/* Overlay Abstract Image (Sits on top of main at the bottom) */}
                        <div className="absolute inset-0 z-20 pointer-events-none">
                            <Image
                                src="/images/over-faq-img.png"
                                alt="Purple abstract overlay"
                                fill
                                className="object-cover object-bottom"
                            />
                        </div>
                    </div>

                    {/* Inset Image (Woman with headset - Sits ON TOP and in the MIDDLE BOTTOM) */}
                    <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 z-30 w-[260px] h-[260px] rounded-[60px] overflow-hidden border-[15px] border-white shadow-2xl">
                        <Image
                            src="/images/under-faq-img.png"
                            alt="Woman with headset"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

            </Container>
        </section>
    )
}
