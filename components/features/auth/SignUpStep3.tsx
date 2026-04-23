"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { AuthToggleHeader } from "./AuthToggleHeader"

interface SignUpStep3Props {
    onNext: () => void
}

const learningModes = [
    "Videos", "One on one", "Zoom", "Course Materials", "Group", "google meet"
]

export function SignUpStep3({ onNext }: SignUpStep3Props) {
    const [selectedModes, setSelectedModes] = useState<string[]>(["One on one", "Zoom"])

    const toggleMode = (mode: string) => {
        setSelectedModes(prev =>
            prev.includes(mode) ? prev.filter(m => m !== mode) : [...prev, mode]
        )
    }

    return (
        <div className="w-full max-w-[550px] mx-auto space-y-6 bg-white p-10 lg:p-14 rounded-[40px] shadow-2xl relative z-10 text-center">
            <AuthToggleHeader isSignIn={false} />

            <div className="space-y-4 pt-4">
                <h2 className="text-2xl font-bold font-raleway text-neutral-800">Few steps to go</h2>

                {/* Upload Area */}
                <div className="flex flex-col items-center gap-2">
                    <div className="size-24 lg:size-28 bg-[#B512E1] rounded-[28px] flex items-center justify-center shadow-lg shadow-purple-500/20 active:scale-95 transition-transform cursor-pointer">
                        <Image src="/icons/camera.svg" alt="camera" width={40} height={40} className="brightness-0 invert" />
                    </div>
                    <span className="text-xs font-bold font-raleway text-neutral-800 mt-2">Upload your<br />profile photo</span>
                </div>
            </div>

            <div className="w-full h-px bg-neutral-200 my-8" />

            <div className="space-y-6 pb-4">
                <h3 className="font-bold font-raleway text-neutral-800">Choose your preferred learning mode</h3>

                <div className="grid grid-cols-2 gap-4">
                    {learningModes.map((mode) => (
                        <button
                            key={mode}
                            onClick={() => toggleMode(mode)}
                            className={`h-14 rounded-full border-2 font-bold font-raleway transition-all text-sm ${selectedModes.includes(mode)
                                    ? "bg-[#B512E1] border-[#B512E1] text-white shadow-md shadow-purple-500/10"
                                    : "border-neutral-800 text-neutral-800 hover:border-[#B512E1]"
                                }`}
                        >
                            {mode}
                        </button>
                    ))}
                </div>
            </div>

            <button
                onClick={onNext}
                className="w-full h-16 bg-[#B512E1] hover:bg-[#9530E4] text-white font-bold rounded-full text-xl transition-all shadow-lg active:scale-[0.98]"
            >
                Next
            </button>
        </div>
    )
}
