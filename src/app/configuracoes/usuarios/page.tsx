import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Pencil, UserPlus } from "lucide-react"
import Link from "next/link"

interface User {
    id: string
    name: string
    role: string
    hasAccess: boolean
    isOwner: boolean
}

export default function UsuariosPage() {
    const users: User[] = [
        {
            id: "32670",
            name: "JOSÉ PINHEIRO",
            role: "Administrador",
            hasAccess: true,
            isOwner: true,
        },
    ]

    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between">
                <Button asChild>
                    <Link href="/configuracoes/usuarios/novo">
                        <UserPlus className="h-4 w-4 mr-2" />
                        Novo usuário
                    </Link>
                </Button>
            </CardHeader>
            <CardContent>
                <div className="bg-blue-50 text-blue-800 p-4 rounded-md mb-6">
                    Cadastro de administradores, recepcionistas e profissionais de saúde do seu consultório.
                </div>

                <div className="divide-y">
                    {users.map((user) => (
                        <div key={user.id} className="py-4 flex items-center justify-between">
                            <div>
                                <Link href={`/configuracoes/usuarios/${user.id}`} className="font-medium hover:underline">
                                    {user.name}
                                </Link>
                                <div className="flex items-center gap-2 mt-1">
                                    <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">{user.role}</span>
                                    {user.hasAccess && (
                                        <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded flex items-center">
                                            <span className="mr-1">⚠️</span>
                                            Acesso ao prontuário
                                        </span>
                                    )}
                                </div>
                            </div>
                            <div>
                                {user.isOwner ? (
                                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Dono da conta</span>
                                ) : (
                                    <Button variant="secondary" size="icon">
                                        <Pencil className="h-4 w-4" />
                                    </Button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
            <CardFooter className="flex-col items-start">
                <p className="text-sm">
                    Você está utilizando <b>1</b> do seu limite de <b>1</b> profissionais de saúde.
                </p>
                <p className="text-sm">
                    Você está utilizando <b>1</b> do seu limite de <b>1</b> usuários.
                </p>
            </CardFooter>
        </Card>
    )
}

