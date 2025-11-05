import { SplineSceneBasic } from "./SplineDemo"
import { motion } from "framer-motion"
import { Hero as AnimatedHero } from "@/components/ui/animated-hero"
import { Button } from "@/components/ui/button"
import { MoveRight, PhoneCall } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Text and Hero animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient">
            Welcome to VDart Academy!!
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Empowering Future Tech Leaders with AI-Driven Learning
          </p>
        </motion.div>

        {/* Spline Scene */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <SplineSceneBasic />
        </motion.div>
      </div>
    </section>
  )
}
