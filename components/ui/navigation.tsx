"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, Sprout, Cloud, Bone as Drone, FileText, Settings, Menu, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: Sprout, label: "Crop Analysis", href: "/crops" },
  { icon: Cloud, label: "Weather", href: "/weather" },
  { icon: Drone, label: "Drone Monitor", href: "/drones" },
  { icon: FileText, label: "Reports", href: "/reports" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden fixed top-4 right-4 z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X /> : <Menu />}
      </Button>

      <motion.nav
        initial={false}
        animate={{
          width: isOpen ? "100%" : "auto",
          opacity: 1,
        }}
        className={cn(
          "fixed left-0 top-0 h-full bg-background/80 backdrop-blur-xl border-r z-40",
          isOpen ? "w-full" : "w-20 lg:w-64"
        )}
      >
        <div className="p-6">
          <Link href="/" className="flex items-center gap-4 mb-8">
            <Sprout className="w-8 h-8 text-primary" />
            <span className={cn("font-bold text-xl", !isOpen && "lg:block hidden")}>
              AgriTech
            </span>
          </Link>

          <div className="space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-accent transition-colors",
                  "text-muted-foreground hover:text-foreground"
                )}
              >
                <item.icon className="w-5 h-5" />
                <span className={cn("font-medium", !isOpen && "lg:block hidden")}>
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </motion.nav>
    </>
  );
}