import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Home, Calendar, Users, DollarSign, FileText, Settings, Star, HelpCircle, UserCircle } from "lucide-react"

export function Header() {
    return (
        <header className="sticky top-0 z-50  w-full border-b bg-background">
            <div className="container flex h-16 items-center justify-between px-4">
                <div className="flex items-center gap-6">
                    <Link href="/" className="lg:hidden">
                        <Home className="h-6 w-6" />
                    </Link>

                    <nav className="hidden gap-6 lg:flex">
                        <Link href="/" className="flex items-center gap-2 text-sm font-medium">
                            <Home className="h-4 w-4" />
                            Início
                        </Link>
                        <Link href="/agenda" className="flex items-center gap-2 text-sm font-medium">
                            <Calendar className="h-4 w-4" />
                            Agenda
                        </Link>
                        <Link href="/pacientes" className="flex items-center gap-2 text-sm font-medium">
                            <Users className="h-4 w-4" />
                            Pacientes
                        </Link>
                        <Link href="/financeiro" className="flex items-center gap-2 text-sm font-medium">
                            <DollarSign className="h-4 w-4" />
                            Financeiro
                        </Link>
                        <Link href="/relatorios" className="flex items-center gap-2 text-sm font-medium">
                            <FileText className="h-4 w-4" />
                            Relatórios
                        </Link>
                    </nav>
                </div>

                <div className="flex items-center gap-4">
                    <Button variant="destructive" size="sm" className="hidden lg:flex">
                        <Star className="mr-2 h-4 w-4" />
                        Assinar
                    </Button>

                    <Link href="/configuracoes">
                        <Button variant="ghost" size="sm" className="hidden lg:flex">
                            <Settings className="mr-2 h-4 w-4" />
                            Configurações
                        </Button>
                    </Link>

                    <Button variant="ghost" size="sm" className="hidden lg:flex">
                        <HelpCircle className="mr-2 h-4 w-4" />
                        Suporte
                    </Button>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                                <UserCircle className="mr-2 h-4 w-4" />
                                <span className="hidden lg:inline">José Pinheiro</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem>Minha conta</DropdownMenuItem>
                            <DropdownMenuItem>Alterar senha</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Sair</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </header>
    )
}

