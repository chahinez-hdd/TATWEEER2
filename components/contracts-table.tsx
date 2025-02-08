"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Eye } from "lucide-react"
import { ContractDialog } from "./contract-dialog"

const contracts = [
  {
    trackingId: "TRK-7721",
    truckId: "TR-7834",
    packageId: "PKG-7721",
    amount: "45",
    temperature: "22 C",
    humidity: "45%",
    date: "2024-03-24 10:00",
    status: "Ongoing",
    location: "Los Angeles, CA",
    destination: "San Francisco, CA",
  },
  {
    trackingId: "TRK-7722",
    truckId: "TR-5291",
    packageId: "PKG-7722",
    amount: "156",
    temperature: "18 C",
    humidity: "40%",
    date: "2024-03-24 11:30",
    status: "Pending",
    location: "Seattle, WA",
    destination: "Portland, OR",
  },
  {
    trackingId: "TRK-7723",
    truckId: "TR-3456",
    packageId: "PKG-7723",
    amount: "45",
    temperature: "24 C",
    humidity: "35%",
    date: "2024-03-24 09:15",
    status: "Fulfilled",
    location: "Chicago, IL",
    destination: "Detroit, MI",
  },
  {
    trackingId: "TRK-7724",
    truckId: "TR-9012",
    packageId: "PKG-7724",
    amount: "78",
    temperature: "4 C",
    humidity: "50%",
    date: "2024-03-24 08:45",
    status: "Ongoing",
    location: "Houston, TX",
    destination: "Dallas, TX",
  },
  {
    trackingId: "TRK-7725",
    truckId: "TR-6789",
    packageId: "PKG-7725",
    amount: "92",
    temperature: "21 C",
    humidity: "42%",
    date: "2024-03-24 12:15",
    status: "Pending",
    location: "Miami, FL",
    destination: "Orlando, FL",
  },
  {
    trackingId: "TRK-7726",
    truckId: "TR-4521",
    packageId: "PKG-7726",
    amount: "63",
    temperature: "15 C",
    humidity: "38%",
    date: "2024-03-24 13:30",
    status: "Ongoing",
    location: "Denver, CO",
    destination: "Salt Lake City, UT",
  },
  {
    trackingId: "TRK-7727",
    truckId: "TR-8765",
    packageId: "PKG-7727",
    amount: "105",
    temperature: "23 C",
    humidity: "44%",
    date: "2024-03-24 14:45",
    status: "Fulfilled",
    location: "Phoenix, AZ",
    destination: "Las Vegas, NV",
  },
  {
    trackingId: "TRK-7728",
    truckId: "TR-2345",
    packageId: "PKG-7728",
    amount: "47",
    temperature: "20 C",
    humidity: "41%",
    date: "2024-03-24 15:20",
    status: "Ongoing",
    location: "Atlanta, GA",
    destination: "Nashville, TN",
  }
]

export function ContractsTable() {
  const [selectedContract, setSelectedContract] = useState<(typeof contracts)[0] | null>(null)

  return (
    <>
      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Tracking ID</TableHead>
              <TableHead>Truck ID</TableHead>
              <TableHead>Package ID</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Temperature</TableHead>
              <TableHead>Humidity</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Destination</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {contracts.map((contract, index) => (
              <TableRow key={index}>
                <TableCell>{contract.trackingId}</TableCell>
                <TableCell>{contract.truckId}</TableCell>
                <TableCell>{contract.packageId}</TableCell>
                <TableCell>{contract.amount}</TableCell>
                <TableCell>{contract.temperature}</TableCell>
                <TableCell>{contract.humidity}</TableCell>
                <TableCell>{contract.date}</TableCell>
                <TableCell>
                  <span
                    className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      contract.status === "Ongoing"
                        ? "bg-blue-50 text-blue-700"
                        : contract.status === "Pending"
                          ? "bg-yellow-50 text-yellow-700"
                          : "bg-green-50 text-green-700"
                    }`}
                  >
                    {contract.status}
                  </span>
                </TableCell>
                <TableCell>{contract.location}</TableCell>
                <TableCell>{contract.destination}</TableCell>
                <TableCell>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0"
                    onClick={() => setSelectedContract(contract)}
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="flex items-center justify-between px-4 py-3 border-t">
          <div className="text-sm text-muted-foreground">Showing 1-10 of 32 products</div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </div>
      </div>

      <ContractDialog isOpen={!!selectedContract} onClose={() => setSelectedContract(null)} data={selectedContract} />
    </>
  )
}

