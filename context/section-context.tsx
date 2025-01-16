"use client"

import { createContext, useContext, useState, ReactNode } from 'react'

type Section = 'about' | 'projects' | 'skills' | null

interface SectionContextType {
  expandedSection: Section
  setExpandedSection: (section: Section) => void
}

const SectionContext = createContext<SectionContextType | undefined>(undefined)

export function SectionProvider({ children }: { children: ReactNode }) {
  const [expandedSection, setExpandedSection] = useState<Section>(null)

  return (
    <SectionContext.Provider value={{ expandedSection, setExpandedSection }}>
      {children}
    </SectionContext.Provider>
  )
}

export function useSection() {
  const context = useContext(SectionContext)
  if (context === undefined) {
    throw new Error('useSection must be used within a SectionProvider')
  }
  return context
}

