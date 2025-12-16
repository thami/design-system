import React from "react";

export interface DividerProps {
  /** Divider text content */
  children?: React.ReactNode;
  /** Divider orientation */
  orientation?: "horizontal" | "vertical";
  /** Divider variant */
  variant?: "neutral" | "primary" | "secondary" | "accent" | "success" | "warning" | "info" | "error";
  /** Additional CSS classes */
  className?: string;
}

/**
 * Divider component for separating content
 */
export const Divider: React.FC<DividerProps> = ({
  children,
  orientation = "horizontal",
  variant,
  className = "",
}) => {
  const orientationClass = orientation === "vertical" ? "divider-vertical" : "";
  const variantClass = variant ? `divider-${variant}` : "";

  return (
    <div className={`divider ${orientationClass} ${variantClass} ${className}`.trim()}>
      {children}
    </div>
  );
};

export default Divider;
