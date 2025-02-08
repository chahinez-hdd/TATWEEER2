import { Package, MapPin, AlertTriangle, Truck, FileText, User, Settings, LayoutDashboard } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

// Helper function to format the address
function formatAddress(location: string) {
  const [city, state] = location.split(", ")
  return `${city} ${state}`
}

// Simulated data
const tracking_orders = [
  {
    packageId: "PKG-1234",
    truckId: "TR-7834",
    location: "Los Angeles, CA",
    destination: "San Francisco, CA",
    packageTemp: 0,
    truckTemp: 10,
    lastUpdate: "1h30",
  },
  {
    packageId: "PKG-5678",
    truckId: "TR-5291",
    location: "Seattle, WA",
    destination: "Portland, OR",
    packageTemp: -1,
    truckTemp: 0,
    lastUpdate: "2h15",
  },
  {
    packageId: "PKG-9012",
    truckId: "TR-3456",
    location: "Chicago, IL",
    destination: "Detroit, MI",
    packageTemp: -3,
    truckTemp: -4,
    lastUpdate: "45m",
  },
  {
    packageId: "PKG-3456",
    truckId: "TR-9012",
    location: "Houston, TX",
    destination: "Dallas, TX",
    packageTemp: 4,
    truckTemp: 0,
    lastUpdate: "3h20",
  },
  {
    packageId: "PKG-7890",
    truckId: "TR-6789",
    location: "Miami, FL",
    destination: "Orlando, FL",
    packageTemp: 9,
    truckTemp: 12,
    lastUpdate: "1h45",
  },
]

interface Location {
  address: string
  details: string
}

interface DeliveryCardProps {
  shipmentId: string
  type: string
  temperature: string
  percentage: string
  duration: string
  startLocation: Location
  endLocation: Location
}

export function DeliveryCard({
  shipmentId,
  type,
  temperature,
  percentage,
  duration,
  startLocation,
  endLocation,
}: DeliveryCardProps) {
  return (
    <main className="flex-1 p-6 overflow-auto">
    <div className="max-w-4xl mx-auto">
      <Input type="search" placeholder="Search..." className="mb-6 max-w-md" />

      <div className="grid gap-6">
        {tracking_orders.map((order) => (
          <Card key={order.packageId} className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-500">Shipment ID</div>
                    <div className="text-lg font-semibold">{order.packageId}</div>
                    <div className="flex items-center gap-2">
                      <div className="text-sm text-gray-600">Food Materials</div>
                      <span className="text-sm text-gray-400">•</span>
                      <div className="text-sm text-gray-600">Truck: {order.truckId}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <div className={`${
                        order.packageTemp + 3 < order.truckTemp  ? 'text-red-600' :  order.packageTemp + 3 > order.truckTemp ?'text-red-600'  : 
                        'text-green-600' 
                      }`}>
                        <span className="text-lg">{order.packageTemp}°C</span>
                      </div>
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span className= 
                        'text-blue-600' 
                      >{order.truckTemp}°C</span>
                      <span className="text-gray-500">{order.lastUpdate}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2" />
                      <div>
                        <div className="font-medium">{order.location}</div>
                        <div className="text-sm text-gray-500">{formatAddress(order.location)}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gray-300 rounded-full mt-2" />
                      <div>
                        <div className="font-medium">{order.destination}</div>
                        <div className="text-sm text-gray-500">{formatAddress(order.destination)}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <img
                  src="img/image19.png"
                  alt="Delivery truck"
                  className="w-32 h-auto"
                />
              </div>

              <Button className="w-full mt-4" variant="default">
                View more
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </main>
  )
}

