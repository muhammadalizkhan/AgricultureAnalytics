"use client";

import { Navigation } from "@/components/ui/navigation";
import { FarmMap } from "@/components/farm-map";
import { Card } from "@/components/ui/card";
import { Plane as Plant, Cloud, Droplets, Wind } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    icon: Plant,
    title: "Crop Health",
    value: "92%",
    trend: "+2.5%",
  },
  {
    icon: Cloud,
    title: "Cloud Cover",
    value: "65%",
    trend: "-5%",
  },
  {
    icon: Droplets,
    title: "Soil Moisture",
    value: "78%",
    trend: "+1.2%",
  },
  {
    icon: Wind,
    title: "Wind Speed",
    value: "12 km/h",
    trend: "Stable",
  },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <Navigation />

      <main className="lg:pl-64 p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto space-y-8"
        >
          <header>
            <h1 className="text-3xl font-bold tracking-tight mb-4">Dashboard Overview</h1>
            <p className="text-muted-foreground">
              Monitor your farm's performance and environmental conditions in real-time
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 backdrop-blur-lg bg-opacity-50">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <stat.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{stat.title}</p>
                      <p className="text-2xl font-semibold">{stat.value}</p>
                      <p className="text-sm text-emerald-500">{stat.trend}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <FarmMap />
        </motion.div>
      </main>
    </div>
  );
}