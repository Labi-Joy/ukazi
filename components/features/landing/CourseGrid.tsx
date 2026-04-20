"use client"

import { Container } from "@/components/common/Container"
import { CourseCard } from "@/components/features/courses/CourseCard"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const dummyCourses = [
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
    },
    {
        title: "Digital Marketing Strategy",
        mentor: "Alex Chen",
        rating: 4.7,
        price: 35,
        thumbnail: "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=800&auto=format&fit=crop",
    },
    {
        title: "Data Science with Python",
        mentor: "Elena Rodriguez",
        rating: 4.6,
        price: 55,
        thumbnail: "https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=800&auto=format&fit=crop",
    },
]

export function CourseGrid() {
    return (
        <section className="py-20 bg-[#FFF8F8]">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
                    <div className="space-y-4 text-center md:text-left max-w-2xl">
                        <h2 className="text-4xl font-extrabold font-raleway text-neutral-900">
                            Popular courses to explore
                        </h2>
                        <p className="text-neutral-600 font-raleway">
                            Get standard knowledge from professional mentors around the globe.
                        </p>
                    </div>
                    <Button variant="link" className="text-brand-primary font-bold text-lg p-0 h-auto" asChild>
                        <Link href="/courses">View all courses</Link>
                    </Button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {dummyCourses.map((course, idx) => (
                        <CourseCard key={idx} {...course} />
                    ))}
                </div>
            </Container>
        </section>
    )
}
