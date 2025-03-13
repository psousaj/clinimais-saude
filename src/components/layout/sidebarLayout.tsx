import { cn } from "@/lib/utils";
import { MenuIcon, X } from "lucide-react";
import { ReactNode } from "react";
import { useSidebar } from "@/context/sidebarContext";
import { Button } from "@/components/ui/button";

export default function SidebarLayout({ children }: { children: ReactNode }) {
    const { sidebarOpen, setSidebarOpen, setMobileOpen } = useSidebar();

    return (
        <aside
            className={cn(
                "fixed h-[calc(100dvh-4rem)] top-16 left-0 flex flex-col border-r bg-background transition-all duration-300 ease-in-out",
                sidebarOpen ? "w-64" : "w-fit",
                "max-w-64"
            )}
        >
            <div className="flex h-16 items-center justify-between border-b px-4">
                <h2 className={cn("text-lg font-semibold", !sidebarOpen && "lg:hidden")}>Menu</h2>
                <Button variant="ghost" size="icon" className={cn("hidden lg:flex mx-auto transition-all", { "mr-0": sidebarOpen })} onClick={() => setSidebarOpen(!sidebarOpen)}>
                    {sidebarOpen ? <MenuIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6 rotate-180" />}
                </Button>
                <Button variant="ghost" size="icon" className="lg:hidden mx-auto" onClick={() => setMobileOpen(false)}>
                    <X className="h-6 w-6" />
                </Button>
            </div>

            <div className={cn(
                "flex-1 overflow-auto p-4",
                { "max-w-24": !sidebarOpen }
            )}>
                {children}
            </div>
        </aside>
    );
}
