"use client"

import React, { createContext, useContext, useState } from "react"
import { RoleSelectionModal } from "@/components/features/auth/RoleSelectionModal"

interface OnboardingContextType {
    isOpen: boolean
    openOnboarding: () => void
    closeOnboarding: () => void
}

const OnboardingContext = createContext<OnboardingContextType | undefined>(undefined)

export function OnboardingProvider({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false)

    const openOnboarding = () => setIsOpen(true)
    const closeOnboarding = () => setIsOpen(false)

    return (
        <OnboardingContext.Provider value={{ isOpen, openOnboarding, closeOnboarding }}>
            {children}
            <RoleSelectionModal />
        </OnboardingContext.Provider>
    )
}

export function useOnboarding() {
    const context = useContext(OnboardingContext)
    if (context === undefined) {
        throw new Error("useOnboarding must be used within an OnboardingProvider")
    }
    return context
}
