"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import dynamic from "next/dynamic"

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false })

export default function FluxoDeCaixaPage() {
    const currentYear = new Date().getFullYear()
    const years = Array.from({ length: 16 }, (_, i) => currentYear - 15 + i)

    return (
        <div className="space-y-6">
            <div className="flex justify-end">
                <div className="w-[200px]">
                    <Select defaultValue={currentYear.toString()}>
                        <SelectTrigger>
                            <SelectValue placeholder="Selecione o ano" />
                        </SelectTrigger>
                        <SelectContent>
                            {years.map((year) => (
                                <SelectItem key={year} value={year.toString()}>
                                    {year}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <Card>
                <CardHeader>
                    <h3 className="text-lg font-semibold">Fluxo de caixa do ano 2025</h3>
                </CardHeader>
                <CardContent>
                    <Chart
                        type="area"
                        height={180}
                        options={{
                            chart: {
                                toolbar: { show: false },
                            },
                            stroke: { curve: "smooth" },
                            xaxis: {
                                categories: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
                            },
                            colors: ["#1CAC78"],
                        }}
                        series={[
                            {
                                name: "Saldo",
                                data: [0, -50.01, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                            },
                        ]}
                    />
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <h3 className="text-lg font-semibold">Movimento realizado no ano 2025</h3>
                </CardHeader>
                <CardContent>
                    <Chart
                        type="area"
                        height={250}
                        options={{
                            chart: {
                                toolbar: { show: false },
                            },
                            stroke: { curve: "smooth" },
                            xaxis: {
                                categories: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
                            },
                            colors: ["#1CAC78", "#F44336"],
                        }}
                        series={[
                            {
                                name: "Receita",
                                data: [0, 150, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                            },
                            {
                                name: "Despesa",
                                data: [0, 200.01, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                            },
                        ]}
                    />
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <h3 className="text-lg font-semibold">Despesas planejadas para os próximos meses</h3>
                </CardHeader>
                <CardContent>
                    <Chart
                        type="area"
                        height={250}
                        options={{
                            chart: {
                                toolbar: { show: false },
                            },
                            stroke: { curve: "smooth" },
                            xaxis: {
                                categories: ["Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
                            },
                            colors: ["#F44336"],
                        }}
                        series={[
                            {
                                name: "Despesa",
                                data: [200.01, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                            },
                        ]}
                    />
                </CardContent>
            </Card>
        </div>
    )
}

