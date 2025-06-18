import { Card, CardContent } from "@/components/ui/card"
import { Code2, Globe, Server, Users } from "lucide-react"

export default function About() {
  const features = [
    {
      icon: <Code2 className="h-10 w-10 text-primary" />,
      title: "Full Stack Development",
      description: "Experiencia en Node.Js, Next.Js, Drizzle ORM y Express",
    },
    {
      icon: <Server className="h-10 w-10 text-primary" />,
      title: "DevOps",
      description: "Conocimientos en Docker, Google Cloud y Kubernetes",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Teamwork",
      description: "Multiples reconocimientos por parte de empleadores donde se destaca el buen desempeño en equipo",
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "Colaboración Nacional",
      description: "Coordinado con equipos remotos de Santa Fé y Buenos Aires",
    },
  ]

  return (
    <div className="w-full bg-muted/30">
      <section id="about" className="py-20 w-full">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Sobre mi</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Desarrollador web con experiencia Full stack. Node.Js, Next.Js, Express, Docker, Drizzle y Google Cloud
              </p>
            </div>

            <div className="mx-auto max-w-3xl text-center">
              <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                Especializado en el diseño de sistemas eficientes, escalables y seguros, con experiencia comprobada en entornos colaborativos y remotos. He trabajado con equipos distribuidos en distintas regiones de Argentina, incluyendo San Juan, Santa Fe y Buenos Aires, tanto en el ámbito universitario como en el sector privado. Domino tecnologías como Next.js, Node.js, Express, SQL, Angular, React, Vue y principios de programación funcional, así como herramientas de infraestructura en la nube como Google Cloud, IBM Cloud, Docker y Kubernetes. Mi enfoque de trabajo ha sido reconocido por su eficiencia, y he recibido múltiples elogios por mi capacidad para fomentar un trabajo en equipo sólido y productivo.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {features.map((feature, index) => (
                <div key={index} className="animate-in">
                  <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-primary/50">
                    <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                      <div className="p-2 rounded-full bg-primary/10">{feature.icon}</div>
                      <h3 className="text-xl font-bold">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
