"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, Globe } from 'lucide-react'

export function LinksSection() {
  const links = [
    { icon: <Github className="h-5 w-5" />, label: "GitHub", href: "https://github.com" },
    { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn", href: "https://linkedin.com" },
    { icon: <Twitter className="h-5 w-5" />, label: "Twitter", href: "https://twitter.com" },
    { icon: <Globe className="h-5 w-5" />, label: "Website", href: "https://example.com" },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card>
        <CardHeader>
          <CardTitle>Links</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-2 gap-4">
            {links.map((link) => (
              <Button
                key={link.label}
                variant="outline"
                className="w-full"
                asChild
              >
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  {link.icon}
                  {link.label}
                </a>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

