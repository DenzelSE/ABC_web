import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Handshake, Binary, Computer } from "lucide-react"

const resources = [
  {
    title: "Partner With Us",
    description: "Join in building a brighter future for Africa through Blockchain.",
    icon: Handshake,
    link: "#",
  },
  {
    title: "Hire a developer",
    description: "HIre one of our talented developers to develop something great.",
    icon: Computer,
    link: "#",
  },
  {
    title: "Work with A Researcher",
    description: "Request consultation and advise on everything Blockchain including crypto.",
    icon: Binary,
    link: "#",
  },
]

export default function Partner() {
  return (
    <div id="resources" className="py-24 bg-gradient-to-r from-[#D8CFC4] to-[#AFAFAF] opacity-80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-12">Partnership</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource, index) => (
            <Card
              key={index}
              className="bg-white/80 border border-blue-100 hover:border-blue-200 transition-all hover:shadow-lg"
            >
              <CardHeader>
                <resource.icon className="h-8 w-8 text-blue-500" />
                <CardTitle className="text-gray-800">{resource.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">{resource.description}</CardDescription>
                <Button variant="outline" className="text-blue-600 border-blue-300 hover:bg-blue-50" asChild>
                  <a href={resource.link}>Learn More</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

