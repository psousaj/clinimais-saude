"use client"

import { Button } from "@/components/ui/button"
import { LayoutDashboard, PlusCircle, MinusCircle, TrendingUp, PieChart, Building } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

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
                    <h4 className="font-medium mb-1 px-2">{section.title}</h4>
                    {section.items.map((item) => (
                        <Button
                            key={item.href}
                            variant="ghost"
                            className={cn("w-full justify-start", pathname === item.href && "bg-muted")}
                            asChild
                        >
                            <Link href={item.href}>
                                <item.icon className={cn("mr-2 h-4 w-4", item.iconClassName)} />
                                {item.label}
                            </Link>
                        </Button>
                    ))}
                </div>
            ))}
        </div>
    )
}

