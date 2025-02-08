"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

interface ContractDetailsProps {
  isOpen: boolean
  onClose: () => void
  data?: {
    trackingId: string
    truckId: string
    packageId: string
    amount: string
    temperature: string
    humidity: string
    date: string
    status: string
    location: string
    destination: string
  }
}

export function ContractDialog({ isOpen, onClose, data }: ContractDetailsProps) {
  if (!data) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Contract Details</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="trackingId" className="text-right">
              Tracking ID
            </Label>
            <Input id="trackingId" value={data.trackingId} className="col-span-3" readOnly />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="truckId" className="text-right">
              Truck ID
            </Label>
            <Input id="truckId" value={data.truckId} className="col-span-3" readOnly />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="packageId" className="text-right">
              Package ID
            </Label>
            <Input id="packageId" value={data.packageId} className="col-span-3" readOnly />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="amount" className="text-right">
              Amount
            </Label>
            <Input id="amount" value={data.amount} className="col-span-3" readOnly />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="temperature" className="text-right">
              Temperature
            </Label>
            <Input id="temperature" value={data.temperature} className="col-span-3" readOnly />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="humidity" className="text-right">
              Humidity
            </Label>
            <Input id="humidity" value={data.humidity} className="col-span-3" readOnly />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="date" className="text-right">
              Date
            </Label>
            <Input id="date" value={data.date} className="col-span-3" readOnly />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="status" className="text-right">
              Status
            </Label>
            <div className="col-span-3">
              <span
                className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                  data.status === "Ongoing"
                    ? "bg-blue-50 text-blue-700"
                    : data.status === "Pending"
                      ? "bg-yellow-50 text-yellow-700"
                      : "bg-green-50 text-green-700"
                }`}
              >
                {data.status}
              </span>
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="location" className="text-right">
              Location
            </Label>
            <Input id="location" value={data.location} className="col-span-3" readOnly />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="destination" className="text-right">
              Destination
            </Label>
            <Input id="destination" value={data.destination} className="col-span-3" readOnly />
          </div>
        </div>
        <Button className="w-full">Track Contract</Button>
      </DialogContent>
    </Dialog>
  )
}

