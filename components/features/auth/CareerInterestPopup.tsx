"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Icon } from "@iconify/react"

interface CareerInterestPopupProps {
    onClose: () => void
    onConfirm: (selected: string[]) => void
    initialSelected: string[]
}

const allInterests = [
    "Graphic Design", "UI/UX Design", "Programming", "Video Editing",
    "Data Analyst", "Web Developer", "3D and motion", "Illustration",
    "Digital Marketing", "Cyber Security", "Product Mgmt", "AI/ML",
    "Blockchain", "Game Dev", "Cloud Computing", "Mobile Dev",
    "App Design", "Branding", "Motion Graphics", "Photography"
]

export function CareerInterestPopup({ onClose, onConfirm, initialSelected }: CareerInterestPopupProps) {
    const [selected, setSelected] = useState<string[]>(initialSelected)
    const [search, setSearch] = useState("")

    const filtered = allInterests.filter(i => i.toLowerCase().includes(search.toLowerCase()))

    const toggleInterest = (interest: string) => {
        setSelected(prev =>
            prev.includes(interest) ? prev.filter(i => i !== interest) : [...prev, interest]
        )
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-md"
        >
            <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                className="bg-white rounded-[40px] p-8 lg:p-12 w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl"
            >
                {/* Search Bar */}
                <div className="relative mb-10 max-w-md mx-auto w-full">
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search career here"
                        className="w-full h-14 pl-8 pr-14 bg-white border border-neutral-300 rounded-full font-raleway focus:border-[#B512E1] focus:outline-none shadow-sm"
                    />
                    <Icon icon="solar:magnifer-linear" className="absolute right-6 top-1/2 -translate-y-1/2 size-6 text-neutral-400" />
                </div>

                {/* Interest Grid */}
                <div className="flex-1 overflow-y-auto px-4 custom-scrollbar pb-8">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                        {filtered.map((interest) => (
                            <button
                                key={interest}
                                type="button"
                                onClick={() => toggleInterest(interest)}
                                className={`px-4 py-4 rounded-3xl border text-sm font-bold font-raleway transition-all text-center ${selected.includes(interest)
                                        ? "bg-[#B512E1] border-[#B512E1] text-white shadow-lg shadow-purple-500/20"
                                        : "border-neutral-800 text-neutral-800 hover:border-[#B512E1]"
                                    }`}
                            >
                                {interest}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Footer Action */}
                <div className="pt-8 border-t border-neutral-100 flex justify-center">
                    <button
                        onClick={() => onConfirm(selected)}
                        className="px-20 h-16 bg-[#B512E1] hover:bg-[#9530E4] text-white font-bold rounded-full text-xl transition-all shadow-lg active:scale-95"
                    >
                        Okay
                    </button>
                </div>
            </motion.div>
        </motion.div>
    )
}
