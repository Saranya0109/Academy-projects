import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // ✅ Function to handle section navigation (works from any page)
  const handleNavClick = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      // Delay the scroll slightly so it happens after navigation
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border/40 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <img
              src="https://www.vdartacademy.com/vdartacademylogo1.png"
              alt="VDart Academy"
              className="h-14 w-36 md:h-14 md:w-48 object-contain"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="hidden md:flex items-center gap-8"
          >
            <button
              onClick={() => handleNavClick("programs")}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Programs
            </button>
            <button
              onClick={() => handleNavClick("features")}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => handleNavClick("about")}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              About
            </button>

            {/* ✅ Careers Route Link */}
            <Link
              to="/careers"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Careers
            </Link>

            <Link to="/apply">
              <Button>Get Started</Button>
            </Link>
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
            <button
              onClick={() => handleNavClick("programs")}
              className="block text-foreground/80 hover:text-foreground transition-colors"
            >
              Programs
            </button>
            <button
              onClick={() => handleNavClick("features")}
              className="block text-foreground/80 hover:text-foreground transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => handleNavClick("about")}
              className="block text-foreground/80 hover:text-foreground transition-colors"
            >
              About
            </button>

            <Link
              to="/careers"
              className="block text-foreground/80 hover:text-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Careers
            </Link>

            <Link to="/apply" onClick={() => setIsOpen(false)}>
              <Button className="w-full">Get Started</Button>
            </Link>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
