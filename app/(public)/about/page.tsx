import { Container } from "@/components/common/Container"
import { Icon } from "@iconify/react"

export default function AboutPage() {
    return (
        <div className="py-20 space-y-24">
            <section className="text-center space-y-8">
                <Container>
                    <h1 className="text-5xl lg:text-7xl font-extrabold font-raleway text-neutral-900 leading-tight">
                        Shaping the future <br /> of <span className="text-brand-primary">Work</span>
                    </h1>
                    <p className="text-xl text-neutral-600 font-raleway max-w-3xl mx-auto leading-relaxed">
                        Ukazi is an innovative technology platform dedicated to providing high-quality, practical education and mentorship to students and professionals worldwide.
                    </p>
                </Container>
            </section>

            <section className="bg-brand-primary py-24 text-white">
                <Container className="grid md:grid-cols-3 gap-12 text-center">
                    <div className="space-y-4">
                        <h3 className="text-4xl font-extrabold font-raleway">100+</h3>
                        <p className="text-brand-secondary font-bold font-raleway">Professional Courses</p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-4xl font-extrabold font-raleway">10k+</h3>
                        <p className="text-brand-secondary font-bold font-raleway">Global Students</p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-4xl font-extrabold font-raleway">500+</h3>
                        <p className="text-brand-secondary font-bold font-raleway">Expert Mentors</p>
                    </div>
                </Container>
            </section>
        </div>
    )
}
