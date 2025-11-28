import { Link } from "react-router-dom";
import { Accessibility, Stethoscope, Gift, MapPin, ArrowRight, Heart, Users, Phone, ShoppingBag, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FeatureCard } from "@/components/FeatureCard";
import heroImage from "@/assets/hero-illustration.jpg";

const features = [
  { icon: Accessibility, title: "Mobility Aids", description: "Wheelchairs, walkers, canes, and other mobility equipment to help seniors maintain independence and move safely.", variant: "primary" as const },
  { icon: Stethoscope, title: "Medical Supplies", description: "Medicine organizers, blood pressure monitors, and essential health devices for daily wellness management.", variant: "secondary" as const },
  { icon: Gift, title: "Donation Program", description: "Contribute supplies directly to elderly care homes. Your generosity makes a real difference in seniors' lives.", variant: "primary" as const },
  { icon: MapPin, title: "Find Nearby Homes", description: "Locate the nearest elderly care facilities using our interactive map. Connect with communities that need support.", variant: "secondary" as const },
];

const stats = [
  { number: "10,000+", label: "Seniors Helped" },
  { number: "500+", label: "Care Homes" },
  { number: "25,000+", label: "Items Donated" },
  { number: "100+", label: "Communities" },
];

const recentSales = [
  { id: 1, name: "Lightweight Wheelchair", buyer: "John D.", time: "2 hours ago", price: 299, image: "🦽" },
  { id: 2, name: "Digital Blood Pressure Monitor", buyer: "Sarah M.", time: "5 hours ago", price: 49, image: "💓" },
  { id: 3, name: "Adjustable Walker", buyer: "Emily R.", time: "8 hours ago", price: 89, image: "🚶" },
  { id: 4, name: "Memory Foam Seat Cushion", buyer: "Michael T.", time: "12 hours ago", price: 39, image: "🪑" },
  { id: 5, name: "Weekly Pill Organizer", buyer: "Lisa K.", time: "1 day ago", price: 15, image: "💊" },
  { id: 6, name: "Grab Bar Set", buyer: "Robert W.", time: "1 day ago", price: 45, image: "🛁" },
];

export default function Index() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative hero-gradient overflow-hidden">
        <div className="container mx-auto py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 animate-pulse-soft">
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
                <Button variant="hero" size="lg" asChild className="transition-all duration-300 hover:scale-105">
                  <Link to="/supplies">
                    Explore Supplies
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="hero-secondary" size="lg" asChild className="transition-all duration-300 hover:scale-105">
                  <Link to="/donate">
                    <Gift className="w-5 h-5" />
                    Donate Items
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative animate-slide-in-right">
              <div className="relative rounded-2xl overflow-hidden card-shadow">
                <img src={heroImage} alt="Caregivers helping elderly people" className="w-full h-auto object-cover" />
              </div>
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
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <p className="font-display text-3xl lg:text-4xl font-bold text-primary-foreground mb-1">{stat.number}</p>
                <p className="text-primary-foreground/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in-up">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">How We Support Seniors</h2>
            <p className="text-lg text-muted-foreground">From essential supplies to community connections, we're here to make life easier and more comfortable for our elderly loved ones.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={feature.title} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <FeatureCard {...feature} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Sales Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary mb-4">
              <ShoppingBag className="w-4 h-4" />
              <span className="text-sm font-medium">Recent Orders</span>
            </div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">Recently Sold Products</h2>
            <p className="text-lg text-muted-foreground">See what other caregivers and families are purchasing to support their loved ones.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentSales.map((sale, index) => (
              <div key={sale.id} className="bg-card rounded-2xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl">{sale.image}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <Link to={`/product/${sale.id}`} className="font-semibold text-foreground hover:text-primary transition-colors line-clamp-1">{sale.name}</Link>
                    <p className="text-sm text-muted-foreground">Purchased by {sale.buyer}</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="font-display text-lg font-bold text-primary">${sale.price}</span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        {sale.time}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10 animate-fade-in-up" style={{ animationDelay: '700ms' }}>
            <Button variant="outline" size="lg" asChild className="transition-all duration-300 hover:scale-105">
              <Link to="/supplies">View All Products<ArrowRight className="w-5 h-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Donor CTA Section */}
      <section className="py-20">
        <div className="container mx-auto">
          <div className="bg-card rounded-3xl p-8 lg:p-12 card-shadow animate-fade-in-up">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-in-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary mb-6">
                  <Gift className="w-4 h-4" />
                  <span className="text-sm font-medium">Make a Difference</span>
                </div>
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">Give Back to the Community</h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">Your donations directly support elderly care homes and seniors in need. Whether it's medical equipment, mobility aids, or daily essentials, every contribution helps create a more caring world.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="warm" size="lg" asChild className="transition-all duration-300 hover:scale-105">
                    <Link to="/donate">Start Donating<ArrowRight className="w-5 h-5" /></Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild className="transition-all duration-300 hover:scale-105">
                    <Link to="/about">Learn More</Link>
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 animate-slide-in-right">
                {[
                  { icon: Accessibility, label: "Mobility Aids", bg: "bg-primary/5", iconBg: "bg-primary/10", iconColor: "text-primary" },
                  { icon: Stethoscope, label: "Medical Devices", bg: "bg-secondary/10", iconBg: "bg-secondary/20", iconColor: "text-secondary" },
                  { icon: Gift, label: "Daily Essentials", bg: "bg-secondary/10", iconBg: "bg-secondary/20", iconColor: "text-secondary" },
                  { icon: Heart, label: "Care Packages", bg: "bg-primary/5", iconBg: "bg-primary/10", iconColor: "text-primary" },
                ].map((item, i) => (
                  <div key={item.label} className={`${item.bg} rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300`}>
                    <div className={`w-14 h-14 ${item.iconBg} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                      <item.icon className={`w-7 h-7 ${item.iconColor}`} />
                    </div>
                    <p className="font-semibold text-foreground">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Preview Section */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12 animate-fade-in-up">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">Find the Nearest Elderly Care Home</h2>
            <p className="text-lg text-muted-foreground">Use our interactive map to locate care facilities in your area and connect with communities that need your support.</p>
          </div>
          <div className="bg-card rounded-3xl p-8 card-shadow animate-scale-in">
            <div className="bg-muted rounded-2xl h-80 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-gentle">
                  <MapPin className="w-10 h-10 text-primary" />
                </div>
                <p className="text-muted-foreground mb-4">Interactive map preview</p>
                <Button variant="default" asChild className="transition-all duration-300 hover:scale-105">
                  <Link to="/nearby">View Full Map<ArrowRight className="w-5 h-5" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto text-center animate-fade-in-up">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">Need Help? We're Here for You</h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">Our team is ready to assist you with any questions about our services, donations, or finding care homes near you.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild className="transition-all duration-300 hover:scale-105">
              <a href="tel:+1800ELDER"><Phone className="w-5 h-5" />Call 1-800-ELDER-CARE</a>
            </Button>
            <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-all duration-300 hover:scale-105" asChild>
              <Link to="/about#contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
