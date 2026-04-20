"use client"

import { Sidebar } from "@/components/common/Sidebar"
import { Icon } from "@iconify/react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"

const mentorMenuItems = [
    { icon: "solar:widget-bold", label: "Dashboard", href: "/mentor-dashboard" },
    { icon: "solar:notebook-bold", label: "Course", href: "/mentor-dashboard/courses" },
    { icon: "solar:users-group-rounded-bold", label: "Students", href: "/mentor-dashboard/students" },
    { icon: "solar:calendar-date-bold", label: "Schedule", href: "/mentor-dashboard/schedule" },
    { icon: "solar:chat-round-dots-bold", label: "Chat", href: "/mentor-dashboard/chat" },
    { icon: "solar:user-bold", label: "Profile", href: "/mentor-dashboard/profile" },
]

export default function MentorDashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex min-h-screen bg-neutral-50">
            <Sidebar items={mentorMenuItems} />

            <div className="flex-1 flex flex-col min-w-0">
                <header className="h-20 bg-white border-b px-8 flex items-center justify-between sticky top-0 z-40">
                    <div className="relative max-w-md w-full hidden md:block">
                        <Icon icon="solar:magnifer-linear" className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 size-5" />
                        <Input
                            placeholder="Search mentor dashboard..."
                            className="pl-10 h-11 border-neutral-200 bg-neutral-50 rounded-xl focus:bg-white transition-all font-raleway"
                        />
                    </div>

                    <div className="flex items-center gap-6">
                        <Button variant="ghost" size="icon" className="relative group">
                            <Icon icon="solar:bell-bold" className="size-6 text-neutral-400 group-hover:text-neutral-900" />
                            <span className="absolute top-2 right-2 size-2 bg-brand-primary rounded-full border-2 border-white" />
                        </Button>

                        <div className="flex items-center gap-3">
                            <div className="text-right hidden sm:block">
                                <p className="text-sm font-bold font-raleway text-neutral-900">Mentor Labi</p>
                                <p className="text-[10px] text-brand-primary font-bold font-raleway">Mentor Account</p>
                            </div>
                            <Avatar className="size-10 border-2 border-white shadow-sm">
                                <AvatarImage src="https://github.com/nutlope.png" />
                                <AvatarFallback>ML</AvatarFallback>
                            </Avatar>
                        </div>
                    </div>
                </header>

                <main className="flex-1 p-8">
                    {children}
                </main>
            </div>
        </div>
    )
}
