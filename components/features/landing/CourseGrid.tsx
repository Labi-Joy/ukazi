"use client"

import { Container } from "@/components/common/Container"
import { CourseCard } from "@/components/features/courses/CourseCard"
import Link from "next/link"
import { Icon } from "@iconify/react"

const trendingCourses = [
    {
        title: "Learn Web Development- Java, CSS, Python, JavaScript",
        category: "Website Development",
        description: "Master the essentials of web development with hands-on courses in Java, CSS, Python, and JavaScript. Build, code, and launch your own projects with expert guidance",
        rating: 4.7,
        reviewsCount: "8,650",
        thumbnail: "/images/tnp.pic1.png",
    },
    {
        title: "Learn Figma- UI/UX Design, Prototyping and Wireframing.",
        category: "UI/UX Design",
        description: "Unlock your design potential with Figma. Dive into UI/UX design, prototyping, and wireframing to create impactful, user-centered experiences.",
        rating: 4.7,
        reviewsCount: "8,850",
        thumbnail: "/images/tnp-pic2.png",
    },
    {
        title: "Learn Graphic Design-Design with Adobe illustrator and Photoshop",
        category: "Graphic Design",
        description: "Bring your creative ideas to life with Adobe Illustrator and Photoshop. Learn essential graphic design skills to craft stunning visuals and professional designs.",
        rating: 4.7,
        reviewsCount: "12,650",
        thumbnail: "/images/tnp-pic3.png",
    },
    {
        title: "Learn Content Management-Creating and managing content",
        category: "Content Management",
        description: "Master the art of content creation and management. Learn strategies for creating, organizing, and optimizing content that engages and informs",
        rating: 4.7,
        reviewsCount: "8,650",
        thumbnail: "/images/tnp-pic4.png",
    },
    {
        title: "Learn Search Engine Optimization (SEO)-Become an SEO Expert",
        category: "SEO",
        description: "Boost your visibility and drive traffic with SEO expertise. Learn proven techniques to optimize content, rank higher, and become an SEO pro",
        rating: 4.7,
        reviewsCount: "8,650",
        thumbnail: "/images/tnp-pic5.png",
    },
    {
        title: "Learn Premier Pro-Become a professional video Editor",
        category: "Video Editing",
        description: "Transform your storytelling with Premiere Pro. Master video editing skills to create polished, professional-quality videos and bring your vision to life.",
        rating: 4.7,
        reviewsCount: "8,650",
        thumbnail: "/images/tnp-pic6.png",
    },
]

export function CourseGrid() {
    return (
        <section id="courses" className="py-24 bg-white overflow-hidden">
            <Container className="space-y-16">
                <div className="text-center">
                    <h2 className="text-4xl lg:text-5xl font-extrabold font-raleway text-neutral-900 leading-tight">
                        <span className="text-brand-primary">Trending</span> and Popular <span className="text-brand-primary">Courses</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {trendingCourses.map((course, idx) => (
                        <CourseCard key={idx} {...course} />
                    ))}
                </div>

                <div className="flex justify-center pt-8">
                    <Link
                        href="/courses"
                        className="flex items-center gap-3 bg-[#333333] hover:bg-neutral-800 text-white font-bold h-16 px-12 rounded-lg text-xl transition-all shadow-xl group"
                    >
                        See All courses
                        <Icon icon="solar:arrow-right-linear" className="size-6 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </Container>
        </section>
    )
}
