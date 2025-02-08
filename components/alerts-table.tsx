"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Eye } from "lucide-react"
import { useState } from "react"
import { AlertDialog } from "./alert-dialog"
import { useRouter } from "next/navigation"

const alerts = [
  {
    id: "ALT-2451",
    type: "Urgent",
    message: "Engine temperature exceeding normal limits",
    truck: "TR-7834",
    driver: "John Martinez",
    timestamp: "2024-03-24 08:45",
    status: "Unresolved",
  },
  {
    id: "ALT-2452",
    type: "Warning",
    message: "Fuel level below 15%",
    truck: "TR-5291",
    driver: "Sarah Wilson",
    timestamp: "2024-03-24 09:30",
    status: "Resolved",
  },
  {
    id: "ALT-2453",
    type: "Urgent",
    message: "Brake system malfunction detected",
    truck: "TR-3456",
    driver: "Michael Chen",
    timestamp: "2024-03-24 10:15",
    status: "In Progress",
  },
  {
    id: "ALT-2454",
    type: "Warning",
    message: "Scheduled maintenance due in 2 days",
    truck: "TR-9012",
    driver: "Emily Rodriguez",
    timestamp: "2024-03-24 11:00",
    status: "Pending",
  },
  {
    id: "ALT-2455",
    type: "Warning",
    message: "Tire pressure low on rear right wheel",
    truck: "TR-6789",
    driver: "David Thompson",
    timestamp: "2024-03-24 11:30",
    status: "Unresolved",
  },
  {
    id: "ALT-2456",
    type: "Urgent",
    message: "GPS signal lost",
    truck: "TR-4521",
    driver: "Lisa Anderson",
    timestamp: "2024-03-24 12:15",
    status: "In Progress",
  },
  {
    id: "ALT-2457",
    type: "Warning",
    message: "Battery voltage dropping",
    truck: "TR-8765",
    driver: "Robert Kim",
    timestamp: "2024-03-24 13:00",
    status: "Unresolved",
  },
  {
    id: "ALT-2458",
    type: "Urgent",
    message: "Route deviation detected",
    truck: "TR-2345",
    driver: "Maria Garcia",
    timestamp: "2024-03-24 13:45",
    status: "Pending",
  }
]

export function AlertsTable() {
  const [selectedAlert, setSelectedAlert] = useState(null)

  return (
    <>
      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Alert ID</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Message</TableHead>
              <TableHead>Truck ID</TableHead>
              <TableHead>Driver</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Timestamp</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {alerts.map((alert) => (
              <TableRow key={alert.id}>
                <TableCell>{alert.id}</TableCell>
                <TableCell>
                  <span
                    className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      alert.type === "Urgent"
                        ? "bg-[#FF0000] text-white font-bold animate-pulse"
                        : "bg-amber-100 text-amber-800"
                    }`}
                  >
                    {alert.type}
                  </span>
                </TableCell>
                <TableCell>{alert.message}</TableCell>
                <TableCell>{alert.truck}</TableCell>
                <TableCell>{alert.driver}</TableCell>
                <TableCell>{alert.status}</TableCell>
                <TableCell>{alert.timestamp}</TableCell>
                <TableCell>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0"
                    onClick={() => setSelectedAlert(alert)}
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <AlertDialog
        isOpen={!!selectedAlert}
        onClose={() => setSelectedAlert(null)}
        data={selectedAlert}
      />
    </>
  )
}

