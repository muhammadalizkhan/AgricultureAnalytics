"use client";

import { Navigation } from "@/components/ui/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import {
  Settings as SettingsIcon, // Renamed here
  User,
  Bell,
  Shield,
  Globe,
  Laptop,
  Moon,
  Sun,
  Palette,
  Save,
} from "lucide-react";

const notifications = [
  {
    id: "weather-alerts",
    label: "Weather Alerts",
    description: "Get notified about important weather changes",
  },
  {
    id: "crop-health",
    label: "Crop Health Updates",
    description: "Receive updates about crop health status",
  },
  {
    id: "drone-missions",
    label: "Drone Mission Status",
    description: "Get alerts about drone mission progress",
  },
  {
    id: "system-updates",
    label: "System Updates",
    description: "Be notified about system maintenance and updates",
  },
];

const securitySettings = [
  {
    id: "two-factor",
    label: "Two-Factor Authentication",
    description: "Add an extra layer of security to your account",
  },
  {
    id: "login-alerts",
    label: "Login Alerts",
    description: "Get notified of new login attempts",
  },
  {
    id: "api-access",
    label: "API Access",
    description: "Enable access to farm data via API",
  },
];

export default function Settings() {
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
              <h1 className="text-3xl font-bold tracking-tight mb-2">Settings</h1>
              <p className="text-muted-foreground">
                Manage your account preferences and system settings
              </p>
            </div>
            <Button className="gap-2">
              <Save className="w-4 h-4" />
              Save Changes
            </Button>
          </header>

          <Tabs defaultValue="account" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4 lg:w-[600px]">
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
              <TabsTrigger value="appearance">Appearance</TabsTrigger>
            </TabsList>

            <TabsContent value="account">
              <Card className="p-6 backdrop-blur-lg bg-opacity-50">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Account Information</h3>
                    <div className="grid gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="John Doe" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="john@example.com" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="role">Role</Label>
                        <Input id="role" placeholder="Farm Manager" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">Farm Details</h3>
                    <div className="grid gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="farm-name">Farm Name</Label>
                        <Input id="farm-name" placeholder="Green Valley Farms" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="location">Location</Label>
                        <Input id="location" placeholder="123 Farm Road, Country" />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="notifications">
              <Card className="p-6 backdrop-blur-lg bg-opacity-50">
                <h3 className="text-lg font-semibold mb-6">Notification Preferences</h3>
                <div className="space-y-6">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className="flex items-center justify-between"
                    >
                      <div className="space-y-1">
                        <p className="font-medium">{notification.label}</p>
                        <p className="text-sm text-muted-foreground">
                          {notification.description}
                        </p>
                      </div>
                      <Switch id={notification.id} />
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="security">
              <Card className="p-6 backdrop-blur-lg bg-opacity-50">
                <h3 className="text-lg font-semibold mb-6">Security Settings</h3>
                <div className="space-y-6">
                  {securitySettings.map((setting) => (
                    <div key={setting.id} className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="font-medium">{setting.label}</p>
                        <p className="text-sm text-muted-foreground">
                          {setting.description}
                        </p>
                      </div>
                      <Switch id={setting.id} />
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="appearance">
              <Card className="p-6 backdrop-blur-lg bg-opacity-50">
                <h3 className="text-lg font-semibold mb-6">Appearance Settings</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="font-medium">Theme Mode</p>
                      <p className="text-sm text-muted-foreground">
                        Choose between light and dark mode
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" className="gap-2">
                        <Sun className="w-4 h-4" />
                        Light
                      </Button>
                      <Button variant="outline" size="sm" className="gap-2">
                        <Moon className="w-4 h-4" />
                        Dark
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="font-medium">Color Scheme</p>
                      <p className="text-sm text-muted-foreground">
                        Select your preferred color scheme
                      </p>
                    </div>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Palette className="w-4 h-4" />
                      Customize
                    </Button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="font-medium">Reduced Motion</p>
                      <p className="text-sm text-muted-foreground">
                        Toggle animation effects
                      </p>
                    </div>
                    <Switch id="reduced-motion" />
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </main>
    </div>
  );
}