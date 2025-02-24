import { SidebarIcon } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Ban, Calendar, User } from "lucide-react";

export default function AgendaSidebar() {
    return (
        <div className="space-y-4">
            <SidebarIcon
                Icon={Calendar}
                destination="/"
                className="w-full justify-start"
                text="Agendar paciente"
            >
            </SidebarIcon>

            <Button variant="outline" className="w-full justify-start">
                <Ban className="mr-2 h-4 w-4" />
                Bloquear horário
            </Button>

            <div className="mt-8">
                <h4 className="mb-4 text-sm font-medium">Agendas:</h4>
                <div className="space-y-1">
                    <Button variant="ghost" className="w-full justify-start">
                        <User className="mr-2 h-4 w-4" />
                        José Pinheiro
                    </Button>
                </div>
            </div>
        </div>
    )
}