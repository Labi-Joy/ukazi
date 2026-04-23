"use client"

import { Container } from "@/components/common/Container"
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
        <section className="relative -mt-40 z-30 pb-16 bg-white">
            <Container className="space-y-24">
                {/* Stats & Trusted Section */}
                <div className="flex flex-col lg:flex-row gap-0 items-start lg:items-center">
                    {/* Trusted By Banner */}
                    <div className="bg-brand-primary rounded-br-[100px] pl-[calc(50vw-50%+60px)] pr-12 py-10 flex items-center gap-6 shadow-[0px_30px_60px_rgba(0,0,0,0.12)] -ml-[calc(50vw-50%)] z-10">
                        <div className="flex -space-x-5 ml-[-70px]">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div key={i} className="size-16 rounded-full border-2 border-white overflow-hidden shadow-xl bg-white">
                                    <img
                                        src={`/images/trust${i}.png`}
                                        alt={`User ${i}`}
                                        className="size-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="text-white min-w-[200px] mr-[-40px] text-sm font-raleway font-bold">
                            <p className="tracking-widest">Trusted by</p>
                            <p className="">More than 200+</p>
                            <p className="">Students and Mentors</p>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="flex-1 grid grid-cols-3 items-center py-8 px-12 h-full">
                        <div className="text-center space-y-2 border-r border-neutral-200 py-2">
                            <h3 className="text-4xl font-black font-raleway text-brand-primary">100+</h3>
                            <p className="text-[14px] font-bold font-raleway text-neutral-600">Total Courses</p>
                        </div>
                        <div className="text-center space-y-2 border-r border-neutral-200 py-2">
                            <h3 className="text-4xl font-black font-raleway text-brand-primary">170+</h3>
                            <p className="text-[14px] font-bold font-raleway text-neutral-600">Total Instructors</p>
                        </div>
                        <div className="text-center space-y-2 py-2">
                            <h3 className="text-4xl font-black font-raleway text-brand-primary">200+</h3>
                            <p className="text-[14px] font-bold font-raleway text-neutral-600">Total Students</p>
                        </div>
                    </div>
                </div>

                {/* Main Search Section */}
                <div className="space-y-12">
                    <h2 className="text-center text-4xl lg:text-5xl font-black font-raleway text-brand-primary">
                        Search for courses and Mentors
                    </h2>

                    <div className="flex flex-col lg:flex-row gap-6 items-center justify-center max-w-5xl mx-auto">
                        {/* Search Bar Group */}
                        <div className="flex flex-1 w-full border border-neutral-800 rounded-none overflow-hidden h-20 shadow-sm">
                            <Input
                                placeholder="Search for over 70+ courses and mentors"
                                className="flex-1 border-none h-full bg-white text-xl font-raleway focus-visible:ring-0 px-8 placeholder:text-neutral-400"
                            />
                            <Button className="h-full px-12 bg-brand-primary hover:bg-brand-primary text-white font-black text-xl rounded-none">
                                Search
                            </Button>
                        </div>

                        {/* Category Select */}
                        <div className="w-full lg:w-80">
                            <Select>
                                <SelectTrigger className="h-20 border border-neutral-800 rounded-none bg-white font-raleway font-bold text-lg px-8 focus:ring-0">
                                    <SelectValue placeholder="Category" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="design">Design</SelectItem>
                                    <SelectItem value="development">Development</SelectItem>
                                    <SelectItem value="marketing">Marketing</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
