import { SidebarIcon } from "@/components/layout";
import { Users, Calendar, Cake, Trash } from "lucide-react";

export function PatientsSidebar() {
    return (
        <div className="space-y-4">
            <div className="">
                <SidebarIcon destination="/" variant="ghost" text="Todos os pacientes">
                    <Users />
                </SidebarIcon>

                <SidebarIcon destination="/" text="Agendados para hoje" variant="ghost">
                    <Calendar />
                </SidebarIcon>

                <SidebarIcon destination="/" text="Aniversariantes" variant="ghost">
                    <Cake />
                </SidebarIcon>

                <SidebarIcon destination="/" text="Arquivados" variant="ghost">
                    <Trash />
                </SidebarIcon>
            </div>
        </div>
    )
}