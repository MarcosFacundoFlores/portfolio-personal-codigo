import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Education from "@/components/education"
import Blog from "@/components/blog"
import Contact from "@/components/contact"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Marcos Flores | Tec. Universitario en programación",
  description:
    "Portfolio de Marcos Facundo Flores: Web Developer Full stack. Node.Js, Next.Js, Express, Docker, Drizzle y Google Cloud",
}

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </div>
  )
}
