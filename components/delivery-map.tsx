import { Sidebar } from "@/components/sidebar"
import { DeliveryMap } from "@/components/delivery-map"
import { DeliveryCard } from "@/components/delivery-card"
import { Search } from "lucide-react"

export default function Page() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <main className="flex-1 flex overflow-hidden">
        <div className="flex-1 overflow-auto p-6 space-y-4">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-semibold">Ongoing Delivery</h1>
          </div>
          <div className="relative">
            <input
              type="search"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border bg-background"
            />
            <div className="absolute left-3 top-2.5 text-muted-foreground">
              <Search className="h-5 w-5" />
            </div>
          </div>
          <div className="space-y-4">
            <DeliveryCard
              shipmentId="EV-2017002346"
              type="Food Materials"
              temperature="10C"
              percentage="25%"
              duration="1h30"
              startLocation={{
                address: "2972 Westheimer",
                details: "Rd. Santa Ana, Illinois 85486",
              }}
              endLocation={{
                address: "8502 Preston",
                details: "Rd. Inglewood, Maine 98380",
              }}
            />
            <DeliveryCard
              shipmentId="EV-2017002346"
              type="Food Materials"
              temperature="10C"
              percentage="25%"
              duration="1h30"
              startLocation={{
                address: "2972 Westheimer",
                details: "Rd. Santa Ana, Illinois 85486",
              }}
              endLocation={{
                address: "8502 Preston",
                details: "Rd. Inglewood, Maine 98380",
              }}
            />
          </div>
        </div>
        <div className="w-1/2 border-l">
          <DeliveryMap />
        </div>
      </main>
    </div>
  )
}

