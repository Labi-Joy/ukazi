"use client"

import { useState, useRef } from "react"
import { AuthToggleHeader } from "./AuthToggleHeader"

interface EmailVerificationFormProps {
    email: string
    onNext: () => void
}

export function EmailVerificationForm({ email, onNext }: EmailVerificationFormProps) {
    const [code, setCode] = useState(["", "", "", "", "", ""])
    const inputs = useRef<(HTMLInputElement | null)[]>([])

    const handleChange = (index: number, value: string) => {
        if (value.length > 1) value = value.slice(-1)
        const newCode = [...code]
        newCode[index] = value
        setCode(newCode)

        if (value && index < 5) {
            inputs.current[index + 1]?.focus()
        }
    }

    const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
        if (e.key === "Backspace" && !code[index] && index > 0) {
            inputs.current[index - 1]?.focus()
        }
    }

    return (
        <div className="w-full max-w-[550px] mx-auto space-y-8 bg-white p-10 lg:p-14 rounded-[40px] shadow-2xl relative z-10 text-center">
            <AuthToggleHeader isSignIn={false} />

            <div className="space-y-4">
                <h2 className="text-2xl font-bold font-raleway text-neutral-800">Email Verification</h2>
                <p className="text-neutral-500 font-raleway text-sm">
                    Enter the 6 digit pin that was sent to your email
                </p>
            </div>

            <div className="flex justify-center gap-3 py-4">
                {code.map((digit, idx) => (
                    <input
                        key={idx}
                        ref={(el) => (inputs.current[idx] = el)}
                        type="text"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleChange(idx, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(idx, e)}
                        className="size-12 lg:size-14 bg-white border border-neutral-300 rounded-2xl text-center text-xl font-bold font-raleway focus:border-[#B512E1] focus:outline-none shadow-sm"
                    />
                ))}
            </div>

            <button
                onClick={onNext}
                className="w-full h-16 bg-[#B512E1] hover:bg-[#9530E4] text-white font-bold rounded-full text-xl transition-all shadow-lg mt-8"
            >
                Confirm Email
            </button>
        </div>
    )
}
