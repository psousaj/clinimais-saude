"use client"

import type { ReactNode } from "react"
import { Header } from "./header"
import { SidebarProvider, useSidebar } from "../../context/sidebarContext"
import { MainContent, SidebarLayout } from "."
import { MobileButton, MobileOverlay } from "./mainContent"
import { cn } from "@/lib/utils"

interface BaseLayoutProps {
    children: ReactNode
    classname?: string
    sidebar?: ReactNode
}

export function BaseLayout({ children, sidebar, classname }: BaseLayoutProps) {

    return (
        <SidebarProvider>
            <div className="flex min-h-screen flex-col  flex-grow">
                <Header />
                <div className="flex flex-1 relative">
                    {/* Sidebar (só aparece se for passada) */}
                    {sidebar && <SidebarLayout>{sidebar}</SidebarLayout>}
                    {/* Conteúdo principal */}
                    <MainContent classname={classname}>{children}</MainContent>
                </div>
                <MobileOverlay />
                <MobileButton />
            </div>
        </SidebarProvider>
    )
}
