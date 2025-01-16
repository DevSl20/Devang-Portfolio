"use client"

import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeader } from "./section-header"
import { Mail, MapPin, Phone } from 'lucide-react'

export function ContactSection() {
  return (
    <section id="contact" className="py-12">
      <SectionHeader title="Contact Me" />
      <Card className="bg-gradient-to-br from-primary/20 to-secondary/20 shadow-lg hover:shadow-xl transition-all duration-300">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center space-y-2 p-4 bg-background rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <Mail className="w-10 h-10 text-primary" />
              <span className="font-medium">Email</span>
              <a href="mailto:devangsalvi21@gmail.com" className="text-sm text-foreground/80 hover:text-secondary transition-colors">devangsalvi21@gmail.com</a>
            </div>
            <div className="flex flex-col items-center space-y-2 p-4 bg-background rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <Phone className="w-10 h-10 text-primary" />
              <span className="font-medium">Phone</span>
              <a href="tel:+919324463877" className="text-sm text-foreground/80 hover:text-secondary transition-colors">+91 9324463877</a>
            </div>
            <div className="flex flex-col items-center space-y-2 p-4 bg-background rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <MapPin className="w-10 h-10 text-primary" />
              <span className="font-medium">Location</span>
              <a 
                href="https://www.google.com/maps/place/Thane,+Maharashtra,+India" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm text-foreground/80 hover:text-secondary transition-colors text-center"
              >
                Thane, Maharashtra, India
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

