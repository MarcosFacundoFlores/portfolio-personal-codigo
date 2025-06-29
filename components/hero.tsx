"use client"

import { Button } from "@/components/ui/button"
import { ArrowUpCircle, Download, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section id="home" className="py-20 md:py-32 flex flex-col items-center justify-center min-h-[90vh]">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Hola, soy <span className="gradient-text">Marcos Flores</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-xl text-muted-foreground md:text-2xl">
              <span className="js-only">
                <span>Téc. Universitario en Programación</span>
              </span>
              <noscript>
                <span>Desarrollador Junior | Full Stack Developer | Proficiencia en Javascript | Conocimientos DevOps</span>
              </noscript>
            </p>
          </div>
          <div className="max-w-[700px] text-muted-foreground">
            <p className="text-lg">Desarrollo de sistemas escalabales, eficientes y seguros</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button asChild size="lg" className="rounded-full">
              <Link href="#contact">Contacto</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <a href="https://limewire.com/d/FzTbG#RTJBf4FzP8" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4" /> Descargar CV
              </a>
            </Button>
          </div>
          <div className="flex gap-4 mt-6">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/MarcosFacundoFlores" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://linkedin.com/in/facuf99" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="mailto:facuflores1310@gmail.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block js-only">
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}
          >
            <ArrowUpCircle className="h-10 w-10 text-primary animate-bounce" />
          </Link>
        </div>
      </div>
    </section>
  )
}
