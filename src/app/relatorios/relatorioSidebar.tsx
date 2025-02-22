import { Button } from "@/components/ui/button"
import { FileBarChart, FileText, PieChart } from "lucide-react"

export function ReportsSidebar() {
    return (
        <div className="space-y-4">
            <h4 className="font-medium mb-4">Relatórios</h4>

            <div className="space-y-1">
                <Button variant="ghost" className="w-full justify-start">
                    <FileBarChart className="mr-2 h-4 w-4" />
                    Gerenciais
                </Button>

                <Button variant="ghost" className="w-full justify-start">
                    <PieChart className="mr-2 h-4 w-4" />
                    Financeiros
                </Button>

                <Button variant="ghost" className="w-full justify-start">
                    <FileText className="mr-2 h-4 w-4" />
                    Outros relatórios
                </Button>
            </div>
        </div>
    )
}

