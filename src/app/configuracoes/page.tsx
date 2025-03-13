import type React from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
    Building,
    CreditCard,
    Bell,
    FileText,
    Users,
    Download,
    ClipboardList,
    FileSpreadsheet,
    Star,
    Database,
} from "lucide-react"

interface SettingCategory {
    title: string
    items: {
        href: string
        label: string
        icon: React.ElementType
        description?: string
    }[]
}

export default function ConfiguracoesPage() {
    const categories: SettingCategory[] = [
        {
            title: "Consultório",
            items: [
                {
                    href: "/configuracoes/dados-consultorio",
                    label: "Dados do consultório",
                    icon: Building,
                    description: "Informações gerais, horários e logomarca",
                },
                {
                    href: "/configuracoes/convenios",
                    label: "Convênios",
                    icon: CreditCard,
                    description: "Gerenciar convênios aceitos",
                },
                {
                    href: "/configuracoes/lembretes",
                    label: "Lembretes via SMS e e-mail",
                    icon: Bell,
                    description: "Configurar lembretes automáticos",
                },
                {
                    href: "/configuracoes/procedimentos",
                    label: "Procedimentos",
                    icon: ClipboardList,
                    description: "Gerenciar procedimentos e valores",
                },
                {
                    href: "/configuracoes/usuarios",
                    label: "Usuários",
                    icon: Users,
                    description: "Gerenciar usuários e permissões",
                },
                {
                    href: "/configuracoes/exportacao",
                    label: "Exportação de dados",
                    icon: Download,
                    description: "Exportar dados do sistema",
                },
                {
                    href: "/configuracoes/auditoria",
                    label: "Log de auditoria",
                    icon: Database,
                    description: "Histórico de ações no sistema",
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
                    description: "Gerenciar modelos de prontuário",
                },
            ],
        },
        {
            title: "Financeiro",
            items: [
                {
                    href: "/financeiro/contas",
                    label: "Gerenciar contas",
                    icon: FileSpreadsheet,
                    description: "Configurar contas financeiras",
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
                    description: "Histórico de pagamentos",
                },
                {
                    href: "/configuracoes/assinar",
                    label: "Assinar um plano pago",
                    icon: Star,
                    description: "Conheça os planos disponíveis",
                },
            ],
        },
    ]

    return (
        <div className="space-y-6">
            {categories.map((category) => (
                <div key={category.title}>
                    <h2 className="text-xl font-semibold mb-4">{category.title}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {category.items.map((item) => (
                            <Card key={item.href} className="overflow-hidden">
                                <CardHeader className="bg-muted p-4 flex flex-row items-center gap-2">
                                    <item.icon className="h-5 w-5 text-primary" />
                                    <h3 className="font-medium">{item.label}</h3>
                                </CardHeader>
                                <CardContent className="p-4">
                                    {item.description && <p className="text-sm text-muted-foreground mb-4">{item.description}</p>}
                                    <Button asChild className="w-full">
                                        <Link href={item.href}>Acessar</Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

