"use client";

import { useSidebar } from "@/context/sidebarContext";
import React from "react";
import { ReactNode } from "react";

// Tipo para os elementos filhos que aceitam a prop "sidebarOpen"
interface SidebarChildProps {
    sidebarOpen: boolean;
}

export default function BaseSidebar({ children }: { children: ReactNode }) {
    const { sidebarOpen } = useSidebar();

    return (
        <>
            {React.Children.map(children, (child) =>
                React.isValidElement<SidebarChildProps>(child)
                    ? React.cloneElement(child, { sidebarOpen })
                    : child
            )}
        </>
    );
}
