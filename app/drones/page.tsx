"use client";

import { Navigation } from "@/components/ui/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Bone as Drone, Battery, Signal, Navigation as NavIcon, Camera, Play, Pause, RotateCcw, AlertTriangle } from "lucide-react";

const drones = [
  {
    id: "DRN-001",
    status: "active",
    battery: 85,
    signal: 95,
    altitude: "120m",
    speed: "15 km/h",
    location: "Field A - North",
  },
  {
    id: "DRN-002",
    status: "charging",
    battery: 20,
    signal: 100,
    altitude: "0m",
    speed: "0 km/h",
    location: "Charging Station",
  },
  {
    id: "DRN-003",
    status: "maintenance",
    battery: 0,
    signal: 0,
    altitude: "0m",
    speed: "0 km/h",
    location: "Maintenance Bay",
  },
];

const missions = [
  {
    id: "MSN-001",
    type: "Crop Survey",
    status: "In Progress",
    startTime: "10:30 AM",
    duration: "45 mins",
    coverage: "80%",
  },
  {
    id: "MSN-002",
    type: "Disease Detection",
    status: "Scheduled",
    startTime: "02:00 PM",
    duration: "30 mins",
    coverage: "40%",
  },
];

const alerts = [
  {
    drone: "DRN-001",
    type: "Low Battery Warning",
    time: "5 minutes ago",
    action: "Return to base scheduled",
  },
  {
    drone: "DRN-003",
    type: "Maintenance Required",
    time: "2 hours ago",
    action: "Schedule maintenance check",
  },
];

export default function DroneMonitor() {
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
              <h1 className="text-3xl font-bold tracking-tight mb-2">Drone Fleet Monitor</h1>
              <p className="text-muted-foreground">
                Track and control your agricultural drone fleet
              </p>
            </div>
            <Button className="gap-2">
              <Drone className="w-4 h-4" />
              Launch New Mission
            </Button>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {drones.map((drone, index) => (
              <motion.div
                key={drone.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 backdrop-blur-lg bg-opacity-50">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-semibold">{drone.id}</h3>
                      <span
                        className={`text-sm px-2 py-1 rounded-full ${
                          drone.status === "active"
                            ? "bg-green-500/10 text-green-500"
                            : drone.status === "charging"
                            ? "bg-amber-500/10 text-amber-500"
                            : "bg-red-500/10 text-red-500"
                        }`}
                      >
                        {drone.status}
                      </span>
                    </div>
                    <div className="p-2 rounded-full bg-primary/10">
                      <Drone className="w-4 h-4 text-primary" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-2">
                        <Battery className="w-4 h-4 text-muted-foreground" />
                        <span>{drone.battery}%</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Signal className="w-4 h-4 text-muted-foreground" />
                        <span>{drone.signal}%</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <NavIcon className="w-4 h-4 text-muted-foreground" />
                        <span>{drone.altitude}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Camera className="w-4 h-4 text-muted-foreground" />
                        <span>{drone.speed}</span>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-muted-foreground">Current Location</p>
                      <p className="font-medium">{drone.location}</p>
                    </div>

                    {drone.status === "active" && (
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          <Pause className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          <RotateCcw className="w-4 h-4" />
                        </Button>
                      </div>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="p-6 backdrop-blur-lg bg-opacity-50">
              <h3 className="text-lg font-semibold mb-4">Active Missions</h3>
              <div className="space-y-4">
                {missions.map((mission, index) => (
                  <motion.div
                    key={mission.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 rounded-lg bg-background/50"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h4 className="font-medium">{mission.type}</h4>
                        <p className="text-sm text-muted-foreground">{mission.id}</p>
                      </div>
                      <span
                        className={`text-sm px-2 py-1 rounded-full ${
                          mission.status === "In Progress"
                            ? "bg-green-500/10 text-green-500"
                            : "bg-blue-500/10 text-blue-500"
                        }`}
                      >
                        {mission.status}
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Start Time</p>
                        <p className="font-medium">{mission.startTime}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Duration</p>
                        <p className="font-medium">{mission.duration}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Coverage</p>
                        <p className="font-medium">{mission.coverage}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>

            <Card className="p-6 backdrop-blur-lg bg-opacity-50">
              <h3 className="text-lg font-semibold mb-4">Alerts & Notifications</h3>
              <div className="space-y-4">
                {alerts.map((alert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-lg bg-background/50"
                  >
                    <div className="p-2 rounded-full bg-amber-500/10">
                      <AlertTriangle className="w-4 h-4 text-amber-500" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium">{alert.type}</h4>
                        <span className="text-sm text-muted-foreground">
                          • {alert.drone}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">{alert.action}</p>
                      <p className="text-sm font-medium">{alert.time}</p>
                    </div>
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