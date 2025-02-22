"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, Search, Check, Pencil, Trash } from "lucide-react"
import { useState } from "react"

export default function DespesasPage() {
    const [searchOpen, setSearchOpen] = useState(false)

    return (
        <Card>
            <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-6">
                    <Button variant="destructive" className="w-[200px]">
                        <Plus className="h-4 w-4 mr-2" />
                        Lançar despesa
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
                                        <Label htmlFor="vendor" className="text-right">
                                            Fornecedor
                                        </Label>
                                        <Input id="vendor" className="col-span-3" />
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
                                                <SelectItem value="aluguel">ALUGUEL</SelectItem>
                                                <SelectItem value="energia">CONTA DE ENERGIA</SelectItem>
                                                <SelectItem value="internet">CONTA DE INTERNET</SelectItem>
                                                <SelectItem value="agua">CONTA DE ÁGUA</SelectItem>
                                                <SelectItem value="iptu">IPTU</SelectItem>
                                                <SelectItem value="material">MATERIAL DE ESCRITÓRIO</SelectItem>
                                            </SelectContent>
                                        </Select>
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
                        <TableRow>
                            <TableCell className="text-center">
                                <Check className="h-4 w-4 mx-auto text-green-500" />
                            </TableCell>
                            <TableCell>18/02/2025</TableCell>
                            <TableCell>BANCO 1</TableCell>
                            <TableCell>TESTE</TableCell>
                            <TableCell className="text-red-500">R$ -200,00</TableCell>
                            <TableCell>CONTA DE ENERGIA</TableCell>
                            <TableCell className="text-right space-x-2">
                                <Button variant="secondary" size="icon" title="Editar">
                                    <Pencil className="h-4 w-4" />
                                </Button>
                                <Button variant="destructive" size="icon" title="Remover">
                                    <Trash className="h-4 w-4" />
                                </Button>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="text-center">
                                <Check className="h-4 w-4 mx-auto text-green-500" />
                            </TableCell>
                            <TableCell>23/02/2025</TableCell>
                            <TableCell>BANCO 1</TableCell>
                            <TableCell>TESTE (PROFISSIONAL: JOSÉ PINHEIRO)</TableCell>
                            <TableCell className="text-red-500">R$ -0,01</TableCell>
                            <TableCell>REPASSE PARA PROFISSIONAL</TableCell>
                            <TableCell className="text-right space-x-2">
                                <Button variant="secondary" size="icon" title="Editar">
                                    <Pencil className="h-4 w-4" />
                                </Button>
                                <Button variant="destructive" size="icon" title="Remover">
                                    <Trash className="h-4 w-4" />
                                </Button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}

