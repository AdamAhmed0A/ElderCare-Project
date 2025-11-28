import { Link } from "react-router-dom";
import { Accessibility, Stethoscope, Gift, MapPin, ArrowRight, Heart, Users, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FeatureCard } from "@/components/FeatureCard";
import heroImage from "@/assets/hero-illustration.jpg";

const features = [
  {
    icon: Accessibility,
    title: "Mobility Aids",
    description: "Wheelchairs, walkers, canes, and other mobility equipment to help seniors maintain independence and move safely.",
    variant: "primary" as const,
  },
  {
    icon: Stethoscope,
    title: "Medical Supplies",
    description: "Medicine organizers, blood pressure monitors, and essential health devices for daily wellness management.",
    variant: "secondary" as const,
  },
  {
    icon: Gift,
    title: "Donation Program",
    description: "Contribute supplies directly to elderly care homes. Your generosity makes a real difference in seniors' lives.",
    variant: "primary" as const,
  },
  {
    icon: MapPin,
    title: "Find Nearby Homes",
    description: "Locate the nearest elderly care facilities using our interactive map. Connect with communities that need support.",
    variant: "secondary" as const,
  },
];

const stats = [
  { number: "10,000+", label: "Seniors Helped" },
  { number: "500+", label: "Care Homes" },
  { number: "25,000+", label: "Items Donated" },
  { number: "100+", label: "Communities" },
];

export default function Index() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative hero-gradient overflow-hidden">
        <div className="container mx-auto py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
                <Heart className="w-4 h-4" fill="currentColor" />
                <span className="text-sm font-medium">Caring for Our Elders</span>
              </div>
              <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                Supporting the Elderly with Care, Comfort, and Essential Needs
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
                We provide mobility aids, medical supplies, and a community of givers ready to help. 
                Together, we can ensure every senior lives with dignity and comfort.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/supplies">
                    Explore Supplies
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="hero-secondary" size="lg" asChild>
                  <Link to="/donate">
                    <Gift className="w-5 h-5" />
                    Donate Items
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative animate-slide-up">
              <div className="relative rounded-2xl overflow-hidden card-shadow">
                <img
                  src={heroImage}
                  alt="Caregivers helping elderly people in a garden"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Floating stats card */}
              <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl card-shadow hidden lg:flex items-center gap-3 animate-float">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-display text-xl font-bold text-foreground">10,000+</p>
                  <p className="text-sm text-muted-foreground">Seniors Helped</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-3xl lg:text-4xl font-bold text-primary-foreground mb-1">
                  {stat.number}
                </p>
                <p className="text-primary-foreground/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
              How We Support Seniors
            </h2>
            <p className="text-lg text-muted-foreground">
              From essential supplies to community connections, we're here to make life easier 
              and more comfortable for our elderly loved ones.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Donor CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto">
          <div className="bg-card rounded-3xl p-8 lg:p-12 card-shadow">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary mb-6">
                  <Gift className="w-4 h-4" />
                  <span className="text-sm font-medium">Make a Difference</span>
                </div>
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Give Back to the Community
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Your donations directly support elderly care homes and seniors in need. 
                  Whether it's medical equipment, mobility aids, or daily essentials, 
                  every contribution helps create a more caring world.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="warm" size="lg" asChild>
                    <Link to="/donate">
                      Start Donating
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/about">Learn More</Link>
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-primary/5 rounded-2xl p-6 text-center">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Accessibility className="w-7 h-7 text-primary" />
                  </div>
                  <p className="font-semibold text-foreground">Mobility Aids</p>
                </div>
                <div className="bg-secondary/10 rounded-2xl p-6 text-center">
                  <div className="w-14 h-14 bg-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Stethoscope className="w-7 h-7 text-secondary" />
                  </div>
                  <p className="font-semibold text-foreground">Medical Devices</p>
                </div>
                <div className="bg-secondary/10 rounded-2xl p-6 text-center">
                  <div className="w-14 h-14 bg-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Gift className="w-7 h-7 text-secondary" />
                  </div>
                  <p className="font-semibold text-foreground">Daily Essentials</p>
                </div>
                <div className="bg-primary/5 rounded-2xl p-6 text-center">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-7 h-7 text-primary" />
                  </div>
                  <p className="font-semibold text-foreground">Care Packages</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Preview Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Find the Nearest Elderly Care Home
            </h2>
            <p className="text-lg text-muted-foreground">
              Use our interactive map to locate care facilities in your area and connect 
              with communities that need your support.
            </p>
          </div>
          <div className="bg-card rounded-3xl p-8 card-shadow">
            <div className="bg-muted rounded-2xl h-80 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-10 h-10 text-primary" />
                </div>
                <p className="text-muted-foreground mb-4">Interactive map preview</p>
                <Button variant="default" asChild>
                  <Link to="/nearby">
                    View Full Map
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
            Need Help? We're Here for You
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
            Our team is ready to assist you with any questions about our services, 
            donations, or finding care homes near you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <a href="tel:+1800CARE">
                <Phone className="w-5 h-5" />
                Call 1-800-CARE-NOW
              </a>
            </Button>
            <Button
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              asChild
            >
              <Link to="/about#contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
