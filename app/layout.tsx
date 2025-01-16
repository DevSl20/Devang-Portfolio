import type { Metadata } from "next"
import { Roboto } from 'next/font/google'
import "./globals.css"

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: "Devang Salvi - Portfolio",
  description: "Personal portfolio website of Devang Salvi",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${roboto.variable}`}>
        {children}
      </body>
    </html>
  )
}

