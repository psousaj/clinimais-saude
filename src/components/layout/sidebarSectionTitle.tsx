"use client"

import { useSidebar } from "@/context/sidebarContext"
import { cn } from "@/lib/utils"
import { useState, useEffect, useRef } from "react"

export function SidebarSectionTitle({ text, className }: { text: string, className?: string }) {
    const { sidebarOpen } = useSidebar()
    const [maxWidth, setMaxWidth] = useState<number | string>("100%")
    const titleRef = useRef<HTMLHeadingElement>(null)

    useEffect(() => {
        if (titleRef.current) {
            setMaxWidth(sidebarOpen ? "100%" : `${titleRef.current.parentElement?.offsetWidth || 80}px`)
        }
    }, [sidebarOpen])

    return (
        <h4
            ref={titleRef}
            className={cn(
                "font-medium px-2 mb-2 transition-all duration-300 whitespace-nowrap overflow-hidden text-ellipsis",
                !sidebarOpen && "text-center",
                className
            )}
            style={{ maxWidth }}
            title={text}
        >
            {text}
        </h4>
    )
}
