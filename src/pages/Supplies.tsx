import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const categories = [
  { id: "all", name: "All Items" },
  { id: "mobility", name: "Mobility Aids" },
  { id: "medical", name: "Medical Supplies" },
  { id: "daily", name: "Daily Living" },
  { id: "comfort", name: "Comfort Items" },
];

const products = [
  {
    id: 1,
    name: "Lightweight Wheelchair",
    category: "mobility",
    price: 299,
    rating: 4.8,
    reviews: 124,
    description: "Foldable, lightweight aluminum frame wheelchair with comfortable cushioned seat.",
    image: "🦽",
    inStock: true,
  },
  {
    id: 2,
    name: "Adjustable Walker",
    category: "mobility",
    price: 89,
    rating: 4.9,
    reviews: 89,
    description: "Height-adjustable walker with ergonomic handles and easy-fold mechanism.",
    image: "🚶",
    inStock: true,
  },
  {
    id: 3,
    name: "Wooden Cane",
    category: "mobility",
    price: 35,
    rating: 4.7,
    reviews: 156,
    description: "Classic wooden cane with rubber tip and comfortable curved handle.",
    image: "🦯",
    inStock: true,
  },
  {
    id: 4,
    name: "Digital Blood Pressure Monitor",
    category: "medical",
    price: 49,
    rating: 4.6,
    reviews: 203,
    description: "Easy-to-read digital display with memory for tracking readings over time.",
    image: "💓",
    inStock: true,
  },
  {
    id: 5,
    name: "Weekly Pill Organizer",
    category: "medical",
    price: 15,
    rating: 4.8,
    reviews: 312,
    description: "7-day pill organizer with AM/PM compartments and braille labels.",
    image: "💊",
    inStock: true,
  },
  {
    id: 6,
    name: "Pulse Oximeter",
    category: "medical",
    price: 29,
    rating: 4.5,
    reviews: 178,
    description: "Fingertip pulse oximeter for monitoring blood oxygen levels.",
    image: "🫀",
    inStock: false,
  },
  {
    id: 7,
    name: "Grab Bar Set",
    category: "daily",
    price: 45,
    rating: 4.9,
    reviews: 267,
    description: "Stainless steel grab bars for bathroom safety, easy installation.",
    image: "🛁",
    inStock: true,
  },
  {
    id: 8,
    name: "Reaching Aid Tool",
    category: "daily",
    price: 22,
    rating: 4.7,
    reviews: 145,
    description: "32-inch reaching tool with magnetic tip and rubber grip.",
    image: "✋",
    inStock: true,
  },
  {
    id: 9,
    name: "Memory Foam Seat Cushion",
    category: "comfort",
    price: 39,
    rating: 4.8,
    reviews: 198,
    description: "Ergonomic memory foam cushion for wheelchairs and chairs.",
    image: "🪑",
    inStock: true,
  },
  {
    id: 10,
    name: "Heated Blanket",
    category: "comfort",
    price: 59,
    rating: 4.6,
    reviews: 134,
    description: "Soft fleece heated blanket with adjustable temperature settings.",
    image: "🧣",
    inStock: true,
  },
  {
    id: 11,
    name: "Magnifying Glass with Light",
    category: "daily",
    price: 18,
    rating: 4.5,
    reviews: 221,
    description: "LED-lit magnifying glass perfect for reading and hobbies.",
    image: "🔍",
    inStock: true,
  },
  {
    id: 12,
    name: "Non-Slip Socks (3 Pack)",
    category: "comfort",
    price: 24,
    rating: 4.7,
    reviews: 89,
    description: "Warm, comfortable socks with non-slip grips on the soles.",
    image: "🧦",
    inStock: true,
  },
];

export default function Supplies() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="pt-20 pb-16">
      {/* Header */}
      <section className="bg-primary py-12">
        <div className="container mx-auto">
          <h1 className="font-display text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
            Supplies Catalog
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl">
            Browse our collection of mobility aids, medical supplies, and comfort items 
            designed to help seniors maintain independence and quality of life.
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 border-b border-border bg-card">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search supplies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto">
          <p className="text-muted-foreground mb-8">
            Showing {filteredProducts.length} items
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-card rounded-2xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-full h-32 bg-muted rounded-xl flex items-center justify-center mb-4">
                  <span className="text-5xl">{product.image}</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center gap-1 text-accent">
                    <Star className="w-4 h-4" fill="currentColor" />
                    <span className="text-sm font-medium">{product.rating}</span>
                  </div>
                  <span className="text-muted-foreground text-sm">
                    ({product.reviews} reviews)
                  </span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">{product.name}</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-display text-2xl font-bold text-primary">
                    ${product.price}
                  </span>
                  {product.inStock ? (
                    <Button variant="default" size="sm">
                      <ShoppingCart className="w-4 h-4" />
                      Add
                    </Button>
                  ) : (
                    <span className="text-sm text-muted-foreground">Out of Stock</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto text-center">
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-4">
            Can't Find What You Need?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Contact us and we'll help you find the right supplies for your loved ones.
          </p>
          <Button variant="default" size="lg" asChild>
            <Link to="/about#contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
