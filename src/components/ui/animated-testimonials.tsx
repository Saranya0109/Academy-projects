"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Quote, Star } from "lucide-react"
import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"

export interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  content: string
  rating: number
  avatar: string
}

export interface AnimatedTestimonialsProps {
  title?: string
  subtitle?: string
  badgeText?: string
  testimonials?: Testimonial[]
  autoRotateInterval?: number
  trustedCompanies?: string[]
  trustedCompaniesTitle?: string
  className?: string
}

export function AnimatedTestimonials({
  title = "Loved by the community",
  subtitle = "Don't just take our word for it. See what developers and companies have to say about our starter template.",
  badgeText = "Trusted by developers",
  testimonials = [],
  autoRotateInterval = 6000,
  trustedCompanies = [],
  trustedCompaniesTitle = "Trusted by developers from companies worldwide",
  className,
}: AnimatedTestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [cardHeight, setCardHeight] = useState(0)

  // Refs for scroll animations and height measurement
  const sectionRef = useRef(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const controls = useAnimation()

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  } as const

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  } as const

  // Trigger animations when section comes into view
  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  // Calculate the maximum card height
  useEffect(() => {
    if (cardRefs.current.length === 0) return

    // Reset heights to auto to get natural heights
    cardRefs.current.forEach(ref => {
      if (ref) {
        ref.style.height = 'auto'
      }
    })

    // Calculate the maximum height among all cards
    const maxHeight = Math.max(
      ...cardRefs.current.map(ref => ref ? ref.offsetHeight : 0)
    )

    // Set the card height to the maximum found
    setCardHeight(maxHeight)

    // Apply the consistent height to all cards
    cardRefs.current.forEach(ref => {
      if (ref) {
        ref.style.height = `${maxHeight}px`
      }
    })
  }, [testimonials])

  // Auto rotate testimonials
  useEffect(() => {
    if (autoRotateInterval <= 0 || testimonials.length <= 1) return

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, autoRotateInterval)

    return () => clearInterval(interval)
  }, [autoRotateInterval, testimonials.length])

  if (testimonials.length === 0) {
    return null
  }

  return (
    <section ref={sectionRef} id="testimonials" className={`sm:py-24 bg-muted/30 ${className || "h-full"}`}>
      <div className="px-4 md:px-6 h-full container mx-auto flex flex-col items-center">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid gap-16 w-full md:grid-cols-2 lg:gap-24"
        >
          {/* Left side: Heading and navigation */}
          <motion.div variants={itemVariants} className="flex flex-col justify-center">
            <div className="space-y-6">
              {badgeText && (
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                  <Star className="mr-1 h-3.5 w-3.5 fill-primary" />
                  <span>{badgeText}</span>
                </div>
              )}

              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{title}</h2>

              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">{subtitle}</p>
            </div>
          </motion.div>

          {/* Right side: Testimonial cards */}
          <motion.div
            variants={itemVariants}
            className="relative mr-10 flex items-center justify-center pb-14"
            style={{ minHeight: cardHeight > 0 ? cardHeight + 80 : 320 }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="absolute inset-0 flex items-center justify-center px-4"
                initial={{ opacity: 0, x: 60 }}
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                  x: activeIndex === index ? 0 : 60,
                  scale: activeIndex === index ? 1 : 0.98,
                }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                style={{ zIndex: activeIndex === index ? 10 : 0 }}
              >
                <div 
                  ref={el => cardRefs.current[index] = el}
                  className="bg-card border shadow-lg rounded-xl p-8 w-full max-w-2xl flex flex-col"
                >
                  <div className="mb-4 flex gap-2">
                    {Array(testimonial.rating)
                      .fill(0)
                      .map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                      ))}
                  </div>

                  <div className="relative mb-4 flex-1 overflow-auto">
                    <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/20 rotate-180" />
                    <p className="relative z-10 text-lg font-medium leading-relaxed">"{testimonial.content}"</p>
                  </div>

                  <Separator className="my-4" />

                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12 border">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-xl bg-primary/5"></div>
            <div className="absolute -top-6 -right-6 h-24 w-24 rounded-xl bg-primary/5"></div>



          </motion.div>
        </motion.div>
                    {/* Pagination — static/flow on mobile, absolute on md+ to avoid overlaying content */}
            <div className="mt-8 flex justify-center gap-3  md:bottom-4 md:left-1/2 md:transform md:-translate-x-1/2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    activeIndex === index ? "w-10 bg-primary" : "w-2.5 bg-muted-foreground/30"
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>

        {/* Logo cloud */}
        {trustedCompanies.length > 0 && (
          <motion.div variants={itemVariants} initial="hidden" animate={controls} className="mt-24 text-center">
            <h3 className="text-sm font-medium text-muted-foreground mb-8">{trustedCompaniesTitle}</h3>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-8">
              {trustedCompanies.map((company) => (
                <div key={company} className="text-2xl font-semibold text-muted-foreground/50">
                  {company}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}