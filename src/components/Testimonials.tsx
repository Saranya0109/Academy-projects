import { AnimatedTestimonials } from "@/components/ui/animated-testimonials"

export function Testimonials() {
  return (
    <AnimatedTestimonials
      title="What Our Students Say"
      subtitle="Hear from students who have transformed their careers through our academic internship programs."
      badgeText="Trusted by Students"
      testimonials={[
        {
          id: 1,
          name: "Priya Sharma",
          role: "Full Stack Developer",
          company: "Tech Solutions Inc",
          content:
            "VDart Academy's internship program gave me real-world experience while learning. The mentorship was exceptional, and I landed my dream job even before completing the course!",
          rating: 5,
          avatar: "https://randomuser.me/api/portraits/women/32.jpg",
        },
        {
          id: 2,
          name: "Rajesh Kumar",
          role: "Data Analyst",
          company: "Analytics Pro",
          content:
            "The hands-on projects and industry-aligned curriculum at VDart Academy prepared me for the challenges in the real world. The career support team was incredibly helpful throughout my journey.",
          rating: 5,
          avatar: "https://randomuser.me/api/portraits/men/44.jpg",
        },
        {
          id: 3,
          name: "Sneha Patel",
          role: "UI/UX Designer",
          company: "Creative Studios",
          content:
            "I came from a non-tech background, but VDart Academy's structured learning path and supportive instructors made my transition smooth. Now I'm working on projects I'm passionate about!",
          rating: 5,
          avatar: "https://randomuser.me/api/portraits/women/46.jpg",
        },
      ]}
      trustedCompanies={["Google", "Amazon", "Microsoft", "Infosys", "TCS", "Wipro"]}
      trustedCompaniesTitle="Our students are working at top companies"
      className="
        [&>div]:pb-8 sm:[&>div]:pb-10 
        [&>div]:overflow-hidden
        max-sm:[&_p]:text-[12px]
      "
    />
  )
}
