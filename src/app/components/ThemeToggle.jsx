'use client';

import { Moon, Sun } from "lucide-react";
import { useState } from "react";

export default function ThemeToggle() {
    const [theme, setTheme] = useState("light");
    useEffect(() => {
        const stored = localStorage.getItem("theme") || "light";
        setTheme(stored);
        document.documentElement.classList.toggle("dark", stored === "dark");
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
    };
    return (
        <button
            onClick={toggleTheme}
            className="fixed top-6 right-6 bg-black/30 dark:bg-white/50 backdrop-blur-md p-3 rounded-full shadow-lg"
        >
            {theme === "light" ? (
                <Moon className="text-white" />
            ) : (
                <Sun className="text-yellow-300" />
            )}
        </button>
    )
}
