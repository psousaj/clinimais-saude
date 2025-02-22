import { Button } from "@/components/ui/button";
import { Users, Calendar, Cake, Trash } from "lucide-react";

export function PatientsSidebar() {
    return (
        <div className="space-y-4">
            <div className="space-y-1">
                <Button variant="ghost" className="w-full justify-start text-lg">
                    <Users className="mr-2 h-4 w-4" />
                    Todos os pacientes
                </Button>

                <Button variant="ghost" className="w-full justify-start">
                    <Calendar className="mr-2 h-4 w-4" />
                    Agendados para hoje
                </Button>

                <Button variant="ghost" className="w-full justify-start">
                    <Cake className="mr-2 h-4 w-4" />
                    Aniversariantes
                </Button>

                <Button variant="ghost" className="w-full justify-start">
                    <Trash className="mr-2 h-4 w-4" />
                    Arquivados
                </Button>
            </div>
        </div>
    )
}