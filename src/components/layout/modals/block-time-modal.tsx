import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface BlockTimeModalProps {
    isOpen: boolean
    onClose: () => void
}

export function BlockTimeModal({ isOpen, onClose }: BlockTimeModalProps) {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                    <DialogTitle>Novo bloqueio de horário</DialogTitle>
                </DialogHeader>

                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="date-range" className="text-right">
                            Datas
                        </Label>
                        <div className="col-span-3 flex gap-2 items-center">
                            <Input id="date-start" type="date" className="flex-1" />
                            <span>até</span>
                            <Input id="date-end" type="date" className="flex-1" />
                        </div>
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
                        <Label htmlFor="description" className="text-right">
                            Descrição
                        </Label>
                        <Textarea id="description" className="col-span-3" placeholder="Motivo do bloqueio" />
                    </div>
                </div>

                <div className="flex justify-end space-x-2">
                    <Button variant="outline" onClick={onClose}>
                        Cancelar
                    </Button>
                    <Button type="submit">Salvar</Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}

