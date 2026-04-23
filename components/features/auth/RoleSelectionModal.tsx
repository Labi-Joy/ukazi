"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useOnboarding } from "@/components/providers/OnboardingProvider"
import { Icon } from "@iconify/react"
import { useRouter } from "next/navigation"

export function RoleSelectionModal() {
    const { isOpen, closeOnboarding } = useOnboarding()
    const router = useRouter()

    const handleRoleSelect = (role: 'student' | 'mentor') => {
        closeOnboarding()
        router.push(`/login/${role}`)
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeOnboarding}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
                    >
                        {/* Modal Card */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-[32px] p-8 lg:p-12 w-full max-w-lg relative overflow-hidden shadow-2xl"
                        >
                            {/* Close Button */}
                            <button
                                onClick={closeOnboarding}
                                className="absolute top-6 right-6 p-2 rounded-full hover:bg-neutral-100 transition-colors"
                            >
                                <Icon icon="solar:close-circle-linear" className="size-8 text-neutral-400 hover:text-neutral-900" />
                            </button>

                            <div className="text-center space-y-4 mb-10">
                                <h2 className="text-3xl font-extrabold font-raleway text-neutral-900">
                                    Join <span className="text-brand-primary">Ukazi</span> Today
                                </h2>
                                <p className="text-neutral-500 font-raleway">
                                    Select your role to continue your journey with us
                                </p>
                            </div>

                            <div className="grid gap-6">
                                <button
                                    onClick={() => handleRoleSelect('student')}
                                    className="flex items-center gap-6 p-6 rounded-2xl border-2 border-[#F3E8FF] hover:border-brand-primary hover:bg-brand-primary/5 transition-all group text-left"
                                >
                                    <div className="size-16 rounded-xl bg-[#F3E8FF] flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Icon icon="solar:user-bold" className="size-8 text-brand-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold font-raleway text-neutral-900">Sign in as Student</h3>
                                        <p className="text-neutral-500 text-sm font-raleway">Explore courses and grow your skills</p>
                                    </div>
                                    <Icon icon="solar:arrow-right-linear" className="ml-auto size-6 text-neutral-300 group-hover:text-brand-primary group-hover:translate-x-1 transition-all" />
                                </button>

                                <button
                                    onClick={() => handleRoleSelect('mentor')}
                                    className="flex items-center gap-6 p-6 rounded-2xl border-2 border-neutral-100 hover:border-[#333] hover:bg-neutral-50 transition-all group text-left"
                                >
                                    <div className="size-16 rounded-xl bg-neutral-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Icon icon="solar:teacher-bold" className="size-8 text-neutral-900" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold font-raleway text-neutral-900">Sign in as Mentor</h3>
                                        <p className="text-neutral-500 text-sm font-raleway">Share your expertise and inspire others</p>
                                    </div>
                                    <Icon icon="solar:arrow-right-linear" className="ml-auto size-6 text-neutral-300 group-hover:text-neutral-900 group-hover:translate-x-1 transition-all" />
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}
