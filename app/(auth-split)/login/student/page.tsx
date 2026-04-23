"use client"

import Image from "next/image"
import { StudentLoginForm } from "@/components/features/auth/StudentLoginForm"
import { useSearchParams } from "next/navigation"
import { Logo } from "@/components/common/Logo"

export default function StudentLoginPage() {
    const searchParams = useSearchParams()
    const isError = searchParams.get('error') === 'true'

    return (
        <main className="min-h-screen grid lg:grid-cols-2 bg-white overflow-hidden">
            {/* Left Side: Image Collage */}
            <div className="relative hidden lg:block h-screen overflow-hidden bg-neutral-900">
                <Image
                    src="/images/sign-in-img.jpg"
                    alt="Students laughing"
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

            {/* Right Side: Form */}
            <div className="flex items-center justify-center p-8 bg-white overflow-y-auto">
                <StudentLoginForm isError={isError} />
            </div>
        </main>
    )
}
