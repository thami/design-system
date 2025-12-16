import React from "react";

export interface BadgeProps {
  /** Badge content */
  children: React.ReactNode;
  /** Badge variant */
  variant?: "neutral" | "primary" | "secondary" | "accent" | "ghost" | "info" | "success" | "warning" | "error";
  /** Badge size */
  size?: "xs" | "sm" | "md" | "lg";
  /** Outline style */
  outline?: boolean;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Badge component for status indicators and labels
 */
export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "neutral",
  size = "md",
  outline = false,
  className = "",
}) => {
  const variantClass = variant !== "neutral" ? `badge-${variant}` : "";
  const sizeClass = size !== "md" ? `badge-${size}` : "";
  const outlineClass = outline ? "badge-outline" : "";

  return (
    <span className={`badge ${variantClass} ${sizeClass} ${outlineClass} ${className}`.trim()}>
      {children}
    </span>
  );
};

export default Badge;
