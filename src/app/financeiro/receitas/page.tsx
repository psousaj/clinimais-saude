"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, Search, Check, X, Printer, Pencil, Trash } from "lucide-react"
import { useState } from "react"

export default function ReceitasPage() {
    const [searchOpen, setSearchOpen] = useState(false)

    // 🔹 Dados arbitrários de pacientes
    const pacientes = [
        {
            id: 1,
            pago: true,
            data: "18/02/2025",
            conta: "BANCO 1",
            descricao: "PAGAMENTO (PACIENTE: João Silva)",
            valor: "R$ 200,00",
            categoria: "PAGAMENTO DE PROCEDIMENTO",
        },
        {
            id: 2,
            pago: false,
            data: "20/02/2025",
            conta: "BANCO 2",
            descricao: "PAGAMENTO (PACIENTE: Maria Oliveira)",
            valor: "R$ 150,00",
            categoria: "VENDA DE PRODUTO",
        },
        {
            id: 3,
            pago: true,
            data: "22/02/2025",
            conta: "BANCO 3",
            descricao: "PAGAMENTO (PACIENTE: Pedro Santos)",
            valor: "R$ 300,00",
            categoria: "PAGAMENTO DE PROCEDIMENTO",
        },
        {
            id: 4,
            pago: false,
            data: "25/02/2025",
            conta: "BANCO 1",
            descricao: "PAGAMENTO (PACIENTE: Ana Souza)",
            valor: "R$ 120,00",
            categoria: "CONCILIAÇÃO DE SALDO",
        },
        {
            id: 5,
            pago: true,
            data: "28/02/2025",
            conta: "BANCO 2",
            descricao: "PAGAMENTO (PACIENTE: Carlos Mendes)",
            valor: "R$ 180,00",
            categoria: "PAGAMENTO DE PROCEDIMENTO",
        }
    ]

    return (
        <Card>
            <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-6">
                    <Button className="w-[200px]">
                        <Plus className="h-4 w-4 mr-2" />
                        Lançar receita
                    </Button>

                    <div className="relative">
                        <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
                            <DialogTrigger asChild>
                                <Button variant="outline">
                                    <Search className="h-4 w-4 mr-2" />
                                    Buscar
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[600px]">
                                <DialogHeader>
                                    <DialogTitle>Pesquisar</DialogTitle>
                                </DialogHeader>
                                <div className="grid gap-4 py-4">
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="title" className="text-right">
                                            Título
                                        </Label>
                                        <Input id="title" className="col-span-3" />
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="category" className="text-right">
                                            Categoria
                                        </Label>
                                        <Select>
                                            <SelectTrigger className="col-span-3">
                                                <SelectValue placeholder="[Todas]" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="conciliacao">CONCILIAÇÃO DE SALDO</SelectItem>
                                                <SelectItem value="pagamento">PAGAMENTO DE PROCEDIMENTO</SelectItem>
                                                <SelectItem value="venda">VENDA DE PRODUTO</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="payment" className="text-right">
                                            Forma de pagamento
                                        </Label>
                                        <Select>
                                            <SelectTrigger className="col-span-3">
                                                <SelectValue placeholder="[Todas]" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="credit">Cartão de Crédito</SelectItem>
                                                <SelectItem value="debit">Cartão de Débito</SelectItem>
                                                <SelectItem value="cash">Dinheiro</SelectItem>
                                                <SelectItem value="pix">PIX</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="patient" className="text-right">
                                            Paciente
                                        </Label>
                                        <Input id="patient" className="col-span-3" />
                                    </div>
                                </div>
                                <div className="flex justify-end gap-2">
                                    <Button onClick={() => setSearchOpen(false)}>Pesquisar</Button>
                                </div>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>

                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[50px]">Pago</TableHead>
                            <TableHead className="w-[100px]">Data</TableHead>
                            <TableHead className="w-[15%]">Conta</TableHead>
                            <TableHead className="w-[35%]">Descrição</TableHead>
                            <TableHead className="w-[12%]">Valor</TableHead>
                            <TableHead className="w-[18%]">Categoria</TableHead>
                            <TableHead className="w-[200px] text-right">Ações</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {pacientes.map((paciente) => (
                            <TableRow key={paciente.id}>
                                <TableCell className="text-center">
                                    {paciente.pago ? (
                                        <Check className="h-4 w-4 mx-auto text-green-500" />
                                    ) : (
                                        <X className="h-4 w-4 mx-auto text-red-500" />
                                    )}
                                </TableCell>
                                <TableCell>{paciente.data}</TableCell>
                                <TableCell>{paciente.conta}</TableCell>
                                <TableCell>{paciente.descricao}</TableCell>
                                <TableCell className="text-green-500">{paciente.valor}</TableCell>
                                <TableCell>{paciente.categoria}</TableCell>
                                <TableCell className="text-right space-x-2">
                                    <Button variant="secondary" size="icon" title="Imprimir">
                                        <Printer className="h-4 w-4" />
                                    </Button>
                                    <Button variant="secondary" size="icon" title="Editar">
                                        <Pencil className="h-4 w-4" />
                                    </Button>
                                    <Button variant="destructive" size="icon" title="Remover">
                                        <Trash className="h-4 w-4" />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}
