"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function NovoUsuarioPage() {
    const [profileType, setProfileType] = useState("1")
    const [isHealthProfessional, setIsHealthProfessional] = useState(false)

    const handleProfileChange = (value: string) => {
        setProfileType(value)
        if (value === "2") {
            setIsHealthProfessional(true)
        } else {
            setIsHealthProfessional(false)
        }
    }

    return (
        <>
            <Card className="mb-6">
                <CardHeader className="flex flex-row items-center gap-2">
                    <Link href="/configuracoes/usuarios" className="text-muted-foreground hover:text-foreground">
                        <ArrowLeft className="h-4 w-4" />
                    </Link>
                    <h2 className="text-xl font-semibold">Novo usuário</h2>
                </CardHeader>
            </Card>

            <Card>
                <CardContent className="pt-6">
                    <form className="space-y-6">
                        <h3 className="text-lg font-medium mb-4">Dados pessoais</h3>

                        <div className="grid gap-6">
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                                <Label htmlFor="profile_id" className="md:text-right">
                                    Perfil <span className="text-red-500">*</span>
                                </Label>
                                <div className="md:col-span-3">
                                    <Select defaultValue="1" onValueChange={handleProfileChange}>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Selecione o perfil" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="1">Administrador</SelectItem>
                                            <SelectItem value="2">Profissional de saúde</SelectItem>
                                            <SelectItem value="3">Recepcionista</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                                <Label htmlFor="name" className="md:text-right">
                                    Nome <span className="text-red-500">*</span>
                                </Label>
                                <div className="md:col-span-3">
                                    <Input id="name" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                                <Label htmlFor="email" className="md:text-right">
                                    E-mail <span className="text-red-500">*</span>
                                </Label>
                                <div className="md:col-span-3">
                                    <Input id="email" type="email" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                                <Label htmlFor="conf_email" className="md:text-right">
                                    Repita o e-mail
                                </Label>
                                <div className="md:col-span-3">
                                    <Input id="conf_email" type="email" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                                <Label htmlFor="password" className="md:text-right">
                                    Senha <span className="text-red-500">*</span>
                                </Label>
                                <div className="md:col-span-3">
                                    <Input id="password" type="password" />
                                    <p className="text-xs text-muted-foreground mt-1">
                                        Senha deve conter no mínimo 8 caracteres e ao menos um número.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                                <Label htmlFor="conf_password" className="md:text-right">
                                    Repita a senha
                                </Label>
                                <div className="md:col-span-3">
                                    <Input id="conf_password" type="password" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                                <Label htmlFor="timezone" className="md:text-right">
                                    Fuso horário
                                </Label>
                                <div className="md:col-span-3">
                                    <Select defaultValue="">
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Selecione o fuso horário" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="padrao">Padrão do consultório</SelectItem>
                                            <SelectItem value="America/Sao_Paulo">Brasília (UTC -03:00)</SelectItem>
                                            <SelectItem value="America/Manaus">Manaus (UTC -04:00)</SelectItem>
                                            <SelectItem value="America/Noronha">Fernando de Noronha (UTC -02:00)</SelectItem>
                                            <SelectItem value="America/Rio_Branco">Rio Branco (UTC -05:00)</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            {profileType === "1" && (
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                                    <div className="md:col-span-1 md:text-right">
                                        <Label>Profissional de saúde</Label>
                                    </div>
                                    <div className="md:col-span-3 flex items-center gap-2">
                                        <Checkbox
                                            id="atende_check"
                                            checked={isHealthProfessional}
                                            onCheckedChange={(checked) => setIsHealthProfessional(checked === true)}
                                        />
                                        <Label htmlFor="atende_check">Sim</Label>
                                    </div>
                                </div>
                            )}

                            {(isHealthProfessional || profileType === "2") && (
                                <div className="space-y-4 border-l-2 border-primary/20 pl-4 ml-4 md:ml-[calc(25%+16px)]">
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                                        <Label htmlFor="register">Registro profissional</Label>
                                        <div className="md:col-span-2">
                                            <Input id="register" placeholder="Ex.: CRM 98737" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                                        <Label htmlFor="specialty">Especialidade</Label>
                                        <div className="md:col-span-2">
                                            <Select>
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="[Selecione a especialidade]" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="1">Acupunturista</SelectItem>
                                                    <SelectItem value="40">Médico cardiologista</SelectItem>
                                                    <SelectItem value="56">Médico em geral (clinico geral)</SelectItem>
                                                    <SelectItem value="86">Médico pediatra</SelectItem>
                                                    <SelectItem value="104">Psicólogo em geral</SelectItem>
                                                    {/* Outras especialidades seriam listadas aqui */}
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                                        <Label htmlFor="cpf">CPF</Label>
                                        <div className="md:col-span-2">
                                            <Input id="cpf" />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button type="submit">Cadastrar usuário</Button>
                    <Button variant="outline" asChild>
                        <Link href="/configuracoes/usuarios">Cancelar</Link>
                    </Button>
                </CardFooter>
            </Card>
        </>
    )
}

