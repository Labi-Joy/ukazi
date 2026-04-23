import { Navbar } from "@/components/common/Navbar"
import { Footer } from "@/components/common/Footer"
import { OnboardingProvider } from "@/components/providers/OnboardingProvider"

export default function PublicLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <OnboardingProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
        </OnboardingProvider>
    )
}
