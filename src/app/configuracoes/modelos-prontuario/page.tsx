"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Pencil, Plus, Trash } from "lucide-react"
import Link from "next/link"

interface Template {
    id: string
    name: string
    isActive: boolean
}

export default function ModelosProntuarioPage() {
    const templates: Template[] = [
        { id: "169056", name: "Anamnese", isActive: true },
        { id: "169057", name: "Atestado", isActive: true },
        { id: "169060", name: "Orientações ao paciente", isActive: true },
        { id: "169061", name: "Plano de Tratamento", isActive: true },
        { id: "169059", name: "Prescrição de medicamentos", isActive: true },
        { id: "169058", name: "Solicitação de exames", isActive: true },
    ]

    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between">
                <Button asChild>
                    <Link href="/configuracoes/modelos-prontuario/novo">
                        <Plus className="h-4 w-4 mr-2" />
                        Novo modelo de prontuário
                    </Link>
                </Button>
            </CardHeader>
            <CardContent>
                <div className="bg-blue-50 text-blue-800 p-4 rounded-md mb-6">
                    Crie modelos personalizados para cada tipo de registro de prontuário que a sua clínica ou consultório
                    trabalha. Agilize o atendimento e padronize a forma como os registros são lançados.
                </div>

                <div className="divide-y">
                    {templates.map((template) => (
                        <div key={template.id} className="py-4 flex items-center justify-between">
                            <div>
                                <Link href={`/configuracoes/modelos-prontuario/${template.id}`} className="font-medium hover:underline">
                                    {template.name}
                                </Link>
                                <div className="mt-1">
                                    {template.isActive && (
                                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Ativo</span>
                                    )}
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <Button variant="secondary" size="icon" asChild>
                                    <Link href={`/configuracoes/modelos-prontuario/${template.id}`}>
                                        <Pencil className="h-4 w-4" />
                                    </Link>
                                </Button>
                                <Button
                                    variant="destructive"
                                    size="icon"
                                    onClick={() => {
                                        if (confirm("Tem certeza que deseja remover este tipo de registro?")) {
                                            // Delete logic would go here
                                            console.log("Deleting template", template.id)
                                        }
                                    }}
                                >
                                    <Trash className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}

