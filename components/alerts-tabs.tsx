import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function AlertsTabs() {
  return (
    <Tabs defaultValue="new" className="mb-6">
      <TabsList className="bg-muted/50">
        <TabsTrigger value="new">New</TabsTrigger>
        <TabsTrigger value="urgent">Urgent</TabsTrigger>
        <TabsTrigger value="warning">Warning</TabsTrigger>
      </TabsList>
    </Tabs>
  )
}

