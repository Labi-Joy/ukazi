"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { SuccessScreen } from "@/components/features/auth/SuccessScreen"
import Link from "next/link"
import { Icon } from "@iconify/react"

export default function ResetPasswordPage() {
    const [isDone, setIsDone] = useState(false)

    if (isDone) {
        return (
            <SuccessScreen
                title="Done"
                description="Your password has been successfully reset. You can now login with your new password."
                buttonText="Back to Login"
                buttonHref="/login"
            />
        )
    }

    return (
        <Card className="border-none shadow-none bg-transparent">
            <CardHeader className="space-y-2 text-center">
                <div className="size-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon icon="solar:shield-keyhole-bold" className="size-8 text-brand-primary" />
                </div>
                <CardTitle className="text-3xl font-extrabold font-raleway text-neutral-900">
                    Reset your password
                </CardTitle>
                <CardDescription className="text-neutral-500 font-raleway">
                    Create a new password that is secure and easy to remember.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-sm font-bold font-raleway text-neutral-900">New Password</label>
                        <Input type="password" placeholder="********" className="h-12 border-neutral-200 rounded-xl px-4 font-raleway" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold font-raleway text-neutral-900">Confirm New Password</label>
                        <Input type="password" placeholder="********" className="h-12 border-neutral-200 rounded-xl px-4 font-raleway" />
                    </div>
                </div>
                <Button
                    onClick={() => setIsDone(true)}
                    className="w-full h-12 bg-brand-primary hover:bg-brand-primary/90 text-white font-bold rounded-xl"
                >
                    Reset Password
                </Button>
            </CardContent>
        </Card>
    )
}
