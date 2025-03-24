"use client";

import { Navigation } from "@/components/ui/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import {
  FileText,
  Download,
  Calendar,
  Filter,
  BarChart3,
  LineChart,
  PieChart,
  Share2,
} from "lucide-react";

const reports = [
  {
    id: "REP001",
    title: "Monthly Crop Yield Analysis",
    type: "Yield Report",
    date: "March 2024",
    status: "Ready",
    insights: [
      "15% increase in wheat yield",
      "Pest resistance improved by 30%",
      "Water usage optimized by 20%",
    ],
  },
  {
    id: "REP002",
    title: "Quarterly Soil Health Report",
    type: "Soil Analysis",
    date: "Q1 2024",
    status: "Processing",
    insights: [
      "pH levels stable at 6.5-7.0",
      "Nitrogen content increased",
      "Organic matter improved",
    ],
  },
  {
    id: "REP003",
    title: "Drone Survey Findings",
    type: "Aerial Analysis",
    date: "Last Week",
    status: "Ready",
    insights: [
      "Identified 3 areas of concern",
      "Crop stress detected in Field B",
      "Irrigation system performing well",
    ],
  },
];

const metrics = [
  {
    label: "Total Reports",
    value: "156",
    trend: "+12%",
    icon: FileText,
  },
  {
    label: "Data Points",
    value: "2.4M",
    trend: "+8%",
    icon: BarChart3,
  },
  {
    label: "Insights Generated",
    value: "450",
    trend: "+15%",
    icon: LineChart,
  },
  {
    label: "Fields Analyzed",
    value: "24",
    trend: "+2",
    icon: PieChart,
  },
];

export default function Reports() {
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
              <h1 className="text-3xl font-bold tracking-tight mb-2">Reports & Analytics</h1>
              <p className="text-muted-foreground">
                Generate insights and analyze farm performance data
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="gap-2">
                <Filter className="w-4 h-4" />
                Filter
              </Button>
              <Button className="gap-2">
                <FileText className="w-4 h-4" />
                New Report
              </Button>
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 backdrop-blur-lg bg-opacity-50">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-2 rounded-full bg-primary/10">
                      <metric.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm px-2 py-1 rounded-full bg-green-500/10 text-green-500">
                      {metric.trend}
                    </span>
                  </div>
                  <p className="text-2xl font-bold mb-1">{metric.value}</p>
                  <p className="text-sm text-muted-foreground">{metric.label}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <Tabs defaultValue="all" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4 lg:w-[400px]">
              <TabsTrigger value="all">All Reports</TabsTrigger>
              <TabsTrigger value="crops">Crops</TabsTrigger>
              <TabsTrigger value="soil">Soil</TabsTrigger>
              <TabsTrigger value="drone">Drone</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-6">
              {reports.map((report, index) => (
                <motion.div
                  key={report.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 backdrop-blur-lg bg-opacity-50">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-1">{report.title}</h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span>{report.id}</span>
                          <span>•</span>
                          <span>{report.type}</span>
                          <span>•</span>
                          <span>{report.date}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="gap-2">
                          <Share2 className="w-4 h-4" />
                          Share
                        </Button>
                        <Button size="sm" className="gap-2">
                          <Download className="w-4 h-4" />
                          Download
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-medium">Key Insights:</h4>
                      <ul className="space-y-2">
                        {report.insights.map((insight, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {insight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </TabsContent>

            <TabsContent value="crops">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Crop Reports</h3>
                {/* Add crop-specific reports here */}
              </Card>
            </TabsContent>

            <TabsContent value="soil">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Soil Analysis Reports</h3>
                {/* Add soil analysis reports here */}
              </Card>
            </TabsContent>

            <TabsContent value="drone">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Drone Survey Reports</h3>
                {/* Add drone survey reports here */}
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </main>
    </div>
  );
}