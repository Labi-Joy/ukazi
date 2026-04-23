"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

interface RecoveryCodeFormProps {
    email: string
    onNext: (code: string) => void
}

export function RecoveryCodeForm({ email, onNext }: RecoveryCodeFormProps) {
    const [code, setCode] = useState(["", "", "", "", "", ""])

    const handleChange = (index: number, value: string) => {
        if (value.length > 1) return
        const newCode = [...code]
        newCode[index] = value
        setCode(newCode)

        // Auto focus next or prev
        if (value && index < 5) {
            const nextInput = document.getElementById(`code-${index + 1}`)
            nextInput?.focus()
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        onNext(code.join(""))
    }

    return (
        <div className="w-full max-w-[500px] mx-auto space-y-10 bg-white p-10 lg:p-14 rounded-[40px] shadow-2xl relative z-10">
            <div className="text-center space-y-4">
                <h2 className="text-3xl font-extrabold font-raleway text-neutral-900 leading-tight">
                    Forgot your password?
                </h2>
                <p className="text-[#B512E1] font-bold font-raleway text-lg italic">
                    No worries, We got you!
                </p>
            </div>

            <div className="h-px bg-neutral-200 w-full" />

            <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold font-raleway text-neutral-800">
                    Password Recovery Code
                </h3>
                <p className="text-neutral-500 font-raleway max-w-sm mx-auto">
                    Enter the 6-digits password recovery code sent to your email <span className="text-neutral-800 font-bold">{email || "kazilearn@gmail.com"}</span>
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
                <div className="flex justify-between gap-2">
                    {code.map((digit, idx) => (
                        <input
                            key={idx}
                            id={`code-${idx}`}
                            type="text"
                            value={digit}
                            onChange={(e) => handleChange(idx, e.target.value)}
                            placeholder="0"
                            className="size-14 text-center bg-white border border-neutral-300 rounded-xl font-bold font-raleway text-2xl text-neutral-800 focus:border-[#B512E1] focus:outline-none transition-all placeholder:text-neutral-300"
                            maxLength={1}
                        />
                    ))}
                </div>

                <button
                    type="submit"
                    className="w-full h-16 bg-[#B512E1] hover:bg-[#9530E4] text-white font-bold rounded-full text-xl transition-all active:scale-[0.98] shadow-lg shadow-purple-500/20"
                >
                    Reset Password
                </button>

                <div className="text-center space-y-6">
                    <p className="text-neutral-500 font-raleway">
                        Didn't receive code? <button type="button" className="text-[#B512E1] font-bold hover:underline decoration-2">Resend code</button>
                    </p>
                    <Link href="/login/student" className="block text-neutral-600 font-bold font-raleway text-lg underline underline-offset-8 decoration-neutral-400 hover:text-[#B512E1] transition-colors">
                        Back to Login
                    </Link>
                </div>
            </form>
        </div>
    )
}
