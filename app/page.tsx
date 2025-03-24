"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/ui/navigation";
import { Card } from "@/components/ui/card";
import { ArrowRight, Sprout, Cloud, Bone as Drone, FileText } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Sprout,
    title: "Crop Analysis",
    description: "Monitor crop health and growth patterns with AI-powered insights",
  },
  {
    icon: Cloud,
    title: "Weather Tracking",
    description: "Real-time weather data and forecasting for informed decision making",
  },
  {
    icon: Drone,
    title: "Drone Monitoring",
    description: "Automated drone surveillance and crop health assessment",
  },
  {
    icon: FileText,
    title: "Smart Reports",
    description: "Generate detailed reports with AI-driven recommendations",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <Navigation />

      <main className="lg:pl-64 p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto space-y-12 py-12"
        >
          {/* Hero Section */}
          <section className="text-center space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl font-bold tracking-tight"
            >
              Next-Gen Agriculture Analytics
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Transform your farming with real-time 3D visualization, AI-powered insights,
              and precision agriculture technology.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Link href="/dashboard">
                <Button size="lg" className="gap-2">
                  Go to Dashboard
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          </section>

          {/* Features Grid */}
          <section className="grid md:grid-cols-2 gap-6 pt-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <Card className="p-6 backdrop-blur-lg bg-opacity-50 h-full">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </section>
        </motion.div>
      </main>
    </div>
  );
}