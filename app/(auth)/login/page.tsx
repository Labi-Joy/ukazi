"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { loginSchema } from "@/lib/validations/auth"
import type { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Icon } from "@iconify/react"
import Link from "next/link"

type LoginFormValues = z.infer<typeof loginSchema>

export default function LoginPage() {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    const onSubmit = async (values: LoginFormValues) => {
        setIsLoading(true)
        setError(null)

        try {
            const result = await signIn("credentials", {
                email: values.email,
                password: values.password,
                redirect: false,
            })

            if (result?.error) {
                setError("Invalid email or password")
            } else {
                router.push("/dashboard")
                router.refresh()
            }
        } catch (err) {
            setError("Something went wrong. Please try again.")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Card className="border-none shadow-none bg-transparent">
            <CardHeader className="space-y-2 text-center">
                <CardTitle className="text-3xl font-extrabold font-raleway text-neutral-900">
                    Welcome Back
                </CardTitle>
                <CardDescription className="text-neutral-500 font-raleway">
                    Enter your details to access your account
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    {error && (
                        <div className="bg-destructive/10 text-destructive text-sm p-3 rounded-lg flex items-center gap-2">
                            <Icon icon="solar:danger-bold" className="size-4" />
                            {error}
                        </div>
                    )}

                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-bold font-raleway text-neutral-900">Email Address</label>
                            <Input
                                {...register("email")}
                                placeholder="email@example.com"
                                className="h-12 border-neutral-200 rounded-xl px-4 font-raleway"
                                disabled={isLoading}
                            />
                            {errors.email && (
                                <p className="text-xs text-destructive font-raleway">{errors.email.message}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <label className="text-sm font-bold font-raleway text-neutral-900">Password</label>
                                <Link
                                    href="/forgot-password"
                                    className="text-xs font-bold text-brand-primary hover:underline font-raleway"
                                >
                                    Forgot password?
                                </Link>
                            </div>
                            <Input
                                {...register("password")}
                                type="password"
                                placeholder="********"
                                className="h-12 border-neutral-200 rounded-xl px-4 font-raleway"
                                disabled={isLoading}
                            />
                            {errors.password && (
                                <p className="text-xs text-destructive font-raleway">{errors.password.message}</p>
                            )}
                        </div>
                    </div>

                    <Button
                        type="submit"
                        className="w-full h-12 bg-brand-primary hover:bg-brand-primary/90 text-white font-bold rounded-xl"
                        disabled={isLoading}
                    >
                        {isLoading ? "Signing in..." : "Login"}
                    </Button>
                </form>

                <div className="relative my-8">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-neutral-200" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-brand-accent/5 px-2 text-neutral-400 font-medium font-raleway">Or continue with</span>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" className="h-12 border-neutral-200 rounded-xl hover:bg-white hover:border-neutral-300">
                        <Icon icon="logos:google-icon" className="mr-2 size-4" />
                        Google
                    </Button>
                    <Button variant="outline" className="h-12 border-neutral-200 rounded-xl hover:bg-white hover:border-neutral-300">
                        <Icon icon="logos:facebook" className="mr-2 size-4" />
                        Facebook
                    </Button>
                </div>
            </CardContent>
            <CardFooter className="justify-center pt-6">
                <p className="text-sm text-neutral-600 font-raleway">
                    Don't have an account?{" "}
                    <Link href="/register" className="font-bold text-brand-primary hover:underline">
                        Register now
                    </Link>
                </p>
            </CardFooter>
        </Card>
    )
}
