import Image from "next/image"
import { Icon } from "@iconify/react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface CourseCardProps {
    title: string
    mentor: string
    rating: number
    price: number
    isFree?: boolean
    thumbnail?: string
    className?: string
}

export function CourseCard({
    title,
    mentor,
    rating,
    price,
    isFree = false,
    thumbnail,
    className,
}: CourseCardProps) {
    return (
        <div className={cn("group rounded-[32px] border border-neutral-100 bg-white overflow-hidden hover:shadow-2xl hover:shadow-brand-primary/5 transition-all duration-500", className)}>
            <div className="relative aspect-[4/3] bg-neutral-100 overflow-hidden">
                {thumbnail ? (
                    <Image
                        src={thumbnail}
                        alt={title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                ) : (
                    <div className="size-full flex items-center justify-center opacity-10">
                        <Icon icon="solar:camera-bold" className="size-12" />
                    </div>
                )}
                <div className="absolute top-4 left-4 flex gap-2">
                    <Badge className="bg-white/90 backdrop-blur-sm text-brand-primary font-bold border-none shadow-sm px-3 py-1">
                        Best Seller
                    </Badge>
                </div>
            </div>

            <div className="p-6 space-y-6">
                <div className="space-y-2">
                    <h3 className="font-extrabold text-xl text-neutral-900 font-raleway line-clamp-2 leading-snug group-hover:text-brand-primary transition-colors">
                        {title}
                    </h3>
                    <div className="flex items-center gap-2">
                        <div className="size-6 rounded-full bg-neutral-100 overflow-hidden">
                            <Icon icon="solar:user-circle-bold" className="size-full text-neutral-300" />
                        </div>
                        <p className="text-sm text-neutral-500 font-raleway font-medium">
                            {mentor}
                        </p>
                    </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-neutral-50">
                    <div className="flex items-center gap-1.5 bg-brand-accent/10 px-3 py-1.5 rounded-full">
                        <Icon icon="solar:star-bold" className="text-brand-accent size-4" />
                        <span className="text-sm font-extrabold text-neutral-900">{rating.toFixed(1)}</span>
                    </div>
                    <p className="text-2xl font-black text-brand-primary font-raleway">
                        {isFree ? "Free" : `$${price}`}
                    </p>
                </div>
            </div>
        </div>
    )
}
