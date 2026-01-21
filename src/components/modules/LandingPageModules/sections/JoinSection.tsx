import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight,
  GraduationCap,
  Building2,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const studentBenefits = [
  "Access to 100+ corporate partners",
  "Leadership & soft skills training",
  "Real case study experience",
  "Networking with industry leaders",
  "Internship & career opportunities",
];

const partnerBenefits = [
  "Access to top university talents",
  "Fresh perspectives & insights",
  "Employer branding exposure",
  "Customized talent pipeline",
  "CSR & community engagement",
];

const JoinSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="join" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Join Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
            Ready to Make an <span className="text-primary">Impact</span>?
          </h2>
          <p className="text-muted-foreground text-lg">
            Whether youre a student looking to accelerate your career or a
            company seeking top talents.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Student Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group">
            <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-accent/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all opacity-50" />
            <div className="relative bg-card rounded-3xl p-8 border border-border hover:border-primary/30 transition-all">
              <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-primary to-accent flex items-center justify-center mb-6">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                For Students
              </h3>
              <p className="text-muted-foreground mb-6">
                Join our community of high-potential students from 30+ top
                universities across Indonesia.
              </p>

              <ul className="space-y-3 mb-8">
                {studentBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>

              <Button
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group/btn">
                Apply as Student
                <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>

          {/* Partner Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative group">
            <div className="absolute inset-0 bg-linear-to-br from-secondary/50 to-muted/50 rounded-3xl blur-xl group-hover:blur-2xl transition-all opacity-50" />
            <div className="relative bg-card rounded-3xl p-8 border border-border hover:border-secondary/50 transition-all">
              <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-secondary to-muted-foreground flex items-center justify-center mb-6">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                For Partners
              </h3>
              <p className="text-muted-foreground mb-6">
                Connect with Indonesias brightest minds and build your future
                talent pipeline.
              </p>

              <ul className="space-y-3 mb-8">
                {partnerBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>

              <Button
                size="lg"
                variant="outline"
                className="w-full border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground group/btn">
                Become a Partner
                <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
