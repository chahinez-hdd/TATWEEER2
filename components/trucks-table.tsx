"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useRouter } from "next/navigation"

export let trucks = [
  {
    id: "TR-7834",
    driver: "John Martinez",
    status: "In Transit",
    location: "Los Angeles, CA",
    destination: "San Francisco, CA",
    eta: "2024-03-25 14:30",
    lastUpdate: "2024-03-24 09:15",
    temperature: 0,
  },
  {
    id: "TR-5291",
    driver: "Sarah Wilson",
    status: "Pending",
    location: "Seattle, WA",
    destination: "Portland, OR",
    eta: "2024-03-24 18:45",
    lastUpdate: "2024-03-24 10:30",
    temperature: -2,
  },
  {
    id: "TR-3456",
    driver: "Michael Chen",
    status: "Off-course",
    location: "Chicago, IL",
    destination: "Detroit, MI",
    eta: "2024-03-24 12:00",
    lastUpdate: "2024-03-24 11:45",
    temperature: 11,
  },
  {
    id: "TR-9012",
    driver: "Mahmoud Rayan",
    status: "In Transit",
    location: "Houston, TX",
    destination: "Dallas, TX",
    eta: "2024-03-25 09:15",
    lastUpdate: "2024-03-24 08:20",
    temperature: 20,
  },
  {
    id: "TR-6789",
    driver: "David Thompson",
    status: "Pending",
    location: "Miami, FL",
    destination: "Orlando, FL",
    eta: "2024-03-24 16:30",
    lastUpdate: "2024-03-24 07:45",
    temperature: 0,
  },
  {
    id: "TR-4521",
    driver: "Lisa Anderson",
    status: "Off-course",
    location: "Denver, CO",
    destination: "Salt Lake City, UT",
    eta: "2024-03-25 11:20",
    lastUpdate: "2024-03-24 12:30",
    temperature: -1,
  },
  {
    id: "TR-8765",
    driver: "Robert Kim",
    status: "In Transit",
    location: "Phoenix, AZ",
    destination: "Las Vegas, NV",
    eta: "2024-03-24 20:15",
    lastUpdate: "2024-03-24 13:45",
    temperature: 2,
  },
  {
    id: "TR-2345",
    driver: "Maria Garcia",
    status: "Pending",
    location: "Atlanta, GA",
    destination: "Nashville, TN",
    eta: "2024-03-25 08:45",
    lastUpdate: "2024-03-24 14:20",
    temperature: 4,
  },
  {
    id: "TR-2347",
    driver: "Maria Garcia",
    status: "Pending",
    location: "Atlanta, GA",
    destination: "Nashville, TN",
    eta: "2024-03-25 08:45",
    lastUpdate: "2024-03-24 14:20",
    temperature: 18,
  }
]

export function TrucksTable() {
  const router = useRouter()

  return (
    <div className="rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Truck ID</TableHead>
            <TableHead>Driver</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Current Location</TableHead>
            <TableHead>Destination</TableHead>
            <TableHead>Temperature</TableHead>
            <TableHead>ETA</TableHead>
            <TableHead>Last Update</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {trucks.map((truck) => (
            <TableRow 
              key={truck.id}
              onClick={() => router.push(`/tracking/${truck.id}`)}
              className="cursor-pointer hover:bg-muted"
            >
              <TableCell className="font-medium">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-16 bg-muted rounded flex items-center justify-center">
                    <img
                      src="/img/image19.png"
                      alt="Truck"
                      className="h-8 w-12 object-contain"
                    />
                  </div>
                  {truck.id}
                </div>
              </TableCell>
              <TableCell>{truck.driver}</TableCell>
              <TableCell>
                <span
                  className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                    truck.status === "In Transit"
                      ? "bg-purple-100 text-purple-800"
                      : truck.status === "Off-course"
                      ? "bg-white border border-gray-300 text-gray-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {truck.status}
                </span>
              </TableCell>
              <TableCell>{truck.location}</TableCell>
              <TableCell>{truck.destination}</TableCell>
              <TableCell>
                <span className={`${
                  truck.temperature >= 10 ? 'text-red-600' : 
         'text-green-600' 

                }`}>
                  {truck.temperature}°F
                </span>
              </TableCell>
              <TableCell>{truck.eta}</TableCell>
              <TableCell>{truck.lastUpdate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex items-center justify-between px-4 py-3 border-t">
        <div className="text-sm text-muted-foreground">Showing 1-10 of 32 products</div>
        <div className="text-sm text-muted-foreground">10 results</div>
      </div>
    </div>
  )
}

