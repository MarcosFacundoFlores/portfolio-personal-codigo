import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

export default function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Educación</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Trasfondo académico y cualificaciones.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-primary/10 p-6 flex items-center gap-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Técnicatura Universitaria en Programación</h3>
                    <p className="text-muted-foreground">Universidad Nacional de San Juan (2024)</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground">
Finalicé una carrera técnica universitaria en programación con un enfoque en desarrollo de software, algoritmos, estructuras de datos y diseño de sistemas. Adquirí una sólida base en los principios de la informática y en buenas prácticas de desarrollo que han sido fundamentales en mi trayectoria profesional.
                  </p>
                </div>
              </CardContent>
            </Card>  
          </div>

                    <div className="max-w-3xl mx-auto">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-primary/10 p-6 flex items-center gap-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Licenciatura en Ciencias de la Programación</h3>
                    <p className="text-muted-foreground">Universidad Nacional de San Juan (En Curso)</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground">
Estoy finalizando la carrera de Licenciatura en Ciencias de la Computación, formación que me ha brindado una sólida base teórica y práctica en áreas clave como ingeniería de software, algoritmos, estructuras de datos, probabilidad, estadística, diseño y análisis de sistemas. Esta formación académica me ha permitido desarrollar un pensamiento crítico y analítico, así como habilidades técnicas que aplico constantemente en mi experiencia profesional dentro del desarrollo de software y la resolución de problemas complejos.                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

                              <div className="max-w-3xl mx-auto">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-primary/10 p-6 flex items-center gap-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Capacitación en Inglés Avanzado</h3>
                    <p className="text-muted-foreground">INC. Instituto de Inglés</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground">
Cursé durante 6 años una formación intensiva en inglés, alcanzando un nivel avanzado en comprensión auditiva, expresión oral y escrita. Si bien rendí oficialmente el examen de nivel B1, actualmente tengo la capacidad de aprobar simulacros de exámenes de nivel C1 e incluso C2 —el más avanzado dentro del Marco Común Europeo de Referencia—. Esto incluye la habilidad para mantener conversaciones fluidas con hablantes nativos, redactar textos complejos y comprender contenido técnico y académico en inglés sin dificultad. </p>                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
