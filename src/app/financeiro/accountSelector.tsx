import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Building } from "lucide-react"

export function AccountSelector() {
    return (
        <Card>
            <CardContent className="p-4">
                <div className="flex items-center justify-between">
                    <div className="w-[200px]">
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Todas as contas" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">Todas as contas</SelectItem>
                                <SelectItem value="bank1">BANCO 1</SelectItem>
                                <SelectItem value="cash">DINHEIRO EM CAIXA</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <Button variant="outline">
                        <Building className="mr-2 h-4 w-4" />
                        Gerenciar contas
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}

