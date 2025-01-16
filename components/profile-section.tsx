"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export function ProfileSection() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Card>
        <CardContent className="p-6 space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-lg">
            <img
              src="https://i.ibb.co/GM2GTPM/prof-pic.png"
              alt="Profile photo of Devang Salvi"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="space-y-2 text-center">
            <h2 className="text-2xl font-bold">Devang Salvi</h2>
            <p className="text-muted-foreground">Full Stack Developer</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

