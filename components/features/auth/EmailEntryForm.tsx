"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

interface EmailEntryFormProps {
    onNext: (email: string) => void
}

export function EmailEntryForm({ onNext }: EmailEntryFormProps) {
    const [email, setEmail] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        onNext(email)
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
                    Reset your password
                </h3>
                <p className="text-neutral-500 font-raleway max-w-sm mx-auto">
                    Enter your email address associated with your account. We'll send you a password reset code
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
                <div className="relative">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g - kazilearn@gmail.com"
                        className="w-full h-16 px-8 bg-white border border-neutral-300 rounded-full font-raleway text-neutral-800 focus:border-[#B512E1] focus:outline-none transition-all placeholder:text-neutral-300"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full h-16 bg-[#B512E1] hover:bg-[#9530E4] text-white font-bold rounded-full text-xl transition-all active:scale-[0.98] shadow-lg shadow-purple-500/20"
                >
                    Reset Password
                </button>

                <div className="text-center">
                    <Link href="/login/student" className="text-neutral-600 font-bold font-raleway text-lg underline underline-offset-8 decoration-neutral-400 hover:text-[#B512E1] transition-colors">
                        Back to Login
                    </Link>
                </div>
            </form>
        </div>
    )
}
