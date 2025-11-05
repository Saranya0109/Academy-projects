'use client'

import { useEffect, useState } from "react";
import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight-aceternity";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function SplineSceneBasic() {
  // ✅ Button actions
  const handleEnrollClick = () => {
    window.open("https://forms.gle/UJpTdevcRG2d61ur6", "_blank");
  };

  const handleExploreClick = () => {
    const element = document.getElementById("programs");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // ✅ Rotating course names
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = [
    "Full Stack",
    "Data Analytics",
    "Digital Marketing",
    "UI/UX",
    "AI & ML",
    "Cloud Computing",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleNumber((prev) => (prev === titles.length - 1 ? 0 : prev + 1));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="w-full h-[500px] bg-gradient-to-br from-primary/95 to-accent/90 relative overflow-hidden border-primary/20">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

      <div className="flex h-full flex-col md:flex-row">
        {/* Left content */}
        <div className="flex-1 mt-0 p-4 pb-10 md:pb-20 md:p-16 relative z-10 flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-snug md:leading-tight lg:leading-tight">
            {/* First line: static, never wraps */}
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 whitespace-nowrap block">
              Academic Internships In
            </span>

            {/* Second line: rotating course names */}
            <span className="relative flex w-full justify-center md:justify-start overflow-visible mt-2 min-h-[80px] px-2 md:px-0">
              <AnimatePresence mode="wait">
                <motion.span
                  key={titleNumber}
                  className="absolute font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                >
                  {titles[titleNumber]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>

          <p className="mt-0 text-white/80 max-w-lg">
            Bring your education to life with beautiful 3D experiences.
            Create immersive learning that captures attention and enhances retention.
          </p>

          {/* Buttons Section */}
          <div className="mt-7 flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center md:justify-start">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-400 hover:text-white transition-all transform hover:scale-105 cursor-pointer shadow-md w-full sm:w-auto"
              onClick={handleEnrollClick}
            >
              <FileText className="mr-2 h-5 w-5" />
              Enroll Now
            </Button>

            <Button
              variant="hero"
              size="lg"
              className="w-full sm:w-auto"
              onClick={handleExploreClick}
            >
              Explore Courses <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Right content: 3D Spline scene */}
        <div className="mt-0 flex-1 relative flex justify-center md:justify-end items-center md:items-end min-h-[300px] md:min-h-[500px] overflow-visible">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </Card>
  );
}
