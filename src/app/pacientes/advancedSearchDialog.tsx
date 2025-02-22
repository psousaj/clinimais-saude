import type React from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface AdvancedSearchDialogProps {
    children: React.ReactNode
}

export function AdvancedSearchDialog({ children }: AdvancedSearchDialogProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                    <DialogTitle>Busca avançada</DialogTitle>
                </DialogHeader>
                <form className="space-y-6">
                    <div className="grid grid-cols-4 gap-4">
                        <div className="col-span-1">
                            <Label htmlFor="id">ID do Prontuário</Label>
                            <Input id="id" />
                        </div>
                        <div className="col-span-3">
                            <Label htmlFor="name">Nome do paciente</Label>
                            <Input id="name" />
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                        <div>
                            <Label htmlFor="birth">Nascimento</Label>
                            <Input id="birth" />
                        </div>
                        <div className="col-span-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" />
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                        <div>
                            <Label htmlFor="cpf">CPF</Label>
                            <Input id="cpf" />
                        </div>
                        <div>
                            <Label htmlFor="rg">RG</Label>
                            <Input id="rg" />
                        </div>
                        <div>
                            <Label htmlFor="phone">Telefone</Label>
                            <Input id="phone" />
                        </div>
                    </div>

                    <div className="flex justify-end gap-2">
                        <Button type="submit">Buscar paciente</Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}

