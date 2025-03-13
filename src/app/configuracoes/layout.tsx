import type { ReactNode } from "react"
import { SettingsSidebar } from "./settings-sidebar"
import { BaseLayout } from "@/components/layout/baseLayout"

interface SettingsLayoutProps {
    children: ReactNode
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
    return <BaseLayout sidebar={<SettingsSidebar />}>{children}</BaseLayout>
}

