"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Plus, Pencil, Trash } from "lucide-react"

interface Procedure {
    id: string
    name: string
    price: string
    duration: string
}

export default function ProcedimentosPage() {
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const [currentProcedure, setCurrentProcedure] = useState<Procedure | null>(null)

    const procedures: Procedure[] = [
        {
            id: "93489",
            name: "ARRANCAR CABELOS",
            price: "12134.30",
            duration: "123454",
        },
        {
            id: "93205",
            name: "CONSULTA",
            price: "0.00",
            duration: "30",
        },
        {
            id: "93211",
            name: "DEPILAÇÃO",
            price: "150.00",
            duration: "35",
        },
        {
            id: "93206",
            name: "RETORNO",
            price: "0.00",
            duration: "30",
        },
    ]

    const handleCreateProcedure = () => {
        setCurrentProcedure(null)
        setIsDialogOpen(true)
    }

    const handleEditProcedure = (procedure: Procedure) => {
        setCurrentProcedure(procedure)
        setIsDialogOpen(true)
    }

    const handleDeleteProcedure = (id: string) => {
        if (confirm("Você tem certeza que deseja remover o procedimento?")) {
            // Delete procedure logic would go here
            console.log("Deleting procedure", id)
        }
    }

    return (
        <>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                    <Button onClick={handleCreateProcedure}>
                        <Plus className="h-4 w-4 mr-2" />
                        Novo procedimento
                    </Button>
                </CardHeader>
                <CardContent>
                    <div className="divide-y">
                        {procedures.map((procedure) => (
                            <div
                                key={procedure.id}
                                className="py-4 flex items-center justify-between hover:bg-accent transition-colors cursor-pointer"
                                onClick={() => handleEditProcedure(procedure)}
                            >
                                <div>
                                    <h4 className="font-medium">{procedure.name}</h4>
                                    <p className="text-sm text-muted-foreground">
                                        <b>Preço:</b> R$ {procedure.price} &nbsp;&nbsp;
                                        <b>Duração:</b> {procedure.duration} minutos &nbsp;&nbsp;
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <Button
                                        variant="secondary"
                                        size="icon"
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            handleEditProcedure(procedure)
                                        }}
                                    >
                                        <Pencil className="h-4 w-4" />
                                    </Button>
                                    <Button
                                        variant="destructive"
                                        size="icon"
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            handleDeleteProcedure(procedure.id)
                                        }}
                                    >
                                        <Trash className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>{currentProcedure ? "Atualizar procedimento" : "Novo procedimento"}</DialogTitle>
                    </DialogHeader>
                    <form className="space-y-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Nome <span className="text-red-500">*</span>
                            </Label>
                            <Input id="name" className="col-span-3" defaultValue={currentProcedure?.name || ""} />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="price" className="text-right">
                                Preço
                            </Label>
                            <div className="col-span-3 flex">
                                <span className="flex items-center px-3 bg-muted border border-r-0 rounded-l-md">R$</span>
                                <Input id="price" className="rounded-l-none" defaultValue={currentProcedure?.price || ""} />
                            </div>
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="duration" className="text-right">
                                Duração <span className="text-red-500">*</span>
                            </Label>
                            <div className="col-span-3 flex">
                                <Input id="duration" className="rounded-r-none" defaultValue={currentProcedure?.duration || ""} />
                                <span className="flex items-center px-3 bg-muted border border-l-0 rounded-r-md">minutos</span>
                            </div>
                        </div>
                    </form>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                            Cancelar
                        </Button>
                        <Button type="submit">Salvar</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    )
}

