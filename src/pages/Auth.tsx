import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Eye, EyeOff, Heart, User, Mail, Phone, Lock, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const userTypes = [
  { value: "senior", label: "Senior Citizen" },
  { value: "family", label: "Family Member" },
  { value: "volunteer", label: "Volunteer" },
  { value: "donor", label: "Donor" },
];

export default function Auth() {
  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode") || "login";
  const [isLogin, setIsLogin] = useState(mode === "login");
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    userType: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: isLogin ? "Welcome back!" : "Account created!",
      description: isLogin
        ? "You have successfully logged in."
        : "Your account has been created. Please check your email to verify.",
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="min-h-screen pt-20 pb-12 hero-gradient flex items-center">
      <div className="container mx-auto">
        <div className="max-w-lg mx-auto">
          {/* Logo */}
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="relative">
                <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center">
                  <Heart className="w-7 h-7 text-primary-foreground" fill="currentColor" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                  <User className="w-3 h-3 text-secondary-foreground" />
                </div>
              </div>
              <span className="font-display text-2xl font-semibold text-foreground">
                ElderCare
              </span>
            </Link>
          </div>

          {/* Form Card */}
          <div className="bg-card rounded-3xl p-8 lg:p-10 card-shadow">
            <div className="text-center mb-8">
              <h1 className="font-display text-3xl font-bold text-foreground mb-2">
                {isLogin ? "Welcome Back" : "Create Your Account"}
              </h1>
              <p className="text-muted-foreground">
                {isLogin
                  ? "Sign in to access your ElderCare account"
                  : "Join our community of caregivers and supporters"}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-base font-medium">
                    Full Name
                  </Label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="fullName"
                      name="fullName"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="pl-12"
                      required
                    />
                  </div>
                </div>
              )}

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

              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-base font-medium">
                    Phone Number
                  </Label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="pl-12"
                    />
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="password" className="text-base font-medium">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="pl-12 pr-12"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="userType" className="text-base font-medium">
                    I am a...
                  </Label>
                  <div className="relative">
                    <select
                      id="userType"
                      name="userType"
                      value={formData.userType}
                      onChange={handleInputChange}
                      className="flex h-14 w-full rounded-lg border-2 border-input bg-card px-4 py-3 text-base ring-offset-background transition-all duration-200 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/30 focus-visible:border-primary appearance-none"
                      required
                    >
                      <option value="">Select your role</option>
                      {userTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                  </div>
                </div>
              )}

              {isLogin && (
                <div className="text-right">
                  <Link
                    to="/forgot-password"
                    className="text-primary hover:underline text-sm font-medium"
                  >
                    Forgot Password?
                  </Link>
                </div>
              )}

              <Button type="submit" variant="hero" size="lg" className="w-full mt-6">
                {isLogin ? "Login" : "Create Account"}
              </Button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-muted-foreground">
                {isLogin ? "Don't have an account? " : "Already have an account? "}
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-primary hover:underline font-semibold"
                >
                  {isLogin ? "Sign Up" : "Login"}
                </button>
              </p>
            </div>
          </div>

          {/* Help Text */}
          <p className="text-center text-muted-foreground mt-6">
            Need help?{" "}
            <Link to="/about#contact" className="text-primary hover:underline">
              Contact our support team
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
