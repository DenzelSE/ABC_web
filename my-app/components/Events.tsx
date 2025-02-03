import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CalendarDays } from "lucide-react"

const events = [
  {
    title: "Web3 Hackathon",
    date: "July 15-17, 2023",
    description: "Join us for a weekend of building innovative Web3 projects.",
  },
  {
    title: "Blockchain Basics Workshop",
    date: "August 5, 2023",
    description: "Learn the fundamentals of blockchain technology and its applications.",
  },
  {
    title: "DeFi Deep Dive",
    date: "September 10, 2023",
    description: "Explore the world of decentralized finance and its potential.",
  },
]

export default function Events() {
  return (
    <div id="events" className="py-24 bg-gradient-to-b from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold sm:text-4xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-400">
          Upcoming Events
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => (
            <Card
              key={index}
              className="bg-white/70 backdrop-blur-sm border border-blue-100 hover:border-blue-200 transition-colors"
            >
              <CardHeader>
                <CardTitle className="text-gray-700">{event.title}</CardTitle>
                <CardDescription className="flex items-center text-blue-500">
                  <CalendarDays className="inline-block mr-2 h-5 w-5" />
                  {event.date}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <Button className="bg-orange-400 hover:bg-orange-500 text-white">Register</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

