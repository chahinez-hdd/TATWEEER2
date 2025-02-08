import { Sidebar } from "@/components/sidebar"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardTabs } from "@/components/dashboard-tabs"
import { DashboardMetrics } from "@/components/dashboard-metrics"
import { DashboardChart } from "@/components/dashboard-chart"
import { DashboardContracts } from "@/components/dashboard-contracts"

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <main className="flex-1 p-6 overflow-auto">
        <DashboardHeader />
        <DashboardTabs />
        <DashboardMetrics />
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6 mt-6">
          <DashboardChart />
          <DashboardContracts />
        </div>
      </main>
    </div>
  )
}

