"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function NotFound() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to the homepage
    router.push("/")
  }, [router])

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Sitio no encontrado</h1>
        <p className="mb-8">Redirigiendo a la homepage...</p>
      </div>
    </div>
  )
}
