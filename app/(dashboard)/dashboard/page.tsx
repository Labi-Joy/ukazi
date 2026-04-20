"use client"

import { StatCard } from "@/components/features/dashboard/StatCard"
import { CourseCard } from "@/components/features/courses/CourseCard"
import { Icon } from "@iconify/react"
import { Button } from "@/components/ui/button"

const enrolledCourses = [
    {
        title: "UI/UX Design Masterclass",
        mentor: "Kingsley Liam",
        rating: 4.8,
        price: 49,
        thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
    },
    {
        title: "Complete Web Development 2024",
        mentor: "Sarah Johnson",
        rating: 4.9,
        price: 0,
        isFree: true,
        thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
    }
]

export default function StudentDashboardPage() {
    return (
        <div className="space-y-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-2">
                    <h1 className="text-3xl font-extrabold font-raleway text-neutral-900">Hi John Doe 👋</h1>
                    <p className="text-neutral-500 font-raleway font-medium">Ready to continue your learning journey today?</p>
                </div>
                <Button className="bg-brand-primary hover:bg-brand-primary/90 rounded-xl h-12 px-6 font-bold font-raleway">
                    Explore Courses
                </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard label="Course" value="12" icon="solar:notebook-bold" trend="2.4% Up" trendUp />
                <StatCard label="Finished Course" value="06" icon="solar:check-circle-bold" />
                <StatCard label="Earn Certificate" value="03" icon="solar:medal-star-bold" />
                <StatCard label="New skills" value="10" icon="solar:bolt-bold" trend="12% Up" trendUp />
            </div>

            <div className="grid lg:grid-cols-3 gap-10">
                <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-extrabold font-raleway text-neutral-900">Continue Learning</h2>
                        <Button variant="ghost" className="text-brand-primary font-bold hover:bg-transparent p-0 h-auto">View all</Button>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {enrolledCourses.map((course, idx) => (
                            <CourseCard key={idx} {...course} />
                        ))}
                    </div>
                </div>

                <div className="space-y-6">
                    <h2 className="text-2xl font-extrabold font-raleway text-neutral-900">Your Activity</h2>
                    <div className="bg-white border-none shadow-sm rounded-3xl p-6 h-[400px] flex flex-col items-center justify-center text-center space-y-4">
                        <div className="size-20 bg-neutral-50 rounded-full flex items-center justify-center">
                            <Icon icon="solar:calendar-linear" className="size-10 text-neutral-300" />
                        </div>
                        <div>
                            <p className="font-bold font-raleway text-neutral-900">No activity today</p>
                            <p className="text-sm text-neutral-500 font-raleway">Your learning activity will appear here.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
