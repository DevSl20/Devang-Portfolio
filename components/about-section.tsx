"use client"

import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeader } from "./section-header"

export function AboutSection() {
  return (
    <section id="about" className="py-12">
      <SectionHeader title="About Me" />
      <Card className="bg-gradient-to-br from-primary/20 to-secondary/20 shadow-lg">
        <CardContent className="p-6">
          <p className="text-lg leading-relaxed text-foreground">
            Hello Developers, I am Devang Salvi, printing "Hello World" since 2021. A BCA graduate skilled in web-development, programming, attention to detail, and collaborative teamwork. Having a solid foundation in programming and web development. Eager to contribute fresh knowledge, perspective, creativity, and dedication, to build to real-world projects that have a meaningful impact. Seeking entry-level opportunities and a challenging position in an organization to expand and utilize my learning, skills and knowledge and contribute to and grow with a forward-thinking organization.
          </p>
        </CardContent>
      </Card>
    </section>
  )
}

