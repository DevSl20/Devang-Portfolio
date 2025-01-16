"use client"

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useSection } from "@/context/section-context"

interface ExpandingSectionProps {
  title: string
  children: React.ReactNode
  sectionName: 'about' | 'projects' | 'skills'
}

export function ExpandingSection({ title, children, sectionName }: ExpandingSectionProps) {
  const { expandedSection, setExpandedSection } = useSection()
  const [isExpanded, setIsExpanded] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsExpanded(expandedSection === sectionName)
  }, [expandedSection, sectionName])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sectionRef.current && !sectionRef.current.contains(event.target as Node)) {
        setExpandedSection(null)
      }
    }

    if (isExpanded) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isExpanded, setExpandedSection])

  const handleClick = () => {
    if (isExpanded) {
      setExpandedSection(null)
    } else {
      setExpandedSection(sectionName)
    }
  }

  return (
    <motion.div
      ref={sectionRef}
      layout
      layoutId={`expanding-section-${sectionName}`}
      className={`cursor-pointer ${isExpanded ? 'fixed inset-0 z-50 p-4 bg-background/80 backdrop-blur-sm overflow-y-auto' : ''}`}
      onClick={handleClick}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 30,
        duration: 0.5
      }}
      style={{
        willChange: 'transform',
      }}
    >
      <Card className={`h-full overflow-hidden ${isExpanded ? 'max-w-4xl mx-auto' : ''}`}>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <AnimatePresence mode="wait">
            {isExpanded ? (
              <motion.div
                key="expanded"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {children}
              </motion.div>
            ) : (
              <motion.div
                key="collapsed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <p className="text-muted-foreground line-clamp-3">
                  Click to expand and see more details...
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </motion.div>
  )
}

