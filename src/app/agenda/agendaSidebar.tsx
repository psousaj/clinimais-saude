import { SidebarIcon } from "@/components/layout";
import { Ban, Calendar, User } from "lucide-react";

export default function AgendaSidebar() {
    return (
        <div className="">
            <SidebarIcon
                destination="/"
                className="border"
                text="Agendar paciente"
            >
                <Calendar />
            </SidebarIcon>

            <SidebarIcon
                destination="/"
                variant="destructive"
                text="Bloquear horário"
            >
                <Ban />
            </SidebarIcon>


            <div className="mt-8">
                <h4 className="mb-4 text-sm font-medium">Agendas:</h4>
                <div className="space-y-1">
                    <SidebarIcon destination="/" text="José Pinheiro" variant="ghost">
                        <User />
                    </SidebarIcon>
                </div>
            </div>
        </div>
    )
}