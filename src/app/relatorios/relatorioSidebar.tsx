import { SidebarIcon } from "@/components/layout"
import { SidebarSectionTitle } from "@/components/layout/sidebarSectionTitle"
import { FileBarChart, FileText, PieChart } from "lucide-react"

export function ReportsSidebar() {
    return (
        <div className="space-y-4">
            <SidebarSectionTitle text="Relatórios" />

            <div className="space-y-1">
                <SidebarIcon destination="/gerenciais" text="Gerenciais">
                    <FileBarChart className="mr-2 h-4 w-4" />
                </SidebarIcon>

                <SidebarIcon destination="/gerenciais" text="Financeiros">
                    <PieChart className="mr-2 h-4 w-4" />
                </SidebarIcon>

                <SidebarIcon destination="/gerenciais" text="Outros Relatórios" >
                    <FileText className="mr-2 h-4 w-4" />
                </SidebarIcon>
            </div>
        </div>
    )
}

