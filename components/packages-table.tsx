"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Eye } from "lucide-react"
import { PackageIcon } from "./package-icon"
import { PackageDialog } from "./package-dialog"

// Move packages array outside and export it
export let packages = [
  {
    id: "PKG-7721",
    weight: "450kg",
    stock: "240 units",
    productType: "Frozen Seafood",
    temperature: "−18°C",
    humidity: "85%",
    truckId: "TR-7834",
  },
  {
    id: "PKG-7722",
    weight: "320kg",
    stock: "156 units",
    productType: "Dairy Products",
    temperature: "4°C",
    humidity: "75%",
    truckId: "TR-5291",
  },
  {
    id: "PKG-7723",
    weight: "580kg",
    stock: "450 units",
    productType: "Fresh Produce",
    temperature: "2°C",
    humidity: "90%",
    truckId: "TR-3456",
  },
  {
    id: "PKG-7724",
    weight: "420kg",
    stock: "180 units",
    productType: "Vaccines",
    temperature: "−70°C",
    humidity: "65%",
    truckId: "TR-9012",
  },
  {
    id: "PKG-7725",
    weight: "390kg",
    stock: "220 units",
    productType: "Ice Cream",
    temperature: "−25°C",
    humidity: "80%",
    truckId: "TR-6789",
  },
  {
    id: "PKG-7726",
    weight: "280kg",
    stock: "95 units",
    productType: "Fresh Fish",
    temperature: "0°C",
    humidity: "95%",
    truckId: "TR-4521",
  },
  {
    id: "PKG-7727",
    weight: "340kg",
    stock: "175 units",
    productType: "Frozen Meat",
    temperature: "−20°C",
    humidity: "82%",
    truckId: "TR-8765",
  },
  {
    id: "PKG-7728",
    weight: "295kg",
    stock: "130 units",
    productType: "Medical Samples",
    temperature: "−80°C",
    humidity: "70%",
    truckId: "TR-2345",
  }
]

export function PackagesTable() {
  const [selectedPackage, setSelectedPackage] = useState<(typeof packages)[0] | null>(null)

  return (
    <>
      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Package ID</TableHead>
              <TableHead>Weight</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead>Product type</TableHead>
              <TableHead>Temperature</TableHead>
              <TableHead>Humidity</TableHead>
              <TableHead>Truck ID</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {packages.map((pkg, index) => (
              <TableRow key={index}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <PackageIcon />
                    {pkg.id}
                  </div>
                </TableCell>
                <TableCell>{pkg.weight}</TableCell>
                <TableCell>{pkg.stock}</TableCell>
                <TableCell>{pkg.productType}</TableCell>
                <TableCell>{pkg.temperature}</TableCell>
                <TableCell>{pkg.humidity}</TableCell>
                <TableCell>{pkg.truckId}</TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={() => setSelectedPackage(pkg)}>
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

      <PackageDialog isOpen={!!selectedPackage} onClose={() => setSelectedPackage(null)} data={selectedPackage} />
    </>
  )
}

