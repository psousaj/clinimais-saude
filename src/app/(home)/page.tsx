'use client'

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, UserPlus, ThumbsUp, BarChart3 } from "lucide-react"
import dynamic from "next/dynamic"
import { ApexOptions } from "apexcharts"
import { Layout } from "@/components/layout"

// Import ApexCharts dynamically to avoid SSR issues
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false })

export default function DashboardPage() {
  const consultationData = {
    options: {
      chart: {
        height: 250,
        type: "area",
        toolbar: {
          show: false,
        },
      },
      colors: ["#1CAC78", "#FEB019", "#F44336"],
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        categories: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
      },
      yaxis: {
        show: false,
      },
    } as ApexOptions,
    series: [
      {
        name: "Compareceu",
        data: [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
      {
        name: "Não compareceu",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
      {
        name: "Desmarcada",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
    ],
  }

  return (
    <Layout>
      <div className="container mx-auto p-4 space-y-6">
        {/* Guia introdutório */}
        <Card>
          <CardHeader className="bg-[#1CAC78] text-white">
            <div className="flex justify-between items-center">
              <h5 className="text-lg font-medium">Bem vindo(a), aprenda a utilizar através do nosso guia</h5>
              <Button variant="secondary" size="sm">
                Não exibir mais este guia
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-6 p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">1</div>
                <span className="font-medium">Complete as informações do seu consultório</span>
              </div>
              <div className="w-32">
                <Progress value={0} className="h-2" />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">2</div>
                <span className="font-medium">Cadastre o seu primeiro paciente</span>
              </div>
              <div className="w-32">
                <Progress value={100} className="h-2" />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">3</div>
                <span className="font-medium">Marque sua primeira consulta</span>
              </div>
              <div className="w-32">
                <Progress value={100} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="bbt grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <h3 className="text-xl font-semibold">Movimento de consultas</h3>
            </CardHeader>
            <CardContent>
              <Chart options={consultationData.options} series={consultationData.series} type="area" height={250} />
            </CardContent>
          </Card>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-sm font-medium mb-6">Confirmados na semana</h4>
                      <p className="text-3xl font-bold text-green-600">0</p>
                      <p className="text-sm text-muted-foreground">Pacientes confirmados na semana</p>
                    </div>
                    <ThumbsUp className="w-8 h-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-sm font-medium mb-6">Aguardando na semana</h4>
                      <p className="text-3xl font-bold text-yellow-600">0</p>
                      <p className="text-sm text-muted-foreground">Pacientes aguardando confir. na semana</p>
                    </div>
                    <Clock className="w-8 h-8 text-yellow-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-sm font-medium mb-6">Novos pacientes na semana</h4>
                      <p className="text-3xl font-bold text-green-600">2</p>
                      <p className="text-sm text-muted-foreground">Novos cadastros de pacientes</p>
                    </div>
                    <UserPlus className="w-8 h-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-sm font-medium mb-6">Marcações na semana</h4>
                      <p className="text-3xl font-bold text-green-600">2</p>
                      <p className="text-sm text-muted-foreground">Novas marcações na semana</p>
                    </div>
                    <Calendar className="w-8 h-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-semibold">Resumo geral da clínica</h3>
                  <BarChart3 className="w-8 h-8 text-blue-600" />
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b">
                    <span>Pacientes</span>
                    <span className="font-medium">2</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span>Marcações</span>
                    <span className="font-medium">2</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span>Convênios</span>
                    <span className="font-medium">0</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span>Média etária</span>
                    <span className="font-medium">29</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  )
}

