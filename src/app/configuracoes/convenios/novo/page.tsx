import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function NovoConvenioPage() {
    return (
        <>
            <Card className="mb-6">
                <CardHeader className="flex flex-row items-center gap-2">
                    <Link href="/configuracoes/convenios" className="text-muted-foreground hover:text-foreground">
                        <ArrowLeft className="h-4 w-4" />
                    </Link>
                    <h2 className="text-xl font-semibold">Novo convênio</h2>
                </CardHeader>
            </Card>

            <Card>
                <CardContent className="pt-6">
                    <form>
                        <h3 className="text-lg font-medium mb-4">Dados do convênio</h3>
                        <hr className="mb-6" />

                        <div className="grid gap-6">
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                                <Label htmlFor="description" className="md:text-right">
                                    Nome do convênio <span className="text-red-500">*</span>
                                </Label>
                                <div className="md:col-span-2">
                                    <Input id="description" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                                <Label htmlFor="ans_code" className="md:text-right">
                                    Registro ANS
                                </Label>
                                <div className="md:col-span-1">
                                    <Input id="ans_code" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                                <Label htmlFor="company_name" className="md:text-right">
                                    Nome Fantasia
                                </Label>
                                <div className="md:col-span-2">
                                    <Input id="company_name" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                                <Label htmlFor="status" className="md:text-right">
                                    Status
                                </Label>
                                <div className="md:col-span-1">
                                    <Select defaultValue="1">
                                        <SelectTrigger>
                                            <SelectValue placeholder="Selecione o status" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="1">Ativo</SelectItem>
                                            <SelectItem value="-1">Inativo</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button type="submit">Cadastrar convênio</Button>
                    <Button variant="outline" asChild>
                        <Link href="/configuracoes/convenios">Cancelar</Link>
                    </Button>
                </CardFooter>
            </Card>
        </>
    )
}

