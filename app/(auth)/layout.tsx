import { Container } from "@/components/common/Container"
import { Logo } from "@/components/common/Logo"
import Link from "next/link"

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen bg-brand-accent/5 flex flex-col">
            <header className="py-8">
                <Container>
                    <Logo />
                </Container>
            </header>
            <main className="flex-1 flex items-center justify-center py-12">
                <Container className="max-w-md">
                    {children}
                </Container>
            </main>
            <footer className="py-8">
                <Container className="text-center">
                    <p className="text-sm text-neutral-500 font-raleway">
                        © 2024 Ukazi. All rights reserved.
                    </p>
                </Container>
            </footer>
        </div>
    )
}
