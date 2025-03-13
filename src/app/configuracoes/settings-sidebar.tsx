"use client"

import { Button } from "@/components/ui/button"
import {
    Building,
    CreditCard,
    Bell,
    FileText,
    Users,
    ClipboardList,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { SidebarIcon } from "@/components/layout"
import { SidebarSectionTitle } from "@/components/layout/sidebarSectionTitle"

export function SettingsSidebar() {
    const pathname = usePathname()

    const sections = [
        {
            title: "Consultório",
            items: [
                {
                    href: "/configuracoes/consultorio/dados",
                    label: "Dados do consultório",
                    icon: Building,
                },
                {
                    href: "/configuracoes/consultorio/convenios",
                    label: "Convênios",
                    icon: CreditCard,
                },
                {
                    href: "/configuracoes/lembretes",
                    label: "Lembretes via SMS e e-mail",
                    icon: Bell,
                },
                {
                    href: "/configuracoes/consultorio/procedimentos",
                    label: "Procedimentos",
                    icon: ClipboardList,
                },
                {
                    href: "/configuracoes/usuarios",
                    label: "Usuários",
                    icon: Users,
                },
            ],
        },
        {
            title: "Prontuário eletrônico",
            items: [
                {
                    href: "/configuracoes/modelos-prontuario",
                    label: "Modelos de prontuário",
                    icon: FileText,
                },
            ],
        },
        {
            title: "Assinatura do sistema",
            items: [
                {
                    href: "/configuracoes/pagamentos",
                    label: "Pagamentos da assinatura",
                    icon: CreditCard,
                    iconClassName: ''
                },
            ],
        },
    ]

    return (
        <div className="space-y-6">
            {sections.map((section) => (
                <div key={section.title} className="space-y-2">
                    {/* <h4 className="font-medium mb-1 px-2">{section.title}</h4> */}
                    <SidebarSectionTitle text={section.title} />
                    {section.items.map((item) => (
                        // <Button
                        //     key={item.href}
                        //     variant="ghost"
                        //     className={cn("w-full justify-start", pathname === item.href && "bg-muted")}
                        //     asChild
                        // >
                        //     <Link href={item.href}>
                        //         <item.icon className={cn("mr-2 h-4 w-4")} />
                        //         {item.label}
                        //     </Link>
                        // </Button>
                        <SidebarIcon
                            destination={item.href}
                            key={item.href}
                            variant="ghost"
                            className={cn("w-full justify-start", pathname === item.href && "bg-muted")}
                            text={item.label}
                        >
                            <item.icon className={cn("mr-2 h-4 w-4")} />
                        </SidebarIcon>
                    ))}
                </div>
            ))}
        </div>
    )
}

