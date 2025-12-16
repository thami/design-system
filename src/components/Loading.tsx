import React from "react";

export interface LoadingProps {
  /** Loading type */
  type?: "spinner" | "dots" | "ring" | "ball" | "bars" | "infinity";
  /** Loading size */
  size?: "xs" | "sm" | "md" | "lg";
  /** Loading color */
  variant?: "primary" | "secondary" | "accent" | "neutral" | "info" | "success" | "warning" | "error";
  /** Additional CSS classes */
  className?: string;
}

/**
 * Loading spinner component with DaisyUI styling
 */
export const Loading: React.FC<LoadingProps> = ({
  type = "spinner",
  size = "md",
  variant,
  className = "",
}) => {
  const typeClass = `loading-${type}`;
  const sizeClass = size !== "md" ? `loading-${size}` : "";
  const variantClass = variant ? `text-${variant}` : "";

  return (
    <span className={`loading ${typeClass} ${sizeClass} ${variantClass} ${className}`.trim()} />
  );
};

export default Loading;
