"use client"

import { Icon } from "@iconify/react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

interface SuccessScreenProps {
    title: string
    description: string
    buttonText: string
    buttonHref: string
}

export function SuccessScreen({
    title,
    description,
    buttonText,
    buttonHref,
}: SuccessScreenProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center space-y-8 py-12"
        >
            <div className="size-32 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Icon icon="solar:check-circle-bold" className="size-16 text-brand-primary" />
            </div>

            <div className="space-y-4">
                <h2 className="text-4xl font-extrabold font-raleway text-neutral-900">{title}</h2>
                <p className="text-neutral-600 font-raleway text-lg max-w-sm mx-auto">
                    {description}
                </p>
            </div>

            <Button className="w-full h-12 bg-brand-primary hover:bg-brand-primary/90 text-white font-bold rounded-xl" asChild>
                <Link href={buttonHref}>{buttonText}</Link>
            </Button>
        </motion.div>
    )
}
