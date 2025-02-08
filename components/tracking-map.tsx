"use client"

import { useEffect, useRef } from "react"
import { Loader } from "@googlemaps/js-api-loader"

export function TrackingMap() {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
        version: "weekly",
      })

      const { Map } = await loader.importLibrary("maps")

      const map = new Map(mapRef.current!, {
        center: { lat: 31.1171, lng: -97.7278 }, // Centered on Killeen, TX
        zoom: 13,
        styles: [
          {
            featureType: "all",
            elementType: "geometry",
            stylers: [{ lightness: 20 }],
          },
        ],
      })

      // Add delivery route polyline
      const routeCoordinates = [
        { lat: 31.1171, lng: -97.7278 }, // Start point
        { lat: 31.1071, lng: -97.7178 }, // End point
      ]

      new google.maps.Polyline({
        path: routeCoordinates,
        geodesic: true,
        strokeColor: "#6366F1",
        strokeOpacity: 1.0,
        strokeWeight: 3,
        map: map,
      })

      // Add markers
      new google.maps.Marker({
        position: routeCoordinates[0],
        map: map,
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 8,
          fillColor: "#10B981",
          fillOpacity: 1,
          strokeWeight: 2,
          strokeColor: "#ffffff",
        },
      })

      new google.maps.Marker({
        position: routeCoordinates[1],
        map: map,
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 8,
          fillColor: "#6366F1",
          fillOpacity: 1,
          strokeWeight: 2,
          strokeColor: "#ffffff",
        },
      })

      // Add current location marker
      const currentLocation = {
        lat: 31.1121,
        lng: -97.7228,
      }

      new google.maps.Marker({
        position: currentLocation,
        map: map,
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 12,
          fillColor: "#6366F1",
          fillOpacity: 0.3,
          strokeWeight: 2,
          strokeColor: "#6366F1",
        },
      })
    }

    initMap()
  }, [])

  return <div ref={mapRef} className="w-full h-full" />
}

