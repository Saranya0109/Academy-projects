import { Button } from "@/components/ui/button"
import { GraduationCap, Menu } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom" // <-- add this if using React Router

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border/40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <img 
              src="https://www.vdartacademy.com/vdartacademylogo1.png" 
              alt="VDart Academy" 
              className="h-10"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="hidden md:flex items-center gap-8"
          >
            <a href="#programs" className="text-foreground/80 hover:text-foreground transition-colors">
              Programs
            </a>
            <a href="#features" className="text-foreground/80 hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#about" className="text-foreground/80 hover:text-foreground transition-colors">
              About
            </a>

            {/* ✅ New Careers Link */}
            <Link
              to="/careers"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Careers
            </Link>

            <Button>Get Started</Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden py-4 space-y-4"
          >
            <a href="#programs" className="block text-foreground/80 hover:text-foreground transition-colors">
              Programs
            </a>
            <a href="#features" className="block text-foreground/80 hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#about" className="block text-foreground/80 hover:text-foreground transition-colors">
              About
            </a>

            {/* ✅ Careers for mobile */}
            <Link
              to="/careers"
              className="block text-foreground/80 hover:text-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Careers
            </Link>

            <Button className="w-full">Get Started</Button>
          </motion.div>
        )}
      </div>
    </nav>
  )
}
