'use client'
import { Button, ButtonProps } from "../ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"
import SidebarIconText from "./sidebarIconText"
import { ReactNode } from "react"
import { useSidebar } from "@/context/sidebarContext"

type SidebarIconProps = {
    children: ReactNode // Deve ser um componente LucideIcon
    destination: string
    sidebarOpen?: boolean
    text?: string
    className?: string
    iconClassName?: string
    variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined
} & ButtonProps

export default function SidebarIcon({ children, className, destination, text, variant, iconClassName, ...options }: SidebarIconProps) {
    const { sidebarOpen } = useSidebar()

    return (
        <Link href={destination}>
            <Button {...options} variant={variant ?? "outline"} className={cn(
                "rounded-lg flex justify-start items-center border mb-3 mx-auto",
                sidebarOpen ? 'w-full' : 'w-16',
                className
            )}>
                <div className={cn(
                    "h-5 max-w-5",
                    sidebarOpen ? "ml-2" : "mx-auto",
                    iconClassName
                )}>
                    {children}
                </div>
                <SidebarIconText>
                    {text}
                </SidebarIconText>
            </Button>
        </Link>
    )
}
