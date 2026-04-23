import Image from "next/image"
import { Icon } from "@iconify/react"
import { cn } from "@/lib/utils"

interface CourseCardProps {
    title: string
    category: string
    description: string
    rating: number
    reviewsCount: string
    thumbnail: string
    mentor?: string
    price?: number
    isFree?: boolean
    className?: string
}

export function CourseCard({
    title,
    category,
    description,
    rating,
    reviewsCount,
    thumbnail,
    mentor,
    price,
    isFree = false,
    className,
}: CourseCardProps) {
    return (
        <div className={cn("group bg-white overflow-hidden transition-all duration-300 flex flex-col", className)}>
            <div className="relative aspect-[4/3] bg-neutral-100 overflow-hidden rounded-md group-hover:shadow-md transition-shadow">
                <Image
                    src={thumbnail}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
            </div>

            <div className="py-5 space-y-3">
                <div className="inline-block px-3 py-1 rounded-md bg-[#FFE4F2] text-[#E61F93] text-xs font-bold uppercase tracking-wider">
                    {category}
                </div>

                <div className="space-y-2">
                    <h3 className="font-extrabold text-xl text-neutral-900 font-raleway line-clamp-2 leading-tight">
                        {title}
                    </h3>
                    <p className="text-sm text-neutral-600 font-raleway line-clamp-3 leading-relaxed">
                        {description}
                    </p>
                </div>

                <div className="flex items-center gap-2 pt-1 font-raleway">
                    <span className="text-sm font-bold text-neutral-900">{rating.toFixed(1)}</span>
                    <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                            <Icon
                                key={i}
                                icon="solar:star-bold"
                                className={cn("size-3.5", i < Math.floor(rating) ? "text-[#FFCE31]" : "text-neutral-200")}
                            />
                        ))}
                    </div>
                    <span className="text-sm text-neutral-400">({reviewsCount})</span>
                </div>

                {mentor && (
                    <div className="flex items-center gap-2 pt-2 border-t border-neutral-50">
                        <p className="text-sm text-neutral-500 font-raleway font-medium">By {mentor}</p>
                    </div>
                )}
            </div>
        </div>
    )
}
