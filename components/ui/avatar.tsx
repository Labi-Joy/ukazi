"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

const Avatar = ({ className, children, ...props }: any) => (
  <div
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    )}
    {...props}
  >
    {children}
  </div>
)

const AvatarImage = ({ className, src, ...props }: any) => (
  <img
    src={src}
    className={cn("aspect-square h-full w-full object-cover", className)}
    {...props}
  />
)

const AvatarFallback = ({ className, children, ...props }: any) => (
  <div
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted text-muted-foreground",
      className
    )}
    {...props}
  >
    {children}
  </div>
)

export { Avatar, AvatarImage, AvatarFallback }
