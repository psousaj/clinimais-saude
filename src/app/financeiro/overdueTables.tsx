import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, ArrowUpCircle, ArrowDownCircle, Pencil } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function OverdueTables() {
    return (
        <div className="grid gap-6 md:grid-cols-2">
            {/* Overdue Expenses */}
            <Card>
                <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-6">
                        <h3 className="font-bold text-xl">Despesas atrasadas</h3>
                        <div className="flex gap-2">
                            <Clock className="h-6 w-6" />
                            <ArrowUpCircle className="h-6 w-6 text-red-500" />
                        </div>
                    </div>

                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell colSpan={4} className="text-center text-muted-foreground">
                                    Nenhuma despesa em atraso
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            {/* Overdue Income */}
            <Card>
                <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-6">
                        <h3 className="font-bold text-xl">Receitas atrasadas</h3>
                        <div className="flex gap-2">
                            <Clock className="h-6 w-6" />
                            <ArrowDownCircle className="h-6 w-6 text-green-500" />
                        </div>
                    </div>

                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">Data</TableHead>
                                <TableHead>Descrição</TableHead>
                                <TableHead>Valor</TableHead>
                                <TableHead className="w-[100px]">Ações</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow className="bg-yellow-50">
                                <TableCell>22/02/2025</TableCell>
                                <TableCell>PAGAMENTO DE PROCEDIMENTO(S)</TableCell>
                                <TableCell>R$ 0,00</TableCell>
                                <TableCell>
                                    <Button variant="ghost" size="icon">
                                        <Pencil className="h-4 w-4" />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}

