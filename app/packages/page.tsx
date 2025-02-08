"use client"
import { Sidebar } from "@/components/sidebar"
import { PackagesTable } from "@/components/packages-table"
import { PackagesTabs } from "@/components/packages-tabs"
import { Button } from "@/components/ui/button"
import { Filter, Download, Plus } from "lucide-react"
import { useState, FormEvent } from "react"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { packages } from "@/components/packages-table"

interface PackageForm {
  id: string
  weight: string
  stock: string
  productType: string
  temperature: string
  humidity: string
  truckId: string
}

export default function PackagesPage() {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState<PackageForm>({
    id: '',
    weight: '',
    stock: '',
    productType: '',
    temperature: '',
    humidity: '',
    truckId: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({
      ...prev,
      [id]: value
    }))
  }

  const handleAddPackage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    
    // Add the new package to the packages array
    packages.push({
      ...formData,
      id: `PKG-${Math.floor(Math.random() * 10000)}`, // Generate a random ID
      weight: formData.weight + 'kg',
      stock: formData.stock + ' units'
    })

    // Reset form and close dialog
    setFormData({
      id: '',
      weight: '',
      stock: '',
      productType: '',
      temperature: '',
      humidity: '',
      truckId: ''
    })
    setOpen(false)
  }

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <main className="flex-1 p-6 overflow-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold">Packages</h1>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Package
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New Package</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleAddPackage} className="space-y-4">
                  <div>
                    <Label htmlFor="weight">Weight (kg)</Label>
                    <Input 
                      id="weight" 
                      placeholder="Enter weight" 
                      value={formData.weight}
                      onChange={handleInputChange}
                      type="number"
                    />
                  </div>
                  <div>
                    <Label htmlFor="stock">Stock (units)</Label>
                    <Input 
                      id="stock" 
                      placeholder="Enter stock quantity"
                      value={formData.stock}
                      onChange={handleInputChange}
                      type="number"
                    />
                  </div>
                  <div>
                    <Label htmlFor="productType">Product Type</Label>
                    <Input 
                      id="productType" 
                      placeholder="Enter product type"
                      value={formData.productType}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="temperature">Temperature (°C)</Label>
                    <Input 
                      id="temperature" 
                      placeholder="Enter temperature"
                      value={formData.temperature}
                      onChange={handleInputChange}
                      type="number"
                    />
                  </div>
                  <div>
                    <Label htmlFor="humidity">Humidity (%)</Label>
                    <Input 
                      id="humidity" 
                      placeholder="Enter humidity"
                      value={formData.humidity}
                      onChange={handleInputChange}
                      type="number"
                    />
                  </div>
                  <div>
                    <Label htmlFor="truckId">Truck ID</Label>
                    <Input 
                      id="truckId" 
                      placeholder="Enter truck ID"
                      value={formData.truckId}
                      onChange={handleInputChange}
                    />
                  </div>
                  <Button type="submit">Add Package</Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <PackagesTabs />
        <PackagesTable />
      </main>
    </div>
  )
}

