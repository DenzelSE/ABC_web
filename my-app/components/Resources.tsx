import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Video, Code } from "lucide-react"

const resources = [
  {
    title: "Web3 Fundamentals",
    description: "A comprehensive guide to the basics of Web3 development.",
    icon: BookOpen,
    link: "#",
  },
  {
    title: "Smart Contract Development",
    description: "Learn how to write and deploy smart contracts on various blockchains.",
    icon: Code,
    link: "#",
  },
  {
    title: "DApp Architecture",
    description: "Understand the architecture of decentralized applications.",
    icon: Video,
    link: "#",
  },
]

export default function Resources() {
  return (
    <div id="resources" className="py-24 bg-gradient-to-b from-orange-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-12">Educational Resources</h2>
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

