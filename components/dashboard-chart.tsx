"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  { month: "Jan", alerts: 18 },
  { month: "Feb", alerts: 15 },
  { month: "Mar", alerts: 6 },
  { month: "Apr", alerts: 12 },
  { month: "May", alerts: 13 },
  { month: "Jun", alerts: 18 },
  { month: "Jul", alerts: 14 },
  { month: "Aug", alerts: 4 },
  { month: "Sep", alerts: 13 },
  { month: "Oct", alerts: 4 },
  { month: "Nov", alerts: 18 },
  { month: "Dec", alerts: 17 },
]

export function DashboardChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={data}>
            <XAxis dataKey="month" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}`}
            />
            <Bar dataKey="alerts" fill="currentColor" radius={[4, 4, 0, 0]} className="fill-primary" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

