"use client"

import Link from "next/link"
import { LayoutDashboard, MapPin, AlertTriangle, Truck, Package, FileText, Settings, User, BarChart, Users, BoxIcon } from "lucide-react"
import { usePathname } from "next/navigation"


const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Tracking Orders", href: "/tracking-orders", icon: MapPin },
  { name: "Risk alerts", href: "/risk-alerts", icon: AlertTriangle, badge: "12" },
  { name: "Trucks", href: "/trucks", icon: Truck },
  { name: "Packages", href: "/packages", icon: Package },
  { name: "Contracts", href: "/contracts", icon: FileText }, 

]

const bottomNavigation = [
  { name: "Profile", href: "/profile", icon: User },
  { name: "Settings", href: "/settings", icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()
  
  return (
    <div className="w-64 border-r bg-background flex flex-col h-screen">
      <div className="flex items-center gap-2 px-4 border-b">
        <img src="/img/Logo.png" alt="logo" />
      </div>
      <nav className="space-y-3 p-2 flex-1">


        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`flex items-center gap-3 px-3 py-2 text-sm rounded-lg ${
              pathname === item.href 
                ? "bg-[#5932EA] text-white" 
                : "hover:bg-accent"
            }`}
          >
            <item.icon className="h-5 w-5" />
            <span>{item.name}</span>
            {item.badge && (
              <span className="ml-auto bg-destructive text-destructive-foreground text-xs px-2 py-0.5 rounded-full">
                {item.badge}
              </span>
            )}
          </Link>
        ))}
      </nav>
      <div className="space-y-3 border-t p-2 mb-2">
        {bottomNavigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`flex items-center gap-3 px-3 py-2 text-sm rounded-lg ${
              pathname === item.href 
                ? "bg-[#5932EA] text-white" 
                : "hover:bg-accent"
            }`}
          >
            <item.icon className="h-5 w-5" />
            <span>{item.name}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

