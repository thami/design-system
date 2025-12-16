import React from "react";

export interface ButtonProps {
  /** Button content */
  children: React.ReactNode;
  /** DaisyUI variant */
  variant?: "primary" | "secondary" | "accent" | "ghost" | "link" | "neutral";
  /** Button size */
  size?: "xs" | "sm" | "md" | "lg";
  /** Outline style */
  outline?: boolean;
  /** Loading state */
  loading?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Click handler */
  onClick?: () => void;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Primary UI button component using DaisyUI styling
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  outline = false,
  loading = false,
  disabled = false,
  onClick,
  className = "",
}) => {
  const variantClass = variant !== "neutral" ? `btn-${variant}` : "";
  const sizeClass = size !== "md" ? `btn-${size}` : "";
  const outlineClass = outline ? "btn-outline" : "";

  return (
    <button
      className={`btn ${variantClass} ${sizeClass} ${outlineClass} ${className}`.trim()}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading && <span className="loading loading-spinner"></span>}
      {children}
    </button>
  );
};

export default Button;
