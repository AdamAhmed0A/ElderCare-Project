import { useState } from "react";
import { Gift, Upload, Heart, Check, ChevronDown, User, Mail, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const itemTypes = [
  { value: "wheelchair", label: "Wheelchair" },
  { value: "walker", label: "Walker" },
  { value: "cane", label: "Cane" },
  { value: "medical", label: "Medical Equipment" },
  { value: "comfort", label: "Comfort Items" },
  { value: "daily", label: "Daily Living Aids" },
  { value: "other", label: "Other" },
];

const conditions = [
  { value: "new", label: "New (Unused)" },
  { value: "excellent", label: "Excellent (Like New)" },
  { value: "good", label: "Good (Minor Wear)" },
  { value: "fair", label: "Fair (Functional)" },
];

const careHomes = [
  { value: "sunny-acres", label: "Sunny Acres Senior Living" },
  { value: "golden-years", label: "Golden Years Care Center" },
  { value: "peaceful-gardens", label: "Peaceful Gardens Home" },
  { value: "comfort-living", label: "Comfort Living Community" },
  { value: "any", label: "Any Care Home in Need" },
];

const recentDonations = [
  { donor: "Sarah M.", item: "Wheelchair", home: "Sunny Acres", date: "2 days ago" },
  { donor: "John D.", item: "Blood Pressure Monitor", home: "Golden Years", date: "3 days ago" },
  { donor: "Emily R.", item: "Walker", home: "Peaceful Gardens", date: "5 days ago" },
];

export default function Donate() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    itemType: "",
    condition: "",
    careHome: "",
    description: "",
  });
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Donation Submitted!",
      description: "Thank you for your generosity. We'll be in touch soon to arrange pickup.",
    });
    setFormData({
      name: "",
      email: "",
      itemType: "",
      condition: "",
      careHome: "",
      description: "",
    });
    setImagePreview(null);
  };

  return (
    <main className="pt-20 pb-16">
      {/* Header */}
      <section className="bg-secondary py-12">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-secondary-foreground/10 rounded-xl flex items-center justify-center">
              <Gift className="w-6 h-6 text-secondary-foreground" />
            </div>
            <h1 className="font-display text-3xl lg:text-4xl font-bold text-secondary-foreground">
              Donate Supplies
            </h1>
          </div>
          <p className="text-secondary-foreground/80 text-lg max-w-2xl">
            Your donations directly support elderly care homes and seniors in need. 
            Every item, big or small, makes a difference in someone's life.
          </p>
        </div>
      </section>

      <div className="container mx-auto py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Donation Form */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-3xl p-8 card-shadow">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                Submit a Donation
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-base font-medium">
                      Your Name
                    </Label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="pl-12"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-base font-medium">
                      Email Address
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="pl-12"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="itemType" className="text-base font-medium">
                      Item Type
                    </Label>
                    <div className="relative">
                      <Package className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <select
                        id="itemType"
                        name="itemType"
                        value={formData.itemType}
                        onChange={handleInputChange}
                        className="flex h-14 w-full rounded-lg border-2 border-input bg-card pl-12 pr-4 py-3 text-base ring-offset-background transition-all duration-200 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/30 focus-visible:border-primary appearance-none"
                        required
                      >
                        <option value="">Select item type</option>
                        {itemTypes.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="condition" className="text-base font-medium">
                      Item Condition
                    </Label>
                    <div className="relative">
                      <select
                        id="condition"
                        name="condition"
                        value={formData.condition}
                        onChange={handleInputChange}
                        className="flex h-14 w-full rounded-lg border-2 border-input bg-card px-4 py-3 text-base ring-offset-background transition-all duration-200 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/30 focus-visible:border-primary appearance-none"
                        required
                      >
                        <option value="">Select condition</option>
                        {conditions.map((cond) => (
                          <option key={cond.value} value={cond.value}>
                            {cond.label}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="careHome" className="text-base font-medium">
                    Select Care Home
                  </Label>
                  <div className="relative">
                    <select
                      id="careHome"
                      name="careHome"
                      value={formData.careHome}
                      onChange={handleInputChange}
                      className="flex h-14 w-full rounded-lg border-2 border-input bg-card px-4 py-3 text-base ring-offset-background transition-all duration-200 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/30 focus-visible:border-primary appearance-none"
                      required
                    >
                      <option value="">Choose a care home</option>
                      {careHomes.map((home) => (
                        <option key={home.value} value={home.value}>
                          {home.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="image" className="text-base font-medium">
                    Upload Image (Optional)
                  </Label>
                  <div className="relative">
                    <input
                      id="image"
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                    <label
                      htmlFor="image"
                      className="flex flex-col items-center justify-center h-32 w-full rounded-lg border-2 border-dashed border-input bg-muted/50 cursor-pointer hover:bg-muted transition-colors"
                    >
                      {imagePreview ? (
                        <img
                          src={imagePreview}
                          alt="Preview"
                          className="h-full w-auto object-contain rounded-lg"
                        />
                      ) : (
                        <>
                          <Upload className="w-8 h-8 text-muted-foreground mb-2" />
                          <span className="text-muted-foreground">
                            Click to upload an image
                          </span>
                        </>
                      )}
                    </label>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description" className="text-base font-medium">
                    Additional Details (Optional)
                  </Label>
                  <Textarea
                    id="description"
                    name="description"
                    placeholder="Tell us more about the item you're donating..."
                    value={formData.description}
                    onChange={handleInputChange}
                    className="min-h-24 text-base"
                  />
                </div>

                <Button type="submit" variant="warm" size="lg" className="w-full">
                  <Gift className="w-5 h-5" />
                  Submit Donation
                </Button>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Impact Card */}
            <div className="bg-primary rounded-3xl p-6 text-primary-foreground">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-8 h-8" fill="currentColor" />
                <h3 className="font-display text-xl font-bold">Your Impact</h3>
              </div>
              <p className="text-primary-foreground/80 mb-6">
                Every donation helps seniors maintain their independence and dignity.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5" />
                  <span>Free pickup available</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5" />
                  <span>Tax-deductible donations</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5" />
                  <span>Items go directly to seniors</span>
                </div>
              </div>
            </div>

            {/* Recent Donations */}
            <div className="bg-card rounded-3xl p-6 card-shadow">
              <h3 className="font-display text-xl font-bold text-foreground mb-4">
                Recent Donations
              </h3>
              <div className="space-y-4">
                {recentDonations.map((donation, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 pb-4 border-b border-border last:border-0 last:pb-0"
                  >
                    <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Gift className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        {donation.donor} donated a {donation.item}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        to {donation.home} • {donation.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
