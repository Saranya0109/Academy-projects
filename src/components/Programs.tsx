import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Clock, Users } from "lucide-react"
import { motion } from "framer-motion"

const programs = [
  {
    title: "FullStack Development",
    description: "Master front-end and back-end technologies to build dynamic web applications. Learn through real-time projects using HTML, CSS, JavaScript, Node.js, and more.",
    duration: "14 weeks",
    students: "2,500+",
    level: "Beginner to Advanced",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Data Analytics",
    description: "Gain skills in data cleaning, visualization, and interpretation using Excel, SQL, and Python. Transform raw data into actionable insights that drive smart decisions.",
    duration: "12 weeks",
    students: "1,800+",
    level: "Beginner to Intermediate",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Cloud Computing",
    description: "Learn the fundamentals of cloud services with AWS, Azure, and Google Cloud. Deploy, manage, and scale applications in real-world cloud environments.",
    duration: "10 weeks",
    students: "1,400+",
    level: "Intermediate",
    color: "from-green-500 to-teal-500"
  },
  {
    title: "AI & Machine Learning",
    description: "Learn to build intelligent systems with Python, TensorFlow, and real projects. Gain expertise in model training, deployment, and AI ethics.",
    duration: "16 weeks",
    students: "1,200+",
    level: "Advanced",
    color: "from-indigo-500 to-purple-500"
  },
  {
    title: "UI/UX Design",
    description: "Design user-centered digital experiences with Figma, Adobe XD, and usability principles. From wireframes to prototypes, bring creativity and functionality together.",
    duration: "10 weeks",
    students: "1,600+",
    level: "All Levels",
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Digital Marketing",
    description: "Gain practical experience by working on live projects for real clients. Learn SEO, SEM, social media, and email marketing from industry experts.",
    duration: "8 weeks",
    students: "2,000+",
    level: "Beginner to Intermediate",
    color: "from-pink-500 to-rose-500"
  }
]

export function Programs() {
  return (
    <section className="pt-10 sm:py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">Explore Our Courses</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Industry-aligned courses with hands-on learning and expert mentorship
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className={`h-2 bg-gradient-to-r ${program.color}`} />
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="secondary">{program.level}</Badge>
                  </div>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                    {program.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {program.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2" />
                      {program.duration}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="h-4 w-4 mr-2" />
                      {program.students} enrolled
                    </div>
                  </div>
                  <Button className="w-full group-hover:shadow-lg transition-shadow">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
