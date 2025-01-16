"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { FaReact, FaHtml5, FaCss3, FaJs, FaPython, FaNode } from 'react-icons/fa'
import { SiTypescript, SiNextdotjs } from 'react-icons/si'

const programmingLanguages = ["JavaScript", "Python", "React", "Node.js", "HTML", "CSS"]
const icons = [FaReact, FaHtml5, FaCss3, FaJs, FaPython, FaNode, SiTypescript, SiNextdotjs]

export function TitleSection() {
  const [currentLanguage, setCurrentLanguage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLanguage((prev) => (prev + 1) % programmingLanguages.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="text-center py-20 relative mt-16 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 animate-gradient-x"></div>
      </div>
      {[...Array(20)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute text-primary/20"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 20 + 10}px`
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, Math.random() * 20 - 10, 0],
            rotate: [0, 360, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          {React.createElement(icons[index % icons.length])}
        </motion.div>
      ))}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="space-y-4"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary animate-gradient-x">
            Hello Developers,
          </span>
          <br />
          <span className="text-foreground">I am Devang Salvi</span>
        </h1>
        <motion.p 
          className="text-xl md:text-2xl text-muted-foreground font-mono"
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        >
          Printing "Hello World" since 2021 in{" "}
          <span className="text-secondary font-bold">
            {programmingLanguages[currentLanguage]}
          </span>
        </motion.p>
        <div className="flex justify-center items-center mt-4">
          <div className="w-24 h-24 relative">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/github_giphy-QbuxpR3mq7Xy0zZVNBDKc5ghejnteJ.gif"
              alt="GitHub Octocat"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}

