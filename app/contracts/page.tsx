import { Sidebar } from "@/components/sidebar"
import { ContractsTable } from "@/components/contracts-table"
import { ContractsTabs } from "@/components/contracts-tabs"
import { Button } from "@/components/ui/button"
import { Filter, Download, Plus } from "lucide-react"

export default function ContractsPage() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <main className="flex-1 p-6 overflow-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold">Contracts</h1>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            <Button size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Add Truck
            </Button>
          </div>
        </div>
        <ContractsTabs />
        <ContractsTable />
      </main>
    </div>
  )
}

