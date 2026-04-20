"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { registerSchema } from "@/lib/validations/auth"
import type { z } from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { StepIndicator } from "@/components/features/auth/StepIndicator"
import { SuccessScreen } from "@/components/features/auth/SuccessScreen"
import { Icon } from "@iconify/react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"

type RegisterFormValues = z.infer<typeof registerSchema>

const CAREER_INTERESTS = [
    "UI/UX Design", "Web Development", "Digital Marketing",
    "Data Science", "Mobile Development", "Graphic Design",
    "Product Management", "Cyber Security", "Cloud Computing"
]

export default function RegisterPage() {
    const [step, setStep] = useState(1)
    const [selectedInterests, setSelectedInterests] = useState<string[]>([])
    const [isCompleted, setIsCompleted] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
        trigger,
    } = useForm<RegisterFormValues>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            role: "STUDENT",
        },
    })

    const nextStep = async () => {
        if (step === 1) {
            const isValid = await trigger(["name", "email", "password"])
            if (!isValid) return
        }
        setStep((s) => s + 1)
    }

    const toggleInterest = (interest: string) => {
        setSelectedInterests(prev =>
            prev.includes(interest)
                ? prev.filter(i => i !== interest)
                : [...prev, interest]
        )
    }

    const onSubmit = async (values: RegisterFormValues) => {
        // In a real app, this would call /api/auth/register
        console.log("Registering...", { ...values, interests: selectedInterests })
        setIsCompleted(true)
    }

    if (isCompleted) {
        return (
            <SuccessScreen
                title="Congratulations!"
                description="Your account has been successfully created. You can now explore over 100+ courses."
                buttonText="Go to Dashboard"
                buttonHref="/dashboard"
            />
        )
    }

    return (
        <Card className="border-none shadow-none bg-transparent">
            <CardHeader className="space-y-4 px-0">
                <StepIndicator currentStep={step} totalSteps={3} />
                <div className="text-center space-y-2">
                    <CardTitle className="text-3xl font-extrabold font-raleway text-neutral-900">
                        {step === 1 ? "Join Ukazi" : step === 2 ? "Pick your area of career interest" : "Email Verification"}
                    </CardTitle>
                    <CardDescription className="text-neutral-500 font-raleway">
                        {step === 1 ? "Tell us more about you" : step === 2 ? "This helps us personalize your experience" : "Enter the 4 digit pin that was sent to your email"}
                    </CardDescription>
                </div>
            </CardHeader>
            <CardContent className="px-0">
                <AnimatePresence mode="wait">
                    {step === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-6"
                        >
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold font-raleway text-neutral-900">Name</label>
                                    <Input
                                        {...register("name")}
                                        placeholder="John Doe"
                                        className="h-12 border-neutral-200 rounded-xl px-4 font-raleway"
                                    />
                                    {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold font-raleway text-neutral-900">Email Address</label>
                                    <Input
                                        {...register("email")}
                                        placeholder="email@example.com"
                                        className="h-12 border-neutral-200 rounded-xl px-4 font-raleway"
                                    />
                                    {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold font-raleway text-neutral-900">Create Password</label>
                                    <Input
                                        {...register("password")}
                                        type="password"
                                        placeholder="********"
                                        className="h-12 border-neutral-200 rounded-xl px-4 font-raleway"
                                    />
                                    {errors.password && <p className="text-xs text-destructive">{errors.password.message}</p>}
                                </div>
                            </div>
                            <Button
                                onClick={nextStep}
                                className="w-full h-12 bg-brand-primary hover:bg-brand-primary/90 font-bold rounded-xl"
                            >
                                Continue
                            </Button>
                        </motion.div>
                    )}

                    {step === 2 && (
                        <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-8"
                        >
                            <div className="flex flex-wrap gap-3 justify-center">
                                {CAREER_INTERESTS.map((interest) => (
                                    <Badge
                                        key={interest}
                                        onClick={() => toggleInterest(interest)}
                                        className={cn(
                                            "cursor-pointer px-4 py-2 rounded-xl text-sm font-medium font-raleway transition-all",
                                            selectedInterests.includes(interest)
                                                ? "bg-brand-primary text-white"
                                                : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                                        )}
                                    >
                                        {interest}
                                    </Badge>
                                ))}
                            </div>
                            <div className="flex gap-4">
                                <Button variant="ghost" onClick={() => setStep(1)} className="flex-1 h-12 font-bold rounded-xl">
                                    Back
                                </Button>
                                <Button
                                    onClick={nextStep}
                                    disabled={selectedInterests.length === 0}
                                    className="flex-[2] h-12 bg-brand-primary hover:bg-brand-primary/90 font-bold rounded-xl"
                                >
                                    Continue
                                </Button>
                            </div>
                        </motion.div>
                    )}

                    {step === 3 && (
                        <motion.div
                            key="step3"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-8"
                        >
                            <div className="flex justify-center gap-4">
                                {[1, 2, 3, 4].map((i) => (
                                    <Input
                                        key={i}
                                        maxLength={1}
                                        className="size-14 text-center text-2xl font-bold rounded-xl border-neutral-200"
                                    />
                                ))}
                            </div>
                            <div className="flex flex-col gap-4">
                                <Button
                                    onClick={handleSubmit(onSubmit)}
                                    className="w-full h-12 bg-brand-primary hover:bg-brand-primary/90 font-bold rounded-xl"
                                >
                                    Verify Email
                                </Button>
                                <button className="text-sm font-bold text-brand-primary hover:underline font-raleway">
                                    Resend Code
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {step === 1 && (
                    <div className="relative my-8">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-neutral-200" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-brand-accent/5 px-2 text-neutral-400 font-medium font-raleway">Or register with</span>
                        </div>
                    </div>
                )}

                {step === 1 && (
                    <div className="grid grid-cols-2 gap-4">
                        <Button variant="outline" className="h-12 border-neutral-200 rounded-xl">
                            <Icon icon="logos:google-icon" className="mr-2 size-4" /> Google
                        </Button>
                        <Button variant="outline" className="h-12 border-neutral-200 rounded-xl">
                            <Icon icon="logos:facebook" className="mr-2 size-4" /> Facebook
                        </Button>
                    </div>
                )}
            </CardContent>
        </Card>
    )
}
