"use client"

import { useState } from "react"
import { Icon } from "@iconify/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export function SearchFilter() {
    return (
        <div className="w-full max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl p-4 lg:p-6 mt-12 border border-neutral-100">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                {/* Search Input */}
                <div className="relative md:col-span-1.5 flex items-center">
                    <Icon icon="solar:magnifer-linear" className="absolute left-4 text-neutral-400 size-5" />
                    <Input
                        placeholder="Input course name"
                        className="pl-12 h-14 bg-neutral-50 border-none rounded-xl font-raleway focus-visible:ring-2 focus-visible:ring-brand-primary"
                    />
                </div>

                {/* Vertical Divider (Desktop) */}
                <div className="hidden md:block w-px h-8 bg-neutral-200 mx-auto" />

                {/* Category Select */}
                <div className="md:col-span-1">
                    <Select>
                        <SelectTrigger className="h-14 bg-neutral-50 border-none rounded-xl font-raleway focus:ring-2 focus:ring-brand-primary">
                            <div className="flex items-center gap-2">
                                <Icon icon="solar:widget-linear" className="text-neutral-400 size-5" />
                                <SelectValue placeholder="Category" />
                            </div>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="uiux">UI/UX Design</SelectItem>
                            <SelectItem value="web">Web Development</SelectItem>
                            <SelectItem value="marketing">Marketing</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {/* Location Select */}
                <div className="md:col-span-1">
                    <Select>
                        <SelectTrigger className="h-14 bg-neutral-50 border-none rounded-xl font-raleway focus:ring-2 focus:ring-brand-primary">
                            <div className="flex items-center gap-2">
                                <Icon icon="solar:map-point-linear" className="text-neutral-400 size-5" />
                                <SelectValue placeholder="Location" />
                            </div>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="online">Online</SelectItem>
                            <SelectItem value="onsite">On-site</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {/* Search Button */}
                <div className="md:col-span-1">
                    <Button className="w-full h-14 bg-brand-primary hover:bg-brand-primary/90 text-white rounded-xl font-bold font-raleway text-lg flex items-center gap-2">
                        <Icon icon="solar:magnifer-bold" className="size-5" />
                        Search
                    </Button>
                </div>
            </div>
        </div>
    )
}
