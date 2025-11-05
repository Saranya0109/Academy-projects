import { Navbar } from "@/components/Navbar"
import { Hero } from '../components/Hero';
import { About } from "@/components/About"
import { Features } from "@/components/Features"
import { Programs } from "@/components/Programs"
import { Testimonials } from "@/components/Testimonials"
import { Contact } from "@/components/Contact"
import { CTA } from "@/components/CTA"
import { Footer } from "@/components/Footer"
import HandsOnTraining from "@/components/HandsOnTraining";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <div id="features">
          <Features />
        </div>
        <div id="programs">
          <Programs />
        </div>
        <HandsOnTraining/>
        <Testimonials />
        <CTA />
        <Contact /> 
      </main>
      <Footer />
    </div>
  )
}

export default Index
