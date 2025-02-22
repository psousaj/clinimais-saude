import type { ReactNode } from "react"
import { Layout } from "@/components/layout"
import { ReportsSidebar } from "./relatorioSidebar"

interface ReportsLayoutProps {
    children: ReactNode
}

export default function ReportsLayout({ children }: ReportsLayoutProps) {
    return <Layout sidebar={<ReportsSidebar />}>{children}</Layout >
}

