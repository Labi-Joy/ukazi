import Link from "next/link"
import { cn } from "@/lib/utils"

interface LogoProps {
    className?: string
    variant?: "light" | "dark"
}

export function Logo({ className, variant = "dark" }: LogoProps) {
    return (
        <Link
            href="/"
            className={cn(
                "text-2xl font-extrabold tracking-tight font-raleway",
                variant === "dark" ? "text-neutral-900" : "text-white",
                className
            )}
        >
            UKAZI<span className="text-brand-primary">.</span>
        </Link>
    )
}
