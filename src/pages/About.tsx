import { Link } from "react-router-dom";
import { Heart, Users, Target, Award, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description: "We believe every senior deserves care, dignity, and respect. Our work is driven by genuine love for the elderly community.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Together, we create a network of support that connects caregivers, volunteers, donors, and families.",
  },
  {
    icon: Target,
    title: "Accessibility",
    description: "We ensure that essential supplies and resources are available to all seniors, regardless of their circumstances.",
  },
  {
    icon: Award,
    title: "Quality",
    description: "Every product we offer meets high standards of safety and reliability, because our seniors deserve the best.",
  },
];

const team = [
  { name: "Dr. Sarah Johnson", role: "Founder & Director", emoji: "👩‍⚕️" },
  { name: "Michael Chen", role: "Operations Manager", emoji: "👨‍💼" },
  { name: "Emily Rodriguez", role: "Community Outreach", emoji: "👩‍🤝‍👩" },
  { name: "James Wilson", role: "Volunteer Coordinator", emoji: "🤝" },
];

export default function About() {
  return (
    <main className="pt-20 pb-16">
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Heart className="w-4 h-4" fill="currentColor" />
            <span className="text-sm font-medium">Our Story</span>
          </div>
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6 max-w-3xl mx-auto text-balance">
            Dedicated to Improving the Lives of Seniors
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            CareConnect was founded with a simple mission: to ensure every senior has access 
            to the supplies, support, and community they need to live with dignity and comfort.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-20">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We believe that aging should be a journey filled with support, comfort, and 
                connection. CareConnect bridges the gap between seniors who need assistance 
                and the community ready to help.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Through our platform, we provide essential mobility aids and medical supplies, 
                facilitate donations from caring community members, and help families locate 
                quality care facilities near them.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/supplies">
                  Explore Our Services
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary rounded-2xl p-8 text-primary-foreground">
                <p className="font-display text-4xl font-bold mb-2">10K+</p>
                <p className="text-primary-foreground/80">Seniors Helped</p>
              </div>
              <div className="bg-secondary rounded-2xl p-8 text-secondary-foreground">
                <p className="font-display text-4xl font-bold mb-2">500+</p>
                <p className="text-secondary-foreground/80">Care Homes</p>
              </div>
              <div className="bg-secondary rounded-2xl p-8 text-secondary-foreground">
                <p className="font-display text-4xl font-bold mb-2">25K+</p>
                <p className="text-secondary-foreground/80">Items Donated</p>
              </div>
              <div className="bg-primary rounded-2xl p-8 text-primary-foreground">
                <p className="font-display text-4xl font-bold mb-2">100+</p>
                <p className="text-primary-foreground/80">Communities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do at CareConnect.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-card rounded-2xl p-6 card-shadow text-center"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dedicated professionals committed to making a difference in seniors' lives.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-card rounded-2xl p-6 card-shadow text-center hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">{member.emoji}</span>
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Get in Touch
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Have questions about our services, donations, or finding care homes? 
                We're here to help. Reach out to our team and we'll respond promptly.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <a href="tel:+1800CARE" className="text-muted-foreground hover:text-primary">
                      1-800-CARE-NOW
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a href="mailto:help@careconnect.org" className="text-muted-foreground hover:text-primary">
                      help@careconnect.org
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-muted-foreground">Serving Communities Nationwide</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card rounded-3xl p-8 card-shadow">
              <h3 className="font-display text-xl font-bold text-foreground mb-6">
                Send Us a Message
              </h3>
              <form className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="contact-name" className="text-base font-medium">
                    Your Name
                  </Label>
                  <Input
                    id="contact-name"
                    type="text"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-email" className="text-base font-medium">
                    Email Address
                  </Label>
                  <Input
                    id="contact-email"
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-message" className="text-base font-medium">
                    Message
                  </Label>
                  <Textarea
                    id="contact-message"
                    placeholder="How can we help you?"
                    className="min-h-32 text-base"
                    required
                  />
                </div>
                <Button type="submit" variant="hero" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
