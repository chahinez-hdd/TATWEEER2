import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function PackagesTabs() {
  return (
    <Tabs defaultValue="all" className="mb-6">
      <TabsList className="bg-muted/50">
        <TabsTrigger value="all">All</TabsTrigger>
        <TabsTrigger value="in-transit">In transit</TabsTrigger>
        <TabsTrigger value="off-course">Off-course</TabsTrigger>
        <TabsTrigger value="warned">Warned</TabsTrigger>
      </TabsList>
    </Tabs>
  )
}

