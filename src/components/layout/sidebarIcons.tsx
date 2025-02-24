import { LucideIcon, LucideProps } from "lucide-react";
import { Button, ButtonProps } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

type SidebarIconProps = {
    Icon: LucideIcon; // Deve ser um componente LucideIcon
    destination: string
    sidebarOpen?: boolean
    text?: string
    iconProps?: LucideProps;
    className?: string
    iconClassName?: string
    variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined
    options?: ButtonProps
};

export default function SidebarIcon({ Icon, iconProps, className, destination, text, variant, options, iconClassName, sidebarOpen }: SidebarIconProps) {
    return (
        <Link href={destination}>
            <Button {...options} variant={variant ?? "default"} className={cn("rounded-lg", className)}>
                <Icon
                    {...iconProps}
                    className={cn(
                        "h-5 w-5",
                        { "ml-2": sidebarOpen },
                        { "mx-auto": !sidebarOpen },
                        iconClassName
                    )}
                />
                {(sidebarOpen && text) ?? ""}
            </Button>
        </Link>
    );
}
