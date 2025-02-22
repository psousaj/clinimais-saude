import { Layout } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Building, Pencil, Plus, Trash } from "lucide-react"
import Link from "next/link"

const accounts = [
    {
        id: "1",
        name: "BANCO 1",
        status: "active",
        type: "bank",
    },
    {
        id: "2",
        name: "DINHEIRO EM CAIXA",
        status: "active",
        type: "cash",
    },
]

export default function ContasPage() {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between">
                <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Nova conta
                </Button>
            </CardHeader>
            <CardContent>
                <div className="divide-y">
                    {accounts.map((account) => (
                        <div key={account.id} className="flex items-center justify-between py-4">
                            <div className="flex items-center gap-4">
                                <Link href={`/financeiro?acc=${account.id}`} className="font-medium hover:underline">
                                    {account.name}
                                </Link>
                                <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-green-100 text-green-700">
                                    Ativo
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                {account.type === "cash" ? (
                                    <Building className="h-5 w-5 text-muted-foreground" />
                                ) : (
                                    <>
                                        <Button variant="secondary" size="icon" title="Editar conta">
                                            <Pencil className="h-4 w-4" />
                                        </Button>
                                        <Button variant="destructive" size="icon" title="Remover conta">
                                            <Trash className="h-4 w-4" />
                                        </Button>
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}

