"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload } from "lucide-react"

export default function DadosConsultorioPage() {
    const [logoUrl, setLogoUrl] = useState("/placeholder.svg?height=80&width=200")
    const [showLogoMenu, setShowLogoMenu] = useState(false)

    return (
        <Card>
            <CardContent className="p-6">
                <form className="space-y-6">
                    <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                            <Label htmlFor="name" className="md:text-right">
                                Nome do consultório <span className="text-red-500">*</span>
                            </Label>
                            <div className="md:col-span-3">
                                <Input id="name" defaultValue="Consultorio do Zezao" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                            <Label htmlFor="social_id" className="md:text-right">
                                CPF/CNPJ
                            </Label>
                            <div className="md:col-span-3">
                                <Input id="social_id" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                            <Label htmlFor="address" className="md:text-right">
                                Endereço
                            </Label>
                            <div className="md:col-span-3">
                                <Input id="address" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                            <Label htmlFor="city" className="md:text-right">
                                Cidade
                            </Label>
                            <div className="md:col-span-3">
                                <Input id="city" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                            <Label htmlFor="phone" className="md:text-right">
                                Telefone
                            </Label>
                            <div className="md:col-span-3">
                                <Input id="phone" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                            <Label className="md:text-right">Horário de atendimento</Label>
                            <div className="md:col-span-3 flex items-center gap-2">
                                <Select defaultValue="5">
                                    <SelectTrigger className="w-[100px]">
                                        <SelectValue placeholder="Início" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {Array.from({ length: 24 }, (_, i) => (
                                            <SelectItem key={i} value={i.toString()}>
                                                {i}h
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <span>às</span>
                                <Select defaultValue="22">
                                    <SelectTrigger className="w-[100px]">
                                        <SelectValue placeholder="Fim" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {Array.from({ length: 24 }, (_, i) => (
                                            <SelectItem key={i + 1} value={(i + 1).toString()}>
                                                {i + 1}h
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                            <Label htmlFor="calendar_interval" className="md:text-right">
                                Intervalo da agenda
                            </Label>
                            <div className="md:col-span-3">
                                <Select defaultValue="00:15:00">
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Selecione o intervalo" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="00:15:00">15 minutos (Padrão)</SelectItem>
                                        <SelectItem value="00:05:00">5 minutos</SelectItem>
                                        <SelectItem value="00:10:00">10 minutos</SelectItem>
                                        <SelectItem value="00:20:00">20 minutos</SelectItem>
                                        <SelectItem value="00:30:00">30 minutos</SelectItem>
                                        <SelectItem value="00:45:00">45 minutos</SelectItem>
                                        <SelectItem value="00:50:00">50 minutos</SelectItem>
                                        <SelectItem value="00:60:00">1 hora</SelectItem>
                                        <SelectItem value="01:30:00">1 hora e 30 minutos</SelectItem>
                                        <SelectItem value="02:00:00">2 horas</SelectItem>
                                    </SelectContent>
                                </Select>
                                <p className="text-sm text-muted-foreground mt-1">
                                    Ajuste acima para o menor intervalo de agendamento que o seu consultório trabalha.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                            <Label htmlFor="timezone" className="md:text-right">
                                Fuso Horário
                            </Label>
                            <div className="md:col-span-3">
                                <Select defaultValue="Brasília (UTC -03:00)">
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Selecione o fuso horário" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Brasília (UTC -03:00)">Brasília (UTC -03:00)</SelectItem>
                                        <SelectItem value="America/Manaus">Manaus (UTC -04:00)</SelectItem>
                                        <SelectItem value="America/Noronha">Fernando de Noronha (UTC -02:00)</SelectItem>
                                        <SelectItem value="America/Rio_Branco">Rio Branco (UTC -05:00)</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-start">
                            <Label htmlFor="logo" className="md:text-right">
                                Logomarca
                            </Label>
                            <div className="md:col-span-3">
                                <div className="border p-1 inline-block">
                                    <img src={logoUrl || "/placeholder.svg"} alt="Logo do consultório" height="80" />
                                </div>
                                <div className="mt-2 flex gap-2">
                                    <Button type="button" size="sm" className="flex items-center gap-2">
                                        <Upload className="h-4 w-4" />
                                        Alterar logomarca
                                    </Button>
                                    <Button type="button" variant="outline" size="sm">
                                        Resetar
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {showLogoMenu && (
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                                <div className="md:col-span-1 md:text-right">
                                    <Label>Exibir logo na página inicial</Label>
                                </div>
                                <div className="md:col-span-3 flex items-center gap-2">
                                    <input type="checkbox" id="logo_menu" defaultChecked />
                                    <Label htmlFor="logo_menu">Sim</Label>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="flex justify-end">
                        <Button type="submit">Salvar</Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    )
}

