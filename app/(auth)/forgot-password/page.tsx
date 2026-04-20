"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { SuccessScreen } from "@/components/features/auth/SuccessScreen"
import Link from "next/link"
import { Icon } from "@iconify/react"

export default function ForgotPasswordPage() {
    const [isSubmitted, setIsSubmitted] = useState(false)

    if (isSubmitted) {
        return (
            <SuccessScreen
                title="Check your email"
                description="We've sent a password recovery code to your email address. Please follow the instructions to reset your password."
                buttonText="Back to Login"
                buttonHref="/login"
            />
        )
    }

    return (
        <Card className="border-none shadow-none bg-transparent">
            <CardHeader className="space-y-2 text-center">
                <div className="size-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon icon="solar:lock-password-bold" className="size-8 text-brand-primary" />
                </div>
                <CardTitle className="text-3xl font-extrabold font-raleway text-neutral-900">
                    Forgot your password?
                </CardTitle>
                <CardDescription className="text-neutral-500 font-raleway">
                    Enter your email address associated with your account. We'll send you a password recovery code.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="space-y-2">
                    <label className="text-sm font-bold font-raleway text-neutral-900">Email Address</label>
                    <Input placeholder="email@example.com" className="h-12 border-neutral-200 rounded-xl px-4 font-raleway" />
                </div>
                <Button
                    onClick={() => setIsSubmitted(true)}
                    className="w-full h-12 bg-brand-primary hover:bg-brand-primary/90 text-white font-bold rounded-xl"
                >
                    Send Code
                </Button>
            </CardContent>
            <div className="text-center pb-6">
                <Link href="/login" className="text-sm font-bold text-brand-primary hover:underline font-raleway">
                    Back to Login
                </Link>
            </div>
        </Card>
    )
}
