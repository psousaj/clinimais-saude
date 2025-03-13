"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function NovoModeloProntuarioPage() {
    const [editorContent, setEditorContent] = useState("")

    const placeholders = [
        { name: "paciente_nome", title: "Nome do paciente" },
        { name: "paciente_nascimento", title: "Data de nascimento do paciente" },
        { name: "profissional_nome", title: "Nome do profissional de saúde" },
        { name: "profissional_registro", title: "Registro profissional" },
        { name: "data", title: "Data atual" },
    ]

    const addPlaceholder = (placeholder: string) => {
        setEditorContent((prev) => prev + `[[${placeholder}]] `)
    }

    return (
        <>
            <Card className="mb-6">
                <CardHeader className="flex flex-row items-center gap-2">
                    <Link href="/configuracoes/modelos-prontuario" className="text-muted-foreground hover:text-foreground">
                        <ArrowLeft className="h-4 w-4" />
                    </Link>
                    <h2 className="text-xl font-semibold">Novo modelo de prontuário</h2>
                </CardHeader>
            </Card>

            <Card>
                <CardContent className="pt-6">
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                            <Label htmlFor="description" className="md:text-right">
                                Descrição <span className="text-red-500">*</span>
                            </Label>
                            <div className="md:col-span-3">
                                <Input id="description" placeholder="Ex: Anamnese Nutricional" />
                            </div>
                        </div>

                        <hr />

                        <div>
                            <h3 className="text-center text-lg font-medium mb-4">
                                Monte abaixo o modelo que deseja carregar neste tipo de registro
                            </h3>

                            <Textarea
                                className="min-h-[400px] font-mono"
                                value={editorContent}
                                onChange={(e) => setEditorContent(e.target.value)}
                            />

                            <div className="bg-muted p-4 rounded-md mt-4">
                                <p className="font-medium mb-2">
                                    Clique nos substituidores abaixo para inserir dados que serão preenchidos dinâmicamente:
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {placeholders.map((placeholder) => (
                                        <Button
                                            key={placeholder.name}
                                            variant="outline"
                                            size="sm"
                                            onClick={() => addPlaceholder(placeholder.name)}
                                        >
                                            {placeholder.title}
                                        </Button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <hr />

                        <div>
                            <h3 className="text-lg font-medium mb-4">Configurações para impressão</h3>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <Checkbox id="print_hide_birth" />
                                    <Label htmlFor="print_hide_birth">Não exibir data de nascimento na impressão</Label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Checkbox id="print_hide_gender" />
                                    <Label htmlFor="print_hide_gender">Não exibir sexo do paciente na impressão</Label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Checkbox id="print_hide_cid" />
                                    <Label htmlFor="print_hide_cid">Não exibir informação do CID na impressão</Label>
                                </div>
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button type="submit">Salvar modelo de prontuário</Button>
                    <Button variant="outline" asChild>
                        <Link href="/configuracoes/modelos-prontuario">Cancelar</Link>
                    </Button>
                </CardFooter>
            </Card>
        </>
    )
}

