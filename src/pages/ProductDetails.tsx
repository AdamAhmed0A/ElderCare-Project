import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Star, ShoppingCart, Heart, Share2, Truck, Shield, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Lightweight Wheelchair",
    category: "mobility",
    price: 299,
    rating: 4.8,
    reviews: 124,
    description: "Foldable, lightweight aluminum frame wheelchair with comfortable cushioned seat.",
    longDescription: "Our premium lightweight wheelchair is designed with comfort and mobility in mind. The durable aluminum frame ensures longevity while keeping the weight manageable for easy transport. Features include ergonomic armrests, breathable seat cushion, and smooth-rolling wheels suitable for both indoor and outdoor use.",
    image: "🦽",
    inStock: true,
    features: ["Foldable design", "Lightweight aluminum", "Cushioned seat", "Adjustable footrests", "Anti-tip wheels"],
  },
  {
    id: 2,
    name: "Adjustable Walker",
    category: "mobility",
    price: 89,
    rating: 4.9,
    reviews: 89,
    description: "Height-adjustable walker with ergonomic handles and easy-fold mechanism.",
    longDescription: "This premium adjustable walker provides excellent stability and support for those who need assistance with mobility. The height-adjustable legs accommodate users of various heights, while the ergonomic handles reduce hand fatigue during extended use.",
    image: "🚶",
    inStock: true,
    features: ["Height adjustable", "Ergonomic grips", "Easy fold", "Rubber tips", "Lightweight"],
  },
  {
    id: 3,
    name: "Wooden Cane",
    category: "mobility",
    price: 35,
    rating: 4.7,
    reviews: 156,
    description: "Classic wooden cane with rubber tip and comfortable curved handle.",
    longDescription: "A classic and elegant wooden cane crafted from premium hardwood. The curved handle provides a comfortable grip, while the rubber tip ensures stability on various surfaces. Perfect for those who need light support while walking.",
    image: "🦯",
    inStock: true,
    features: ["Premium hardwood", "Curved handle", "Rubber tip", "Classic design", "Durable finish"],
  },
  {
    id: 4,
    name: "Digital Blood Pressure Monitor",
    category: "medical",
    price: 49,
    rating: 4.6,
    reviews: 203,
    description: "Easy-to-read digital display with memory for tracking readings over time.",
    longDescription: "Monitor your blood pressure from the comfort of home with this accurate digital blood pressure monitor. The large, easy-to-read display shows systolic, diastolic, and pulse readings. Memory function stores up to 60 readings for easy tracking over time.",
    image: "💓",
    inStock: true,
    features: ["Large display", "Memory storage", "Accurate readings", "One-touch operation", "Portable"],
  },
  {
    id: 5,
    name: "Weekly Pill Organizer",
    category: "medical",
    price: 15,
    rating: 4.8,
    reviews: 312,
    description: "7-day pill organizer with AM/PM compartments and braille labels.",
    longDescription: "Stay organized with your medication schedule using this comprehensive 7-day pill organizer. Each day features AM and PM compartments, making it easy to manage multiple medications. Braille labels ensure accessibility for visually impaired users.",
    image: "💊",
    inStock: true,
    features: ["7-day capacity", "AM/PM sections", "Braille labels", "Easy-open lids", "BPA-free plastic"],
  },
  {
    id: 6,
    name: "Pulse Oximeter",
    category: "medical",
    price: 29,
    rating: 4.5,
    reviews: 178,
    description: "Fingertip pulse oximeter for monitoring blood oxygen levels.",
    longDescription: "This compact fingertip pulse oximeter provides quick and accurate readings of blood oxygen saturation (SpO2) and pulse rate. The bright LED display is easy to read, and the device automatically shuts off to conserve battery life.",
    image: "🫀",
    inStock: false,
    features: ["SpO2 monitoring", "Pulse rate display", "LED screen", "Auto shut-off", "Compact design"],
  },
  {
    id: 7,
    name: "Grab Bar Set",
    category: "daily",
    price: 45,
    rating: 4.9,
    reviews: 267,
    description: "Stainless steel grab bars for bathroom safety, easy installation.",
    longDescription: "Enhance bathroom safety with this set of premium stainless steel grab bars. The textured grip surface provides secure handholds, while the corrosion-resistant finish ensures long-lasting durability in wet environments.",
    image: "🛁",
    inStock: true,
    features: ["Stainless steel", "Textured grip", "Easy install", "Corrosion resistant", "500 lb capacity"],
  },
  {
    id: 8,
    name: "Reaching Aid Tool",
    category: "daily",
    price: 22,
    rating: 4.7,
    reviews: 145,
    description: "32-inch reaching tool with magnetic tip and rubber grip.",
    longDescription: "This versatile reaching aid helps you grab items from high shelves or pick up objects from the floor without bending or stretching. The magnetic tip helps retrieve small metal items, while the rubber grip securely holds larger objects.",
    image: "✋",
    inStock: true,
    features: ["32-inch reach", "Magnetic tip", "Rubber grip", "Lightweight", "Ergonomic handle"],
  },
  {
    id: 9,
    name: "Memory Foam Seat Cushion",
    category: "comfort",
    price: 39,
    rating: 4.8,
    reviews: 198,
    description: "Ergonomic memory foam cushion for wheelchairs and chairs.",
    longDescription: "Experience all-day comfort with this premium memory foam seat cushion. The ergonomic design helps maintain proper posture and reduces pressure on the tailbone. Perfect for wheelchairs, office chairs, or car seats.",
    image: "🪑",
    inStock: true,
    features: ["Memory foam", "Ergonomic design", "Washable cover", "Non-slip bottom", "Portable"],
  },
  {
    id: 10,
    name: "Heated Blanket",
    category: "comfort",
    price: 59,
    rating: 4.6,
    reviews: 134,
    description: "Soft fleece heated blanket with adjustable temperature settings.",
    longDescription: "Stay warm and cozy with this luxuriously soft heated blanket. Multiple temperature settings allow you to customize your comfort level, while the auto shut-off feature provides peace of mind. Machine washable for easy care.",
    image: "🧣",
    inStock: true,
    features: ["Multiple heat settings", "Auto shut-off", "Machine washable", "Soft fleece", "10-hour timer"],
  },
  {
    id: 11,
    name: "Magnifying Glass with Light",
    category: "daily",
    price: 18,
    rating: 4.5,
    reviews: 221,
    description: "LED-lit magnifying glass perfect for reading and hobbies.",
    longDescription: "This illuminated magnifying glass makes reading fine print and detailed work easier than ever. The built-in LED light provides bright, even illumination, while the 3x magnification enlarges text and details clearly.",
    image: "🔍",
    inStock: true,
    features: ["3x magnification", "LED illumination", "Lightweight", "Ergonomic handle", "Long battery life"],
  },
  {
    id: 12,
    name: "Non-Slip Socks (3 Pack)",
    category: "comfort",
    price: 24,
    rating: 4.7,
    reviews: 89,
    description: "Warm, comfortable socks with non-slip grips on the soles.",
    longDescription: "These cozy non-slip socks provide warmth and safety on smooth floor surfaces. The silicone grips on the soles help prevent slipping, making them perfect for home, hospital, or rehabilitation settings.",
    image: "🧦",
    inStock: true,
    features: ["Non-slip grips", "Soft material", "3-pack value", "Machine washable", "Multiple sizes"],
  },
];

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  if (!product) {
    return (
      <main className="pt-20 pb-16">
        <div className="container mx-auto py-20 text-center">
          <h1 className="font-display text-3xl font-bold text-foreground mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-8">The product you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/supplies">Back to Supplies</Link>
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-20 pb-16">
      {/* Breadcrumb */}
      <div className="container mx-auto py-6">
        <Link
          to="/supplies"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors animate-fade-in"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Supplies
        </Link>
      </div>

      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="animate-fade-in-up">
            <div className="bg-card rounded-3xl p-12 card-shadow">
              <div className="bg-muted rounded-2xl h-80 flex items-center justify-center">
                <span className="text-9xl animate-bounce-gentle">{product.image}</span>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="animate-fade-in-up delay-200">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1 text-secondary">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5"
                    fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                  />
                ))}
                <span className="ml-2 font-medium text-foreground">{product.rating}</span>
              </div>
              <span className="text-muted-foreground">({product.reviews} reviews)</span>
            </div>

            <h1 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {product.name}
            </h1>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {product.longDescription}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {product.features.map((feature) => (
                <span
                  key={feature}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  {feature}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 mb-8">
              <span className="font-display text-4xl font-bold text-primary">${product.price}</span>
              {product.inStock ? (
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                  In Stock
                </span>
              ) : (
                <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                  Out of Stock
                </span>
              )}
            </div>

            {/* Quantity & Actions */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center border-2 border-border rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 text-lg font-bold hover:bg-muted transition-colors"
                >
                  -
                </button>
                <span className="px-4 py-2 text-lg font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 text-lg font-bold hover:bg-muted transition-colors"
                >
                  +
                </button>
              </div>
              <Button
                variant="hero"
                size="lg"
                className="flex-1 transition-all duration-300 hover:scale-105"
                disabled={!product.inStock}
              >
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </Button>
              <Button
                variant="outline"
                size="icon"
                className={`transition-all duration-300 hover:scale-110 ${isFavorite ? "text-red-500 border-red-500" : ""}`}
                onClick={() => setIsFavorite(!isFavorite)}
              >
                <Heart className="w-5 h-5" fill={isFavorite ? "currentColor" : "none"} />
              </Button>
              <Button variant="outline" size="icon" className="transition-all duration-300 hover:scale-110">
                <Share2 className="w-5 h-5" />
              </Button>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center text-center p-4 bg-muted rounded-xl animate-scale-in delay-300">
                <Truck className="w-6 h-6 text-primary mb-2" />
                <span className="text-sm font-medium">Free Shipping</span>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-muted rounded-xl animate-scale-in delay-400">
                <Shield className="w-6 h-6 text-primary mb-2" />
                <span className="text-sm font-medium">2 Year Warranty</span>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-muted rounded-xl animate-scale-in delay-500">
                <RotateCcw className="w-6 h-6 text-primary mb-2" />
                <span className="text-sm font-medium">Easy Returns</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
