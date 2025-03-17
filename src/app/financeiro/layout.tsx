"use client"
import { ReactNode, useState } from "react"
import { Layout } from "@/components/layout"
import { FinanceSidebar } from "./financeSidebar"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CalendarClock } from "lucide-react"
import { AccountSelector } from "./accountSelector"

export default function FinanceiroLayout({ children }: { children: ReactNode }) {
    const [period, setPeriod] = useState()

    return (
        <Layout sidebar={<FinanceSidebar />}>
            <div className="space-y-6">
                <Alert>
                    <CalendarClock className="h-4 w-4" />
                    <AlertDescription>
                        <span className="font-bold text-green-600">Período de degustação</span> - Experimente este módulo até o dia
                        23/02/2025
                    </AlertDescription>
                </Alert>

                <AccountSelector />

                {children}
            </div>
        </Layout>
    )
}