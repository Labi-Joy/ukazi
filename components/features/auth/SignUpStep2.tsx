"use client"

import { Icon } from "@iconify/react"

interface SignUpStep2Props {
    onNext: (data: any) => void
    onShowAll: () => void
    selectedInterests: string[]
    onToggleInterest: (interest: string) => void
}

const commonInterests = [
    "Graphic Design", "UI/UX Design", "Programming", "Video Editing",
    "Data Analyst", "Web Developer", "3D and motion", "Illustration"
]

import { AuthToggleHeader } from "./AuthToggleHeader"

export function SignUpStep2({ onNext, onShowAll, selectedInterests, onToggleInterest }: SignUpStep2Props) {
    const isSignIn = false
    return (
        <div className="w-full max-w-[550px] mx-auto space-y-8 bg-white p-10 lg:p-14 rounded-[40px] shadow-2xl relative z-10">
            <AuthToggleHeader isSignIn={isSignIn} />

            <div className="text-center">
                <h2 className="text-2xl font-bold font-raleway text-neutral-800">Tell us more about you</h2>
            </div>

            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onNext({}); }}>
                <div className="relative">
                    <select className="w-full h-16 px-8 bg-white border border-neutral-300 rounded-full font-raleway appearance-none focus:border-[#B512E1] focus:outline-none text-neutral-400">
                        <option>Occupation</option>
                    </select>
                    <Icon icon="solar:alt-arrow-down-linear" className="absolute right-8 top-1/2 -translate-y-1/2 size-5 pointer-events-none text-neutral-400" />
                </div>

                <div className="relative">
                    <input
                        type="text"
                        placeholder="Home address"
                        className="w-full h-16 px-8 bg-white border border-neutral-300 rounded-full font-raleway focus:border-[#B512E1] focus:outline-none"
                    />
                </div>

                <div className="space-y-6">
                    <h3 className="text-center font-bold font-raleway text-neutral-800">Pick your area of career interest</h3>

                    <div className="flex flex-wrap justify-center gap-3">
                        {commonInterests.map((interest) => (
                            <button
                                key={interest}
                                type="button"
                                onClick={() => onToggleInterest(interest)}
                                className={`px-6 py-3 rounded-full border text-sm font-bold font-raleway transition-all ${selectedInterests.includes(interest)
                                    ? "bg-[#B512E1] border-[#B512E1] text-white"
                                    : "border-neutral-800 text-neutral-800 hover:border-[#B512E1]"
                                    }`}
                            >
                                {interest}
                            </button>
                        ))}
                    </div>

                    <div className="text-center">
                        <button
                            type="button"
                            onClick={onShowAll}
                            className="text-red-500 font-bold font-raleway text-sm hover:underline"
                        >
                            Show all
                        </button>
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full h-16 bg-[#B512E1] hover:bg-[#9530E4] text-white font-bold rounded-full text-xl transition-all shadow-lg mt-8"
                >
                    Next
                </button>
            </form>
        </div>
    )
}
