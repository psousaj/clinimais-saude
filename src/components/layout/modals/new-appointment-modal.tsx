import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface NewAppointmentModalProps {
    isOpen: boolean
    onClose: () => void
    selectedDate: Date | null
}

export function NewAppointmentModal({ isOpen, onClose, selectedDate }: NewAppointmentModalProps) {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                    <DialogTitle>Novo agendamento de horário</DialogTitle>
                </DialogHeader>

                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="procedure" className="text-right">
                            Procedimento
                        </Label>
                        <Select>
                            <SelectTrigger className="col-span-3">
                                <SelectValue placeholder="Selecione o procedimento" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="consulta">Consulta</SelectItem>
                                <SelectItem value="retorno">Retorno</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="date" className="text-right">
                            Data
                        </Label>
                        <Input id="date" type="date" className="col-span-3" value={selectedDate?.toISOString().split("T")[0]} />
                    </div>

                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="time" className="text-right">
                            Horário
                        </Label>
                        <div className="col-span-3 flex gap-2 items-center">
                            <Input id="time-start" type="time" className="flex-1" />
                            <span>até</span>
                            <Input id="time-end" type="time" className="flex-1" />
                        </div>
                    </div>

                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="patient" className="text-right">
                            Paciente
                        </Label>
                        <div className="col-span-3">
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Selecione ou cadastre um paciente" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="new">Novo paciente</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between">
                    <Button variant="destructive" type="button">
                        Remover
                    </Button>
                    <div className="space-x-2">
                        <Button variant="outline" onClick={onClose}>
                            Cancelar
                        </Button>
                        <Button type="submit">Salvar</Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

