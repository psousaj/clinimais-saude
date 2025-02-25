'use client'

import { useSidebar } from "@/context/sidebarContext"
import { ReactNode } from "react"

export default function SidebarIconText({ children }: { children: ReactNode }) {
    const { sidebarOpen } = useSidebar()

    return (sidebarOpen && children) ? <p>{children}</p> : ""
}