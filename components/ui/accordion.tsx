"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const Accordion = ({ children, type = "single", collapsible = true, className }: any) => {
  const [openItems, setOpenItems] = React.useState<string[]>([])

  const toggleItem = (value: string) => {
    if (type === "single") {
      setOpenItems((prev) => (prev.includes(value) ? [] : [value]))
    } else {
      setOpenItems((prev) =>
        prev.includes(value) ? prev.filter((i) => i !== value) : [...prev, value]
      )
    }
  }

  return (
    <div className={cn("w-full", className)}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, {
            openItems,
            toggleItem
          })
        }
        return child
      })}
    </div>
  )
}

const AccordionItem = ({ children, value, openItems, toggleItem, className }: any) => {
  const isOpen = openItems.includes(value)
  return (
    <div className={cn("border-b", className)}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, {
            isOpen,
            onClick: () => toggleItem(value)
          })
        }
        return child
      })}
    </div>
  )
}

const AccordionTrigger = ({ children, isOpen, onClick, className }: any) => (
  <button
    type="button"
    onClick={onClick}
    className={cn(
      "flex w-full items-center justify-between py-4 text-left font-medium transition-all hover:underline",
      className
    )}
  >
    {children}
    <ChevronDown className={cn("h-4 w-4 shrink-0 transition-transform duration-200", isOpen && "rotate-180")} />
  </button>
)

const AccordionContent = ({ children, isOpen, className }: any) => (
  <div
    className={cn(
      "overflow-hidden text-sm transition-all",
      isOpen ? "max-h-96 pb-4" : "max-h-0",
      className
    )}
  >
    {children}
  </div>
)

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
