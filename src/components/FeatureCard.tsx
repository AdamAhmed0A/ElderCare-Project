import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  variant?: "default" | "primary" | "secondary";
  className?: string;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  variant = "default",
  className,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "group relative p-8 rounded-2xl bg-card card-shadow transition-all duration-300 hover:card-shadow-hover hover:-translate-y-1",
        className
      )}
    >
      <div
        className={cn(
          "w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110",
          variant === "primary" && "bg-primary/10 text-primary",
          variant === "secondary" && "bg-secondary/20 text-secondary",
          variant === "default" && "bg-muted text-foreground"
        )}
      >
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}
