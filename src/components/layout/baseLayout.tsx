"use client"

import type { ReactNode } from "react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { MenuIcon, X } from "lucide-react"
import { Header } from "./header"

interface BaseLayoutProps {
    children: ReactNode
    sidebar?: ReactNode
}

export function BaseLayout({ children, sidebar }: BaseLayoutProps) {
    const [sidebarOpen, setSidebarOpen] = useState(!!sidebar)
    const [mobileOpen, setMobileOpen] = useState(false)

    return (
        <div className="flex h-screen flex-col">
            <Header />

            <div className="flex flex-1">
                {/* Sidebar (só aparece se for passada) */}
                {sidebar && (
                    <aside
                        className={cn(
                            "fixed inset-y-0 left-0 z-50 flex flex-col border-r bg-background duration-300 ease-in-out transition-transform lg:relative",
                            sidebarOpen ? "w-64" : "w-16",
                            // !sidebarOpen && "lg:hidden"
                        )}
                    >
                        <div className="flex h-16 items-center justify-between border-b px-4">
                            <h2 className={cn("text-lg font-semibold", !sidebarOpen && "lg:hidden")}>Menu</h2>
                            <Button variant="ghost" size="icon" className="hidden lg:flex" onClick={() => setSidebarOpen(!sidebarOpen)}>
                                {sidebarOpen ? <MenuIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6 rotate-180" />}
                            </Button>
                            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMobileOpen(false)}>
                                <X className="h-6 w-6" />
                            </Button>
                        </div>

                        <div className="flex-1 overflow-auto p-4">{sidebar}</div>
                    </aside>
                )}

                {/* Conteúdo principal */}
                <main
                    className={cn(
                        "flex-1 overflow-auto p-6 transition-all duration-300 ease-in-out",
                        // sidebar ? (sidebarOpen ? "lg:ml-64" : "lg:ml-16") : "lg:w-full"
                    )}
                >
                    <div className="container mx-auto">{children}</div>
                </main>
            </div>

            {/* Overlay Mobile */}
            {mobileOpen && (
                <div className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden" onClick={() => setMobileOpen(false)} />
            )}

            {/* Botão Mobile */}
            {sidebar && (
                <Button
                    variant="outline"
                    size="icon"
                    className="fixed bottom-4 right-4 z-40 h-12 w-12 rounded-full shadow-lg lg:hidden"
                    onClick={() => setMobileOpen(true)}
                >
                    <MenuIcon className="h-6 w-6" />
                </Button>
            )}
        </div>
    )
}
