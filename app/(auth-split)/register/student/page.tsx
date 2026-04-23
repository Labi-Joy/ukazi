"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/navigation"
import { SignUpSidebar } from "@/components/features/auth/SignUpSidebar"
import { SignUpStep1 } from "@/components/features/auth/SignUpStep1"
import { SignUpStep2 } from "@/components/features/auth/SignUpStep2"
import { SignUpStep3 } from "@/components/features/auth/SignUpStep3"
import { SignUpStep4 } from "@/components/features/auth/SignUpStep4"
import { EmailVerificationForm } from "@/components/features/auth/EmailVerificationForm"
import { AuthStatusPopup } from "@/components/features/auth/AuthStatusPopup"
import { CareerInterestPopup } from "@/components/features/auth/CareerInterestPopup"

type SignUpStep = "step1" | "verification" | "confirmed" | "step2" | "interests-all" | "step3" | "step4" | "congratulations"

export default function StudentSignUpPage() {
    const [step, setStep] = useState<SignUpStep>("step1")
    const [prevStep, setPrevStep] = useState<SignUpStep>("step1")
    const [selectedInterests, setSelectedInterests] = useState<string[]>(["UI/UX Design", "Programming", "Illustration"])
    const router = useRouter()

    const getProgessStep = () => {
        if (["step1", "verification", "confirmed"].includes(step)) return 1
        if (["step2", "interests-all"].includes(step)) return 2
        if (step === "step3") return 3
        if (step === "step4" || step === "congratulations") return 4
        return 1
    }

    const handleShowAll = () => {
        setPrevStep(step)
        setStep("interests-all")
    }

    return (
        <main className="min-h-screen grid lg:grid-cols-2 bg-white overflow-hidden">
            <SignUpSidebar currentStep={getProgessStep()} />

            <div className="flex items-center justify-center p-8 bg-white overflow-y-auto">
                <AnimatePresence mode="wait">
                    {step === "step1" && (
                        <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                            <SignUpStep1 onNext={() => setStep("verification")} />
                        </motion.div>
                    )}

                    {step === "verification" && (
                        <motion.div key="verification" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                            <EmailVerificationForm
                                email="kazilearn@gmail.com"
                                onNext={() => setStep("confirmed")}
                            />
                        </motion.div>
                    )}

                    {step === "step2" && (
                        <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                            <SignUpStep2 onNext={() => setStep("step3")} onShowAll={handleShowAll} selectedInterests={selectedInterests} onToggleInterest={(i) => {
                                setSelectedInterests(prev => prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i])
                            }} />
                        </motion.div>
                    )}

                    {step === "step3" && (
                        <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                            <SignUpStep3 onNext={() => setStep("step4")} />
                        </motion.div>
                    )}

                    {step === "step4" && (
                        <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                            <SignUpStep4 onNext={() => setStep("congratulations")} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <AnimatePresence>
                {step === "confirmed" && (
                    <AuthStatusPopup
                        title="Confirmed"
                        description="Your email address has successfully been confirmed"
                        buttonText="Continue"
                        onAction={() => setStep("step2")}
                    />
                )}

                {step === "interests-all" && (
                    <CareerInterestPopup
                        initialSelected={selectedInterests}
                        onClose={() => setStep(prevStep)}
                        onConfirm={(sel) => {
                            setSelectedInterests(sel)
                            setStep("step2")
                        }}
                    />
                )}

                {step === "congratulations" && (
                    <AuthStatusPopup
                        title="Congratulations!"
                        description="Your account has been successfully created."
                        buttonText="Login here"
                        onAction={() => router.push("/login/student")}
                    />
                )}
            </AnimatePresence>
        </main>
    )
}
