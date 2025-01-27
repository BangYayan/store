'use client';
import { useState, useEffect } from "react";
import { Button } from "../../button";
import { DropdownMenu, 
    DropdownMenuTrigger, 
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuCheckboxItem
} from "../../dropdown-menu";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon, SunMoon } from "lucide-react";

const ModeToggle = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return ( <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="focus:outline-none">
                {theme === "system" ? <SunMoon /> : theme === "dark" ? <MoonIcon /> : <SunIcon />}
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuLabel>Mode</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem checked={theme === "system"} onClick={() => setTheme("system")}>
                System
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked={theme === "dark"} onClick={() => setTheme("dark")}>
                Dark
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked={theme === "light"} onClick={() => setTheme("light")}>
                Light
            </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
    </DropdownMenu> );
}
 
export default ModeToggle;