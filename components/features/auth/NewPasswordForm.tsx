"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Icon } from "@iconify/react"

interface NewPasswordFormProps {
    onNext: () => void
}

export function NewPasswordForm({ onNext }: NewPasswordFormProps) {
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const requirements = [
        { label: "Minimum of 8 characters", met: password.length >= 8 },
        { label: "1 lowercase character", met: /[a-z]/.test(password) },
        { label: "1 uppercase character", met: /[A-Z]/.test(password) },
        { label: "1 special character", met: /[!@#$%^&*(),.?":{}|<>]/.test(password) },
        { label: "1 number character", met: /\d/.test(password) },
    ]

    const allMet = requirements.every(r => r.met) && password === confirmPassword && password.length > 0

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (allMet) onNext()
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
                    Create New Password
                </h3>
                <p className="text-neutral-500 font-raleway max-w-sm mx-auto">
                    Create the new password you'd like to use
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-6">
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter New Password"
                        className="w-full h-16 px-8 bg-white border border-neutral-300 rounded-full font-raleway text-neutral-800 focus:border-[#B512E1] focus:outline-none transition-all placeholder:text-neutral-300"
                        required
                    />

                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 px-4">
                        {requirements.map((req, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                                <div className={`size-4 rounded-full flex items-center justify-center border ${req.met ? "bg-[#B512E1] border-[#B512E1]" : "border-neutral-300"}`}>
                                    {req.met && <Icon icon="solar:check-read-linear" className="size-3 text-white" />}
                                </div>
                                <span className={`text-[10px] sm:text-xs font-raleway ${req.met ? "text-[#B512E1] font-bold" : "text-neutral-500"}`}>
                                    {req.label}
                                </span>
                            </div>
                        ))}
                    </div>

                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm Password"
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
            </form>
        </div>
    )
}
