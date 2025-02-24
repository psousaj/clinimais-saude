import { ReactNode } from "react";
import { Layout } from "@/components/layout";
import AgendaSidebar from "./agendaSidebar";

export default function AgendaLayout({ children }: { children: ReactNode }) {
    return (
        <Layout classname="" sidebar={<AgendaSidebar />}>{children}</Layout>
    )
}