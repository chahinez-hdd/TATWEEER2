"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

interface AlertDetailsProps {
  isOpen: boolean
  onClose: () => void
  data?: {
    id: string
    type: string
    message: string
    truck: string
    driver: string
    status: string
    timestamp: string
  }
}

export function AlertDialog({ isOpen, onClose, data }: AlertDetailsProps) {
  const router = useRouter()

  if (!data) return null

  const handleTrackShipment = () => {
    onClose()
    router.push(`/tracking/${data.id}`)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Alert Details</DialogTitle>
          <DialogDescription>
            Detailed information about the alert.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <h4 className="font-medium">Alert ID</h4>
            <p className="text-sm text-muted-foreground">{data.id}</p>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium">Type</h4>
            <p className="text-sm">
              <span
                className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                  data.type === "Urgent"
                    ? "bg-[#DC0000] text-white"
                    : "bg-amber-100 text-amber-800"
                }`}
              >
                {data.type}
              </span>
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium">Message</h4>
            <p className="text-sm text-muted-foreground">{data.message}</p>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium">Truck ID</h4>
            <p className="text-sm text-muted-foreground">{data.truck}</p>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium">Driver</h4>
            <p className="text-sm text-muted-foreground">{data.driver}</p>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium">Status</h4>
            <p className="text-sm text-muted-foreground">{data.status}</p>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium">Timestamp</h4>
            <p className="text-sm text-muted-foreground">{data.timestamp}</p>
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleTrackShipment}>Track Shippement</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

