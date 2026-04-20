"use client"

import { StatCard } from "@/components/features/dashboard/StatCard"
import { Icon } from "@iconify/react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const recentStudents = [
    { name: "Alice Freeman", email: "alice@example.com", avatar: "https://i.pravatar.cc/150?u=alice", course: "UI/UX Design" },
    { name: "Bob Marley", email: "bob@example.com", avatar: "https://i.pravatar.cc/150?u=bob", course: "Web Dev" },
    { name: "Charlie Sun", email: "charlie@example.com", avatar: "https://i.pravatar.cc/150?u=charlie", course: "UI/UX Design" },
]

export default function MentorDashboardPage() {
    return (
        <div className="space-y-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-2">
                    <h1 className="text-3xl font-extrabold font-raleway text-neutral-900">Good morning, Labi 👋</h1>
                    <p className="text-neutral-500 font-raleway font-medium">Here's what's happening with your courses today.</p>
                </div>
                <div className="flex gap-4">
                    <Button variant="outline" className="h-12 px-6 font-bold font-raleway rounded-xl border-neutral-200">
                        View Analytics
                    </Button>
                    <Button className="bg-brand-primary hover:bg-brand-primary/90 rounded-xl h-12 px-6 font-bold font-raleway">
                        Create New Course
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard label="Total Courses" value="08" icon="solar:notebook-bold" />
                <StatCard label="Total Students" value="1,240" icon="solar:users-group-rounded-bold" trend="+12% this month" trendUp />
                <StatCard label="Total Revenue" value="$42,850" icon="solar:wallet-money-bold" trend="+8% this month" trendUp />
                <StatCard label="Avg. Rating" value="4.9" icon="solar:star-bold" />
            </div>

            <div className="grid lg:grid-cols-3 gap-10">
                <Card className="lg:col-span-2 border-none shadow-sm rounded-3xl bg-white overflow-hidden">
                    <CardHeader className="p-8 pb-0">
                        <div className="flex items-center justify-between">
                            <CardTitle className="text-2xl font-extrabold font-raleway">Revenue Overview</CardTitle>
                            <select className="bg-neutral-50 border-none rounded-lg text-sm font-bold font-raleway p-2 outline-none">
                                <option>Last 7 days</option>
                                <option>Last 30 days</option>
                            </select>
                        </div>
                    </CardHeader>
                    <CardContent className="p-8">
                        <div className="h-[300px] w-full bg-neutral-50 rounded-2xl flex items-center justify-center border-2 border-dashed border-neutral-100">
                            <div className="text-center space-y-2">
                                <Icon icon="solar:chart-square-linear" className="size-12 text-neutral-300 mx-auto" />
                                <p className="text-neutral-400 font-raleway font-medium">Revenue chart visualization placeholder</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-none shadow-sm rounded-3xl bg-white overflow-hidden">
                    <CardHeader className="p-8 pb-4">
                        <CardTitle className="text-2xl font-extrabold font-raleway">Recent Students</CardTitle>
                    </CardHeader>
                    <CardContent className="p-8 pt-0 space-y-6">
                        {recentStudents.map((student, idx) => (
                            <div key={idx} className="flex items-center justify-between group">
                                <div className="flex items-center gap-4">
                                    <Avatar className="size-12 border-2 border-white shadow-sm">
                                        <AvatarImage src={student.avatar} />
                                        <AvatarFallback>{student.name[0]}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="text-sm font-bold font-raleway text-neutral-900">{student.name}</p>
                                        <p className="text-xs text-neutral-500 font-raleway">{student.course}</p>
                                    </div>
                                </div>
                                <Button variant="ghost" size="icon" className="group-hover:text-brand-primary">
                                    <Icon icon="solar:chat-round-dots-linear" className="size-5" />
                                </Button>
                            </div>
                        ))}
                        <Button variant="link" className="w-full text-brand-primary font-bold font-raleway p-0 h-auto">View all students</Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
