"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface AuthStatusPopupProps {
    title: string
    description: string
    buttonText: string
    onAction: () => void
    icon?: string
}

export function AuthStatusPopup({ title, description, buttonText, onAction, icon }: AuthStatusPopupProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm"
        >
            <div className="bg-white rounded-[40px] p-12 lg:p-16 w-full max-w-sm text-center space-y-8 shadow-2xl relative overflow-hidden">
                <div className="relative size-32 mx-auto">
                    <Image
                        src="/icons/success-pass-img.svg"
                        alt="Success"
                        fill
                        className="object-contain"
                    />
                </div>

                <div className="space-y-4">
                    <h2 className="text-4xl font-extrabold font-raleway text-[#333333]">
                        {title}
                    </h2>
                    <p className="text-neutral-600 font-raleway text-lg leading-relaxed">
                        {description}
                    </p>
                </div>

                <button
                    onClick={onAction}
                    className="w-full h-16 bg-[#B512E1] hover:bg-[#9530E4] text-white font-bold rounded-full text-xl transition-all active:scale-[0.98] shadow-lg shadow-purple-500/20"
                >
                    {buttonText}
                </button>
            </div>
        </motion.div>
    )
}
