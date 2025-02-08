import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarRange } from "lucide-react"

export function DashboardTabs() {
  return (
    <div className="flex items-center justify-between mb-6">
      <Tabs defaultValue="overview" className="w-auto">
        <TabsList className="bg-muted/50">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>
      </Tabs>
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <CalendarRange className="h-4 w-4" />
        Jan 20, 2024 - Feb 09,2024
      </div>
    </div>
  )
}

