"use client";

import * as React from "react";
import { Lightbulb } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative p-2 rounded-full border border-border/10 hover:bg-secondary transition-all duration-300 group"
      aria-label="Toggle theme"
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        <motion.div
          animate={{ 
            rotate: theme === "dark" ? 180 : 0,
            scale: theme === "dark" ? 1.1 : 1
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Lightbulb 
            size={18} 
            className={`${theme === "dark" ? "text-primary fill-primary" : "text-primary"} transition-all duration-300`} 
          />
        </motion.div>
      </div>
      
      {/* Tooltip-like effect */}
      <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 bg-foreground text-background text-[8px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap font-bold">
        {theme === "dark" ? "Light Mode" : "Dark Mode"}
      </span>
    </button>
  );
}
