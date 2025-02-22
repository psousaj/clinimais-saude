import { Button } from "@/components/ui/button"
import { Plus, Search } from "lucide-react"
import { AdvancedSearchDialog } from "./advancedSearchDialog"
import { PatientsList } from "./pacientsList"
import { Layout } from "@/components/layout"
import { PatientsSidebar } from "./pacientsSidebar"

export default function PatientsPage() {
    return (
        <Layout sidebar={<PatientsSidebar />}>
            <div className="space-y-4" >
                <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                        <Button>
                            <Plus className="h-4 w-4 mr-2" />
                            <span className="hidden sm:inline">Novo paciente</span>
                        </Button>
                        <AdvancedSearchDialog>
                            <Button variant="outline">
                                <Search className="h-4 w-4 mr-2" />
                                <span className="hidden sm:inline">Buscar</span>
                            </Button>
                        </AdvancedSearchDialog>
                    </div>
                </div>
                <PatientsList />
            </div>
        </Layout>
    )
}

