'use client'
import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { DeliveryMap } from "@/components/delivery-map"
import { DeliveryCard } from "@/components/delivery-card"
import { Search } from "lucide-react"

const deliveries = [
  {
    shipmentId: "SHP001",
    customerName: "John Doe",
    origin: "New York, NY",
    destination: "Los Angeles, CA",
    status: "In Transit",
    estimatedDelivery: "2024-03-25",
    trackingNumber: "TRK123456789"
  },
  {
    shipmentId: "SHP002",
    customerName: "Jane Smith",
    origin: "Chicago, IL",
    destination: "Miami, FL",
    status: "Out for Delivery",
    estimatedDelivery: "2024-03-23",
    trackingNumber: "TRK987654321"
  }
]

export default function Page() {
  const [selectedDelivery, setSelectedDelivery] = useState(deliveries[0])
  const [mapData, setMapData] = useState(null)

  const handleViewMore = async (delivery) => {
    setSelectedDelivery(delivery)
    try {
      const response = await fetch(`/api/delivery-map/${delivery.shipmentId}`)
      const data = await response.json()
      setMapData(data)
    } catch (error) {
      console.error('Error fetching map data:', error)
    }
  }

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <main className="flex-1 flex overflow-hidden">
        <div className="flex-1 overflow-auto p-6 space-y-4">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-semibold">Ongoing Delivery</h1>
          </div>
          <div className="relative">

            <div className="absolute left-3 top-2.5 text-muted-foreground">
              
            </div>
          </div>
          <div className="space-y-4">
            {deliveries.map((delivery) => (
              <DeliveryCard
                key={delivery.shipmentId}
                {...delivery}
                onViewMore={() => handleViewMore(delivery)}
              />
            ))}
          </div>
        </div>
        <div className="w-1/2 border-l">
          {selectedDelivery && mapData && (
            <DeliveryMap data={mapData} delivery={selectedDelivery} />
          )}
        </div>
        
      </main>
    </div>
  )
}
