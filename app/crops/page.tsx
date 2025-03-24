"use client";

import { Navigation } from "@/components/ui/navigation";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Plane as Plant, AlertTriangle, Calendar, ArrowUpRight, ArrowDownRight } from "lucide-react";

const cropStats = [
  {
    name: "Wheat Field A",
    health: 95,
    trend: "up",
    issues: 0,
    lastInspection: "2 days ago",
  },
  {
    name: "Corn Field B",
    health: 82,
    trend: "down",
    issues: 2,
    lastInspection: "1 day ago",
  },
  {
    name: "Soybean Field C",
    health: 88,
    trend: "up",
    issues: 1,
    lastInspection: "3 days ago",
  },
];

const alerts = [
  {
    field: "Corn Field B",
    type: "Disease Risk",
    severity: "High",
    description: "Potential fungal infection detected in southeast quadrant",
  },
  {
    field: "Soybean Field C",
    type: "Pest Alert",
    severity: "Medium",
    description: "Early signs of pest activity in northern section",
  },
];

export default function CropAnalysis() {
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
              <h1 className="text-3xl font-bold tracking-tight mb-2">Crop Analysis</h1>
              <p className="text-muted-foreground">
                Monitor crop health and growth patterns across your fields
              </p>
            </div>
            <Button className="gap-2">
              <Calendar className="w-4 h-4" />
              Last 7 Days
            </Button>
          </header>

          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="health">Health</TabsTrigger>
              <TabsTrigger value="alerts">Alerts</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cropStats.map((crop, index) => (
                  <motion.div
                    key={crop.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="p-6 backdrop-blur-lg bg-opacity-50">
                      <div className="flex justify-between items-start mb-4">
                        <div className="space-y-1">
                          <h3 className="font-semibold">{crop.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            Last checked: {crop.lastInspection}
                          </p>
                        </div>
                        <div className="p-2 rounded-full bg-primary/10">
                          <Plant className="w-4 h-4 text-primary" />
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Health Score</span>
                          <div className="flex items-center gap-2">
                            <span className="text-2xl font-bold">{crop.health}%</span>
                            {crop.trend === "up" ? (
                              <ArrowUpRight className="w-4 h-4 text-green-500" />
                            ) : (
                              <ArrowDownRight className="w-4 h-4 text-red-500" />
                            )}
                          </div>
                        </div>
                        <div className="w-full bg-secondary rounded-full h-2">
                          <div
                            className="bg-primary rounded-full h-2 transition-all"
                            style={{ width: `${crop.health}%` }}
                          />
                        </div>
                        {crop.issues > 0 && (
                          <div className="flex items-center gap-2 text-sm text-amber-500">
                            <AlertTriangle className="w-4 h-4" />
                            <span>{crop.issues} issues detected</span>
                          </div>
                        )}
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <Card className="p-6 backdrop-blur-lg bg-opacity-50">
                <h3 className="text-lg font-semibold mb-4">Recent Alerts</h3>
                <div className="space-y-4">
                  {alerts.map((alert, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4 p-4 rounded-lg bg-background/50"
                    >
                      <div className="p-2 rounded-full bg-red-500/10">
                        <AlertTriangle className="w-4 h-4 text-red-500" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-medium">{alert.field}</h4>
                          <span className="text-sm px-2 py-1 rounded-full bg-red-500/10 text-red-500">
                            {alert.severity}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">{alert.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="health">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Detailed Health Analysis</h3>
                {/* Add detailed health metrics and charts here */}
              </Card>
            </TabsContent>

            <TabsContent value="alerts">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">All Alerts</h3>
                {/* Add comprehensive alerts list here */}
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </main>
    </div>
  );
}