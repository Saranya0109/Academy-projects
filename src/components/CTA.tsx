import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import { motion } from "framer-motion";

export function CTA() {

  const handleSendMessage = () => {
    const email = "info@vdartacademy.com";
    const subject = encodeURIComponent("Inquiry from Website");
    const body = encodeURIComponent(
      "Hello VDart Academy Team,\n\nI would like to know more about your courses and programs.\n\nThank you!"
    );

    // Open Gmail compose window in a new tab
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
    window.open(gmailUrl, "_blank");
  };

  return (
    <section className="sm:py-12 md:py-16 px-4 mb-0 mt-12 sm:mt-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-accent p-10 md:p-16 text-center"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-56 h-56 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-56 h-56 bg-accent/20 rounded-full blur-3xl" />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
              We'd love to hear from you! Start your learning journey today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* Enroll Now Button */}
              <Button
                variant="hero"
                className="text-base font-semibold px-6 py-3 w-[200px] h-[50px] flex justify-center items-center"
                onClick={() =>
                  window.open("https://forms.gle/UJpTdevcRG2d61ur6", "_blank")
                }
              >
                Enroll Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              {/* Send Message Button */}
              <Button
                variant="outline"
                className="text-base font-semibold px-6 py-3 w-[200px] h-[50px] flex justify-center items-center bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white"
                onClick={handleSendMessage}
              >
                <Mail className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
