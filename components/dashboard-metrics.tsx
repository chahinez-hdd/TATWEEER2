import { Card, CardContent } from "@/components/ui/card"
import { DollarSign, Activity, ShieldCheck, Bell } from "lucide-react"

const metrics = [
  {
    title: "Total shipments",
    value: "$5,231.89",
    change: "+20.1% from last month",
    icon: DollarSign,
    iconColor: "text-green-500",
  },
  {
    title: "Current shipments",
    value: "+573",
    change: "+201 since last hour",
    icon: Activity,
    iconColor: "text-blue-500",
  },
  {
    title: "Total safe shipments",
    value: "+2350",
    change: "+180.1% from last month",
    icon: ShieldCheck,
    iconColor: "text-purple-500",
  },
  {
    title: "Total alerts",
    value: "+12,234",
    change: "+19% from last month",
    icon: Bell,
    iconColor: "text-red-500",
  },
]

export function DashboardMetrics() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric, index) => (
        <Card key={index}>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <metric.icon className={`h-5 w-5 ${metric.iconColor}`} />
              <span className="text-xs font-medium text-muted-foreground">{metric.change}</span>
            </div>
            <div className="mt-3">
              <div className="text-2xl font-bold">{metric.value}</div>
              <div className="text-sm text-muted-foreground">{metric.title}</div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

