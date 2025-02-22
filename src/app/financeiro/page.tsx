import { Alert, AlertDescription } from "@/components/ui/alert"
import { CalendarClock } from "lucide-react"
import { AccountSelector } from "./accountSelector"
import { OverdueTables } from "./overdueTables"
import { StatsCards } from "./statsCard"

export default function FinancePage() {
    return (
        <div className="space-y-6">
            <StatsCards />

            <OverdueTables />
        </div>
    )
}

