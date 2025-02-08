import { NextResponse } from 'next/server'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const shipmentId = params.id

    // Mock map data - Replace with your actual map data fetching logic
    const mapData = {
      shipmentId,
      currentLocation: {
        lat: 40.7128,
        lng: -74.0060
      },
      route: [
        { lat: 40.7128, lng: -74.0060, timestamp: "2024-03-22T10:00:00Z" }, // New York
        { lat: 41.8781, lng: -87.6298, timestamp: "2024-03-22T14:00:00Z" }, // Chicago
        { lat: 39.7392, lng: -104.9903, timestamp: "2024-03-22T18:00:00Z" }, // Denver
        { lat: 34.0522, lng: -118.2437, timestamp: "2024-03-22T22:00:00Z" }  // Los Angeles
      ],
      estimatedTimeRemaining: "2 hours",
      distanceRemaining: "150 miles",
      waypoints: [
        {
          location: "Distribution Center A",
          status: "Completed",
          timestamp: "2024-03-22T08:00:00Z"
        },
        {
          location: "Transit Hub B",
          status: "In Progress",
          timestamp: "2024-03-22T16:00:00Z"
        }
      ]
    }

    return NextResponse.json(mapData)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch map data' },
      { status: 500 }
    )
  }
} 