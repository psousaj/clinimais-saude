import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CalendarClock } from "lucide-react"

const reports = {
    gerencial: {
        title: "Gerencial",
        items: [
            { title: "Atendimentos particular", href: "#" },
            { title: "Atendimentos por convênio", href: "#" },
            { title: "Atendimentos por profissional de saúde", href: "#" },
            { title: "Atendimentos por profissional de saúde (Consolidado)", href: "#" },
            { title: "Gráfico de atendimento no período", href: "#" },
        ],
    },
    financeiro: {
        title: "Financeiro",
        items: [
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
        ],
    },
}

export default function RelatoriosPage() {
    return (
        <div className="space-y-6">
            <Alert>
                <CalendarClock className="h-4 w-4" />
                <AlertDescription>
                    <span className="font-bold text-green-600">Período de degustação</span> - Experimente este módulo até o dia
                    23/02/2025
                </AlertDescription>
            </Alert>

            <Card>
                <CardHeader>
                    <div className="space-y-1">
                        <h2 className="text-2xl font-semibold tracking-tight">Relatórios do consultório</h2>
                        <p className="text-sm text-muted-foreground">
                            Gere relatórios do seu consultório para lhe auxiliar no processo de tomada de decisão
                        </p>
                    </div>
                </CardHeader>
                <CardContent>
                    <Accordion type="multiple" defaultValue={["gerencial", "financeiro"]} className="space-y-4">
                        {Object.entries(reports).map(([key, section]) => (
                            <AccordionItem key={key} value={key} className="border rounded-lg px-6">
                                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                                    {section.title}
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div className="space-y-2 py-2">
                                        {section.items.map((item) => (
                                            <div key={item.title}>
                                                <Link href={item.href} className="text-primary hover:underline block py-1.5 transition-colors">
                                                    {item.title}
                                                </Link>
                                            </div>
                                        ))}
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </CardContent>
            </Card>
        </div>
    )
}

