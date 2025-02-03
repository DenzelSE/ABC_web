import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "AfriCrypt",
    description: "A decentralized cryptocurrency exchange for African markets.",
    image: "/project-1.jpg",
    github: "https://github.com/africasblockchainclub/africrypt",
    live: "https://africrypt.io",
  },
  {
    title: "BlockVote",
    description: "Secure and transparent voting system using blockchain technology.",
    image: "/project-2.jpg",
    github: "https://github.com/africasblockchainclub/blockvote",
    live: "https://blockvote.africa",
  },
  {
    title: "ChainEd",
    description: "Decentralized education platform for blockchain and Web3 courses.",
    image: "/project-3.jpg",
    github: "https://github.com/africasblockchainclub/chained",
    live: "https://chained.education",
  },
]

export default function Projects() {
  return (
    <div id="projects" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-12">Our Projects</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">{project.description}</CardDescription>
                <div className="flex space-x-4">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> GitHub
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

