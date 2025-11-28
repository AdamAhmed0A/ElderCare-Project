import { Link } from "react-router-dom";
import logoImage from "@/assets/logo.jpg";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export function Logo({ className, size = "md", showText = true }: LogoProps) {
  const sizeClasses = {
    sm: "w-10 h-10",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  const textSizeClasses = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl",
  };

  return (
    <Link to="/" className={cn("flex items-center gap-3 group", className)}>
      <div className="relative">
        <img
          src={logoImage}
          alt="Elder Care Logo"
          className={cn(
            sizeClasses[size],
            "rounded-full object-cover transition-transform duration-300 group-hover:scale-105"
          )}
        />
      </div>
      {showText && (
        <div className="flex flex-col">
          <span className={cn("font-display font-bold text-primary leading-tight", textSizeClasses[size])}>
            Elder<span className="text-secondary">Care</span>
          </span>
          <span className="text-xs text-muted-foreground -mt-1">Support & Community</span>
        </div>
      )}
    </Link>
  );
}
