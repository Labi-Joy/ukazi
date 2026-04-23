import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface LogoProps {
    className?: string
    variant?: "light" | "dark"
}

export function Logo({ className, variant = "dark" }: LogoProps) {
    const logoSrc = variant === "dark"
        ? "/icons/ukazi-logo-dark.svg"
        : "/icons/ukazi-logo-light.svg"

    return (
        <Link
            href="/"
            className={cn("relative h-10 w-32 flex items-center", className)}
        >
            <Image
                src={logoSrc}
                alt="Ukazi Logo"
                fill
                className="object-contain"
                priority
            />
        </Link>
    )
}
