import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const reports = [
    { title: "Extrato financeiro por conta", href: "#" },
    { title: "Despesa por categoria", href: "#" },
    { title: "Repasse por profissional", href: "#" },
    { title: "Despesa por categoria (Consolidado)", href: "#" },
    { title: "Despesa por fornecedor", href: "#" },
    { title: "Despesa por fornecedor (Consolidado)", href: "#" },
    { title: "Receita por profissional de saúde", href: "#" },
    { title: "Receita por profissional de saúde (Consolidado)", href: "#" },
    { title: "Receita por forma de pagamento", href: "#" },
    { title: "Receita por convênio", href: "#" },
    { title: "Receita por convênio (Consolidado)", href: "#" },
    { title: "Receita por paciente", href: "#" },
    { title: "Receita por procedimento", href: "#" },
    { title: "Receita por procedimento (Consolidado)", href: "#" },
]

export default function RelatoriosPage() {
    return (
        <Card>
            <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Relatórios financeiros</h3>
                <div className="space-y-2">
                    {reports.map((report) => (
                        <div key={report.title}>
                            <Link href={report.href} className="text-primary hover:underline">
                                {report.title}
                            </Link>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}

