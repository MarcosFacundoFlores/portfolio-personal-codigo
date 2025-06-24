import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Skills from "./skills-content"

export default function Experience() {
  const experiences = [
    {
      title: "Desarrollador Frontend React",
      company: "Makers S.A / Valkimia Cuyo",
      period: "Oct 2021 - Mar 2023",
      location: "San Juan, Argentina",
      achievements: [
        "Participación clave en el desarrollo frontend de una solución financiera para Global Processing, utilizando React y buenas prácticas de desarrollo.",
        "Subcontratado por Valkimia para formar parte de un equipo remoto con base en Santa Fe, colaborando estrechamente en un entorno ágil y distribuido.",
        "Reconocido por la prolijidad del código, el uso responsable y estratégico de Git, y la efectiva comunicación en el trabajo colaborativo.",
        "Contribución activa durante todas las etapas del proyecto, desde el diseño hasta la entrega final, garantizando calidad y cumplimiento de plazos.",
        "Proyecto finalizado exitosamente tras un año de desarrollo, cumpliendo con los estándares técnicos y las expectativas del cliente.",
      ],
    },
    {
      title: "Desarrollador Frontend Angular",
      company: "Makers S.A / Valkimia Cuyo",
      period: "Oct 2021 - Jan 2023",
      location: "San Juan, Argentina",
      achievements: [
        "Integración al equipo de Valkimia para el desarrollo de un sistema de gestión de procesos industriales en Angular, destinado a la empresa metalúrgica Ternium.",
        "Participación inicial motivada por la satisfacción del equipo con el proyecto anterior, lo que generó interés en continuar colaborando en nuevos desafíos.",
        "Aunque mi participación fue acotada por compromisos académicos, el desarrollo avanzó sin contratiempos y se mantuvo la calidad del código y el uso riguroso de Git.",
        "Se reafirmaron las fortalezas reconocidas previamente: trabajo en equipo, prolijidad en la implementación y responsabilidad en entornos colaborativos.",
        "Aporté en las primeras etapas del desarrollo, contribuyendo a una base sólida que permitió al proyecto continuar con estabilidad y eficiencia.",
      ],
    },
    {
      title: "IT Lead",
      company: "Rectorado Universidad Nacional de San Juan",
      period: "Abril 2024 - Presente",
      location: "San Juan, Argentina",
      achievements: [
        "Lidero el área de IT en el rectorado de la Universidad Nacional de San Juan, coordinando un equipo reducido encargado del mantenimiento y correcto funcionamiento de los equipos informáticos del edificio.",
        "Encargado de la gestión y priorización de tickets de servicio, con respuestas rápidas y eficaces que garantizan la continuidad operativa de las distintas áreas administrativas.",
        "Reconocido por mi capacidad de organización, atención al detalle y enfoque proactivo frente a incidentes técnicos.",
        "Implementación de rutinas de control y mantenimiento preventivo para asegurar la estabilidad de la infraestructura tecnológica.",
        "Supervisión directa de intervenciones técnicas, asegurando tiempos de respuesta óptimos y comunicación efectiva con el personal universitario.",
      ],
    },
    {
      title: "DevOps",
      company: "Rectorado Universidad Nacional de San Juan",
      period: "Abril 2025 - Presente",
      location: "San Juan, Argentina",
      achievements: [
        "Integrante del equipo DevOps del Centro de Cómputos del Rectorado de la Universidad Nacional de San Juan, colaborando en el despliegue, mantenimiento y monitoreo de los sistemas SIU, una suite de aplicaciones fundamentales utilizadas por toda la comunidad universitaria, desde estudiantes hasta autoridades.",
        "Trabajo con herramientas como Git para control de versiones, Docker para la creación y gestión de contenedores, y Kubernetes para la orquestación y escalabilidad de los servicios.",
        "Mi rol requiere una coordinación constante con otros equipos técnicos, así como una comprensión profunda de los entornos universitarios y sus necesidades específicas en materia tecnológica.",
      ],
    },
        {
      title: "Otros - Ámbito Universitario",
      company: "Facultad de Ciencias Exactas Físicas y Naturales - UNSJ",
      period: "Enero 2018 - Presente",
      location: "San Juan, Argentina",
      achievements: [
        "A lo largo de mi trayectoria en el ámbito universitario he formado parte de diversos equipos de desarrollo, participando en proyectos de distinta escala y complejidad, tanto académicos como institucionales.",
        "Esta experiencia incluye desde la implementación de rutinas procedurales en C hasta el desarrollo de aplicaciones web completas (SPAs) utilizando tecnologías modernas como Vue.js, Express, Axios, Google Cloud y Docker.",
        "He participado además en proyectos orientados a la optimización computacional e inteligencia artificial, aplicando conceptos teóricos a la resolución de problemas concretos mediante algoritmos eficientes y modelos inteligentes.",
        "Estos proyectos, muchas veces interdisciplinarios y de difícil clasificación por su variedad, consolidaron mis habilidades tanto en frontend como backend, así como mi criterio técnico para elegir herramientas y enfoques adecuados en función de cada desafío."
      ],
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Experiencia</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Mi experiencia profesional e hitos clave
            </p>
          </div>

          <div className="space-y-8 mt-12">
            {experiences.map((experience, index) => (
              <div key={index} className="timeline-item">
                <Card className="border-l-4 border-l-primary transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold">{experience.title}</h3>
                        <p className="text-muted-foreground">{experience.company}</p>
                      </div>
                      <div className="mt-2 md:mt-0 flex flex-col md:items-end">
                        <Badge variant="outline" className="mb-1 md:mb-0">
                          {experience.period}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{experience.location}</span>
                      </div>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {experience.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>
                          <span className="text-sm text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Skills Section */}
          <div className="mt-20" id="skills">
            <Skills />
          </div>
        </div>
      </div>
    </section>
  )
}
