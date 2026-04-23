"use client"

import { useState } from "react"
import { Icon } from "@iconify/react"

interface SignUpStep4Props {
    onNext: () => void
}

import { AuthToggleHeader } from "./AuthToggleHeader"

export function SignUpStep4({ onNext }: SignUpStep4Props) {
    const isSignIn = false
    return (
        <div className="w-full max-w-[550px] mx-auto space-y-10 bg-white p-10 lg:p-14 rounded-[40px] shadow-2xl relative z-10">
            <AuthToggleHeader isSignIn={isSignIn} />

            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onNext(); }}>
                <div className="relative">
                    <select className="w-full h-16 px-8 bg-white border border-neutral-300 rounded-full font-raleway appearance-none focus:border-[#B512E1] focus:outline-none text-neutral-400">
                        <option>Current Education Level</option>
                        <option>Undergraduate</option>
                        <option>Graduate</option>
                        <option>Postgraduate</option>
                    </select>
                    <Icon icon="solar:alt-arrow-down-linear" className="absolute right-8 top-1/2 -translate-y-1/2 size-5 pointer-events-none text-neutral-400" />
                </div>

                <input
                    type="text"
                    placeholder="Institution Name"
                    className="w-full h-16 px-8 bg-white border border-neutral-300 rounded-full font-raleway focus:border-[#B512E1] focus:outline-none"
                    required
                />

                <input
                    type="text"
                    placeholder="Field of Study"
                    className="w-full h-16 px-8 bg-white border border-neutral-300 rounded-full font-raleway focus:border-[#B512E1] focus:outline-none"
                    required
                />

                <div className="relative">
                    <select className="w-full h-16 px-8 bg-white border border-neutral-300 rounded-full font-raleway appearance-none focus:border-[#B512E1] focus:outline-none text-neutral-400">
                        <option>Expected Year of Graduation</option>
                        <option>2024</option>
                        <option>2025</option>
                        <option>2026</option>
                        <option>2027</option>
                    </select>
                    <Icon icon="solar:alt-arrow-down-linear" className="absolute right-8 top-1/2 -translate-y-1/2 size-5 pointer-events-none text-neutral-400" />
                </div>

                <button
                    type="submit"
                    className="w-full h-16 bg-[#B512E1] hover:bg-[#9530E4] text-white font-bold rounded-full text-xl transition-all shadow-lg active:scale-95"
                >
                    Finish
                </button>
            </form>
        </div>
    )
}
