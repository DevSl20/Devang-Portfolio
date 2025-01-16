"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from 'lucide-react'
import { SectionHeader } from "./section-header"
import { motion } from "framer-motion"

export function ProjectsSection() {
  const projects = [
    {
      title: "TaskListic",
      description: "TaskListic - Organize and List all your tasks here itself...!",
      link: "https://tasklistic.pages.dev/",
      tech: ["React", "CSS"],
    },
    {
      title: "FetchFurryTails",
      description: "Displays Dog's images based on Dog's API that shows on selected breed.",
      link: "https://fetchfurrytails.pages.dev/",
      tech: ["JavaScript", "API", "HTML", "CSS"],
    },
    {
      title: "Wakati API",
      description: "An API to get read time data",
      link: "https://18-11-2024wakati.devangsalvi21.workers.dev/?text=",
      tech: ["API", "JavaScript", "Node.js"],
    },
    {
      title: "ReflectifY",
      description: "A WebApp that reverses any input which is entered, best for creating passwords.",
      link: "https://reflectify-9nw.pages.dev/",
      tech: ["JavaScript", "HTML", "CSS"],
    },
  ]

  return (
    <section id="projects" className="py-12">
      <SectionHeader title="Projects" />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="bg-gradient-to-br from-primary/20 to-secondary/20 shadow-lg hover:shadow-xl transition-all duration-300 card-hover">
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  {project.title}
                  <Button variant="ghost" size="sm" asChild className="text-primary hover:text-secondary">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

