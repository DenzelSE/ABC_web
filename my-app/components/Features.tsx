import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Users, BookOpen } from "lucide-react"

const features = [
  {
    title: "Learn Web3 Development",
    description: "Access curated resources and workshops to master blockchain technologies.",
    icon: Code,
  },
  {
    title: "Join a Thriving Community",
    description: "Connect with like-minded developers and industry experts.",
    icon: Users,
  },
  {
    title: "Stay Updated",
    description: "Get the latest insights on Web3 trends and best practices.",
    icon: BookOpen,
  },
]

export default function Features() {
  return (
    <div className="py-24 bg-gradient-to-r from-[#D8CFC4] to-[#AFAFAF] opacity-80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl bg-clip-text text-transparent bg-[#8B4513]">
            Why Join ABC?
          </h2>
        </div>
        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-[#AFAFAF] backdrop-blur-sm border border-blue-100 hover:border-blue-200 transition-colors"
              >
                <CardHeader>
                  <feature.icon className="h-8 w-8 text-blue-500" />
                  <CardTitle className="text-gray-700">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

