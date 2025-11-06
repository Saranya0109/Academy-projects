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
    <Card className="w-full h-full bg-gradient-to-br from-primary/95 to-accent/90 relative overflow-hidden border-primary/20">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

      <div className="flex flex-col md:flex-row h-full">
        {/* Left content */}
        <div className="flex-1 p-6 md:p-8 lg:p-12 relative  flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <div className="w-full">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              {/* First line: static, never wraps */}
              <span className="bg-clip-text text-transparent z-100 bg-gradient-to-b from-white to-white/60 whitespace-nowrap block">
                Academic Internships In
              </span>

              {/* Second line: rotating course names */}
              <span className="relative flex w-full justify-center md:justify-start overflow-visible mt-3 md:mt-4 min-h-[60px] md:min-h-[80px]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={titleNumber}
                    className="absolute font-bold bg-clip-text text-transparent bg-gradient-to-b  from-white to-white/90 whitespace-nowrap"
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

            <p className="mt-4 md:mt-6 text-white/90 text-base md:text-lg leading-relaxed max-w-md">
              Bring your education to life with beautiful 3D experiences.
              Create immersive learning that captures attention and enhances retention.
            </p>

            {/* Buttons Section */}
            <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 md:gap-4 w-full justify-center md:justify-start">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-blue-50 hover:scale-105 transition-all duration-200 cursor-pointer shadow-lg hover:shadow-xl w-full sm:w-auto font-semibold"
                onClick={handleEnrollClick}
              >
                <FileText className="mr-2 h-5 w-5" />
                Enroll Now
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-primary hover:bg-blue-50 hover:text-primary transition-all duration-200 hover:scale-105 cursor-pointer w-full sm:w-auto font-semibold"
                onClick={handleExploreClick}
              >
                Explore Courses 
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Right content: 3D Spline scene */}
        <div className="flex-1 relative flex justify-end  overflow-visible">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full max-w-2xl object-contain scale-150 md:scale-100"
          />
        </div>
      </div>
    </Card>
  );
} 