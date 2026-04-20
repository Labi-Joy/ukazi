import { cn } from "@/lib/utils"

interface StepIndicatorProps {
    currentStep: number
    totalSteps: number
}

export function StepIndicator({ currentStep, totalSteps }: StepIndicatorProps) {
    return (
        <div className="flex items-center justify-between w-full mb-8 px-4">
            {Array.from({ length: totalSteps }).map((_, i) => (
                <div key={i} className="flex items-center flex-1 last:flex-none">
                    <div
                        className={cn(
                            "size-10 rounded-full flex items-center justify-center font-bold font-raleway transition-all duration-300",
                            i + 1 <= currentStep
                                ? "bg-brand-primary text-white shadow-lg shadow-brand-primary/20"
                                : "bg-neutral-100 text-neutral-400"
                        )}
                    >
                        {i + 1}
                    </div>
                    {i + 1 < totalSteps && (
                        <div
                            className={cn(
                                "h-1 flex-1 mx-2 rounded-full transition-all duration-500",
                                i + 1 < currentStep ? "bg-brand-primary" : "bg-neutral-100"
                            )}
                        />
                    )}
                </div>
            ))}
        </div>
    )
}
