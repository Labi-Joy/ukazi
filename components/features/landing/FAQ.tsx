"use client"

import { Container } from "@/components/common/Container"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
    {
        question: "Will I get a refund if I wish to quit?",
        answer: "Yes, Ukazi offers a 7-day money-back guarantee for most courses if you haven't completed more than 20% of the material.",
    },
    {
        question: "Are the courses self-paced or scheduled?",
        answer: "Our platform offers both. Recorded courses are fully self-paced, while live mentorship sessions follow a specific schedule set by the instructor.",
    },
    {
        question: "Do I get a certificate after completion?",
        answer: "Yes, every successfully completed course on Ukazi comes with a professional certificate that you can share on LinkedIn.",
    },
    {
        question: "How do I contact my mentor if I have problems?",
        answer: "You can use our integrated real-time chat feature to message your mentor directly from your dashboard.",
    },
]

export function FAQ() {
    return (
        <section className="py-24 bg-[#FFF8F8]">
            <Container className="max-w-3xl">
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-4xl font-extrabold font-raleway text-neutral-900">
                        Questions that might bother your mind
                    </h2>
                    <p className="text-[#9530E4] font-bold font-raleway text-lg">
                        Let’s answer them
                    </p>
                </div>

                <Accordion type="single" collapsible className="w-full space-y-4">
                    {faqs.map((faq, idx) => (
                        <AccordionItem
                            key={idx}
                            value={`item-${idx}`}
                            className="bg-white border rounded-2xl px-6 py-2 shadow-sm"
                        >
                            <AccordionTrigger className="text-left font-bold text-lg font-raleway hover:no-underline text-neutral-900">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-neutral-600 font-raleway text-base leading-relaxed">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </Container>
        </section>
    )
}
