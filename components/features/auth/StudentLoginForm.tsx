"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Icon } from "@iconify/react"

interface StudentLoginFormProps {
    isError?: boolean
}

import { AuthToggleHeader } from "./AuthToggleHeader"

export function StudentLoginForm({ isError: initialError = false }: StudentLoginFormProps) {
    const isSignIn = true
    const [isError, setIsError] = useState(initialError)
    const [password, setPassword] = useState(isError ? "password123" : "")

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault()
        if (password === "error") {
            setIsError(true)
        } else {
            setIsError(false)
        }
    }

    return (
        <div className="w-full max-w-[500px] mx-auto space-y-10 bg-white p-10 lg:p-14 rounded-[40px] shadow-2xl relative z-10">

            {/* Error Message */}
            {isError && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center"
                >
                    <p className="text-red-500 font-bold font-raleway text-lg">Incorrect Password</p>
                </motion.div>
            )}

            <AuthToggleHeader isSignIn={isSignIn} />

            <div className="text-center">
                <h2 className="text-2xl font-bold font-raleway text-neutral-800">
                    Login to your account
                </h2>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
                {/* Email Input */}
                <div className="relative group">
                    <div className="absolute left-6 top-1/2 -translate-y-1/2 size-6 flex items-center justify-center opacity-60">
                        <Icon icon="solar:letter-linear" className="size-6" />
                    </div>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full h-16 pl-16 pr-6 bg-white border border-neutral-300 rounded-full font-raleway text-neutral-800 focus:border-brand-primary focus:outline-none transition-all"
                        required
                    />
                </div>

                {/* Password Input */}
                <div className="relative group">
                    <div className="absolute left-6 top-1/2 -translate-y-1/2 size-6 flex items-center justify-center opacity-60">
                        <Icon icon="solar:lock-password-linear" className="size-6" />
                    </div>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your Password"
                        className={`w-full h-16 pl-16 pr-6 bg-white border rounded-full font-raleway text-neutral-800 focus:outline-none transition-all ${isError ? "border-red-500 bg-red-50/5" : "border-neutral-300 focus:border-brand-primary"
                            }`}
                        required
                    />
                </div>

                {/* Login Button */}
                <button
                    type="submit"
                    className="w-full h-16 bg-[#B512E1] hover:bg-[#9530E4] text-white font-bold rounded-full text-xl transition-all active:scale-[0.98]"
                >
                    Login
                </button>

                <div className="text-center">
                    <Link href="/forgot-password" size="sm" className="text-neutral-500 font-medium font-raleway hover:text-brand-primary transition-colors underline underline-offset-4">
                        Forgot Password
                    </Link>
                </div>

                {/* Divider */}
                <div className="relative py-4">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-neutral-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-4 bg-white text-neutral-500 font-medium font-raleway">or</span>
                    </div>
                </div>

                {/* Google Button */}
                <button
                    type="button"
                    className="w-full h-16 bg-[#F3E8FF] hover:bg-[#EBD5FF] text-neutral-900 font-bold rounded-full text-lg flex items-center justify-center gap-4 transition-all active:scale-[0.98] border border-black"
                >
                    <Icon icon="logos:google-icon" className="size-6" />
                    Continue with Google
                </button>
            </form>
        </div>
    )
}
