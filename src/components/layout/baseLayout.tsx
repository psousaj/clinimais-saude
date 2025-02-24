"use client"

import type { ReactNode } from "react"
import { Header } from "./header"
import { SidebarProvider } from "../../context/sidebarContext"
import { MainContent, SidebarLayout } from "."
import { MobileButton, MobileOverlay } from "./mainContent"

interface BaseLayoutProps {
    children: ReactNode
    classname?: string
    sidebar?: ReactNode
}

export function BaseLayout({ children, sidebar, classname }: BaseLayoutProps) {
    return (
        <SidebarProvider>
            <div className="flex h-screen flex-col">
                <Header />
                <div className="flex flex-1">
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
