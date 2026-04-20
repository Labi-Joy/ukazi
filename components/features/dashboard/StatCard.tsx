import { cn } from "@/lib/utils"
import { Icon } from "@iconify/react"
import { Card, CardContent } from "@/components/ui/card"

interface StatCardProps {
    label: string
    value: string | number
    icon: string
    trend?: string
    trendUp?: boolean
    className?: string
}

export function StatCard({ label, value, icon, trend, trendUp, className }: StatCardProps) {
    return (
        <Card className={cn("overflow-hidden border-none shadow-sm bg-white rounded-2xl", className)}>
            <CardContent className="p-6">
                <div className="flex items-center justify-between">
                    <div className="space-y-2">
                        <p className="text-sm font-bold font-raleway text-neutral-500">{label}</p>
                        <h3 className="text-3xl font-extrabold font-raleway text-neutral-900">{value}</h3>
                        {trend && (
                            <div className={cn("flex items-center gap-1 text-xs font-bold font-raleway", trendUp ? "text-emerald-500" : "text-destructive")}>
                                <Icon icon={trendUp ? "solar:arrow-right-up-bold" : "solar:arrow-right-down-bold"} className="size-3" />
                                {trend}
                            </div>
                        )}
                    </div>
                    <div className="size-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center">
                        <Icon icon={icon} className="size-7 text-brand-primary" />
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
