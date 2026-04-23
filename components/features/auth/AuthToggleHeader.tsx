"use client"

import { motion } from "framer-motion"
import Link from "next/link"

interface AuthToggleHeaderProps {
    isSignIn: boolean
}

export function AuthToggleHeader({ isSignIn }: AuthToggleHeaderProps) {
    return (
        <div className="p-1 bg-white border border-neutral-100 rounded-full flex relative overflow-hidden mb-8">
            <motion.div
                className="absolute inset-y-1 rounded-full bg-[#B512E1]"
                initial={false}
                animate={{
                    x: isSignIn ? 0 : "100%",
                    width: "calc(50% - 2px)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />

            <Link
                href="/login/student"
                className={`relative z-10 flex-1 py-4 text-center text-lg font-bold font-raleway transition-colors duration-300 ${isSignIn ? "text-white" : "text-neutral-400 hover:text-neutral-600"}`}
            >
                Sign in
            </Link>

            <Link
                href="/register/student"
                className={`relative z-10 flex-1 py-4 text-center text-lg font-bold font-raleway transition-colors duration-300 ${!isSignIn ? "text-white" : "text-neutral-400 hover:text-neutral-600"}`}
            >
                Sign up
            </Link>
        </div>
    )
}
