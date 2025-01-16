"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useSection } from "@/context/section-context"

export function PortfolioMain() {
  const { activeSection } = useSection()

  const content = {
    main: {
      title: "Welcome to My Portfolio",
      content: (
        <div className="space-y-4">
          <p className="text-center text-muted-foreground">
            Hi, I'm Devang Salvi, a full-stack developer specializing in MERN stack development. 
            I create responsive, user-friendly web applications with a focus on clean, efficient code.
          </p>
          <p className="text-center text-muted-foreground">
            Explore my projects, skills, and experience using the sections on either side of this main area.
          </p>
        </div>
      ),
    },
    about: {
      title: "About Me",
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Full-stack developer with expertise in MERN stack. Certified web developer with 6-8 successful
            projects completed. Passionate about creating efficient and user-friendly applications.
          </p>
          <h3 className="text-xl font-semibold mt-4">Experience</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Web Development Certification - Comprehensive course completion</li>
            <li>Freelance Developer - Worked on various client projects</li>
            <li>Open Source Contributor - Active participation in community projects</li>
          </ul>
        </div>
      ),
    },
    projects: {
      title: "My Projects",
      content: (
        <div className="space-y-6">
          {[
            {
              title: "E-commerce Platform",
              description: "A full-stack e-commerce solution with user authentication, product management, and payment integration.",
              tech: ["React", "Node.js", "MongoDB", "Express"],
            },
            {
              title: "Task Management App",
              description: "A collaborative task management application with real-time updates and team features.",
              tech: ["Next.js", "TypeScript", "MongoDB", "Socket.io"],
            },
            {
              title: "Weather Dashboard",
              description: "A weather application that provides real-time weather data and forecasts.",
              tech: ["React", "OpenWeather API", "Tailwind CSS"],
            },
          ].map((project) => (
            <Card key={project.title}>
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ),
    },
    skills: {
      title: "My Skills",
      content: (
        <div className="space-y-6">
          {[
            { category: "Frontend", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"] },
            { category: "Backend", skills: ["Node.js", "Express", "MongoDB", "REST APIs", "GraphQL"] },
            { category: "Tools & Others", skills: ["Git", "GitHub", "VS Code", "Postman", "Docker", "AWS"] },
          ].map((category) => (
            <div key={category.category}>
              <h3 className="text-lg font-semibold mb-2">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="text-sm bg-primary/10 text-primary px-2 py-1 rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      ),
    },
  }

  const currentContent = content[activeSection]

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeSection}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="h-full"
      >
        <Card className="h-full">
          <CardHeader>
            <CardTitle className="text-2xl text-center">{currentContent.title}</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            {currentContent.content}
          </CardContent>
        </Card>
      </motion.div>
    </AnimatePresence>
  )
}

