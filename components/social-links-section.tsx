import { Card, CardContent } from "@/components/ui/card"
import { SectionHeader } from "./section-header"
import { Instagram, Facebook, Linkedin, Twitter } from 'lucide-react'

export function SocialLinksSection() {
  const socialLinks = [
    { icon: Instagram, name: "Instagram", link: "https://www.instagram.com/devang.py/" },
    { icon: Facebook, name: "Facebook", link: "https://www.facebook.com/devang.salvi.79" },
    { icon: Linkedin, name: "LinkedIn", link: "https://www.linkedin.com/in/devangsalvi2004" },
    { icon: Twitter, name: "X (Twitter)", link: "https://x.com/DevangSalvi20" },
  ]

  return (
    <section id="social-links" className="py-12">
      <SectionHeader title="Connect With Me" />
      <Card className="bg-gradient-to-br from-primary/20 to-secondary/20 dark:from-primary/30 dark:to-secondary/30 shadow-lg">
        <CardContent className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-4 rounded-lg bg-background dark:bg-background shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <social.icon className="w-8 h-8 text-primary dark:text-primary group-hover:text-secondary dark:group-hover:text-secondary transition-colors duration-300" />
                <span className="mt-2 text-sm font-medium text-foreground/80 dark:text-foreground/80 group-hover:text-primary dark:group-hover:text-primary transition-colors duration-300">{social.name}</span>
              </a>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

