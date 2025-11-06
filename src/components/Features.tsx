import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Presentation, GraduationCap, Briefcase, Building2 } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: Presentation,
    title: "Expert Trainers",
    description: "Led by seasoned professionals from the VDart Group—bringing real-world experience into the classroom. Sessions enriched with real-time examples, hands-on activities, and industry scenarios."
  },
  {
    icon: GraduationCap,
    title: "Career Support",
    description: "We help you launch your career, not just learn. Resume building, mock interviews, and personalized career strategy planning."
  },
  {
    icon: Briefcase,
    title: "Internship Access",
    description: "Gain practical experience by applying what you learn in real internships. Hands-on exposure across development, analytics, marketing, and more."
  },
  {
    icon: Building2,
    title: "Industry-Aligned Curriculum",
    description: "Courses designed with direct input from industry experts. Regular updates ensure you're learning skills that are in-demand."
  }
]

export function Features() {
  return (
    <section className="pt-10 sm:py-20 px-4 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">Why Choose VDart Academy?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform your career with industry-leading training and real-world experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-primary/10">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
