import { useState } from "react";
import { MapPin, Search, Navigation, Phone, Clock, Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const careHomes = [
  {
    id: 1,
    name: "Sunny Acres Senior Living",
    address: "123 Sunshine Blvd, Springfield, IL 62701",
    distance: "2.3 miles",
    rating: 4.8,
    reviews: 124,
    phone: "(555) 123-4567",
    hours: "Visiting: 9 AM - 8 PM",
    services: ["Memory Care", "Assisted Living", "Rehabilitation"],
  },
  {
    id: 2,
    name: "Golden Years Care Center",
    address: "456 Oak Street, Springfield, IL 62702",
    distance: "3.1 miles",
    rating: 4.6,
    reviews: 89,
    phone: "(555) 234-5678",
    hours: "Visiting: 10 AM - 7 PM",
    services: ["Skilled Nursing", "Respite Care", "Hospice"],
  },
  {
    id: 3,
    name: "Peaceful Gardens Home",
    address: "789 Garden Lane, Springfield, IL 62703",
    distance: "4.5 miles",
    rating: 4.9,
    reviews: 156,
    phone: "(555) 345-6789",
    hours: "Visiting: 8 AM - 9 PM",
    services: ["Independent Living", "Assisted Living", "Memory Care"],
  },
  {
    id: 4,
    name: "Comfort Living Community",
    address: "321 Comfort Drive, Springfield, IL 62704",
    distance: "5.8 miles",
    rating: 4.7,
    reviews: 98,
    phone: "(555) 456-7890",
    hours: "Visiting: 9 AM - 6 PM",
    services: ["Assisted Living", "Adult Day Care"],
  },
  {
    id: 5,
    name: "Heritage Senior Residence",
    address: "654 Heritage Way, Springfield, IL 62705",
    distance: "7.2 miles",
    rating: 4.5,
    reviews: 76,
    phone: "(555) 567-8901",
    hours: "Visiting: 10 AM - 8 PM",
    services: ["Independent Living", "Memory Care", "Rehabilitation"],
  },
];

export default function Nearby() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLocating, setIsLocating] = useState(false);

  const handleUseLocation = () => {
    setIsLocating(true);
    // Simulate geolocation
    setTimeout(() => {
      setSearchQuery("Springfield, IL");
      setIsLocating(false);
    }, 1500);
  };

  return (
    <main className="pt-20 pb-16">
      {/* Header */}
      <section className="bg-primary py-12">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-primary-foreground/10 rounded-xl flex items-center justify-center">
              <MapPin className="w-6 h-6 text-primary-foreground" />
            </div>
            <h1 className="font-display text-3xl lg:text-4xl font-bold text-primary-foreground">
              Locate Nearby Elderly Care Homes
            </h1>
          </div>
          <p className="text-primary-foreground/80 text-lg max-w-2xl">
            Find care facilities in your area and connect with communities that provide 
            quality support for seniors.
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-card border-b border-border">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Enter your location or zip code"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12"
              />
            </div>
            <Button
              variant="outline"
              size="default"
              onClick={handleUseLocation}
              disabled={isLocating}
            >
              <Navigation className={`w-5 h-5 ${isLocating ? "animate-pulse" : ""}`} />
              {isLocating ? "Locating..." : "Use My Location"}
            </Button>
            <Button variant="default">Search</Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map Placeholder */}
          <div className="order-2 lg:order-1">
            <div className="bg-card rounded-3xl p-6 card-shadow h-full min-h-[500px]">
              <div className="bg-muted rounded-2xl h-full flex flex-col items-center justify-center p-8">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <MapPin className="w-12 h-12 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2 text-center">
                  Interactive Map
                </h3>
                <p className="text-muted-foreground text-center max-w-xs mb-6">
                  Enter your location above to see care homes on the map
                </p>
                <p className="text-sm text-muted-foreground/60 text-center">
                  Map integration requires a Mapbox API key.
                  <br />
                  Connect to Lovable Cloud to enable this feature.
                </p>
              </div>
            </div>
          </div>

          {/* Care Homes List */}
          <div className="order-1 lg:order-2 space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-display text-xl font-bold text-foreground">
                {careHomes.length} Care Homes Found
              </h2>
              <span className="text-muted-foreground text-sm">
                Sorted by distance
              </span>
            </div>

            {careHomes.map((home) => (
              <div
                key={home.id}
                className="bg-card rounded-2xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-1">
                      {home.name}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <MapPin className="w-4 h-4" />
                      <span>{home.address}</span>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    {home.distance}
                  </span>
                </div>

                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-accent" fill="currentColor" />
                    <span className="font-medium text-foreground">{home.rating}</span>
                    <span className="text-muted-foreground text-sm">
                      ({home.reviews} reviews)
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {home.services.map((service) => (
                    <span
                      key={service}
                      className="px-3 py-1 bg-muted text-muted-foreground rounded-lg text-sm"
                    >
                      {service}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>{home.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{home.hours}</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button variant="default" size="sm" className="flex-1">
                    <Phone className="w-4 h-4" />
                    Call
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Navigation className="w-4 h-4" />
                    Directions
                  </Button>
                  <Button variant="ghost" size="sm">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
