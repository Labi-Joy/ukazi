"use client"

import { useState } from "react"
import { Container } from "@/components/common/Container"
import { CourseCard } from "@/components/features/courses/CourseCard"
import { Input } from "@/components/ui/input"
import { Icon } from "@iconify/react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const categories = ["All", "UI/UX Design", "Web Development", "Digital Marketing", "Data Science", "Graphic Design"]

const courses = [
    {
        title: "UI/UX Design Masterclass",
        mentor: "Kingsley Liam",
        rating: 4.8,
        price: 49,
        category: "UI/UX Design",
        thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
    },
    {
        title: "Complete Web Development 2024",
        mentor: "Sarah Johnson",
        rating: 4.9,
        price: 0,
        isFree: true,
        category: "Web Development",
        thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
    },
    {
        title: "Digital Marketing Strategy",
        mentor: "Alex Chen",
        rating: 4.7,
        price: 35,
        category: "Digital Marketing",
        thumbnail: "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=800&auto=format&fit=crop",
    },
    {
        title: "Data Science with Python",
        mentor: "Elena Rodriguez",
        rating: 4.6,
        price: 55,
        category: "Data Science",
        thumbnail: "https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=800&auto=format&fit=crop",
    },
    {
        title: "Figma Fundamentals",
        mentor: "Kingsley Liam",
        rating: 4.5,
        price: 25,
        category: "UI/UX Design",
        thumbnail: "https://images.unsplash.com/photo-1541462608141-ad43d055f3e2?q=80&w=800&auto=format&fit=crop",
    },
    {
        title: "React.js Advanced Patterns",
        mentor: "Sarah Johnson",
        rating: 5.0,
        price: 60,
        category: "Web Development",
        thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop",
    }
]

export default function CoursesPage() {
    const [selectedCategory, setSelectedCategory] = useState("All")
    const [searchQuery, setSearchQuery] = useState("")

    const filteredCourses = courses.filter(course => {
        const matchesCategory = selectedCategory === "All" || course.category === selectedCategory
        const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase())
        return matchesCategory && matchesSearch
    })

    return (
        <div className="py-12 space-y-12">
            <section className="bg-brand-primary/5 py-16">
                <Container className="text-center space-y-8">
                    <h1 className="text-4xl lg:text-5xl font-extrabold font-raleway text-neutral-900">
                        Find the perfect course for you
                    </h1>
                    <div className="max-w-2xl mx-auto relative">
                        <Icon icon="solar:magnifer-linear" className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 size-6" />
                        <Input
                            placeholder="Search for courses, mentors, or topics..."
                            className="h-16 pl-14 pr-6 rounded-2xl border-none shadow-xl bg-white text-lg font-raleway focus:ring-2 focus:ring-brand-primary transition-all"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </Container>
            </section>

            <Container className="space-y-12 pb-24">
                <div className="flex flex-wrap gap-3 justify-center">
                    {categories.map((category) => (
                        <Badge
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={cn(
                                "cursor-pointer px-6 py-2.5 rounded-full text-base font-bold font-raleway transition-all",
                                selectedCategory === category
                                    ? "bg-brand-primary text-white"
                                    : "bg-white border text-neutral-600 hover:bg-neutral-50"
                            )}
                        >
                            {category}
                        </Badge>
                    ))}
                </div>

                {filteredCourses.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredCourses.map((course, idx) => (
                            <CourseCard key={idx} {...course} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-24 space-y-4">
                        <Icon icon="solar:document-add-linear" className="size-20 text-neutral-200 mx-auto" />
                        <p className="text-xl font-bold font-raleway text-neutral-400">No courses found matching your criteria</p>
                    </div>
                )}
            </Container>
        </div>
    )
}
