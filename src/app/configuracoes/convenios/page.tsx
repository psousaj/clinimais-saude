import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Plus } from "lucide-react"
import Link from "next/link"

export default function ConveniosPage() {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between">
                <Button asChild>
                    <Link href="/configuracoes/convenios/novo">
                        <Plus className="h-4 w-4 mr-2" />
                        Novo convênio
                    </Link>
                </Button>
            </CardHeader>
            <CardContent>
                <div className="text-center py-8">
                    <p className="mb-4">Cadastro de convênios que o seu consultório atende</p>
                    <hr className="my-4" />
                    <Button asChild>
                        <Link href="/configuracoes/convenios/novo">Cadastrar convênio</Link>
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}

