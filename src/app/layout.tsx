import type React from "react"
import "@/styles/globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Sistema para consultórios e clínicas na nuvem | Consultório Grátis</title>
      </head>
      <body className="min-h-screen bg-background">
        {children}
      </body>
    </html>
  )
}

