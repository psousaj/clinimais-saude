"use client"

import { Button } from "@/components/ui/button"
import { LayoutDashboard, PlusCircle, MinusCircle, TrendingUp, PieChart, Building } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { SidebarIcon } from "@/components/layout"
import { SidebarSectionTitle } from "@/components/layout/sidebarSectionTitle"

export function FinanceSidebar() {
    const pathname = usePathname()

    const items = [
        {
            title: "Financeiro",
            items: [
                {
                    href: "/financeiro",
                    label: "Visão geral",
                    icon: LayoutDashboard,
                },
                {
                    href: "/financeiro/receitas",
                    label: "Receitas",
                    icon: PlusCircle,
                    iconClassName: "text-green-500",
                },
                {
                    href: "/financeiro/despesas",
                    label: "Despesas",
                    icon: MinusCircle,
                    iconClassName: "text-red-500",
                },
                {
                    href: "/financeiro/fluxo-caixa",
                    label: "Fluxo de caixa",
                    icon: TrendingUp,
                },
                {
                    href: "/financeiro/relatorios",
                    label: "Relatórios",
                    icon: PieChart,
                },
            ],
        },
        {
            title: "Configurações",
            items: [
                {
                    href: "/financeiro/contas",
                    label: "Gerenciar contas",
                    icon: Building,
                },
            ],
        },
    ]

    return (
        <div className="space-y-6">
            {items.map((section) => (
                <div key={section.title} className="space-y-2">
                    <SidebarSectionTitle className="mb-2" text={section.title} />
                    {section.items.map((item) => (
                        <SidebarIcon
                            key={item.label}
                            title={item.label}
                            destination={item.href}
                            text={item.label}
                            className={cn(pathname === item.href && "bg-muted")}
                        >
                            <item.icon className={cn(item.iconClassName)} />
                        </SidebarIcon>
                    ))}
                </div>
            ))
            }
        </div >
    )
}

