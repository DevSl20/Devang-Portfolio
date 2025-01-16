"use client"

import React from 'react'
import { NavBar } from "@/components/nav-bar"
import { TitleSection } from "@/components/title-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { SocialLinksSection } from "@/components/social-links-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 -z-10 h-screen w-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(var(--primary-rgb),0.3),rgba(255,255,255,0))]" />
      <NavBar />
      <main className="container px-4 pt-20 pb-16 mx-auto space-y-32">
        <TitleSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <SocialLinksSection />
      </main>
    </div>
  )
}

