"use client"
import React from "react";
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Thermometer, Clock, MapPin, Copy } from "lucide-react"
import { TrackingMap } from "@/components/tracking-map"

export default function TrackingPage() {
  const router = useRouter()

  return (
    <div className="flex h-screen bg-background">
      <div className="flex-1 p-6 grid grid-cols-2 gap-6">
        <div>
        <div>
          <h1 className="text-2xl font-semibold mb-6">Ongoing Delivery</h1>


          <Card className="p-6">
            <div className="space-y-6">
              <div>
                <div className="text-sm text-muted-foreground">Shipment ID</div>
                <div className="flex items-center gap-2">
                  <div className="font-semibold">EV-2017002346</div>
                  <button className="text-primary hover:text-primary/80">
                    <Copy className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex items-center gap-2 text-red-500">
                  <Thermometer className="h-4 w-4" />
                  10C
                </div>
                <div className="flex items-center gap-2 text-green-500">
                  <div className="h-4 w-4 rounded-full bg-current" />
                  25%
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  1h30
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-emerald-500" />
                  </div>
                  <div>
                    <div className="font-medium">2972 Westheimer</div>
                    <div className="text-sm text-muted-foreground">Rd. Santa Ana, Illinois 85486</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">8502 Preston</div>
                    <div className="text-sm text-muted-foreground">Rd. Inglewood, Maine 98380</div>
                  </div>
                </div>
              </div>

             

              <div>
                <div className="text-sm text-muted-foreground mb-3">Product ID</div>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 bg-orange-50 rounded-lg flex items-center justify-center">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-orange-500"
                    >
                      <path
                        d="M21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8Z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path d="M3 9H21" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <div className="font-medium">TUQY7681924</div>
                      <button className="text-primary hover:text-primary/80">
                        <Copy className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="text-sm text-muted-foreground">Produit alimentaire</div>
                    <div className="text-sm text-muted-foreground">3,176 kg</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div className="mt-4">
        <h2 className="text-sm text-gray-600 mb-2">Suggestions</h2>
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 bg-blue-200">
          <p className="text-sm text-gray-800">
            Route optimization available: Consider alternate path via Highway 190 to avoid construction delays.
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <Button className="w-full bg-green-500 text-white mt-4" variant="default">
                  Take Action
        </Button>
      </div>
      </div>





        <div>
          <h1 className="text-2xl font-semibold mb-6">Live Tracking</h1>

          <div className="h-[calc(100vh-140px)] rounded-lg overflow-hidden border">
            <TrackingMap />
          </div>
        </div>
      </div>

      <Button
        variant="default"
        size="lg"
        className="fixed bottom-6 right-6"
        onClick={() => router.push("/risk-alerts")}
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Back
      </Button>
    </div>
  )
}

