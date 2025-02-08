import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export function DashboardHeader() {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="relative w-[400px]">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input type="search" placeholder="Search" className="pl-10" />
      </div>
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarImage src="/placeholder.svg" />
          <AvatarFallback>AM</AvatarFallback>
        </Avatar>
        <div className="text-sm">
          <div className="font-medium">Alae meguez</div>
          <Button variant="link" className="h-auto p-0 text-muted-foreground">
            View Profile
          </Button>
        </div>
      </div>
    </div>
  )
}

