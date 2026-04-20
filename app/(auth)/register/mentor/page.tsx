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
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

type RegisterFormValues = z.infer<typeof registerSchema>

const SKILLS = [
    "React", "Node.js", "Python", "UI Design", "Figma",
    "Marketing", "SEO", "Project Management", "Agile"
]

export default function MentorRegisterPage() {
    const [step, setStep] = useState(1)
    const [selectedSkills, setSelectedSkills] = useState<string[]>([])
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
            role: "MENTOR",
        },
    })

    const nextStep = async () => {
        if (step === 1) {
            const isValid = await trigger(["name", "email", "password"])
            if (!isValid) return
        }
        setStep((s) => s + 1)
    }

    const toggleSkill = (skill: string) => {
        setSelectedSkills(prev =>
            prev.includes(skill)
                ? prev.filter(s => s !== skill)
                : [...prev, skill]
        )
    }

    const onSubmit = async (values: RegisterFormValues) => {
        console.log("Registering Mentor...", { ...values, skills: selectedSkills })
        setIsCompleted(true)
    }

    if (isCompleted) {
        return (
            <SuccessScreen
                title="Congratulations!"
                description="Your mentor account has been successfully created. We'll review your professional background shortly."
                buttonText="Go to Dashboard"
                buttonHref="/mentor-dashboard"
            />
        )
    }

    return (
        <Card className="border-none shadow-none bg-transparent">
            <CardHeader className="space-y-4 px-0">
                <StepIndicator currentStep={step} totalSteps={4} />
                <div className="text-center space-y-2">
                    <CardTitle className="text-3xl font-extrabold font-raleway text-neutral-900">
                        {step === 1 ? "Join Ukazi" : step === 2 ? "Professional Background" : step === 3 ? "Skills & Expertise" : "Teaching Experience"}
                    </CardTitle>
                    <CardDescription className="text-neutral-500 font-raleway">
                        {step === 1 ? "Tell us more about you" : step === 2 ? "Share your career journey" : step === 3 ? "Pick your top skills" : "Final steps to go"}
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
                                    <label className="text-sm font-bold font-raleway text-neutral-900">Full Name</label>
                                    <Input {...register("name")} placeholder="John Doe" className="h-12 border-neutral-200 rounded-xl px-4 font-raleway" />
                                    {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold font-raleway text-neutral-900">Work Email</label>
                                    <Input {...register("email")} placeholder="work@example.com" className="h-12 border-neutral-200 rounded-xl px-4 font-raleway" />
                                    {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold font-raleway text-neutral-900">Password</label>
                                    <Input {...register("password")} type="password" placeholder="********" className="h-12 border-neutral-200 rounded-xl px-4 font-raleway" />
                                    {errors.password && <p className="text-xs text-destructive">{errors.password.message}</p>}
                                </div>
                            </div>
                            <Button onClick={nextStep} className="w-full h-12 bg-brand-primary hover:bg-brand-primary/90 font-bold rounded-xl">
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
                            className="space-y-6"
                        >
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold font-raleway text-neutral-900">Current Occupation</label>
                                    <Input placeholder="e.g. Senior Product Designer" className="h-12 border-neutral-200 rounded-xl px-4 font-raleway" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold font-raleway text-neutral-900">Company / Organization</label>
                                    <Input placeholder="e.g. Google" className="h-12 border-neutral-200 rounded-xl px-4 font-raleway" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold font-raleway text-neutral-900">Years of Experience</label>
                                    <Input type="number" placeholder="e.g. 5" className="h-12 border-neutral-200 rounded-xl px-4 font-raleway" />
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <Button variant="ghost" onClick={() => setStep(1)} className="flex-1 h-12 font-bold rounded-xl">Back</Button>
                                <Button onClick={nextStep} className="flex-[2] h-12 bg-brand-primary hover:bg-brand-primary/90 font-bold rounded-xl">Continue</Button>
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
                            <div className="flex flex-wrap gap-3 justify-center">
                                {SKILLS.map((skill) => (
                                    <Badge
                                        key={skill}
                                        onClick={() => toggleSkill(skill)}
                                        className={cn(
                                            "cursor-pointer px-4 py-2 rounded-xl text-sm font-medium font-raleway transition-all",
                                            selectedSkills.includes(skill) ? "bg-brand-primary text-white" : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                                        )}
                                    >
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                            <div className="flex gap-4">
                                <Button variant="ghost" onClick={() => setStep(2)} className="flex-1 h-12 font-bold rounded-xl">Back</Button>
                                <Button onClick={nextStep} disabled={selectedSkills.length === 0} className="flex-[2] h-12 bg-brand-primary hover:bg-brand-primary/90 font-bold rounded-xl">Continue</Button>
                            </div>
                        </motion.div>
                    )}

                    {step === 4 && (
                        <motion.div
                            key="step4"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-6"
                        >
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold font-raleway text-neutral-900">Tell us about your teaching experience</label>
                                    <textarea
                                        className="w-full min-h-[120px] bg-white border border-neutral-200 rounded-xl p-4 text-sm font-raleway focus:ring-2 focus:ring-brand-primary outline-none"
                                        placeholder="Briefly describe your experience as an instructor..."
                                    />
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <Button variant="ghost" onClick={() => setStep(3)} className="flex-1 h-12 font-bold rounded-xl">Back</Button>
                                <Button onClick={handleSubmit(onSubmit)} className="flex-[2] h-12 bg-brand-primary hover:bg-brand-primary/90 font-bold rounded-xl">Finish</Button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </CardContent>
        </Card>
    )
}
