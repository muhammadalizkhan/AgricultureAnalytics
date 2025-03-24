"use client";

import { Navigation } from "@/components/ui/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Cloud,
  Droplets,
  Sun,
  Wind,
  ThermometerSun,
  Umbrella,
  AlertTriangle,
} from "lucide-react";

const weatherStats = [
  {
    icon: ThermometerSun,
    label: "Temperature",
    value: "24°C",
    detail: "Feels like 26°C",
  },
  {
    icon: Droplets,
    label: "Humidity",
    value: "65%",
    detail: "Optimal for crops",
  },
  {
    icon: Wind,
    label: "Wind Speed",
    value: "12 km/h",
    detail: "North-East",
  },
  {
    icon: Umbrella,
    label: "Precipitation",
    value: "30%",
    detail: "Light rain expected",
  },
];

const forecast = [
  {
    day: "Today",
    temp: "24°C",
    icon: Sun,
    precipitation: "30%",
  },
  {
    day: "Tomorrow",
    temp: "23°C",
    icon: Cloud,
    precipitation: "45%",
  },
  {
    day: "Wednesday",
    temp: "25°C",
    icon: Sun,
    precipitation: "10%",
  },
  {
    day: "Thursday",
    temp: "22°C",
    icon: Cloud,
    precipitation: "60%",
  },
  {
    day: "Friday",
    temp: "21°C",
    icon: Umbrella,
    precipitation: "80%",
  },
];

const alerts = [
  {
    type: "Heavy Rain Warning",
    time: "Tomorrow, 14:00",
    description: "Expected rainfall of 25mm over 3 hours",
    severity: "moderate",
  },
  {
    type: "High Wind Alert",
    time: "Thursday, 08:00",
    description: "Wind speeds up to 40km/h expected",
    severity: "high",
  },
];

export default function Weather() {
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
          <header className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold tracking-tight mb-2">Weather Monitor</h1>
              <p className="text-muted-foreground">
                Real-time weather conditions and forecasts for your farm
              </p>
            </div>
            <Button variant="outline" className="gap-2">
              <Cloud className="w-4 h-4" />
              Refresh Data
            </Button>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {weatherStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 backdrop-blur-lg bg-opacity-50">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <stat.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-2xl font-bold">{stat.value}</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium">{stat.label}</p>
                    <p className="text-sm text-muted-foreground">{stat.detail}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="col-span-2 p-6 backdrop-blur-lg bg-opacity-50">
              <h3 className="text-lg font-semibold mb-6">5-Day Forecast</h3>
              <div className="grid grid-cols-5 gap-4">
                {forecast.map((day, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <p className="text-sm font-medium mb-2">{day.day}</p>
                    <div className="p-3 rounded-full bg-primary/10 mx-auto mb-2 w-fit">
                      <day.icon className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-lg font-semibold mb-1">{day.temp}</p>
                    <p className="text-sm text-muted-foreground">{day.precipitation}</p>
                  </motion.div>
                ))}
              </div>
            </Card>

            <Card className="p-6 backdrop-blur-lg bg-opacity-50">
              <h3 className="text-lg font-semibold mb-4">Weather Alerts</h3>
              <div className="space-y-4">
                {alerts.map((alert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 rounded-lg bg-background/50"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle
                        className={`w-4 h-4 ${
                          alert.severity === "high" ? "text-red-500" : "text-amber-500"
                        }`}
                      />
                      <span className="font-medium">{alert.type}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">{alert.description}</p>
                    <p className="text-sm font-medium">{alert.time}</p>
                  </motion.div>
                ))}
              </div>
            </Card>
          </div>
        </motion.div>
      </main>
    </div>
  );
}