import { Hero } from "@/components/features/landing/Hero"
import { SearchFilter } from "@/components/features/landing/SearchFilter"
import { AboutSection } from "@/components/features/landing/AboutSection"
import { CategoryGrid } from "@/components/features/landing/CategoryGrid"
import { WhyChoose } from "@/components/features/landing/WhyChoose"
import { CourseGrid } from "@/components/features/landing/CourseGrid"
import { Testimonials } from "@/components/features/landing/Testimonials"
import { InstructorCTA } from "@/components/features/landing/InstructorCTA"
import { GetInTouch } from "@/components/features/landing/GetInTouch"
import { FAQSection } from "@/components/features/landing/FAQSection"

export default function LandingPage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <SearchFilter />
      <AboutSection />
      <CategoryGrid />
      <WhyChoose />
      <CourseGrid />
      <Testimonials />
      <InstructorCTA />
      <GetInTouch />
      <FAQSection />
    </div>
  )
}
