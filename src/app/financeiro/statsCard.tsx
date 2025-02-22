import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PlusSquare, MinusSquare } from "lucide-react"

export function StatsCards() {
    return (
        <div className="grid gap-6 md:grid-cols-3">
            {/* Current Balance */}
            <Card>
                <CardContent className="p-6">
                    <div className="space-y-2">
                        <h3 className="font-bold text-xl">Saldo atual</h3>
                        <p className="text-sm text-muted-foreground">Totalizado de todas as contas</p>
                    </div>
                    <div className="mt-4">
                        <p className="text-2xl font-bold text-red-500">R$ -50,01</p>
                    </div>
                </CardContent>
            </Card>

            {/* Today's Receivables */}
            <Card>
                <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                        <h3 className="font-bold text-xl">A receber hoje</h3>
                        <PlusSquare className="h-6 w-6 text-green-500" />
                    </div>
                    <div className="mt-4 text-center">
                        <p className="text-sm text-muted-foreground mb-4">Nenhuma receita planejada para hoje</p>
                        <Button variant="outline">
                            <PlusSquare className="mr-2 h-4 w-4 text-green-500" />
                            Lançar nova receita
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {/* Today's Payables */}
            <Card>
                <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                        <h3 className="font-bold text-xl">A pagar hoje</h3>
                        <MinusSquare className="h-6 w-6 text-red-500" />
                    </div>
                    <div className="mt-4 text-center">
                        <p className="text-sm text-muted-foreground mb-4">Nenhuma despesa planejada para hoje</p>
                        <Button variant="outline">
                            <MinusSquare className="mr-2 h-4 w-4 text-red-500" />
                            Lançar nova despesa
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

