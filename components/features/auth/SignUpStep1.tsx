"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Icon } from "@iconify/react"

interface SignUpStep1Props {
    onNext: (data: any) => void
}

import { AuthToggleHeader } from "./AuthToggleHeader"

export function SignUpStep1({ onNext }: SignUpStep1Props) {
    const isSignIn = false
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

    return (
        <div className="w-full max-w-[550px] mx-auto space-y-8 bg-white p-10 lg:p-14 rounded-[40px] shadow-2xl relative z-10">
            <AuthToggleHeader isSignIn={isSignIn} />

            <div className="text-center">
                <h2 className="text-3xl font-extrabold font-raleway text-neutral-800">Join Ukazi</h2>
            </div>

            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onNext({}); }}>
                <input
                    type="text"
                    placeholder="Your Full Name"
                    className="w-full h-16 px-8 bg-white border border-neutral-300 rounded-full font-raleway focus:border-[#B512E1] focus:outline-none"
                    required
                />
                <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full h-16 px-8 bg-white border border-neutral-300 rounded-full font-raleway focus:border-[#B512E1] focus:outline-none"
                    required
                />
                <input
                    type="text"
                    placeholder="Create User Name"
                    className="w-full h-16 px-8 bg-white border border-neutral-300 rounded-full font-raleway focus:border-[#B512E1] focus:outline-none"
                    required
                />

                <div className="flex gap-0 border border-neutral-300 rounded-full overflow-hidden h-16">
                    <div className="bg-[#B512E1] text-white flex items-center justify-center gap-2 px-6 font-bold cursor-pointer">
                        +234 <Icon icon="solar:alt-arrow-down-linear" className="size-4" />
                    </div>
                    <input
                        type="tel"
                        placeholder="Your Phone number"
                        className="flex-1 px-6 font-raleway focus:outline-none"
                        required
                    />
                </div>

                <div className="space-y-4">
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Create Password"
                        className="w-full h-16 px-8 bg-white border border-neutral-300 rounded-full font-raleway focus:border-[#B512E1] focus:outline-none"
                        required
                    />

                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 px-4">
                        {requirements.map((req, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                                <div className={`size-4 rounded-full flex items-center justify-center border ${req.met ? "bg-green-500 border-green-500" : "border-neutral-300"}`}>
                                    {req.met && <Icon icon="solar:check-read-linear" className="size-3 text-white" />}
                                </div>
                                <span className={`text-[10px] font-raleway ${req.met ? "text-green-600" : "text-neutral-500"}`}>
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
                        className="w-full h-16 px-8 bg-white border border-neutral-300 rounded-full font-raleway focus:border-[#B512E1] focus:outline-none"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full h-16 bg-[#B512E1] hover:bg-[#9530E4] text-white font-bold rounded-full text-xl transition-all shadow-lg"
                >
                    Next
                </button>
            </form>
        </div>
    )
}
