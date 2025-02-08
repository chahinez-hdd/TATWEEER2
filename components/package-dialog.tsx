"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { PackageIcon } from "./package-icon"

interface PackageDetailsProps {
  isOpen: boolean
  onClose: () => void
  data?: {
    id: string
    weight: string
    stock: string
    productType: string
    temperature: string
    humidity: string
    truckId: string
  }
}

export function PackageDialog({ isOpen, onClose, data }: PackageDetailsProps) {
  if (!data) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Package Details</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex justify-center mb-4">
            <PackageIcon />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="packageId" className="text-right">
              Package ID
            </Label>
            <Input id="packageId" value={data.id} className="col-span-3" readOnly />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="weight" className="text-right">
              Weight
            </Label>
            <Input id="weight" value={data.weight} className="col-span-3" readOnly />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="stock" className="text-right">
              Stock
            </Label>
            <Input id="stock" value={data.stock} className="col-span-3" readOnly />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="productType" className="text-right">
              Product Type
            </Label>
            <Input id="productType" value={data.productType} className="col-span-3" readOnly />
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
            <Label htmlFor="truckId" className="text-right">
              Truck ID
            </Label>
            <Input id="truckId" value={data.truckId} className="col-span-3" readOnly />
          </div>
        </div>
        <Button className="w-full">Track Package</Button>
      </DialogContent>
    </Dialog>
  )
}

