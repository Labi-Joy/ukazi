"use client"

import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Logo } from "@/components/common/Logo"
import { EmailEntryForm } from "@/components/features/auth/EmailEntryForm"
import { RecoveryCodeForm } from "@/components/features/auth/RecoveryCodeForm"
import { NewPasswordForm } from "@/components/features/auth/NewPasswordForm"
import { AuthStatusPopup } from "@/components/features/auth/AuthStatusPopup"

type ForgotPassStep = "email-entry" | "recovery-code" | "email-confirmed" | "new-password" | "done"

export default function ForgotPasswordPage() {
    const [step, setStep] = useState<ForgotPassStep>("email-entry")
    const [email, setEmail] = useState("")
    const router = useRouter()

    return (
        <main className="min-h-screen grid lg:grid-cols-2 bg-white overflow-hidden">
            {/* Left Side: Image Side */}
            <div className="relative hidden lg:block h-screen overflow-hidden bg-neutral-900">
                <Image
                    src="/images/password-img.jpg"
                    alt="Student with headphones"
                    fill
                    className="object-cover scale-[1.3] origin-center opacity-90"
                    priority
                />

                {/* Purple Overlay Shape */}
                <div className="absolute inset-x-0 bottom-0 z-10 w-full h-[60%]">
                    <Image
                        src="/images/over-sign-in-img.png"
                        alt="overlay"
                        fill
                        className="object-cover object-bottom"
                    />
                </div>

                {/* Brand Logo */}
                <div className="absolute top-10 left-10 z-20">
                    <Logo variant="light" className="h-12 w-40" />
                </div>
            </div>

            {/* Right Side: Step Content */}
            <div className="flex items-center justify-center p-8 bg-white overflow-y-auto">
                {step === "email-entry" && (
                    <EmailEntryForm onNext={(val) => {
                        setEmail(val)
                        setStep("recovery-code")
                    }} />
                )}

                {step === "recovery-code" && (
                    <RecoveryCodeForm email={email} onNext={() => setStep("email-confirmed")} />
                )}

                {step === "new-password" && (
                    <NewPasswordForm onNext={() => setStep("done")} />
                )}
            </div>

            {/* Popups */}
            <AnimatePresence>
                {step === "email-confirmed" && (
                    <AuthStatusPopup
                        title="Confirmed"
                        description="Your email address has successfully been confirmed"
                        buttonText="Create a New password"
                        onAction={() => setStep("new-password")}
                    />
                )}

                {step === "done" && (
                    <AuthStatusPopup
                        title="Done"
                        description="Your password has been successfully reset"
                        buttonText="Login"
                        onAction={() => router.push("/login/student")}
                    />
                )}
            </AnimatePresence>
        </main>
    )
}
