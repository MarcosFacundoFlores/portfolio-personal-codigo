import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"


export default function Projects() {
  const projects = [
    {
      title: "Zodiac SPA",
      description:
        "Sitio para consultar el horóscopo diario",
      tags: ["JavaScript", "Vite + Vue", "API"],
      codeLink: "https://github.com/MarcosFacundoFlores/Zodiac-SPA",
      liveLink: "https://zodiac-spa.vercel.app/",
    },
    {
      title: "Flappy Bird",
      description: "A clone of the popular Flappy Bird game built with vanilla JavaScript and HTML5 Canvas.",
      tags: ["JavaScript", "Canvas API", "Game Development"],
      codeLink: "https://github.com/maskeynihal/flappy-bird",
      liveLink: "https://maskeynihal.github.io/flappy-bird/",
    },
    {
      title: "Backend Optimización CVRPTW",
      description:
        "Backend en Express para trabajo final de 'Lógica y Optimización'. Comunicamos el Frontend con la API de IBM CPLEX para resolver el Problema de Ruteo de Vehículos con Capacidades y Ventanas de Tiempo",
      tags: ["Node.js", "Express", "IBM CPLEX", "API", "JSON"],
      codeLink: "https://github.com/MarcosFacundoFlores/CVRPTW-backend",
      liveLink: null,
    },
    {
      title: "Mailer",
      description: "A JavaScript package to prepare and send emails using AWS SES, with templating support.",
      tags: ["Node.js", "AWS", "SES", "Email Templates", "npm package"],
      codeLink: "https://github.com/maskeynihal/mailer",
      liveLink: null,
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Proyectos</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Selección de mis proyectos personales y académicos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <Card className="overflow-hidden h-full flex flex-col">
                  <CardContent className="project-content flex-1 flex flex-col p-5">
                    <h3 className="text-lg font-bold">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2 flex-1">{project.description}</p>
                    <div className="project-tags mt-3">
                      {project.tags.slice(0, 3).map((tag, i) => (
                        <span key={i} className="project-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="project-links mt-4">
                      <Button size="sm" variant="outline" asChild>
                        <Link href={project.codeLink} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-1 h-4 w-4" /> Code
                        </Link>
                      </Button>
                      {project.liveLink && (
                        <Button size="sm" variant="outline" asChild>
                          <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-1 h-4 w-4" /> Live
                          </Link>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
