"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Icon } from "@iconify/react"
import { Logo } from "@/components/common/Logo"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { signOut } from "next-auth/react"

interface SidebarItem {
    icon: string
    label: string
    href: string
}

interface SidebarProps {
    items: SidebarItem[]
    className?: string
}

export function Sidebar({ items, className }: SidebarProps) {
    const pathname = usePathname()

    return (
        <aside className={cn("hidden lg:flex flex-col w-72 h-screen sticky top-0 bg-white border-r", className)}>
            <div className="p-8">
                <Logo />
            </div>

            <nav className="flex-1 px-4 space-y-2 overflow-y-auto">
                {items.map((item) => {
                    const isActive = pathname === item.href
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-bold font-raleway transition-all group",
                                isActive
                                    ? "bg-brand-primary text-white shadow-lg shadow-brand-primary/20"
                                    : "text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900"
                            )}
                        >
                            <Icon
                                icon={item.icon}
                                className={cn("size-6", isActive ? "text-white" : "text-neutral-400 group-hover:text-neutral-900")}
                            />
                            {item.label}
                        </Link>
                    )
                })}
            </nav>

            <div className="p-6 border-t mt-auto">
                <Button
                    variant="ghost"
                    onClick={() => signOut()}
                    className="w-full flex items-center justify-start gap-3 px-4 py-3.5 h-auto text-neutral-500 hover:text-destructive hover:bg-destructive/5 font-bold font-raleway rounded-xl group"
                >
                    <Icon icon="solar:logout-bold" className="size-6 text-neutral-400 group-hover:text-destructive" />
                    Logout
                </Button>
            </div>
        </aside>
    )
}
