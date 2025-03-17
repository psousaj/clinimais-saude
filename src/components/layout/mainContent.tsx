import { useSidebar } from "@/context/sidebarContext"
import { cn } from "@/lib/utils"
import { MenuIcon } from "lucide-react"
import { ReactNode } from "react"
import { Button } from "../ui/button"

function MainContent({ children, classname }: { children: ReactNode, classname?: string }) {
    return (
        <main className={cn(
            "flex-grow flex-1 overflow-auto p-6 transition-all duration-300 ease-in-out relative top-16",
            classname
        )}>
            <div className="container mx-auto h-full w-full border-black border">{children}</div>
        </main>
    )
}

function MobileOverlay() {
    const { mobileOpen, setMobileOpen } = useSidebar()

    if (!mobileOpen) return null

    return (
        <div className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden" onClick={() => setMobileOpen(false)} />
    )
}

function MobileButton() {
    const { mobileOpen, setMobileOpen } = useSidebar()

    return (
        <Button
            variant="outline"
            size="icon"
            className="fixed bottom-4 right-4 z-40 h-12 w-12 rounded-full shadow-lg lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
        >
            <MenuIcon className="h-6 w-6" />
        </Button>
    )
}

export { MainContent, MobileButton, MobileOverlay }
