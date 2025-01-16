"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SectionHeader } from "./section-header"
import { FaHtml5, FaCss3Alt, FaJs, FaSass, FaReact, FaPython, FaNpm, FaGithub, FaGit } from 'react-icons/fa'
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si'
import { TbApi } from 'react-icons/tb'
import { VscCode } from 'react-icons/vsc'
import { motion } from "framer-motion"

export function SkillsSection() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "HTML/CSS", icon: FaHtml5, link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
        { name: "JavaScript", icon: FaJs, link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
        { name: "SASS", icon: FaSass, link: "https://sass-lang.com/" },
        { name: "Tailwind", icon: SiTailwindcss, link: "https://tailwindcss.com/" },
        { name: "React", icon: FaReact, link: "https://react.dev/" },
        { name: "Next.js", icon: SiNextdotjs, link: "https://nextjs.org/" },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Python", icon: FaPython, link: "https://www.python.org/" },
        { name: "APIs", icon: TbApi, link: "https://developer.mozilla.org/en-US/docs/Web/API" },
      ],
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "npm", icon: FaNpm, link: "https://www.npmjs.com/" },
        { name: "VS Code", icon: VscCode, link: "https://code.visualstudio.com/" },
        { name: "GitHub", icon: FaGithub, link: "https://github.com/" },
        { name: "Git", icon: FaGit, link: "https://git-scm.com/" },
      ],
    },
  ]

  return (
    <section id="skills" className="py-12">
      <SectionHeader title="Skills" />
      <div className="grid gap-6 md:grid-cols-3">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="bg-gradient-to-br from-primary/20 to-secondary/20 shadow-lg hover:shadow-xl transition-all duration-300 card-hover">
              <CardHeader className="text-center">
                <CardTitle className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap justify-center gap-3">
                  {category.skills.map((skill) => (
                    <a
                      key={skill.name}
                      href={skill.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col items-center"
                    >
                      <Badge 
                        variant="outline" 
                        className="text-sm py-1 px-2 bg-background shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex items-center space-x-1"
                      >
                        <skill.icon className="w-4 h-4 text-primary group-hover:text-secondary transition-colors" />
                        <span>{skill.name}</span>
                      </Badge>
                    </a>
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

