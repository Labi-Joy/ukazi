"use client"

import * as React from "react"
import { ChevronDown, Check } from "lucide-react"
import { cn } from "@/lib/utils"

const Select = ({ children, onValueChange, defaultValue }: any) => {
    const [value, setValue] = React.useState(defaultValue || "")
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <div className="relative w-full">
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child as React.ReactElement<any>, {
                        value,
                        setValue: (v: string) => {
                            setValue(v);
                            onValueChange?.(v);
                        },
                        isOpen,
                        setIsOpen
                    })
                }
                return child
            })}
        </div>
    )
}

const SelectTrigger = ({ className, children, value, isOpen, setIsOpen }: any) => (
    <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
            "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
            className
        )}
    >
        {children}
        <ChevronDown className={cn("h-4 w-4 opacity-50 transition-transform", isOpen && "rotate-180")} />
    </button>
)

const SelectValue = ({ placeholder, value }: any) => (
    <span className="block truncate">
        {value || placeholder}
    </span>
)

const SelectContent = ({ children, isOpen, value, setValue, setIsOpen, className }: any) => {
    if (!isOpen) return null;
    return (
        <>
            <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
            <div className={cn(
                "absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",
                className
            )}>
                {React.Children.map(children, (child) => {
                    if (React.isValidElement(child)) {
                        return React.cloneElement(child as React.ReactElement<any>, {
                            currentValue: value,
                            setValue,
                            setIsOpen
                        })
                    }
                    return child
                })}
            </div>
        </>
    )
}

const SelectItem = ({ children, value, currentValue, setValue, setIsOpen, className }: any) => (
    <div
        className={cn(
            "relative cursor-default select-none py-2 pl-10 pr-4 text-neutral-900 hover:bg-brand-primary hover:text-white transition-colors",
            value === currentValue && "bg-neutral-50 font-bold",
            className
        )}
        onClick={() => {
            setValue(value);
            setIsOpen(false);
        }}
    >
        <span className="block truncate">{children}</span>
        {value === currentValue && (
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-brand-primary group-hover:text-white">
                <Check className="h-4 w-4" />
            </span>
        )}
    </div>
)

const SelectGroup = ({ children }: any) => <>{children}</>

export {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
    SelectGroup
}
