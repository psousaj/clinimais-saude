import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Pencil, Trash } from "lucide-react"
import Image from "next/image"

// Mock data - replace with real data fetching
const patients = [
    {
        id: "74213945",
        name: "MARIA",
        birth: "28/04/2001",
        age: "23a 9m",
        avatar: "/placeholder.svg",
        gender: null,
    },
    {
        id: "62242814",
        name: "PACIENTE DE EXEMPLO",
        birth: "04/11/1988",
        age: "36a 3m",
        avatar: "/placeholder.svg",
        gender: "Feminino",
    },
]

export function PatientsList() {
    return (
        <Card>
            <CardContent className="p-0">
                <div className="text-sm text-muted-foreground p-4 border-b">Exibindo 1-2 de 2 resultado(s)</div>

                <div className="divide-y">
                    {patients.map((patient) => (
                        <div key={patient.id} className="p-4 hover:bg-accent transition-colors">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="relative h-10 w-10">
                                        <Image
                                            src={patient.avatar || "/placeholder.svg"}
                                            alt={patient.name}
                                            className="rounded-full object-cover"
                                            fill
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-medium">{patient.name}</h4>
                                        <p className="text-sm text-muted-foreground">
                                            <span className="inline-block mr-4">
                                                <b>ID:</b> {patient.id}
                                            </span>
                                            <span className="inline-block mr-4">
                                                <b>Nascimento:</b> {patient.birth}
                                            </span>
                                            <span className="inline-block mr-4">
                                                <b>Idade:</b> {patient.age}
                                            </span>
                                            {patient.gender && (
                                                <span className="inline-block">
                                                    <b>Sexo:</b> {patient.gender}
                                                </span>
                                            )}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-2">
                                    <Button variant="secondary" size="icon" title="Acessar prontuário">
                                        <FileText className="h-4 w-4" />
                                    </Button>
                                    <Button variant="secondary" size="icon" title="Alterar dados do paciente">
                                        <Pencil className="h-4 w-4" />
                                    </Button>
                                    <Button variant="destructive" size="icon" title="Arquivar paciente">
                                        <Trash className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}

