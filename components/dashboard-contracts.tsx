import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const contracts = [
  {
    truckId: "Shippement id",
    driverName: "Driver name",
    alerts: "0 alerts",
  },
  {
    truckId: "Shippement id",
    driverName: "Driver name",
    alerts: "0 alerts",
  },
  {
    truckId: "Shippement id",
    driverName: "Driver name",
    alerts: "0 alerts",
  },

  {
    truckId: "Shippement id",
    driverName: "Driver name",
    alerts: "2 alerts",
  },

  {
    truckId: "Shippement id",
    driverName: "Driver name",
    alerts: "3 alerts",

  },

]

export function DashboardContracts() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top contracts</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {contracts.map((contract, index) => (
            <div
              key={index}
              className={`flex items-center justify-between ${contract.highlight ? "p-4 bg-red-50 rounded-lg" : ""}`}
            >
              <div>
                <div className="font-medium">{contract.truckId}</div>
                <div className="text-sm text-muted-foreground">{contract.driverName}</div>
              </div>
              <div className="text-sm font-medium">{contract.alerts}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

