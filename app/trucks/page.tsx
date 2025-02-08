"use client"
import { Sidebar } from "@/components/sidebar"
import { TrucksTable } from "@/components/trucks-table"
import { TrucksTabs } from "@/components/trucks-tabs"
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
import { trucks } from "@/components/trucks-table"

interface TruckForm {
  id: string
  driver: string
  status: string
  location: string
  destination: string
  eta: string
  lastUpdate: string
  temperature: string
}

export default function TrucksPage() {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState<TruckForm>({
    id: '',
    driver: '',
    status: '',
    location: '',
    destination: '',
    eta: '',
    lastUpdate: '',
    temperature: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({
      ...prev,
      [id]: value
    }))
  }

  const handleAddTruck = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    
    // Add the new truck to the trucks array
    trucks.push({
      ...formData,
      id: `TRK-${Math.floor(Math.random() * 10000)}`, // Generate a random ID
      temperature: formData.temperature + '°C',
      lastUpdate: new Date().toLocaleString() // Current timestamp
    })

    // Reset form and close dialog
    setFormData({
      id: '',
      driver: '',
      status: '',
      location: '',
      destination: '',
      eta: '',
      lastUpdate: '',
      temperature: ''
    })
    setOpen(false)
  }

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <main className="flex-1 p-6 overflow-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold">Trucks</h1>
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
                  Add Truck
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New Truck</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleAddTruck} className="space-y-4">
                  <div>
                    <Label htmlFor="driver">Driver Name</Label>
                    <Input 
                      id="driver" 
                      placeholder="Enter driver name"
                      value={formData.driver}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="status">Status</Label>
                    <Input 
                      id="status" 
                      placeholder="Enter status"
                      value={formData.status}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="location">Current Location</Label>
                    <Input 
                      id="location" 
                      placeholder="Enter current location"
                      value={formData.location}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="destination">Destination</Label>
                    <Input 
                      id="destination" 
                      placeholder="Enter destination"
                      value={formData.destination}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="eta">ETA</Label>
                    <Input 
                      id="eta" 
                      type="datetime-local"
                      value={formData.eta}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="temperature">Temperature (°C)</Label>
                    <Input 
                      id="temperature" 
                      type="number"
                      placeholder="Enter temperature"
                      value={formData.temperature}
                      onChange={handleInputChange}
                    />
                  </div>
                  <Button type="submit">Add Truck</Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <TrucksTabs />
        <TrucksTable />
      </main>
    </div>
  )
}

