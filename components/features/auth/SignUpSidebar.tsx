"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface SignUpSidebarProps {
    currentStep: number
}

const steps = [
    { id: 1, title: "Step 1", subtitle: "Personal Information" },
    { id: 2, title: "Step 2", subtitle: "Career Interest" },
    { id: 3, title: "Step 3", subtitle: "Facial Upload" },
    { id: 4, title: "Step 4", subtitle: "Educational Background" },
]

import { Logo } from "@/components/common/Logo"

export function SignUpSidebar({ currentStep }: SignUpSidebarProps) {
    return (
        <div className="relative h-screen overflow-hidden bg-neutral-900 hidden lg:block">
            {/* Hero Image */}
            <Image
                src="/images/sign-up-img.jpg"
                alt="Student laughing"
                fill
                className="object-cover scale-[1.3] origin-center opacity-80"
                priority
            />

            {/* Steps Banner */}
            <div className="absolute top-0 inset-x-0 bg-[#B512E1]/80 backdrop-blur-md z-20 py-8 px-10">
                <div className="flex justify-between items-center max-w-2xl mx-auto">
                    {steps.map((step) => {
                        const isActive = currentStep === step.id
                        const isCompleted = currentStep > step.id

                        return (
                            <div key={step.id} className="flex flex-col items-center gap-2 group">
                                <div className="flex items-center gap-3">
                                    <div className="flex flex-col items-start">
                                        <span className={`text-[10px] font-bold uppercase tracking-wider ${isActive ? "text-white" : "text-white/60"}`}>
                                            {step.title}
                                        </span>
                                        <span className={`text-[10px] sm:text-xs font-medium max-w-[80px] leading-tight ${isActive ? "text-white" : "text-white/60"}`}>
                                            {step.subtitle}
                                        </span>
                                    </div>
                                    <div className={`size-10 rounded-full flex items-center justify-center transition-all ${isActive ? "bg-white" : "bg-black/20"}`}>
                                        <Image
                                            src={isActive ? "/icons/step-light-icon.svg" : "/icons/step-dark-icon.svg"}
                                            alt="step icon"
                                            width={20}
                                            height={20}
                                        />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Purple Overlay Shape */}
            <div className="absolute inset-x-0 bottom-0 z-10 w-full h-[60%]">
                <Image
                    src="/images/over-sign-in-img.png"
                    alt="overlay"
                    fill
                    className="object-cover object-bottom"
                />
            </div>

            {/* Brand Logo at Bottom Left */}
            <div className="absolute bottom-10 left-10 z-20">
                <Logo variant="light" className="h-10 w-32" />
            </div>
        </div>
    )
}
