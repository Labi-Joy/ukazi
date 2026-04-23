import { Container } from "@/components/common/Container"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Icon } from "@iconify/react"

export default function ContactPage() {
    return (
        <div className="py-20 lg:py-32">
            <Container className="grid lg:grid-cols-2 gap-20 items-center">
                <div className="space-y-12">
                    <div className="space-y-4">
                        <h1 className="text-5xl font-extrabold font-raleway text-neutral-900">Get in touch</h1>
                        <p className="text-lg text-neutral-600 font-raleway max-w-md">
                            Have questions about Ukazi? We're here to help. Send us a message and we'll respond as soon as possible.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <div className="flex gap-6 items-start">
                            <div className="size-12 rounded-2xl bg-brand-primary/10 flex items-center justify-center shrink-0">
                                <Icon icon="solar:letter-bold" className="size-6 text-brand-primary" />
                            </div>
                            <div className="space-y-1">
                                <p className="text-sm font-bold text-neutral-900 font-raleway uppercase tracking-wider">Email Us</p>
                                <p className="text-neutral-600 font-raleway font-medium">support@ukazi.com</p>
                            </div>
                        </div>
                        <div className="flex gap-6 items-start">
                            <div className="size-12 rounded-2xl bg-brand-primary/10 flex items-center justify-center shrink-0">
                                <Icon icon="solar:phone-bold" className="size-6 text-brand-primary" />
                            </div>
                            <div className="space-y-1">
                                <p className="text-sm font-bold text-neutral-900 font-raleway uppercase tracking-wider">Call Us</p>
                                <p className="text-neutral-600 font-raleway font-medium">+234 815 644 2585</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white border rounded-3xl p-10 shadow-xl shadow-brand-primary/5">
                    <form className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold font-raleway text-neutral-900">Full Name</label>
                                <Input placeholder="John Doe" className="h-12 border-neutral-200 rounded-xl px-4 font-raleway" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold font-raleway text-neutral-900">Email Address</label>
                                <Input placeholder="john@example.com" className="h-12 border-neutral-200 rounded-xl px-4 font-raleway" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold font-raleway text-neutral-900">Subject</label>
                            <Input placeholder="How can we help?" className="h-12 border-neutral-200 rounded-xl px-4 font-raleway" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold font-raleway text-neutral-900">Message</label>
                            <textarea
                                className="w-full min-h-[150px] bg-white border border-neutral-200 rounded-xl p-4 text-sm font-raleway focus:ring-2 focus:ring-brand-primary outline-none"
                                placeholder="Write your message here..."
                            />
                        </div>
                        <Button className="w-full h-14 bg-brand-primary hover:bg-brand-primary/90 text-white font-bold rounded-xl text-lg">
                            Send Message
                        </Button>
                    </form>
                </div>
            </Container>
        </div>
    )
}
